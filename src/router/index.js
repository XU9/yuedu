import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import logining from '@/components/logining'
import allTitle from '@/components/alltitle'
import allTag from '@/components/allTag'
import myTag from '@/components/myTag'
import likeTag from '@/components/likeTag'
import pick from '@/components/pick'
import pick2 from '@/components/pick2'
import pick3 from '@/components/pick3'
import theme from '@/components/theme'
import textNew from '@/components/textnew'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path:'/logining',
    	name:'logining',
    	component:logining
    },
    {
    	path:'/allTit',
    	component:allTitle,
    	children:[
    	{
        path:"/",
        component:allTag
        // redirect:'/alltltle/alltag'
   		},
    	{
	    	path:"/alltltle/alltag",
	    	name:'allTag',
	    	component:allTag
   		},
    	{
	    	path:"/alltltle/mytag",
	    	name:'myTag',
	    	component:myTag
   		}
 
    ]
    },
    {
    	path:"/alltltle/liketag",
	    	component:likeTag,
        children:[
          {
            path:'/',
            redirect:'/liketag/pick'
          },
          {
            path:'/liketag/pick',
            name:'pick',
            component:pick
          },
          {
            path:'/liketag/pick2',
            name:'pick2',
            component:pick2
          },
          {
            path:'/liketag/pick3',
            name:'pick3',
            component:pick3
          }
        ]
    },
    {
        path:'/theme/:classify/:newTitle',
        name:'theme',
        component:theme
    },
    {
        path:'/textnew/:textTitle/:textId',
        name:'textNew',
        component:textNew
    }
  ]
})
