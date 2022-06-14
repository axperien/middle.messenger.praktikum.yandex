import { Chat } from './types';
import { Store } from './Store';
import { uploadChatAvatar } from '../controllers/chats';
import { uploadUserAvatar } from '../controllers/user';

const globalStore = new Store();

const isValidAvatar = (input: HTMLInputElement) => {
    const file = input.files;

    if (!file?.length) {
        alert('Выберите файл для загрузки!');
        return false;
    }

    const fileName = input.value.split('.').splice(-1, 1)[0];

    if ('png, jpg, jpeg, gif'.indexOf(fileName) === -1) {
        alert('Доступны для загрузки только форматы .png, .jpg, .jpeg, .gif!');
        return false;
    }

    const fileSize = file[0].size;

    if (fileSize > 2097152) {
        alert('Размер файла не должен превышать 2Мб!');
        return false;
    }

    return true;
};

export const handlerFileForm = async (
    form: HTMLFormElement | null,
    callback: () => void,
    type: string,
) => {
    if (form) {
        const fileElement = form.querySelector('.file') as HTMLElement;
        const fileInput = fileElement?.querySelector('input') as HTMLInputElement;
        const fileLabel = fileElement?.querySelector('label') as HTMLLabelElement;
        const fileLabelText = fileLabel?.textContent || '' as string;

        fileInput?.addEventListener('change', () => {
            let fileName = '';

            if (fileInput.files) {
                fileName = fileInput.value.split('\\').pop() as string;
            }

            if (fileName) {
                fileLabel.textContent = fileName;
                fileElement.classList.add('is-selected');
            } else {
                fileLabel.textContent = fileLabelText;
                fileElement.classList.remove('is-selected');
            }
        });

        form.addEventListener('submit', (e: Event) => {
            e.preventDefault();

            const isValid = isValidAvatar(fileInput);

            if (!isValid) {
                return;
            }

            const formData = new FormData(form);
            let upload;

            if (type === 'user') {
                upload = uploadUserAvatar(formData);
            }

            if (type === 'chat') {
                const store = globalStore.getState();
                const currentChat: Chat = store.currentChat as Chat;
                formData.append('chatId', currentChat.id as unknown as string);

                upload = uploadChatAvatar(formData);
            }

            if (upload) {
                upload.then(() => {
                    if (callback && typeof callback === 'function') {
                        callback();
                    }
                });
            }
        });
    }
};
