export default ({ id, body }) => {
    return `
        {{#> modal id="${id}" }}
            ${body}
        {{/modal}}
    `;
}