<template>
  <div>
    <Header></Header>
    <div class="container mt-5">
      <div class="row">
        <div class="dataList dataList02 col-12">
          <div class="miniLoader" id="lectureLoader"></div>
          <div class="dataList row p-2 pb-0 mt-3 mb-0">
            <div class="col-sm-10">
              <h3>{{getLecture.course_name}}</h3>
              <h3>{{getLecture.lecture_title}}</h3>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a class="nav-item nav-link active" id="items" data-toggle="tab" href="#item" role="tab" aria-controls="item" aria-selected="false">Items</a>
                <a class="nav-item nav-link" id="students" data-toggle="tab" href="#student" role="tab" aria-controls="student" aria-selected="false">Students</a>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="operations text-right">
                <button data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" type="button" class="mr-1 btn btn-warning btn-sm"><i class="fas fa-plus-square"></i></button>
                <div class="dropdown-menu dropdown-menu-right">
                  <button @click="createModal('LiveBroadcast', getLecture.lecture_ID)" class="dropdown-item" type="button">Generate New Broadcast</button>
                  <div class="dropdown-divider"></div>
                  <button @click="createModal('SaveBroadcast', getLecture.lecture_ID)" class="dropdown-item" type="button">Set New Video</button>
                  <button @click="createModal('SelectSurvey', getLecture.lecture_ID)" class="dropdown-item" type="button">Select Survey</button>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane show active fade" id="item" role="tabpanel" aria-labelledby="items">
              <div class="row" v-if="getLecture.data != ''">
                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12" v-for="(item,idx) in getLectureData" :key="'i'+idx">
                  <div class="dataBox px-2">
                    <div v-if="item.is_live_item == true" class="liveItem"></div>
                    <div class="dataImg">
                      <div class="operations">
                        <i class="fas fa-ellipsis-v" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                        <div class="dropdown-menu dropdown-menu-right">
                          <div class="dropdown-divider"></div>
                          <button class="dropdown-item" type="button"><i class="fas fa-trash-alt"></i> Delete</button>
                        </div>
                      </div>
                      <router-link v-if="item.is_live_item == true" :to="{name: 'Live', params: {course: getLecture.course_ID, url: item.item_ID}}">
                        <img :src="'https://img.youtube.com/vi/' + item.video_url + '/maxresdefault.jpg'">
                      </router-link>
                      <router-link v-else :to="{name: 'ShowItems', params: {itemurl: item.item_ID}}">
                        <img :src="'https://img.youtube.com/vi/' + item.video_url + '/maxresdefault.jpg'">
                      </router-link>
                    </div>
                    <router-link :to="{name: 'ShowItems', params: {itemurl: item.item_ID}}">
                      <h5 class="text-center">{{item.item_name}}</h5>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="row" v-else>
                <h3>No item in this lecture</h3>
                <h4>Please create new item</h4>
              </div>
            </div>
            <div class="tab-pane fade" id="student" role="tabpanel" aria-labelledby="students">
              <div class="col-sm-8 col-md-10 col-lg-10 pl-0">
                <h3>{{getLecture.course_name}} Students</h3>
                <div class="dataSearch">
                  <input type="text" class="form-control" v-model="search" placeholder="Search">
                </div>
              </div>
              <div class="clearfix"></div>
              <div class="dataTable col-12" v-for="student in filteredList" :key="'s'+student.user_ID">
                <div class="clearfix">
                  <h5>{{student.user_name}}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <modal name="LiveBroadcast" :resizable="true" :minHeight="500" :adaptive="true">
        <LiveBroadcast :lectureID="lectureID"></LiveBroadcast>
      </modal>
      <modal name="SelectSurvey" :resizable="true" :minHeight="500" :adaptive="true">
        <SelectSurvey :lectureID="lectureID"></SelectSurvey>
      </modal>
      <modal name="SaveBroadcast" @before-open="beforeOpen" :resizable="true" :minHeight="500" :adaptive="true">
        <SaveBroadcast :lectureID="lectureID"></SaveBroadcast>
      </modal>
    </div>
  </div>
</template>
<script>
  import { mapState, mapMutations } from 'vuex'
  import axios from 'axios'
  export default {
    data: () => ({
      search: '',
      lecture_ID: null,
      lectureID: '',
      videoUrl: ''
    }),
    created() {
      this.lecture_ID = `${this.$route.params.url}`
      this.lectureData(this.lecture_ID)
      this.returnNormal()
      this.courseStudents()
    },
    mounted() {
      this.lecture_ID = `${this.$route.params.url}`
    },
    computed: {
      ...mapState(['themeClasses','getLecture','getLectureData','allStudents']),
      filteredList() {
        return this.allStudents.filter(post => {
          return post.user_name.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    },
    methods: {
      ...mapMutations(['returnNormal']),
      lectureData(lect) {
        this.$store.dispatch('getLecture', { ...this.selected, id: lect })
      },
      createModal(where, id) {
        this.$modal.show(where)
        this.lectureID = id
      },
      beforeOpen (event) {
      },
      courseStudents() {
        this.$store.dispatch('loadAllCourseStudents', { ...this.selectedStudentInfo , course: `${this.$route.params.course}`, type: 'student'})
      },
      instructorHomepage() {
        this.$store.dispatch('showInstructorHomePage')
      }
    }
  }
</script>
<style lang="sass">
  .operations
    .dropdown-menu
      background: rgba(0,0,0,.9)
      .dropdown-item
        color: #cacaca
        font-size: 12px
        padding: .25rem 0.5rem
      .dropdown-divider
        border-top: 1px #ffffff60 solid
      .dataImg
        & img
          transition: 0.3s
          opacity: 1
</style>