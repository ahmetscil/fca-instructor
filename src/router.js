import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
import MyPage from './views/MyPage'
import Auth from './auth/Auth'
import Upload from './components/Upload'
import ForgotPassword from './auth/ForgotPassword'
import ChangePassword from './auth/ChangePassword'
import ChangeTempPassword from './auth/ChangeTempPassword'
import Settings from './views/Settings'
import ShowLecture from './views/Lectures/Show'
import ShowItems from './views/Items/Show'
import Surveys from './views/Surveys/Index'
import CreateSurvey from './views/Surveys/Create'
import ShowSurvey from './views/Surveys/Show'
import Live from './views/Live/Index'
import store from './store'
Vue.use(VueRouter)
export const router = new VueRouter({
  routes: [{
      path: '/',
      component: Home,
      name: 'Home'
    },
    {
      path: '/auth',
      component: Auth,
      name: 'Auth'
    },
    {
      path: '/upload',
      component: Upload,
      name: 'Upload'
    },
    {
      path: '/ForgotPassword',
      component: ForgotPassword,
      name: 'ForgotPassword'
    },
    {
      path: '/ChangePassword',
      component: ChangePassword,
      name: 'ChangePassword'
    },
    {
      path: '/ChangeTempPassword',
      component: ChangeTempPassword,
      name: 'ChangeTempPassword'
    },
    {
      path: '/Live/:course/:url',
      component: Live,
      name: 'Live',
      beforeEnter(to, from, next) {
        if (store.getters.isAuthenticated) {
          next()
        } else {
          next('/auth')
        }
      }
    },
    {
      path: '/Settings',
      component: Settings,
      name: 'Settings',
      beforeEnter(to, from, next) {
        if (store.getters.isAuthenticated) {
          next()
        } else {
          next('/auth')
        }
      }
    },
    {
      path: '/MyPage',
      component: MyPage,
      name: 'MyPage',
      beforeEnter(to, from, next) {
        if (store.getters.isAuthenticated) {
          next()
        } else {
          next('/auth')
        }
      }
    },
    {
      path: '/Surveys/course/:url',
      component: Surveys,
      name: 'Surveys',
      beforeEnter(to, from, next) {
        if (store.getters.isAuthenticated) {
          next()
        } else {
          next('/auth')
        }
      }
    },
    {
      path: '/Surveys/Create/:course',
      component: CreateSurvey,
      name: 'CreateSurvey',
      beforeEnter(to, from, next) {
        if (store.getters.isAuthenticated) {
          next()
        } else {
          next('/auth')
        }
      }
    },
    {
      path: '/Surveys/:url',
      component: ShowSurvey,
      name: 'ShowSurvey',
      beforeEnter(to, from, next) {
        if (store.getters.isAuthenticated) {
          next()
        } else {
          next('/auth')
        }
      }
    },
    {
      path: '/Items/:itemurl',
      component: ShowItems,
      name: 'ShowItems',
      beforeEnter(to, from, next) {
        if (store.getters.isAuthenticated) {
          next()
        } else {
          next('/auth')
        }
      }
    },
    {
      path: '/Lectures/:course/:url',
      component: ShowLecture,
      name: 'ShowLecture',
      beforeEnter(to, from, next) {
        if (store.getters.isAuthenticated) {
          next()
        } else {
          next('/auth')
        }
      }
    }
  ],
  mode: 'history'
})