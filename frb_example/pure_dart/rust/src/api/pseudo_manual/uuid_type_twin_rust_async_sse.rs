// NOTE: This file is mimicking how a human developer writes tests,
// and is auto-generated from `uuid_type.rs` by frb_internal
// Please do not modify manually, but modify the origin and re-run frb_internal generator

#[derive(Debug, Clone)]
pub struct FeatureUuidTwinRustAsyncSse {
    pub one: uuid::Uuid,
    // pub many: Vec<uuid::Uuid>,
}

#[flutter_rust_bridge::frb(serialize)]
pub async fn handle_uuid_twin_rust_async_sse(id: uuid::Uuid) -> anyhow::Result<uuid::Uuid> {
    Ok(id)
}

// TODO: For simplicity, `Vec<Uuid>` is supported using SSE (serializer)
// #[flutter_rust_bridge::frb(serialize)] pub async fn handle_uuids_twin_rust_async_sse(ids: Vec<uuid::Uuid>) -> anyhow::Result<Vec<uuid::Uuid>> {
//     Ok(ids)
// }

#[flutter_rust_bridge::frb(serialize)]
pub async fn handle_nested_uuids_twin_rust_async_sse(
    ids: FeatureUuidTwinRustAsyncSse,
) -> anyhow::Result<FeatureUuidTwinRustAsyncSse> {
    Ok(ids)
}
