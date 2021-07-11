import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import PackageAPI from '../../PackageAPI'


class packagesView {
  init(){
    document.title = 'Packages'
    this.tours = null
    this.render()    
    Utils.pageIntroAnim()
    this.getPackages()
  }

  async getPackages(){
    try{
      this.tours = await PackageAPI.getPackages()
      console.log(this.packages)
      this.render()
    }catch(err){
      Toast.show(err, 'error')
    }
  }

  render(){
    const template = html`
      <td-app-header user="${JSON.stringify(Auth.currentUser)}"></td-app-header>
      <div class="page-content">  

        <div class="packages-grid">
             ${this.tours == null ? html`
             Waiting for data to test here
              <sl-spinner></sl-spinner>
            ` : html`
              ${this.tours.map(tour => html `
              <td-packages class="package-card"
                  title="${tour.name}"
                  description="${tour.description}"
                  price=${tour.price}
                  image="${tour.image}"
                  date="${tour.date}"
                > 
            </td-packages>
              `)}
            `}




         </td-packages>
        </div>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}

export default new packagesView()