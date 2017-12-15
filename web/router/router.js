import App from '../App'
import login from '../pages/login/login'
//const login = r => require.ensure([],()=>r(require('../pages/login/login')),"login")




export default [{
	path:'/',
	component:App,
	children:[
        {
        	path:'',
            redirect:'/login'
        },
        {
        	path:'/login',
        	component:login
        }

	]
}]
