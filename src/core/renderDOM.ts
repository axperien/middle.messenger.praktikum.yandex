import Block from './Block';

const setDocumentTitle = (title: string): void => {
    if (title) {
        document.title = `Чат - ${title}`;
    }
};

const setBodyClassName = (cls: string): void => {
    if (cls) {
        document.body.className = `page-${cls}`;
    }
};

export const renderDOM = (Page?: Block): void => {
    const app = document.querySelector('#app');

    if (Page !== undefined) {
        const title = Page.getPageTitle() as string;
        const cls = Page.getPageCls() as string;

        setDocumentTitle(title);
        setBodyClassName(cls);

        app!.appendChild(Page.getContent() as HTMLElement);
    } else {
        app!.innerHTML = '';
    }
};
