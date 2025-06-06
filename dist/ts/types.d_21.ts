import PostgrestError from './PostgrestError';
export declare type Fetch = typeof fetch;
/**
 * Response format
 *
 * {@link https://github.com/supabase/supabase-js/issues/32}
 */
interface PostgrestResponseBase {
    status: number;
    statusText: string;
}
export interface PostgrestResponseSuccess<T> extends PostgrestResponseBase {
    error: null;
    data: T;
    count: number | null;
}
export interface PostgrestResponseFailure extends PostgrestResponseBase {
    error: PostgrestError;
    data: null;
    count: null;
}
export declare type PostgrestSingleResponse<T> = PostgrestResponseSuccess<T> | PostgrestResponseFailure;
export declare type PostgrestMaybeSingleResponse<T> = PostgrestSingleResponse<T | null>;
export declare type PostgrestResponse<T> = PostgrestSingleResponse<T[]>;
export declare type GenericRelationship = {
    foreignKeyName: string;
    columns: string[];
    isOneToOne?: boolean;
    referencedRelation: string;
    referencedColumns: string[];
};
export declare type GenericTable = {
    Row: Record<string, unknown>;
    Insert: Record<string, unknown>;
    Update: Record<string, unknown>;
    Relationships: GenericRelationship[];
};
export declare type GenericUpdatableView = {
    Row: Record<string, unknown>;
    Insert: Record<string, unknown>;
    Update: Record<string, unknown>;
    Relationships: GenericRelationship[];
};
export declare type GenericNonUpdatableView = {
    Row: Record<string, unknown>;
    Relationships: GenericRelationship[];
};
export declare type GenericView = GenericUpdatableView | GenericNonUpdatableView;
export declare type GenericFunction = {
    Args: Record<string, unknown>;
    Returns: unknown;
};
export declare type GenericSchema = {
    Tables: Record<string, GenericTable>;
    Views: Record<string, GenericView>;
    Functions: Record<string, GenericFunction>;
};
export declare type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
export declare type SimplifyDeep<Type, ExcludeType = never> = ConditionalSimplifyDeep<Type, ExcludeType | NonRecursiveType | Set<unknown> | Map<unknown, unknown>, object>;
declare type ConditionalSimplifyDeep<Type, ExcludeType = never, IncludeType = unknown> = Type extends ExcludeType ? Type : Type extends IncludeType ? {
    [TypeKey in keyof Type]: ConditionalSimplifyDeep<Type[TypeKey], ExcludeType, IncludeType>;
} : Type;
declare type NonRecursiveType = BuiltIns | Function | (new (...arguments_: any[]) => unknown);
declare type BuiltIns = Primitive | void | Date | RegExp;
declare type Primitive = null | undefined | string | number | boolean | symbol | bigint;
export {};
//# sourceMappingURL=types.d.ts.map