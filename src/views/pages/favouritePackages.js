import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'


// haircut - packages
class favouritePackagesView {
  init(){
    document.title = 'Favourite Packages'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <td-app-header title="Favourite Packages" user="${JSON.stringify(Auth.currentUser)}"></td-app-header>
      <div class="page-content">        
        <h1>Favourite Packages</h1>
        <p>Page content ...</p>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new favouritePackagesView()