use crate::codegen::ir::namespace::{Namespace, NamespacedName};
use crate::codegen::ir::ty::IrType;
use crate::codegen::parser::attribute_parser::FrbAttributes;
use crate::codegen::parser::source_graph::modules::StructOrEnumWrapper;
use crate::codegen::parser::type_parser::unencodable::SplayedSegment;
use log::debug;
use std::collections::{HashMap, HashSet};
use std::fmt::Debug;
use std::hash::Hash;
use syn::{Ident, Type, TypePath};

pub(super) trait EnumOrStructParser<Id, Obj, SrcObj, Item>
where
    Id: From<NamespacedName> + Clone + PartialEq + Eq + Hash,
    SrcObj: StructOrEnumWrapper<Item> + Clone + Debug,
{
    fn parse(
        &mut self,
        _type_path: &TypePath,
        last_segment: &SplayedSegment,
    ) -> anyhow::Result<Option<IrType>> {
        let (name, _) = last_segment;
        if let Some(src_object) = self.src_objects().get(*name) {
            let src_object = (*src_object).clone();

            let namespace = Namespace::new(pop_last(src_object.inner().path.clone()));
            let namespaced_name = NamespacedName::new(namespace, name.to_string());

            let attrs = FrbAttributes::parse(src_object.attrs())?;
            if attrs.opaque() {
                debug!("Recognize {name} has opaque attribute");
                return Ok(Some(self.parse_type_rust_auto_opaque(
                    Some(namespaced_name.namespace),
                    &syn::parse_str(&namespaced_name.name)?,
                )?));
            }

            let ident: Id = namespaced_name.clone().into();

            if (self.parser_info().parsing_or_parsed_objects).insert(namespaced_name.clone()) {
                let (name, wrapper_name) = compute_name_and_wrapper_name(
                    &namespaced_name.namespace,
                    &src_object.inner().ident,
                    src_object.inner().mirror,
                );
                let parsed_object = self.parse_inner(&src_object, name, wrapper_name)?;
                (self.parser_info().object_pool).insert(ident.clone(), parsed_object);
            }

            return Ok(Some(self.construct_output(ident)?));
        }

        Ok(None)
    }

    fn parse_inner(
        &mut self,
        src_object: &SrcObj,
        name: NamespacedName,
        wrapper_name: Option<String>,
    ) -> anyhow::Result<Obj>;

    fn construct_output(&self, ident: Id) -> anyhow::Result<IrType>;

    fn src_objects(&self) -> &HashMap<String, &SrcObj>;

    fn parser_info(&mut self) -> &mut EnumOrStructParserInfo<Id, Obj>;

    fn parse_type_rust_auto_opaque(
        &mut self,
        namespace: Option<Namespace>,
        ty: &Type,
    ) -> anyhow::Result<IrType>;
}

fn pop_last(mut v: Vec<String>) -> Vec<String> {
    v.pop();
    v
}

#[derive(Clone, Debug, Default)]
pub(super) struct EnumOrStructParserInfo<Id, Obj> {
    parsing_or_parsed_objects: HashSet<NamespacedName>,
    pub(super) object_pool: HashMap<Id, Obj>,
}

impl<Id, Obj> EnumOrStructParserInfo<Id, Obj> {
    pub fn new() -> Self {
        Self {
            parsing_or_parsed_objects: HashSet::new(),
            object_pool: HashMap::new(),
        }
    }
}

fn compute_name_and_wrapper_name(
    namespace: &Namespace,
    ident: &Ident,
    mirror: bool,
) -> (NamespacedName, Option<String>) {
    let name = ident.to_string();
    let wrapper_name = if mirror {
        Some(format!("mirror_{name}"))
    } else {
        None
    };
    (NamespacedName::new(namespace.clone(), name), wrapper_name)
}
