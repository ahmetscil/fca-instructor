<template>
  <div>
    <Header></Header>
    <div class="container mt-5">
      <div class="row" v-for="(department, idx) in instructorHomePage.user_courses" :key="idx">
        <div class="dataList dataList02 col-12" v-for="(course, idy) in department" :key="idy">
          <div class="dataList collapsetable row p-2 mt-3" :id="'table' + idy">
            <div class="miniLoader" id="coursesLoader" style="display: none"></div>
            <div class="col-6 col-sm-6 col-md-6 col-lg-8 col-xl-8">
              <h3>{{idx}}</h3>
              <h3>{{course.course_name}}</h3>
            </div>
            <div class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 text-right">
              <button @click="collapseThis('div'+idy)" type="button" class="mr-1 btn btn-warning btn-sm"><i class="fas fa-plus-square"></i></button>
              <router-link :to="{name: 'Surveys', params: {url: course.course_ID}}" tag="a" class="btn btn-warning btn-sm float-right"><i class="far fa-eye"></i> SHOW SURVEYS</router-link>
            </div>
            <div class="collapseInner col-12" :id="'div' + idy">
              <template v-if="course.lectures.length >= 1">
                <div class="dataTable px-2" v-for="(lecture, idz) in course.lectures" :key="idz">
                  <div class="clearfix">
                    <div class="operations d-none">
                      <i class="far fa-plus-square" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                      <div class="dropdown-menu dropdown-menu-right">
                        <button @click="createModal('LiveBroadcast', lecture.lecture_ID)" class="dropdown-item" type="button">New Live Video</button>
                        <div class="dropdown-divider"></div>
                        <button @click="createModal('SaveBroadcast', lecture.lecture_ID)" class="dropdown-item" type="button">Add Video</button>
                        <button @click="createModal('SelectSurvey', lecture.lecture_ID)" class="dropdown-item" type="button">Add Survey</button>
                      </div>
                    </div>
                    <router-link :to="{name: 'ShowLecture', params: {course: course.course_ID, url: lecture.lecture_ID}}">
                      <h5>{{lecture.lecture_title}}</h5>
                    </router-link>
                  </div>
                </div>
              </template>
              <div class="notFound" v-else><h2>LECTURE NOT FOUND</h2></div>
              <div class="text-center w-100">
                <button @click="createModal('instructorCreateLecture',course.course_ID)" type="button" class="w-25 mt-3 mx-auto btn btn-warning">NEW LECTURE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <modal name="instructorCreateLecture" @before-open="beforeOpen" :resizable="true" :minHeight="500" :adaptive="true">
        <LecturesCreate :courseID="courseID"></LecturesCreate>
      </modal>
    </div>
  </div>
</template>
<style lang="sass">
  .collapsetable
    position: relative
    .collapseInner
      display: none
</style>
<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    data: () => ({
      search: '',
      courseID: '',
      updateID: null
    }),
    mounted() {
      this.instructorHomepage()
    },
    computed: {
      ...mapState(['apiLink','instructorHomePage','themeClasses']),
    },
    methods: {
      collapseThis(e) {
        $('.collapseInner').hide()
        $('#'+e).show()
      },
      createModal(where, id) {
        this.$modal.show(where)
        this.courseID = id
      },
      beforeOpen (event) {
      },
      instructorHomepage() {
        $('#coursesLoader').show()
        this.$store.dispatch('showInstructorHomePage')
      }
    }
  }
</script>
