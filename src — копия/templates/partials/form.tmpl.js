const template = `
    <form class="form" autocomplete="off">
        <h2 class="form__title">{{ form.title }}</h2>
        {{#each form.fields}}
            {{> field }}
        {{/each}}
        <div class="form__buttons">
            {{> button }}
        </div>    
        <div class="form__links">
            {{> link }}
        </div>
    </form>
`;

export default template;