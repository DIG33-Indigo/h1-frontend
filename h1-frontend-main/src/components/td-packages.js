import { LitElement, html, css } from '@polymer/lit-element'
import { render } from 'lit-html'
import {anchorRoute, gotoRoute} from '../Router'
import Auth from '../Auth'
import App from '../App'



customElements.define('va-packages', class Package extends LitElement {
  constructor(){
    super()    
  }

  static get properties(){
    return {
      title: {
        type: String
      },
      description: {
        type: String
      },
      longDescription: {
        type: String
      },
      date: {
        type: Date
      },
      duration: {
        type: Number
      },
      vibe: {
        type: String
      },
      country: {
        type: String
      },
      region: {
        type: String
      },
      type: {
        type: String
      },
      depatureLocation: {
        type: String
      },
      endLocation: {
        type: String
      },
      price: {
        type: String
      },
      image: {
        type: String
      }
    }
  }

  firstUpdated(){
    super.firstUpdated()
  }
//if inside a method of event handler add the bind(this) as below
moreInfoHandler(){
    //- create sl-dialog
    console.log('more info handler')
    const dialogEL = document.createElement('sl-dialog')

    // add class name
    dialogEL.className = 'package-dialog'

    //- sl-dialog content (Paste #2)
    const dialogContent = html`
        <style>
            .wrap {
                display: flex;
            }
            .image {
                width: 50%;
            }
            .image img {
                width: 100%;
            }
            .content {
                padding-left: 1em;
            }
            .gender span,
            .length span {
                text-transform: uppercase;
                font-weight: bold;
            }
            .price {
                font-size: 1.5em;
                color: var(--brand-color);
            }
        </style>
        <div class="wrap">

            <div class="content">
                <h1>${this.title}</h1>
                <p>${this.description}</p>
                <p class="price">$${this.price}</p>

                <sl-button @click=${this.addFavHandler.bind(this)}>
                <sl-icon slot="prefix" name="heart-fill"></sl-icon>
                Add to Favourites
                </sl-button>
            </div>
        </div>
      `
    render(dialogContent, dialogEL)

    //- append to document.body
    document.body.append(dialogEL)

    //- show sl-dialog
    dialogEL.show()

    //- on hide delete sl-dialog
    dialogEL.addEventListener('sl-after-hide', () => {
        dialogEL.remove()
    })

  }

  addFavHandler(){
    alert("Add to Favourites")
  }

  render(){    
    return html`
    <style>
        .author {
            font-size: 0.9em;
            font-style: italic;
            opacity: 0.8;
        }
    </style>

    <sl-card>
        <img slot="image" src="${App.apiBase}/images/${this.image}" />
        <h2>${this.title}</h2>
        <h3>$${this.price}</h3>
        <sl-button @click=${this.moreInfoHandler.bind(this)}>More Info</sl-button>
        <sl-icon-button name="heart-fill" label="Add to Favourites" @click=${this.addFavHandler}></sl-icon-button> 
    </sl-card>
   `
  }
  
})
