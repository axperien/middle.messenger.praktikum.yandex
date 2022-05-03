import Handlebars from 'handlebars';

import chatInfo from 'bundle-text:./chatInfo.hbs';
import './chatInfo.scss';

Handlebars.registerPartial('chatInfo', chatInfo);