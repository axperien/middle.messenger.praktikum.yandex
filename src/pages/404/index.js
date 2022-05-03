import Handlebars from 'handlebars';

import template from 'bundle-text:./404.hbs';

const data = {
    code: '404',
    text: 'Кажется такой странички нет... ;('
};

const page = Handlebars.compile(template)(data);

export default page;