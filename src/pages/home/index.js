import Handlebars from 'handlebars';

import template from 'bundle-text:./home.hbs';

const page = Handlebars.compile(template)();

export default page;