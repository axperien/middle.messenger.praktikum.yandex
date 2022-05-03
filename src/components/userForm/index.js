import Handlebars from 'handlebars';

import userForm from 'bundle-text:./userForm.hbs';
import './userForm.scss';

Handlebars.registerPartial('userForm', userForm);