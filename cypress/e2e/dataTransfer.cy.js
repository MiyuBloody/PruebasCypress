describe("prueba simple de drag and drop", () => {
  beforeEach(() => {
    //carga la página de inicio de sesión en el navegador.
    cy.visit("https://the-internet.herokuapp.com/");
    //clicar en en enlace de drag and drop de la página
    cy.contains("Drag and Drop").click();
    //verificar que la url contiene /drag_and_drop
    cy.url().should("contain", "/drag_and_drop");
  });

/*Se utiliza el objeto DataTransfer para simular un evento de arrastrar y soltar (drag and drop) 
en la interfaz de usuario. El método "trigger" se utiliza para simular el evento "dragstart" en 
el elemento con id "#column-a" y el evento "drop" en el elemento con id "#column-b". Esto simula 
el proceso de arrastrar el bloque A y soltarlo en el bloque B.

DataTransfer → es un objeto de la API de HTML. Internamente, el objeto DataTransfer almacena 
información sobre los datos que se están arrastrando
*/
it('cambiar bloque A por bloque B', () => {
  const dataTransfer = new DataTransfer
cy.get('#column-a').trigger('dragstart', {dataTransfer})
cy.get('#column-b').trigger('drop', {dataTransfer})
});

});