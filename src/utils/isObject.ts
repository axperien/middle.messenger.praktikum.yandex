type Indexed<T = unknown> = {
    [key in string]: T;
};

export const isObject = (item:Indexed):boolean => (item && typeof item === 'object' && !Array.isArray(item));
