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

Para la siguiente prueba accederemos a [HTMLgoodies](http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html)

<img width="937" alt="image" src="https://user-images.githubusercontent.com/102371536/214031835-6121f15c-a001-4b2b-a754-ec8fb56ee4b0.png">



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

### Test con función .drag()
<img width="649" alt="image" src="https://user-images.githubusercontent.com/102371536/214031996-1fa4ad6f-dae4-4dee-a938-d828c5dd6ebf.png">
Cypress utiliza la funcionalidad nativa del navegador para simular eventos de arrastrar y soltar. Esto significa que cuando se llama a la función .drag(), Cypress establece las propiedades del evento y las coordenadas del cursor para simular un comportamiento similar al de un usuario real que arrastra y suelta elementos (permite seleccionar los elementos de origen y destino y Cypress se encarga de simular los eventos necesarios)

La función .drag() toma dos argumentos: el elemento de origen ('#box6') y el elemento de destino ('#box106').

Se ha añadido la opción force:true, porque salía un error interno.
