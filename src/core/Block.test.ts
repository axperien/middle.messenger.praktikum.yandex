/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-extra-semi */
import 'global-jsdom/register';
import { expect } from 'chai';
import Block from './Block';

describe('Тестирование блока', () => {
    class Test extends Block {
        render() {
            return '<div id="test"></div>';
        }
    };

    class TestWithProps extends Block {
        constructor() {
            super();

            this.setProps({
                testValue: 123,
            });
        }

        render() {
            return '<div id="test_with_props"></div>';
        }
    };

    before(() => {
        document.body.innerHTML = '<div id="app"></div>';
    });

    it('Блок создается', () => {
        const TestBlock = new Test();
        const content = TestBlock.render();
        expect(content).to.be.equal('<div id="test"></div>');
    });

    it('У блока есть пропсы', () => {
        const TestBlock = new TestWithProps();

        // @ts-ignore
        expect(TestBlock.props.testValue).to.be.eq(123);
    });
});
