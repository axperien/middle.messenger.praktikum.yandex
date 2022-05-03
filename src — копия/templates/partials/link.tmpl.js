const template = `
    <a href="{{ link.url }}" class="link {{#if link.cls }}{{ link.cls }}{{/if}}">{{ link.text }}</a>
`;

export default template;