import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from '../../Router'
import Utils from '../../Utils'
import Auth from './../../Auth'

class FaqsView {
  init(){    
    console.log('FaqsView.init')
    document.title = 'FAQs'    
    this.render()    
    Utils.pageIntroAnim()    
  }

  render(){
    const template = html`
     <td-app-header title="FAQs" user=${JSON.stringify(Auth.currentUser)}></td-app-header>
      <div class="page-content">
      
        <h3>FAQs Content</h3>
        
        <td-site-footer></td-site-footer>
      </div>
      
    `

    render(template, App.rootEl)
  }
}

export default new FaqsView()