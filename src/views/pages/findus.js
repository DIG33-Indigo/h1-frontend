import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from '../../Router'
import Utils from '../../Utils'
import Auth from '../../Auth'

class FindusView {
  init(){    
    console.log('FindusView.init')
    document.title = 'Find Us'    
    this.render()    
    Utils.pageIntroAnim()    
  }

  render(){
    const template = html`
     <td-app-header title="Find Us" user=${JSON.stringify(Auth.currentUser)}></td-app-header>
      <div class="page-content">
      
       
        <h3>Find Us content goes here</h3>
        
        <td-site-footer></td-site-footer>
      </div>
      
    `

    render(template, App.rootEl)
  }
}

export default new FindusView()