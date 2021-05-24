import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import '../input-keypress-event.js';

suite('InputNumber' , () => {
    let el;

    teardown(() => fixtureCleanup());

    setup(async () => {
        el = await fixture(html`<input-number valor="" identifier="food"></input-number>`);
        await el.updateComplete;
    })

    test('instantiating properties works', () => {
     
        assert.equal(el.valor, "");
        assert.equal(el.identifier, 'food');
     
    });

    test('properties - valor', () =>{
        
        let oldVal = el.valor;

        el.valor = "jaime";

        assert.notEqual(el.valor, oldVal);
        
    });

    test('properties - identifier ', () =>{
        
        let oldVal = el.identifier;

        el.identifier = "nombres";

        assert.notEqual(el.identifier, oldVal);
        
    });

    test('funcion update value ', () =>{
        
        let sample = "12345678"
        el.valor = sample;

        el.update_value();

        let input_val = this.shadowRoot.querySelector('input').value;

        assert.equal(input_val, el.valor);
        
    });

});
