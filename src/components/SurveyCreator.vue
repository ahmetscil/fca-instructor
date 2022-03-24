<template>
  <div>
    <div class="miniLoader" id="surveyCreateLoader" style="display: none"></div>
    <div id="surveyCreatorContainer"></div>
  </div>
</template>

<script>
import axios from 'axios'

import * as SurveyCreator from "survey-creator";
import "survey-creator/survey-creator.css";
import * as SurveyKo from "survey-knockout";
import * as widgets from "surveyjs-widgets";
import { init as customWidget } from "../customwidget";
import "inputmask/dist/inputmask/phone-codes/phone.js";
customWidget(SurveyKo);
export default {
  name: "survey-creator",
  data() {
    return {
      sendSurvey: '',
      srv: ''
    };
  },

  mounted() {
    let _this = this
    let options = { showEmbededSurveyTab: false };
    this.surveyCreator = new SurveyCreator.SurveyCreator(
      "surveyCreatorContainer",
      options
    );
    this.surveyCreator.saveSurveyFunc = function () {
      _this.createSurvey(JSON.parse(this.text))
    }
  },
  methods: {
    createSurvey(hoppala) {
      $('#surveyCreateLoader').show()
      let sendSurveyJSON = {
        access_token: localStorage.getItem("access_token"),
        course_ID: this.$route.params.course,
        description: hoppala.description,
        topic: hoppala.title,
        surveyJS: hoppala
      }
      
      axios.defaults.headers.common["Authorization"] = localStorage.getItem("id_token");
      axios.put("https://iuzh9u0mo7.execute-api.eu-west-1.amazonaws.com/prod/create/surveyjs", sendSurveyJSON)
      .then(response => {
      $('#surveyCreateLoader').hide()

        let ret = response.data.status;
        switch (ret) {
          case 200:
            this.$toasted.show("Survey Created", {
              type: "success",
              duration: 2500,
              keepOnHover: true,
              theme: "bubble"
            });
            this.$router.push({name: 'Surveys', params: {url: this.$route.params.course}})
            break;
          default:
            this.$toasted.show(ret, {
              type: "error",
              duration: 2500,
              keepOnHover: true,
              theme: "bubble"
            });
            break;
        }
      })

    }
  },
  watch: {
    srv: function(v) {
      console.log(v)
    },
    sendSurvey: function (val) {
      console.log(val)
      console.log(this.sendSurvey)
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>