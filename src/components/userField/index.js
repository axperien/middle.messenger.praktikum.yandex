import Handlebars from 'handlebars';

import userField from 'bundle-text:./userField.hbs';
import './userField.scss';

Handlebars.registerPartial('userField', userField);