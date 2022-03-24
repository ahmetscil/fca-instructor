<template>
  <div>
    <Header></Header>
    <div class="container mt-5">
      <div class="row">
        <div class="dataList dataList02 col-12">
          <div class="dataList collapsetable row p-2 mt-3" :id="'table'">
            <div class="miniLoader" id="surveysLoader" style="display: none"></div>
            <div class="col-6 col-sm-6 col-md-6 col-lg-8 col-xl-8">
              <h3>{{getCourse.course_name}}</h3>
            </div>
            <div class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 text-right">
              <router-link :to="{name: 'CreateSurvey', params: {course: getCourse.course_ID}}" tag="a" class="btn btn-warning btn-sm float-right">
                <i class="far fa-plus-square"></i> NEW SURVEY
              </router-link>
            </div>
            <div class="collapseInner d-block col-12" :id="'div'">
              <template>
                <div class="dataTable px-2" v-for="(survey, idx) in allSurveys" :key="idx">
                  <div class="clearfix">
                    <div class="operations d-none">
                      <i class="far fa-plus-square" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                      <div class="dropdown-menu dropdown-menu-right">
                        <button @click="createModal('LiveBroadcast', lecture.lecture_ID)" class="dropdown-item" type="button">New Live Video</button>
                        <div class="dropdown-divider"></div>
                      </div>
                    </div>
                    <router-link :to="{name: 'ShowSurvey', params: {url: survey.survey_ID}}">
                      <h5>{{survey.topic}}</h5>
                    </router-link>
                  </div>
                </div>
              </template>
              <!-- <div class="notFound" v-else><h2>LECTURE NOT FOUND</h2></div> -->
            </div>
          </div>
        </div>
      </div>
    </div>



  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data: () => ({
    search: "",
    lectureID: "",
    updateID: null
  }),
  mounted() {
    this.getSurveys(this.$route.params.url);
  },
  computed: {
    ...mapState(["apiLink", "allSurveys", "themeClasses", "getCourse"])
  },
  methods: {
    createModal(where, id) {
      this.$modal.show(where);
      this.lectureID = id;
    },
    beforeOpen(event) {},
    getSurveys(srv) {
      $("#surveysLoader").show();
      this.$store.dispatch("getCourse", { ...this.selected, id: srv });
      this.$store.dispatch("getSurveys", { ...this.selected, id: srv });
    }
  }
};
</script>
