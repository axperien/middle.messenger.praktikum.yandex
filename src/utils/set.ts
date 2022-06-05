import { isObject } from './isObject';
/* eslint-disable no-param-reassign */
type Indexed<T = unknown> = {
    [key in string]: T;
};

export const set = (object: Indexed | unknown, path: string, value: unknown): Indexed | unknown => {
    if (!isObject(object as Indexed)) {
        return object;
    }

    if (typeof path !== 'string') {
        throw new Error('path must be string');
    }

    const pathArray = path.split('.');
    const pathLength = pathArray.length - 1;

    pathArray.reduce((a, b, index) => {
        if (typeof a[b] === 'undefined' && index !== pathLength) {
            a[b] = {};
            return a[b];
        }

        if (index === pathLength) {
            a[b] = value;
            return value;
        }

        return a[b];
    }, object as any);

    return object;
};
