import 'global-jsdom/register';
import { expect } from 'chai';
import { Router } from './Router';
import Block from './Block';

describe('Тестирование роутера', () => {
    class SignIn extends Block {
        render() {
            return '<div id="sign-in"></div>';
        }
    }

    class SignUp extends Block {
        render() {
            return '<div id="sign-up"></div>';
        }
    }

    class Settings extends Block {
        render() {
            return '<div id="settings"></div>';
        }
    }

    class Messenger extends Block {
        render() {
            return '<div id="messenger"></div>';
        }
    }

    const router = new Router();

    before(() => {
        document.body.innerHTML = '<div id="app"></div>';

        router
            .use('/sign-in', SignIn, {})
            .use('/sign-up', SignUp, {})
            .use('/settings', Settings, {})
            .use('/messenger', Messenger, {})
            .start();
    });

    it('History API правильно считает изменения', () => {
        router.go('/sign-in');
        router.go('/messenger');
        router.go('/settings');
        expect(router.getHistoryLength()).to.eq(4);
    });

    it('Роутер показывает правильную страницу логина', () => {
        router.go('/sign-in');
        expect(document.getElementById('sign-in')).to.not.be.null;
    });

    it('Роутер показывает правильную страницу регистрации', () => {
        router.go('/sign-up');
        expect(document.getElementById('sign-up')).to.not.be.null;
    });

    it('Роутер показывает правильную страницу профиля', () => {
        router.go('/settings');
        expect(document.getElementById('settings')).to.not.be.null;
    });

    it('Роутер показывает правильную страницу чатов', () => {
        router.go('/messenger');
        expect(document.getElementById('messenger')).to.not.be.null;
    });

    it('Переход назад правильно работает', () => {
        router.go('/sign-in');
        router.go('/messenger');
        router.go('/settings');
        router.back();
        setTimeout(() => {
            expect(document.getElementById('messenger')).to.not.be.null;
        }, 100);
    });

    it('Переход вперед правильно работает', () => {
        router.go('/sign-in');
        router.go('/messenger');
        router.go('/settings');
        router.back();
        router.back();
        router.forward();
        setTimeout(() => {
            expect(document.getElementById('messenger')).to.not.be.null;
        }, 100);
    });
});
