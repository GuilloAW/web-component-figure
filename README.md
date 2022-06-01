# Web Component Figure
The general idea of this component is to create an image with descriptions and accessibility and the faster and easily to that i use vanilla js.

## Steps

### Name web componet
- you should create an tag whit a descriptive name, in my case img-figure, img  as image and figure as figure - figurecaption
- the next step is you connect the file js to the HTML, it contains the logic for working with the component
- I create a constant template, to save all the content in this one, the template element will render when the page load is complet

### Register the web component
- In this step we take the name's class and name's tag and define as custom element
- Create class whit a name descriptive to componet , in to the class add two methods, connectedCallback and attributeChangedCallback, one observer, observedAttributes(), first method notify  me componet was added it a to the Doom and also i add styles CSS, last i create an  static get observer that join second method for notify changes in the attribute to custom element
