const template = `
    <div class="modal" data-modal="{{ id }}">
        <div class="modal__content">
            {{> @partial-block }}
        </div>
    </div>
`;

export default template;