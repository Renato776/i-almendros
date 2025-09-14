export function safeCall<T>(fn: (() => T) | undefined, fallback: T): T {
    try { return typeof fn === "function" ? fn() : fallback; } catch { return fallback; }
}
export function entCode(ent: any): string {
    return safeCall<string>(ent?.getCode, ent?.code ?? "");
}
export function entName(ent: any): string {
    return safeCall<string>(ent?.getName, ent?.name ?? "");
}
export function entDesc(ent: any): string {
    return safeCall<string>(ent?.getDescription, ent?.description ?? "");
}
export function entFields(ent: any): BacklogEntityField[] {
    return safeCall<BacklogEntityField[]>(ent?.getFields, ent?.fields ?? []);
}

export function fnName(fn: any): string {
    return safeCall<string>(fn?.getName, fn?.name ?? "");
}
export function fnDesc(fn: any): string {
    return safeCall<string>(fn?.getDescription, fn?.description ?? "");
}
export function getEntity(func: any): BacklogEntity | undefined {
    // try common patterns without assuming private/protected access at compile time
    if (typeof func?.getArgument === "function") return func.getArgument();
    if (func?.argument) return func.argument as BacklogEntity;
    return undefined;
}
