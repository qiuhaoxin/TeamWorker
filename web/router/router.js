import App from '../App'
// import login from '../pages/login/login'
// import register from '../pages/register/register'

const login = r => require.ensure([],()=>r(require('../pages/login/login')),"login")
const register = r =>require.ensure([],()=>r(require('../pages/register/register')),"register")
const forgot =r=>require.ensure([],()=>r(require('../pages/forgot/forgot')),"forgot")
const mainPage= r => require.ensure([],()=>r(require("../pages/main/mainPage")),"mainPage")


export default [{
	path:'/',
	component:App,
	children:[
        {
        	path:'',
            redirect:'/login'
        },{
        	path:'/login',
        	component:login
        },{
            path:'/register',
            component:register
        },{
            path:'/forgot',
            component:forgot
        },{
            path:'/mainPage',
            component:mainPage
        }

	]
}]
