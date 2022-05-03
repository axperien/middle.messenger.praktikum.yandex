import Handlebars from 'handlebars';

import template from 'bundle-text:./500.hbs';

const data = {
    code: '500',
    text: 'Кажется что-то пошло не так... :('
};

const page = Handlebars.compile(template)(data);

export default page;