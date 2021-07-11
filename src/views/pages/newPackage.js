import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import PackageAPI from '../../PackageAPI'
import Toast from '../../Toast'


class newPackageView {
  init(){
    document.title = 'New Package'    
    this.render()    
    Utils.pageIntroAnim()
  }

  async newPackageSubmitHandler(e){
    e.preventDefault()
    const submitBtn = document.querySelector('.submit-btn')
    submitBtn.setAttribute('loading', '')    
    const formData = e.detail.formData

    try{
      await PackageAPI.newPackage(formData)
      Toast.show('Package added!')
      submitBtn.removeAttribute('loading')

 
      // reset form
      // reset text - text inputs
      const textInputs = document.querySelectorAll('sl-input, sl-textarea')
      if(textInputs) textInputs.forEach(textInput => textInput.value = null)
      // reset radial inputs
      const radioInputs = document.querySelectorAll('sl-radio')
      if(radioInputs) radioInputs.forEach(radioInput => radioInput.removeAttribute('checked'))
      // reset image
      const fileInput = document.querySelector('input[type=file]')
      if(fileInput) fileInput.value = null

    }catch{
      Toast.show(err, 'error')
      submitBtn.removeAttribute('loading')
    }
    
  }

  render(){
    const template = html`
      <td-app-header title="New Package" user="${JSON.stringify(Auth.currentUser)}"></td-app-header>
      <div class="page-content">        
        <h1>New Package</h1>
        
        <sl-form class="page-form" @sl-submit=${this.newPackageSubmitHandler}>
          <div class="input-group">
            <sl-input name="title" type="text" placeholder="Package Title" required></sl-input>
          </div>
          <div class="input-group">
            <sl-textarea name="description" rows="2" placeholder="Short Description" required></sl-textarea>
          </div>
          <div class="input-group">
            <sl-textarea name="longDescription" rows="4" placeholder="Long Description" required></sl-textarea>
          </div>
          <div class="input-group">
            <sl-input name="date" type="date" placeholder="Start Date" required></sl-input>
          </div>
          <div class="input-group">
            <sl-input name="duration" type="number" placeholder="Package duration" required></sl-input>
          </div>
          <div class="input-group">
            <sl-input name="vibe" type="text" placeholder="Package Vibe" required></sl-input>
          </div>
          <div class="input-group">
            <sl-input name="country" type="text" placeholder="Package country" required></sl-input>
          </div>
          <div class="input-group">
            <sl-input name="region" type="text" placeholder="Package map region" required></sl-input>
          </div>
          <div class="input-group">
            <sl-input name="region" type="text" placeholder="Package map region" required></sl-input>
          </div>

          <div class="input-group" style="margin-bottom: 2em;">
            <label>Trip Type</label><br>
            <sl-radio-group label="Select length" no-fieldset>
              <sl-radio name="type" value="s">Best Sellers</sl-radio>
              <sl-radio name="type" value="m">Top Trips</sl-radio>
              <sl-radio name="type" value="l">Specials</sl-radio>
            </sl-radio-group>
          </div>

          <div class="input-group">
            <sl-input name="depatureLocation" type="text" placeholder="Depature Location" required></sl-input>
          </div>
          <div class="input-group">
            <sl-input name="endLocation" type="text" placeholder="End Location" required></sl-input>
          </div>

          <div class="input-group">              
            <sl-input name="price" type="text" placeholder="Price" required>
              <span slot="prefix">$</span>
            </sl-input>
          </div>

          <div class="input-group" style="margin-bottom: 2em;">
            <label>Image</label><br>
            <input type="file" name="image" />              
          </div>

          <sl-button type="primary" class="submit-btn" submit>Add Package</sl-button>
        </sl-form>        

      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new newPackageView()