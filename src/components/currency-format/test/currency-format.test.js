import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import '../input-keypress-event.js';

suite('CurrencyFormat' , () => {
    let el;

    teardown(() => fixtureCleanup());

    setup(async () => {
        el = await fixture(html`<currency-format valor="" identifier="food"></currency-format>`);
        await el.updateComplete;
    })

    test('instantiating properties works', () => {
     
        assert.equal(el.amount, 0);
        assert.equal(el.currency, 'EUR');
     
    });

    test('amount - asignar valores ', () => {
     
        let oldVal = el.amount;

        el.amount = 333;

        assert.notEqual(el.amount, oldVal);
     
    });


    test('currency - asignar valores ', () => {
     
        let oldVal = el.currency;

        el.currency = "USD";

        assert.notEqual(el.currency, oldVal);
     
    });

});
