import Handlebars from 'handlebars';

import chatMessage from 'bundle-text:./chatMessage.hbs';
import './chatMessage.scss';

Handlebars.registerPartial('chatMessage', chatMessage);