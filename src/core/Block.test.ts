import { expect } from 'chai';
import { renderDOM } from './renderDOM';
import 'global-jsdom/register';
import Block from './Block';

describe('Тестирование блока', () => {
    class Test extends Block {
        render() {
            return '<div id="test"></div>';
        }
    }

    class TestWithProps extends Block {
        constructor({ title = '' }) {
            super({ title });

            this.setProps({
                testValue: 123,
            });
        }

        render() {
            return '<div id="test_with_props"></div>';
        }
    }

    before(() => {
        document.body.innerHTML = '<div id="app"></div>';
    });

    it('Блок рендерит html', () => {
        const TestBlock = new Test();
        const content = TestBlock.render();
        expect(content).to.be.equal('<div id="test"></div>');
    });

    it('Блок монтируется', () => {
        const TestBlock = new Test();

        renderDOM(TestBlock);
        const appElement = document.getElementById('app');
        const mountedElement = appElement?.querySelector('#test');

        expect(mountedElement).to.not.be.null;
    });

    it('У блока есть пропсы из конструктора', () => {
        const TestBlock = new TestWithProps({
            title: 'test',
        });

        expect(TestBlock.props.title).to.be.eq('test');
    });

    it('У блока есть "свои" пропсы', () => {
        const TestBlock = new TestWithProps({
            title: 'test',
        });

        expect(TestBlock.props.testValue).to.be.eq(123);
    });
});
