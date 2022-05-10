import Block from '../../core/Block';
import './chatForm.scss';

interface ChatFormProps {
    name: string,
    avatar: { image: string, image_x2: string }
}

export class ChatForm extends Block {
    public static componentName = 'ChatForm';

    constructor(props: ChatFormProps) {
        super({
            ...props,
            events: {
                submit: (e: Event) => {
                    e.preventDefault();

                    const form = e.target as HTMLFormElement;

                    if (form) {
                        const formData = new FormData(form);
                        const data = {};

                        // eslint-disable-next-line no-restricted-syntax
                        for (const [name, value] of formData) {
                            data[name] = value;
                        }

                        console.log(data);
                    }
                },
            },
        });
    }

    render(): string {
        return `
            <form class="dialog__form">
                <div class="dialog__file">
                    <input type="file" name="file_message" id="file_message" class="dialog__file-input" />
                    <label for="file_message" class="dialog__file-label"></label>
                </div>
                <div class="dialog__input">
                    <input 
                        class="dialog__input-input" 
                        placeholder="Сообщение" 
                        name="message" 
                        type="text"
                        >
                </div>
                <button class="dialog__submit" type="submit"></button>
            </form>
        `;
    }
}
