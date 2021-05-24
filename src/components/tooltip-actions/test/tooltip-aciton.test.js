import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import '../tooltip-actions.js';

suite('DateFormat' , () => {
    let el;

    teardown(() => fixtureCleanup());

    setup(async () => {
        el = await fixture(html`<tooltip-actions  id-tooltip="hello"></tooltip-actions>`);
        await el.updateComplete;
    })

    test('instantiating properties works', () => {
     
        assert.isArray(el.actions);
        assert.equal(el.idTooltip, "hello");
     
    });

    test('properties - idTooltip', () => {
     
        let oldVal = el.idTooltip;

        el.idTooltip = "AASDASSDADAS";

        assert.notEqual(el.idTooltip, oldVal);
     
    });

    test('funciones - showTooltip', () => {
     
        el.showTooltip();

        let clase = el._getTooltipAction.className;

        assert.equal(clase, 'tooltip display');
     
    });

    test('funciones - hideTooltip', () => {
     
        el.hideTooltip();

        let clase = el._getTooltipAction.className;

        assert.notEqual(clase, 'tooltip display');
     
    });

    test('eventos - tooltip-actions-action-click', () => {
     
        let objectEvt = el.shadowRoot.getElementById(el.idTooltip).getElementById('action1');


        document.addEventListener('tooltip-actions-action-click', (e) =>{

          e.stopImmediatePropagation();
          
          assert.equal(e.detail.id, el.idTooltip);
          assert.equal(e.detail.action, 'action1');

        });

        objectEvt.click();
     
    });


    

});
