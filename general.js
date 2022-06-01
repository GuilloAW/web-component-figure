const template= document.createElement("template");
template.innerHTML=`
<figure>
  <img src='' alt=''>
  <figcaption class='figcap'>
  </figcaption>
</figure>
`;
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
    this.shadowRoot.appendChild(img);
  }
   attributeChangedCallback(name, oldValue, newValue){
    if(name==="figcap"){
      this.shadowRoot.querySelector("figcaption").innerHTML=newValue;
    }
    if(name==="imgsrc"){
      this.shadowRoot.querySelector("img").setAttribute("src",newValue);
    }
    if(name==="altimg"){
      this.shadowRoot.querySelector("img").setAttribute("alt",newValue);
    }
  }
  static get observedAttributes(){
    return ['figcap','imgsrc','altimg'];
  }
}
window.customElements.define('img-figure',ImgFigure);