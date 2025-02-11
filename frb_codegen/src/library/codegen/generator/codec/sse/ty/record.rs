use crate::codegen::generator::codec::sse::ty::structure::GeneralizedStructGenerator;
use crate::codegen::generator::codec::sse::ty::*;
use crate::codegen::generator::misc::StructOrRecord;

impl<'a> CodecSseTyTrait for RecordCodecSseTy<'a> {
    fn generate_encode(&self, lang: &Lang) -> Option<String> {
        Some(self.new_generalized_generator().generate_encode(lang))
    }

    fn generate_decode(&self, lang: &Lang) -> Option<String> {
        Some(
            self.new_generalized_generator()
                .generate_decode(lang, None, true),
        )
    }
}

impl<'a> RecordCodecSseTy<'a> {
    fn new_generalized_generator(&self) -> GeneralizedStructGenerator {
        GeneralizedStructGenerator::new(
            self.ir.inner.get(self.context.ir_pack).clone(),
            StructOrRecord::Record,
        )
    }
}
