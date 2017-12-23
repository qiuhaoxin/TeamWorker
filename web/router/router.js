import App from '../App'
// import login from '../pages/login/login'
// import register from '../pages/register/register'

const login = r => require.ensure([],()=>r(require('../pages/login/login')),"login")
const register = r =>require.ensure([],()=>r(require('../pages/register/register')),"register")
const forgot =r=>require.ensure([],()=>r(require('../pages/forgot/forgot')),"forgot")
const mainPage= r => require.ensure([],()=>r(require("../pages/main/mainPage")),"mainPage")
const myZoom=r => require.ensure([],()=>r(require("../pages/main/myZoom/myZoom")),"myZoom")
const product= r=>require.ensure([],()=>r(require("../pages/main/product/product")),"product")
const requirement =r=>require.ensure([],()=>r(require("../pages/main/requirement/requirement")),"requirement")
const project = r=>require.ensure([],()=>r(require("../pages/main/project/project")),"project")
const task=r=>require.ensure([],()=>r(require("../pages/main/task/task")),"task")
const Test=r=>require.ensure([],()=>r(require("../pages/main/test/test")),"Test")
const weekPlan=r=> require.ensure([],()=>r(require("../pages/main/weekPlan/weekPlan")),"weekPlan")
const support=r=> require.ensure([],()=>r(require("../pages/main/support/support")),"support")
const person=r=>require.ensure([],()=>r(require("../pages/person/person")),"person")


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
        },
        {
            path:'/person',
            component:person
        },
        {
            path:'/mainPage',
            component:mainPage,
            children:[
                {
                    path:'myZoom',
                    component:myZoom
                },
                {
                    path:'product',
                    component:product
                },
                {
                    path:'requirement',
                    component:requirement
                },
                {
                    path:'project',
                    component:project
                },
                {
                    path:'task',
                    component:task
                },
                {
                    path:'weekPlan',
                    component:weekPlan
                },
                {
                    path:'Test',
                    component:Test
                },
                {
                    path:'support',
                    component:support
                }
            ]
        }

	]
}]
