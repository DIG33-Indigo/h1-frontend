import { LitElement, html, css } from '@polymer/lit-element'
import {anchorRoute, gotoRoute} from '../Router'



customElements.define('td-site-footer', class SiteFooter extends LitElement {
  constructor(){
    super()    
  }

  firstUpdated(){
    super.firstUpdated()
   
  }


  menuClick(e){
    e.preventDefault()
    const pathname = e.target.closest('a').pathname
    const appSideMenu = this.shadowRoot.querySelector('.app-side-menu')
    gotoRoute(pathname)
    
  }


  render(){    
    return html`
    <style>      
      * {
        box-sizing: border-box;
      }

      
/*section - footer
--------------------------*/
#home-footer{
    background-color: #222C39;
    height: 60vh;
    display: flex;
    justify-content: space-around;
}

#footer-column-left,
#footer-column-mid{
    padding-top: 3vh;
}

#footer-column-left,
#footer-column-left h1,
#footer-column-mid,
#footer-column-right{
    text-align: left !important;
    color: #FFF;
    /*space btwn text lines*/
    line-height: 7vh;
}

/*style of text in footer*/
.footer-items h1{
    font-weight:bold;
    font-size: 6vh;
}

.footer-items h2{
    font-size: 5vh;
}

#footer-column-right{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}

#footer-column-right img{
    width: 40vh;
    padding-top: 9vh;
}

#footer-column-right sl-icon{
    font-size: 8vh;
    margin: 1vh;
}

#footer-icon-holder{
    margin-left: 4vh;
}


 
      /* RESPONSIVE - MOBILE ------------------- */
      @media all and (max-width: 768px){       
        
        .footer-sections {
          display: inline-block;
        }
      }

    </style>

      <footer>
        <div id = "home-footer">
          <div id = "footer-column-left" class = "footer-items">
            <h1>About</h1>
            <h2>What we are about</h2>
            <h2>Where we travel to</h2>
            <h2>How we travel</h2>
            <h2>FAQ's</h2>
          </div>


        <div id = "footer-column-mid" class = "footer-items">
          <h1>Find a trip</h1>
          <h2>#party</h2>
          <h2>#chill</h2>
          <h2>#adventure</h2>
          <h2>#culture</h2>
        </div>

        <div id = "footer-column-right" class = "footer-item">
          <!-- Topdeck logo -->
          <div class = "footer-right-item">
            <img src = "images/topdeck-white.png" alt = "top deck logo in white">
          </div>

          <div class = "footer-right-item" id = "footer-icon-holder">
          <!-- Topdeck icons -->
          <sl-icon name="facebook"></sl-icon>
          <sl-icon name="youtube"></sl-icon>
          <sl-icon name="instagram"></sl-icon>
          <br>
          <sl-icon name="twitter"></sl-icon>
          <!--Note: couldn't find all the icons on shoelace - missing 2 icons as of now-->
          </div>

          
          </div>
        </div><!-- close footer div-->


      </footer>
    `
  }
  
})

