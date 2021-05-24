import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import '../main-view';

suite('MainView' , () => {
    let el;

    teardown(() => fixtureCleanup());

    setup(async () => {
        el = await fixture(html`<main-view></main-view>`);
        await el.updateComplete;
    })


    test('properties - componentData -> Object ', () =>{
        
       assert.isObject(el.componentData);
        
    });

    test('events - input-number-change', () =>{
        
        el.shadowRoot.addEventListener('input-number-change', (e) => {
            assert.equal(1,1);
        });
        
    });

});
