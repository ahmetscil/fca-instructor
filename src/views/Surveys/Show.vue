<template>
  <div>
    <Header></Header>
    <div class="container-fluid mt-5">
      <div class="row">
        <div class="dataList dataList02 col-12">
          <div class="miniLoader" id="surveysLoader" style="display: none"></div>
          <SurveyView :datas="getSurvey.surveyJS"></SurveyView>
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
    ...mapState(["apiLink", "getSurvey", "themeClasses", "getCourse"])
  },
  methods: {
    beforeOpen(event) {},
    getSurveys(srv) {
      $("#surveysLoader").show();
      this.$store.dispatch("getSurvey", { ...this.survey, id: srv });
    }
  }
};
</script>
<style lang="sass" scoped>
  .surveyCreatorContainer
    color: #fff !important
</style>