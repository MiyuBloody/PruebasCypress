# Cypress
Pruebas e2e de Cypress

## Contexto: 
Se necesita crear una prueba e2e con Cypress que simule un movimiento drag and drop.

## Explicación
Para una de las pruebas accederemos a la página [The-Internet](https://the-internet.herokuapp.com), dónde hay diferentes ejemplos disponibles, 
pincharemos en "Drag and drop".
Allí podremos observar que hay dos elementos cuadrados que simulan drag and drop.

<img width="938" alt="image" src="https://user-images.githubusercontent.com/102371536/213654373-9b7def14-59cc-4460-96ff-51d0b384aa4e.png">

Para otra de las pruebas accederemos a la página de [Angular Material](https://material.angular.io/cdk/drag-drop/overview#cdk-drag-drop-connected-sorting),
allí se simula otro tipo de drag and drop (tipo lista)

<img width="952" alt="image" src="https://user-images.githubusercontent.com/102371536/213705505-7fbd4ba1-8a99-448a-8039-5d15f0141b78.png">


## El código
### Test simple
<img width="330" alt="image" src="https://user-images.githubusercontent.com/102371536/213654645-077e2929-d640-4207-a6ed-f7b279dbd36f.png">

Se utiliza el objeto DataTransfer para simular un evento de arrastrar y soltar (drag and drop) 
en la interfaz de usuario. El método "trigger" se utiliza para simular el evento "dragstart" en 
el elemento con id "#column-a" y el evento "drop" en el elemento con id "#column-b". Esto simula 
el proceso de arrastrar el bloque A y soltarlo en el bloque B.

DataTransfer → es un objeto de la API de HTML. Internamente, el objeto DataTransfer almacena 
información sobre los datos que se están arrastrando.

### Test de Angular material
Está en proceso
