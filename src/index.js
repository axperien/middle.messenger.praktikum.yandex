import './helpers/hbsHelpers';
import './helpers/partials';
import './scss/main.scss';
import { getCurrentPage } from './helpers/routing';

const setDocumentTitle = (title) => {
    if (title) {
        document.title = `Чат - ${title}`;
    }
}

const setBodyClassName = (cls) => {
    if (cls) {
        document.body.className = `page-${cls}`;
    }
}

const app = document.getElementById('app');
const currentPage = { title, id, template } = getCurrentPage();

setDocumentTitle(currentPage.title);
setBodyClassName(currentPage.id);

app.innerHTML = currentPage.template;