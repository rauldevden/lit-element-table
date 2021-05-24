import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import '../input-number-group.js';

suite('InputNumber' , () => {
    let el;

    teardown(() => fixtureCleanup());

    setup(async () => {
        el = await fixture(html`<row-group valorSelected="one"></row-group>`);
        await el.updateComplete;
    })

    

    test('properties - selected -> boolean ', () =>{
        
        assert.isObject(el.dataCard);
        
    });



    test('properties - selected -> boolean ', () =>{
        
        assert.isBoolean(el.selected);
        
    });

    test('properties - selected ', () =>{
        
        let oldVal = el.selected;

        el.selected = !el.selected;

        assert.notEqual(el.selected, oldVal);
        
    });

    test('properties - cardType', () =>{
        
        let oldVal = el.cardType;

        el.cardType = "checkbox";

        assert.notEqual(el.cardType, oldVal);
        
    });


    test('properties - arrayInfo -> is array', () =>{

        assert.isArray(el.arrayInfo)
        
    });

    test('funciones - cardSelect()', () =>{

        // PONEMOS SELECTED A TRUE
        el.selected = false;

        // COGEMOS SU VALOR
        let oldVal = el.selected;

        // ASIGNAMOS A TRUE EL VALOR CON LA FUNCION
        el.cardSelect(true);

        // COGEMOS SU VALOR
        let newVal = el.selected;

        // COMPARAMOS QUE LOS VALORES SON DISTINTOS
        assert.notEqual(oldVal, newVal);
        
    });

    test('eventListener - card-click', () =>{

        el.dataCard.cardId = "kfc";

        el.shadowRoot.addEventListener('card-click', (e) => {
            assert.equal(e.detail.id, el.dataCard.cardId)
        });

        el.click();
        
    });

    test('eventListener - link-click', () =>{

        el.dataCard.cardId = "kfc";

        el.shadowRoot.addEventListener('link-click', (e) => {
            assert.equal(e.detail, 'Has hecho click para ver la factura con ID: '+el.dataCard.id);
        });

        el.click();
        
    });



});
