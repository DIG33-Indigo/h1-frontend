import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from '../../Router'
import Utils from '../../Utils'
import Auth from './../../Auth'
import moment from 'moment'

class UserDashboardView {
  init(){    
    console.log('UserDashboardView.init')
    document.title = 'Me & My Trips'    
    this.render()    
    Utils.pageIntroAnim()    
  }

//profile code section --------------------------------------------



  render(){
    const template = html`
      <style>
        h3 {
          text-align: centre;
        }

      </style>




     <td-app-header title="My & My Trips" user=${JSON.stringify(Auth.currentUser)}></td-app-header>
      <div class="page-content">
      
       
        <h3>User Daashboard</h3>


        <sl-tab-group>
          <sl-tab slot="nav" panel="next">My Next Trip</sl-tab>
          <sl-tab slot="nav" panel="chat">Tour Chat</sl-tab>
          <sl-tab slot="nav" panel="favourites">Favourites</sl-tab>
          <sl-tab slot="nav" panel="profile">Profile</sl-tab>

          <sl-tab-panel name="next">Get package by booking id here</sl-tab-panel>
          <sl-tab-panel name="chat">Chat Forum code to go here</sl-tab-panel>
          <sl-tab-panel name="favourites">Get package by favourite ids here</sl-tab-panel>
          <sl-tab-panel name="profile">
            <div class="signinup-box">
               ${Auth.currentUser && Auth.currentUser.avatar ? html`
                <sl-avatar style="--size: 200px; margin-bottom: 1em;" image=${(Auth.currentUser && Auth.currentUser.avatar) ? `${App.apiBase}/images/${Auth.currentUser.avatar}` : ''}></sl-avatar>
              `:html`
                <sl-avatar style="--size: 200px; margin-bottom: 1em;"></sl-avatar>
              `}
              <h2>${Auth.currentUser.firstName} ${Auth.currentUser.lastName}</h2>
              <p>${Auth.currentUser.email}</p>
              ${Auth.currentUser.bio ? html`
                <h3>About Me</h3>
                <p>${Auth.currentUser.bio}</p>
              ` : html`
                <p>No news about me.</p><br>
              `}
              <p>Updated: ${moment(Auth.currentUser.updatedAt).format('MMMM Do YYYY, @ h:mm a')}</p>
              <sl-button @click=${()=> gotoRoute('/editProfile')}>Edit Profile</sl-button>
              </div>         
            </div>
            
          </sl-tab-panel>
        </sl-tab-group>

      </div>
      
    `

    render(template, App.rootEl)
  }
}

export default new UserDashboardView()