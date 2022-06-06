import { sendMessage } from '../../services/chats';
import Block from '../../core/Block';
import './chatForm.scss';
import { ChatFormProps, Indexed } from '../../core/types';

export class ChatForm extends Block<ChatFormProps> {
    public static componentName = 'ChatForm';

    constructor(props:ChatFormProps) {
        super({
            ...props,
            events: {
                submit: (e: Event) => {
                    e.preventDefault();

                    const form = e.target as HTMLFormElement;

                    if (form) {
                        const formData = new FormData(form);
                        const data: Indexed = {};

                        [...formData.entries()].forEach(([name, value]) => {
                            data[name] = value;
                        });

                        if (data.message) {
                            sendMessage(encodeURIComponent(data.message as string));
                        }
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
                        autocomplete="off"
                        >
                </div>
                <button class="dialog__submit" type="submit"></button>
            </form>
        `;
    }
}
