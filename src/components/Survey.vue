<template>
  <div id="surveyCreatorContainer">
    <survey :survey="getSurveyData"></survey>
  </div>
</template>

<script>
import * as SurveyVue from "survey-vue";
var Survey = SurveyVue.Survey;
Survey.cssType = "bootstrap";
import * as widgets from "surveyjs-widgets";
import "inputmask/dist/inputmask/phone-codes/phone.js";
import { init as customWidget } from "../customwidget";
widgets.icheck(SurveyVue);
widgets.select2(SurveyVue);
widgets.inputmask(SurveyVue);
widgets.jquerybarrating(SurveyVue);
// widgets.jqueryuidatepicker(SurveyVue);
widgets.nouislider(SurveyVue);
widgets.select2tagbox(SurveyVue);
widgets.signaturepad(SurveyVue);
widgets.sortablejs(SurveyVue);
widgets.ckeditor(SurveyVue);
widgets.autocomplete(SurveyVue);
widgets.bootstrapslider(SurveyVue);
customWidget(SurveyVue);
SurveyVue.Serializer.addProperty("question", "tag:number");

let model;

export default {
  name: "app",
  components: {
    Survey
  },
  props: ["datas"],
  data() {
    return {
      survey: model
    };
  },
  computed: {
    getSurveyData: function() {
      model = new SurveyVue.Model(this.datas)
      model.onComplete.add(function (result) {
        console.log(result.data)
      });
      return model
    }
  }
};
</script>

<style scoped>
</style>