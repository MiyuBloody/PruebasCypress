describe('Probaremos drag and drop con función de cypress', ()=>{ 
    it('Usar el plugin de cypress-drag-drop', ()=>{

        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

        //comprobar que el elemento seleccionado es visible y además contiene el texto 'Rome'
        cy.get('#box6').should('be.visible');
        cy.get('#box6').should('have.text', 'Rome');
        //comprobar que el elemento es visible y además es 'Italy'
        cy.get('#box106').should('be.visible');
        cy.get('#box106').should('have.text', 'Italy');
        //Hacemos drag and Drop con drag(), sin la opción force:true, salía un error interno de cypress
        cy.get('#box6').drag('#box106', {force: true});

    })
});