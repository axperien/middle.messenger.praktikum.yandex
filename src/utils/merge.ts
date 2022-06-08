import { isObject } from './isObject';
import { Indexed } from '../core/types';

export const merge = (lhs: Indexed, rhs: Indexed): Indexed => {
    const output: Indexed = { ...lhs };

    if (isObject(lhs) && isObject(rhs)) {
        Object.keys(rhs).forEach((key) => {
            if (isObject(rhs[key] as Indexed)) {
                if (!(key in lhs)) {
                    Object.assign(output, { [key]: rhs[key] });
                } else {
                    output[key] = merge(lhs[key] as Indexed, rhs[key] as Indexed);
                }
            } else {
                Object.assign(output, { [key]: rhs[key] });
            }
        });
    }

    return output;
};
