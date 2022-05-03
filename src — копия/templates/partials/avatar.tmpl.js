const template = `
    <div class="avatar">
        <div class="avatar__image"><img src="{{ image }}" srcset="{{ image_x2 }}" alt=""></div>
        {{#if overlay_text }}
            <div class="avatar__overlay" data-modal-id="change_avatar">{{ overlay_text }}</div>
        {{/if}}
    </div>
`;

export default template;