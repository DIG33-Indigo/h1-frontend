import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from '../../Router'
import Utils from '../../Utils'
import Auth from '../../Auth'

class AdminView {
  init(){    
    console.log('AdminView.init')
    document.title = 'Admin'    
    this.render()    
    Utils.pageIntroAnim()    
  }

  render(){
    const template = html`
     <td-app-header title="Admin" user=${JSON.stringify(Auth.currentUser)}></td-app-header>
      <div class="page-content">
      
       
        <h3>Admin content goes here</h3>
        admin button only shown on drop down menu to those with level 2 access.



          <sl-tab-group>
            <sl-tab slot="nav" panel="add">Add New Tour Package</sl-tab>
            <sl-tab slot="nav" panel="edit">Edit Tour Packages</sl-tab>
            

            <sl-tab-panel name="edit">
              If there is time : )
              <p>Get all packages and show an edit button</p>
              <p>Then get package id and open the edit package in the new window and update by id</p>
              <p>Need to create a new page with getbyID and updatebyID functions</p>
            </sl-tab-panel>

            <sl-tab-panel name="add">Insert form here with submit button</sl-tab-panel>
            
          </sl-tab-group>
        



        <td-site-footer></td-site-footer>
      </div>
      
    `

    render(template, App.rootEl)
  }
}

export default new AdminView()