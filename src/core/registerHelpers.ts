import Handlebars from 'handlebars';

Handlebars.registerHelper({
    eq: (v1, v2) => v1 === v2,
    ne: (v1, v2) => v1 !== v2,
    lt: (v1, v2) => v1 < v2,
    gt: (v1, v2) => v1 > v2,
    lte: (v1, v2) => v1 <= v2,
    gte: (v1, v2) => v1 >= v2,
    and(...args) {
        return Array.prototype.every.call(args, Boolean);
    },
    or(...args) {
        return Array.prototype.slice.call(args, 0, -1).some(Boolean);
    },
});
