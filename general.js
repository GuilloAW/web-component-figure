/* C */
const template= document.createElement("template");
template.innerHTML=`
<figure>
  <img src='' alt=''>
  <figcaption>
  </figcaption>
</figure>
`;
/* E */
class ImgFigure extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
   connectedCallback(){
    console.log('componet added to DOM');
    let style=document.createElement("style");
    let img=document.createElement("img");
    style.innerHTML=`
    figure{
      margin:auto;
      text-align:center;
    }
    figcaption{
      font-family: arial;
      padding:1em;
    }
    `;
    this.shadowRoot.insertBefore(style, this.shadowRoot.children[0]);
  }
   attributeChangedCallback(name, oldValue, newValue){
    let element= this.shadowRoot;
    switch (name) {
      case "figcap":
        element.querySelector("figcaption").innerHTML=newValue;
      break;
      case "imgsrc":
        element.querySelector("img").setAttribute("src",newValue);
      break;
      case "altimg":
        element.querySelector("img").setAttribute("alt",newValue);
      break;
    }
  }
  static get observedAttributes(){
    return ['figcap','imgsrc','altimg'];
  }
}
/* D */
window.customElements.define('img-figure',ImgFigure);