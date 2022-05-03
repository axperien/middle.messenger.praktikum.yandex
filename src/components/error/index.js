import Handlebars from 'handlebars';

import error from 'bundle-text:./error.hbs';
import './error.scss';

Handlebars.registerPartial('error', error);