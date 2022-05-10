import './scss/main.scss';

import './core/registerHelpers';
import registerComponent from './core/registerComponents';
import { getCurrentPage } from './core/routing';

import { Button } from './components/button/button';
import { Field } from './components/field/field';
import { Form } from './components/form/form';
import { Link } from './components/link/link';
import { Error } from './components/error/error';
import { BackUrl } from './components/backUrl/backUrl';
import { Avatar } from './components/avatar/avatar';
import { UserField } from './components/userField/userField';
import { ChatList } from './components/chatList/chatList';
import { ChatInfo } from './components/chatInfo/chatInfo';
import { ChatForm } from './components/chatForm/chatForm';
import { ChatMessage } from './components/chatMessage/chatMessage';

registerComponent(Button);
registerComponent(Field);
registerComponent(Form);
registerComponent(Link);
registerComponent(Error);
registerComponent(BackUrl);
registerComponent(Avatar);
registerComponent(UserField);
registerComponent(ChatList);
registerComponent(ChatInfo);
registerComponent(ChatForm);
registerComponent(ChatMessage);

const setDocumentTitle = (title: string): void => {
    if (title) {
        document.title = `Чат - ${title}`;
    }
}

const setBodyClassName = (cls: string): void => {
    if (cls) {
        document.body.className = `page-${cls}`;
    }
}

const currentPage = getCurrentPage();
const { title, id, Page } = currentPage;
const page = new Page();

setDocumentTitle(title);
setBodyClassName(id);

const app = document.getElementById('app');
app.innerHTML = '';
// console.log(currentPage.getContent());
app.appendChild(page.getContent());