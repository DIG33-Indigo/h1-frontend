import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from '../../Router'
import Utils from '../../Utils'
import Auth from './../../Auth'

class TravelTipsView {
  init(){    
    console.log('TravelTips.init')
    document.title = 'Travel Tips'    
    this.render()    
    Utils.pageIntroAnim()    
  }

  render(){
    const template = html`
     <td-app-header title="Travel Tips" user=${JSON.stringify(Auth.currentUser)}></td-app-header>
      <div class="page-content">
      
       
        <h3>Travel tips content here</h3>
        
        <td-site-footer></td-site-footer>
      </div>
      
    `

    render(template, App.rootEl)
  }
}

export default new TravelTipsView()