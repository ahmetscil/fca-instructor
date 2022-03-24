import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import bootstrap from 'bootstrap'
import jQuery from 'jquery'
import Toasted from 'vue-toasted'
import store from './store'
import Vuelidate from 'vuelidate'
import vSelect from 'vue-select'
import VModal from 'vue-js-modal'
import VueGoodTablePlugin from 'vue-good-table'
import PrettyCheckbox from 'pretty-checkbox-vue'
import { TimelineLite, TweenMax, Back, Expo } from 'gsap'
import vueVimeoPlayer from 'vue-vimeo-player'
import VuejsDialog from 'vuejs-dialog'
import * as Survey from "survey-jquery";
import VueApexCharts from 'vue-apexcharts'

import Navigation from './components/Navigation'
import Activities from './components/Activities'
import Breadcrumb from './components/Breadcrumb'
import Header from './components/Header'
import Upload from './components/Upload'
import FileSelect from './components/SelectFile'
import SurveyView from './components/Survey'

import InstructorIndex from './views/Courses/Index'
import SelectSurvey from './views/Courses/SelectSurvey'
import LiveBroadcast from './views/Courses/LiveBroadcast'
import SaveBroadcast from './views/Courses/SaveBroadcast'
import InstructorUpdate from './views/Courses/Update'
import InstructorShow from './views/Courses/Show'


import LecturesIndex from './views/Lectures/Index'
import LecturesCreate from './views/Lectures/Create'
import LecturesUpdate from './views/Lectures/Update'
import LecturesShow from './views/Lectures/Show'

import LiveStudents from './views/Live/Students'
import LiveGroups from './views/Live/Groups'
import SendMessage from './views/Live/SendMessage'

Vue.component('Upload', Upload)
Vue.component('Navigation', Navigation)
Vue.component('Activities', Activities)
Vue.component('Breadcrumb', Breadcrumb)
Vue.component('Header', Header)
Vue.component('FileSelect', FileSelect)

Vue.component('Survey', Survey)
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

Vue.component('InstructorIndex', InstructorIndex)
Vue.component('SelectSurvey', SelectSurvey)
Vue.component('LiveBroadcast', LiveBroadcast)
Vue.component('SaveBroadcast', SaveBroadcast)
Vue.component('InstructorUpdate', InstructorUpdate)
Vue.component('InstructorShow', InstructorShow)

Vue.component('LecturesIndex', LecturesIndex)
Vue.component('LecturesCreate', LecturesCreate)
Vue.component('LecturesUpdate', LecturesUpdate)
Vue.component('LecturesShow', LecturesShow)
Vue.component('SendMessage', SendMessage)

Vue.component('LiveStudents', LiveStudents)
Vue.component('LiveGroups', LiveGroups)

Vue.component('SurveyView', SurveyView)

Vue.use(Toasted)
Vue.use(Vuelidate)
Vue.use(VModal)
Vue.use(VueGoodTablePlugin)
Vue.component('v-select', vSelect)
Vue.use(PrettyCheckbox)
Vue.use(vueVimeoPlayer)
Vue.use(VuejsDialog)

global.TimelineLite = TimelineLite
global.TweenMax = TweenMax
global.Back = Back
global.Expo = Expo
global.jQuery = jQuery
global.$ = jQuery
global.bootstrap = bootstrap

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
