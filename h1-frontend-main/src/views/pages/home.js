import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'

class HomeView {
  init(){    
    console.log('HomeView.init')
    document.title = 'Home'    
    this.render()    
    Utils.pageIntroAnim()    
  }

  render(){
    const template = html`
      <td-app-header title="Home" user=${JSON.stringify(Auth.currentUser)}></td-app-header>
      <div class="view-screen">
      <body>
        <div id = "home-container">
        <!-- section 1 Hero image -->
          <div id = "home-hero-section">
            <div id = "home-hero-text">
              <h3>Group Tours for 18 - 30 Somethings</h3>
              <h1>Good Vibes & Safe Travels</h1>
            </div>
          </div>
          
        </div>

       <!-- section 2 popular tours -->
<div id = "home-poptour-section">
  <h1 id ="pop-h1">Popular Top Deck Tours:</h1>

    <div class ="glider-contain multiple">
      <!--slide in and out element-->
      <div class = "glider">
        <figure>
          <div id = "bali-adventure" class = "slide">
          <div class = "slider-txt">
          <h3>Bali Adventurer</h3>
            <h4>9 Nights | Departs Denpaser</h4>
            <div class = "slider-item"  id = "adv-slide">
            <span >#Adventure</span>
          </div>
        </div>
      </figure>

     
      <figure>
        <div id = "med-reset" class = "slide">
          <div class = "slider-txt">
          <h3>Mediterranean Reset</h3>
            <h4>5 Nights | Departs Athens</h4>
            <div class = "slider-item" id = "chill-slide">
            <span>#Chill</span>
            </div>
            </div>
          </div>
        </div>
      </figure>   
      </div>
       <!-- placeholder dots for now-->
    <div id = "dots">
      <sl-icon name = "circle"></sl-icon>
      <sl-icon name = "circle"></sl-icon>
      <sl-icon name = "circle"></sl-icon>
      <sl-icon name = "circle"></sl-icon>
      <sl-icon name = "circle"></sl-icon>
    <!-- other slider divs go below -->
  </div>

</div>

          
        </div>
      </body>
      <td-site-footer></td-site-footer>
      </div>



      
    `
    render(template, App.rootEl)
  }
}

export default new HomeView()