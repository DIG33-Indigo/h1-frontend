import Router from './Router'
import Auth from './Auth'
import Toast from './Toast'

const authRequired = ["/admin", "/editprofile", "/userDashboard"]

class App {
  constructor(){
    this.name = "Topdeck"
    this.version = "1.0.0"
    this.apiBase = 'https://topdeck-indigo.herokuapp.com'
    this.rootEl = document.getElementById("root")
    this.version = "1.0.0"
  }
      // https://topdeck-indigo.herokuapp.com
      // http://localhost:4000

  init() { 
    console.log("App.init")
    
    // Toast init
    Toast.init()   
    
    Auth.check(() => {
      // authenticated! init Router ---- comment  
      Router.init()
    })  

   
  }
}



export default new App()