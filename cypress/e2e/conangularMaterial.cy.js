describe("Otra prueba de drag and drop", () => {
  beforeEach(() => {
    cy.visit(
      "https://material.angular.io/cdk/drag-drop/overview#cdk-drag-drop-connected-sorting"
    );
  });

  /* moveremos 'get to work' de 'to do' a 'done'
    Para aplicaciones desarrolladas en angular material .drag() no funciona.
    crearemos un comando personalizado en /support/commands.js llamado 'draganddrop'
    */
  it("mover get to work de to do a done", () => {
    //aceptar las cookies
    cy.get('.popup').should('be.visible')
    cy.get('.buttons > .mat-primary').should('be.visible').click()

    //comprobar que es visible el primer elemento de 'TO DO'
    cy.get("#cdk-drop-list-1 > div:nth-child(1)", { timeout: 7000 }).should(
      "be.visible"
    )
    //antes de realizar el Drag and Drop el primer elemento de 'TO DO' es 'Get to work'
    cy.get('#cdk-drop-list-1 > div:nth-child(1)')
    .should('have.text', 'Get to work')

    //realizamos drag and drop con el comando personalizado, de 'Get to work', que está en TO DO, a DONE
     cy.draganddrop('#cdk-drop-list-1 > div:nth-child(1)', '#cdk-drop-list-2')
     cy.wait(2000)
     
    /* //después del Drag and Drop el primer elemento de'DONE' debería ser 'Get to work'
     cy.get('#cdk-drop-list-2 > div:nth-child(1)')
     .should('have.text', 'Get to work') */
 
  });
});
