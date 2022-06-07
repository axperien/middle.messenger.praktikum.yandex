import { ModalAvatarProps } from '../../core/types';
import { handlerFileForm } from '../../core/handlerEvents';
import Block from '../../core/Block';

export class ModalAvatar extends Block {
    public static componentName = 'ModalAvatar';

    constructor({ callback, type }: ModalAvatarProps) {
        super({ callback, type });
    }

    addEvents():void {
        const form = this._element as HTMLFormElement;
        const { callback, type } = this.props;

        handlerFileForm(form, callback, type);
    }

    render(): string {
        return `
            <form class="modal__form" action="">
                <h3 class="modal__title">Загрузите файл</h3>
                <div class="file">
                    <input type="file" name="avatar" id="avatar" class="file__input" />
                    <label for="avatar" class="file__label">Выбрать файл на компьютере</label>
                </div>
                <button type="submit" class="button">Поменять</button>
            </form>
        `;
    }
}
