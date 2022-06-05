type Indexed<T = unknown> = {
    [key in string]: T;
};

function isEqualObject(a: Record<string, any>, b: Record<string, any>): boolean {
    if (typeof a === typeof b) {
        if (typeof a === 'object' && a != null) {
            let equals = true;

            Object.keys(a).forEach((property) => {
                if (Object.prototype.hasOwnProperty.call(a, property)
                    && Object.prototype.hasOwnProperty.call(b, property)) {
                    if (!isEqualObject(a[property], b[property])) {
                        equals = false;
                    }
                } else {
                    equals = false;
                }
            });

            return equals;
        }

        return a === b;
    }

    return false;
}

export default isEqualObject;
