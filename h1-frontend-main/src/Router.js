// import views
import homeView from './views/pages/home'
import fourOFourView from './views/pages/404'
import signinView from './views/pages/signin'
import signupView from './views/pages/signup'
import profileView from './views/pages/profile'
import editProfileView from './views/pages/editProfile'
import guideView from './views/pages/guide'
import favouritePackagesView from './views/pages/favouritePackages'
import packagesView from './views/pages/packages'
import newPackageView from './views/pages/newPackage'
import userDashboardView from './views/pages/userDashboard'
import ourStoryView from './views/pages/ourStory'
import faqsView from './views/pages/faqs'
import testimoniesView from './views/pages/testimonies'
import travelTipsView from './views/pages/travelTips'
import findusView from './views/pages/findus'
import adminView from './views/pages/admin'


// define routes
const routes = {
	'/': homeView,	
	'404' : fourOFourView,
	'/signin': signinView,
	'/signup': signupView,
	'/profile': profileView,
	'/editProfile': editProfileView,
	'/guide': guideView,
	'/favouritePackages': favouritePackagesView,	
	'/packages': packagesView,
	'/newPackage': newPackageView,
	'/userDashboard': userDashboardView,
	'/ourStory': ourStoryView,	
	'/faqs': faqsView,
	'/testimonies': testimoniesView,
	'/travelTips': travelTipsView,		
	'/findus': findusView,
	'/admin': adminView,
	
}

class Router {
	constructor(){
		this.routes = routes
	}
	
	init(){
		// initial call
		this.route(window.location.pathname)

		// on back/forward
		window.addEventListener('popstate', () => {
			this.route(window.location.pathname)
		})
	}
	
	route(fullPathname){
		// extract path without params
		const pathname = fullPathname.split('?')[0]
		const route = this.routes[pathname]
		
		if(route){
			// if route exists, run init() of the view
			this.routes[window.location.pathname].init()
		}else{			
			// show 404 view instead
			this.routes['404'].init()			
		}
	}

	gotoRoute(pathname){
		window.history.pushState({}, pathname, window.location.origin + pathname);
		this.route(pathname)
	}	
}

// create appRouter instance and export
const AppRouter = new Router()
export default AppRouter


// programmatically load any route
export function gotoRoute(pathname){
	AppRouter.gotoRoute(pathname)
}


// allows anchor <a> links to load routes
export function anchorRoute(e){
	e.preventDefault()	
	const pathname = e.target.closest('a').pathname
	AppRouter.gotoRoute(pathname)
}
