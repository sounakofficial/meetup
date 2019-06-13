import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Meetups from './components/Meetup/Meetups'
import CreateMeetup from './components/Meetup/CreateMeetup'
import Profile from './components/User/Profile'
import Signin from './components/User/Signin'
import Signup from './components/User/Signup'
import Meetup from './components/Meetup/Meetup'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'App',
      component: Home
    },
    {
      path: '/Meetup',
      name: 'Meetup',
      component: Meetups
    },
    {
      path: '/CreateMeetup',
      name: 'CreateMeetup',
      component: CreateMeetup
    },
    {
      path: '/CreateMeetup/:id',
      name: 'CreateNew',
      props: true,
      component: Meetup
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/Signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/Signup',
      name: 'Signup',
      component: Signup
    }
  ]
})
