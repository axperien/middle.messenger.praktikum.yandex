import Handlebars from "handlebars";

import form from './form.tmpl';
import field from './field.tmpl';
import button from './button.tmpl';
import link from './link.tmpl';
import error from './error.tmpl';
import avatar from './avatar.tmpl';
import back from './back.tmpl';
import modal from './modal.tmpl';
import chatsLists from './chats_list.tmpl';

export default () => {
    Handlebars.registerPartial('field', field);
    Handlebars.registerPartial('form', form);
    Handlebars.registerPartial('button', button);
    Handlebars.registerPartial('link', link);
    Handlebars.registerPartial('error', error);
    Handlebars.registerPartial('avatar', avatar);
    Handlebars.registerPartial('back', back);
    Handlebars.registerPartial('modal', modal);
    Handlebars.registerPartial('chats_list', chatsLists);
}