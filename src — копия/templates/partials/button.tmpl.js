const template = `
    <button class="button {{#if button.cls }}{{ button.cls }}{{/if}}" type="submit">{{ button.text }}</button>
`;

export default template;