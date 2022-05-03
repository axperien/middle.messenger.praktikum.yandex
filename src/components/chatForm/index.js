import Handlebars from 'handlebars';

import chatForm from 'bundle-text:./chatForm.hbs';
import './chatForm.scss';

Handlebars.registerPartial('chatForm', chatForm);