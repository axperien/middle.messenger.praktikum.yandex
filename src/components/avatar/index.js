import Handlebars from 'handlebars';

import avatar from 'bundle-text:./avatar.hbs';
import './avatar.scss';

Handlebars.registerPartial('avatar', avatar);