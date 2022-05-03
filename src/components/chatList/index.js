import Handlebars from 'handlebars';

import chatList from 'bundle-text:./chatList.hbs';
import './chatList.scss';

Handlebars.registerPartial('chatList', chatList);