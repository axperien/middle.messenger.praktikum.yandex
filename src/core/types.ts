export type Nullable<T> = T | null;

export type Keys<T extends Record<string, unknown>> = keyof T;
export type Values<T extends Record<string, unknown>> = T[Keys<T>];

export type HTTPTransportOptions = {
    data: any;
    timeout: number;
    method: string;
    headers: any;
};
