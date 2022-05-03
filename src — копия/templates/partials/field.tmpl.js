const template = `
    <div class="form__field">
        <label class="form__label">
            <input 
                class="form__input" 
                placeholder=" " 
                name="{{ name }}" 
                type="{{ type }}" 
                {{#if (eq required 'true')}} required {{/if}}            
                {{#if (eq type 'email') }} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" {{/if}}
                {{#if (eq type 'password') }} autocomplete="new-password" {{/if}}
                {{#if minlength }} minlength="{{ minlength }}" {{/if}}
                >
            <span>{{ placeholder }}</span>
            <div class="form__error">{{ error_text }}</div>
        </label>
    </div>
`;

export default template;