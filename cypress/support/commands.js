//necesario para drag and drop
require('@4tw/cypress-drag-drop')

//COMANDO PERSONALIZADO PARA DRAG AND DROP DE ANGULAR MATERIAL
Cypress.Commands.add('draganddrop', (dragSelector, dropSelector) => {
    cy.get(dragSelector).should('exist')
        .get(dropSelector).should('exist');

    const draggable = Cypress.$(dragSelector)[0]; 
    const droppable = Cypress.$(dropSelector)[0]; 

    const coords = droppable.getBoundingClientRect()
    draggable.dispatchEvent(new MouseEvent('mousedown'));
    draggable.dispatchEvent(new MouseEvent('mousemove', { clientX: 10, clientY: 0 }));
    draggable.dispatchEvent(new MouseEvent('mousemove', {
        clientX: coords.left + 10,
        clientY: coords.top + 10
    }));
    draggable.dispatchEvent(new MouseEvent('mouseup'));
    return cy.get(dropSelector);
})