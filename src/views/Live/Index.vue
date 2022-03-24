 <template>
  <div>
    <Header></Header>
    <div class="container-fluid mt-5 p-0">
      <div class="row">
        <div class="col-2">
          <ul class="nav nav-pills liveSGTabs" id="pills-tab" role="tablist">
            <li class="nav-item"><a class="nav-link active" id="Students-tab" data-toggle="pill" href="#Students" role="tab" aria-controls="Students" aria-selected="true">Students</a></li>
            <li class="nav-item"><a class="nav-link" id="Groups-tab" data-toggle="pill" href="#Groups" role="tab" aria-controls="Groups" aria-selected="false">Groups</a></li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="Students" role="tabpanel" aria-labelledby="Students-tab">
              <ul class="studentsList" id="studentsList">
                <li v-for="(u,idx) in onlineUsersInLecture" :key="idx" :id="'user'+u.user_ID" v-if="u.user_type != 'instructor'">
                  <div class="dropdown">
                    <p id="dLabel1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="fas fa-ellipsis-v"></i>
                      {{u.user_name}} {{u.user_ID}}
                    </p>
                    <ul class="dropdown-menu shadow" aria-labelledby="dLabel1">
                      <button type="button" class="dropdown-item">Join to Group</button>
                      <button type="button" class="dropdown-item" @click="sendMessageModal(u.user_ID)">Send Message</button>
                      <button type="button" class="dropdown-item">Private Room</button>
                    </ul>
                  </div>
                  <div class="sendFeedback">
                    <span id="sfbPositive" class="sfb sfbPositive">
                      <i class="far fa-grin"></i>
                    </span>
                    <span id="sfbNegative" class="sfb sfbNegative">
                      <i class="far fa-frown"></i>
                    </span>
                    <span id="sfbUnderstood" class="sfb sfbUnderstood">
                      <i class="far fa-laugh-wink"></i>
                    </span>
                    <span id="sfbNotUnderstood" class="sfb sfbNotUnderstood">
                      <i class="far fa-meh-rolling-eyes"></i>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="tab-pane fade" id="Groups" role="tabpanel" aria-labelledby="Groups-tab">
              <ul class="groupsList">
                <li v-for="idx in 30" :key="idx">
                  <div class="dropdown">
                    <p id="dLabel2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="fas fa-ellipsis-v"></i>
                      Group {{idx}}
                    </p>
                    <ul class="dropdown-menu shadow" aria-labelledby="dLabel2">
                      <a href="#" class="dropdown-item">Join to Group</a>
                      <a href="#" class="dropdown-item">Send Message</a>
                      <a href="#" class="dropdown-item">Private Room</a>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-7">
          <div class="row">
            <div class="col-9">
              <div class="videoOperations" v-if="btnstartPart" @click="startPart()">
                <i class="fas fa-play"></i>Start Part
              </div>
              <div class="videoOperations" v-if="btnstopPart" @click="stopPart()">
                <i class="fas fa-stop"></i>Stop Part
              </div>
              <div class="videoOperations" v-if="btnstartFlip" @click="startFlip(3)">
                <i class="fas fa-users"></i>Start Groups
              </div>
              <div class="videoOperations" v-if="btnendFlip" @click="endFlip()">
                <i class="fas fa-users"></i>End Groups
              </div>
              <div class="videoOperations" v-if="btnstartSurvey" @click="startSurvey()">
                <i class="fas fa-list"></i>Start Survey
              </div>
              <div class="videoOperations" v-if="btnfinishSurvey" @click="finishSurvey()">
                <i class="fas fa-stop"></i>Finish Survey
              </div>
              <div class="videoOperations" v-if="btnpausePart" @click="pausePart()">
                <i class="fas fa-pause"></i>Pause Part
              </div>
              <div class="videoOperations" v-if="btnpauseEndPart" @click="pauseEndPart()">
                <i class="fas fa-play"></i>Continue Part
              </div>
              <div class="videoOperations" v-if="btnsendAlert" @click="sendAlert()">
                <i class="fas fa-bell"></i>Send Alert
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-9">
              <div v-if="showVideo" class="videoSmall">
                  <iframe :src="vimeoUrl" width="100%" height="400" frameborder="0" title="{video_title}" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
              </div>
              <div v-if="isshowSurvey" class="surveyBox">
                <SurveyView :datas="getSurvey.surveyJS"></SurveyView>
              </div>
            </div>
            <div class="col-3">
              <div class="surveysBox">
                <div class="miniLoader" style="display: none;" id="surveysLoader"></div>
                <h4>Surveys</h4>
                <template v-if="allSurveys.length <= 0">Survey not found</template>
                <ul v-else>
                  <li v-for="(sr,idx) in allSurveys" :key="idx">
                    <span @click="showSurvey(sr.survey_ID)">{{sr.topic}}</span> <i @click="getSurveyResults(sr.survey_ID)" class="fa fa-eye float-right"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-12">
              <div class="resultListBox">
                <div class="row resultListBox--header">
                  <div v-for="(question,i) in databas" :key="'question'+i" class="col-12">
                    <!-- <apexchart v-once type="pie" width="380" :options="chartOptions" :series="series"></apexchart> -->
                    <h4>{{question.ques}}</h4>
                    <ul>
                      <li v-for="(res,x) in question.rslt" :key="'res'+x">{{res}}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3 videoActionsArea">
          <div class="videoChatBox">
            <ul id="messages">
              <!-- gelen mesaj tek tek geliyor. çoğaltmak lazım. -->
              <li v-for="(l,i) in liveMessages" :key="i">
                <h6>{{l.sender_info.user_email}} #{{i}}</h6>
                <div class="clearfix"></div>
                <p>{{l.text}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <modal name="sendMessageToStudent" :resizable="true" :minHeight="500" :adaptive="true">
        <SendMessage :student="studentID"></SendMessage>
      </modal>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  data: () => ({
    databas: [],
    isshowSurvey: false,
    showVideo: true,
    selectedSurvey: '',
    btnsendAlert: true,
    btnstartPart: true,
    btnstopPart: false,
    btnpausePart: false,
    btnpauseEndPart: false,
    btnstartFlip: false,
    btnendFlip: false,
    
    btnstartSurvey: false,
    btnfinishSurvey: false,
    onlineUsers: [],
    item_ID: "",
    searchedSurvey: false,
    searchSurveyText: "",
    studentID: "",

    series: [44, 55, 13, 43, 22],
    chartOptions: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
  }),
  mounted() {
    this.goToLivePage();
    this.item_ID = `${this.$route.params.url}`;
    this.$store.dispatch("getSurveys", { ...this.selected, id: this.$route.params.course });

    this.itemData(this.item_ID);
    this.startManuel();
  },
  created() {
    // this.userInLecture()
  },
  destroyed() {
    // this.$store.dispatch("goodbySocket", {...this.lecture, lecture: this.$route.params.url});
    this.stopPart();
  },
  computed: {
    ...mapState(["getItems", "searchedSurveys", "allSurveys", "getSurvey", "onlineUsersInLecture", "liveMessages", "vimeoUrl", "surveyRess"]),
    onlineList() {
      return this.onlineUsers;
    }
  },
  methods: {
    ...mapMutations(["goToLivePage"]),
    calcRes(array_elements) {
      array_elements.sort();
      var current = null;
      var cnt = 0;
      for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
          current = array_elements[i];
          cnt = 1;
        } else {
          cnt++;
        }
      }
      return current + ' - ' + cnt
    },
    createResultData () {
      let srv = this.getSurvey
      let ans = this.surveyRess
      let srvres = []
      var usr = []
      srvres.push(srv.surveyJS)
      let question = {
        ques: '',
        rslt: []
      }
      // console.log(srvres)
      let rslt = []
      let ques, objs
      let objres = []
      for (let i = 0; i < srvres.length; i++) {
        for (let x = 0; x < srvres[i].pages.length; x++) {
          for (let y = 0; y < srvres[i].pages[x].elements.length; y++) {
            question.ques = srvres[i].pages[x].elements[y].title
            let mahmut = []
            for (let q = 0; q < ans.length; q++) {
              objs = Object.values(ans[q].responce)
              mahmut.push(objs[y])
            }
            question.rslt = mahmut
            usr.push(question)
            question = {
              ques: '',
              rslt: []
            }
          }
        }
      }
      this.databas = usr
      console.log(this.databas)
    },
    sendMessageModal(id) {
      this.$modal.show("sendMessageToStudent");
      this.studentID = id;
    },
    userInLecture() {
      this.$store.dispatch('startSocket', {...this.user, 
        user_name: localStorage.getItem('userName'),
        user_ID: localStorage.getItem('userID'),
        user_email: localStorage.getItem('userEmail'),
        user_type: localStorage.getItem('user_type'),
        item_in_lecture: parseInt(this.$route.params.url)
      })

    },
    startManuel() {
      this.$store.dispatch('startLesson', {...this.lecture, 
        item_in_lecture_in: parseInt(this.$route.params.url),
        user_name: localStorage.getItem('userName'),
        user_ID: parseInt(localStorage.getItem('userID')),
        user_email: localStorage.getItem('userEmail'),
        user_type: localStorage.getItem('user_type')
      })
    },
    sendAlert() {
      this.$store.dispatch('sendCommand', {...this.getData, to_lecture_item: this.item_ID, command: 20})
    },
    startPart() {
      this.btnsendAlert = true
      this.btnstartPart = false
      this.btnstopPart = true
      this.btnpausePart = true
      this.btnpauseEndPart = false
      this.btnstartFlip = true
      this.btnendFlip = false
      this.btnstartSurvey = false
      this.btnfinishSurvey = false
      
      this.$store.dispatch('sendCommand', {...this.getData, to_lecture_item: this.item_ID, command: 20})
    },
    stopPart() {
      this.btnsendAlert = true
      this.btnstartPart = true
      this.btnstopPart = false
      this.btnpausePart = false
      this.btnpauseEndPart = false
      this.btnstartFlip = false
      this.btnendFlip = false
      this.btnstartSurvey = false
      this.btnfinishSurvey = false

      this.$store.dispatch('sendCommand', {...this.getData, to_lecture_item: this.item_ID, command: 21})
    },
    pausePart(type) {
      this.btnsendAlert = false
      this.btnstartPart = false
      this.btnstopPart = true
      this.btnpausePart = false
      this.btnpauseEndPart = true
      this.btnstartFlip = true
      this.btnendFlip = false
      this.btnstartSurvey = false
      this.btnfinishSurvey = false

      switch (type) {
        case "flip":
          console.log("grup başlatıldı");
          break;
        case "tenefus":
          console.log("tenefüs");
          break;
      }
      this.$store.dispatch('sendCommand', {...this.getData, to_lecture_item: this.item_ID, command: 12})
    },
    pauseEndPart(type) {
      this.btnsendAlert = true
      this.btnstartPart = false
      this.btnstopPart = true
      this.btnpausePart = true
      this.btnpauseEndPart = false
      this.btnstartFlip = true
      this.btnendFlip = false
      this.btnstartSurvey = false
      this.btnfinishSurvey = false

      switch (type) {
        case "flip":
          console.log("grup bitti");
          break;
        case "tenefus":
          console.log("tenefüs bitti");
          break;
      }
      this.$store.dispatch('sendCommand', {...this.getData, to_lecture_item: this.item_ID, command: 13})
    },
    showSurvey(e) {
      this.selectedSurvey = e
      this.btnsendAlert = false
      this.btnstartPart = false
      this.btnstopPart = true
      this.btnpausePart = false
      this.btnpauseEndPart = false
      this.btnstartFlip = true
      this.btnendFlip = false
      this.btnstartSurvey = true
      this.btnfinishSurvey = false
      
      this.isshowSurvey = true
      this.showVideo = false
      this.$store.dispatch("getSurvey", { ...this.survey, id: e });
    },
    startSurvey() {
      let pimid = Math.random().toString().substr(2,6)
      this.btnsendAlert = false
      this.btnstartPart = false
      this.btnstopPart = false
      this.btnpausePart = false
      this.btnpauseEndPart = false
      this.btnstartFlip = false
      this.btnendFlip = false
      this.btnstartSurvey = false
      this.btnfinishSurvey = true
      this.isshowSurvey = true
      this.showVideo = false
      this.$store.dispatch('sendCommand', {
        ...this.getData, 
        to_lecture_item: JSON.parse(this.item_ID), 
        survey_ID: JSON.parse(this.selectedSurvey), 
        pim_id: pimid,
        command: 14})
      localStorage.setItem('pim_id', pimid)
    },
    finishSurvey() {
      this.btnsendAlert = true
      this.btnstartPart = false
      this.btnstopPart = true
      this.btnpausePart = true
      this.btnpauseEndPart = false
      this.btnstartFlip = true
      this.btnendFlip = false
      this.btnstartSurvey = false
      this.btnfinishSurvey = false

      this.isshowSurvey = false
      this.showVideo = true

      this.$store.dispatch('sendCommand', {...this.getData, to_lecture_item: JSON.parse(this.item_ID), survey_ID: JSON.parse(this.selectedSurvey), command: 15})
    },
    startFlip(e) {
      this.btnsendAlert = false
      this.btnstartPart = false
      this.btnstopPart = true
      this.btnpausePart = true
      this.btnpauseEndPart = false
      this.btnstartFlip = false
      this.btnendFlip = true
      this.btnstartSurvey = false
      this.btnfinishSurvey = false

      this.$store.dispatch('sendCommand', {...this.getData, 
      to_lecture_item: parseInt(this.item_ID), command: 10, flipped_prm: e})
    },
    endFlip() {
      this.btnsendAlert = true
      this.btnstartPart = false
      this.btnstopPart = true
      this.btnpausePart = true
      this.btnpauseEndPart = false
      this.btnstartFlip = true
      this.btnendFlip = false
      this.btnstartSurvey = false
      this.btnfinishSurvey = false

      this.$store.dispatch('sendCommand', {...this.getData, to_lecture_item: this.item_ID, command: 11})
    },
    sendMessageInGroup(instructorMessage) {
      this.$store.dispatch('sendGroupMessage', {...this.getmessage, to_lecture_item: this.item_ID, message: instructorMessage})
    },
    searchSurvey() {
      this.$store.dispatch("searchSurveys", {
        ...this.search,
        course: `${this.$route.params.course}`,
        word: this.searchSurveyText
      });
      this.$store.dispatch("getSurveys", { ...this.selected, id: e });
    },
    itemData(itemid) {
      this.$store.dispatch("getItems", {
        ...this.selected,
        id: `${this.$route.params.url}`
      });
    },
    getSurveyResults(e) {
      this.$store.dispatch('getSurveyResult', {...this.data, item_id: this.item_ID, survey_id: e, pim_id: localStorage.getItem('pim_id')})
      this.$store.dispatch('getSurvey', {...this.survey, id: e})
      this.databas = []
      this.createResultData()
    }
  }
};
</script>
<style lang="sass">
  .resultListBox
    background: #00000090
    padding: 10px 30px
    color: #cacaca
    border-radius: 10px
    .resultListBox--header
      border-bottom: 1px #ffffff30 solid
      padding: 0 0 4px 0
      margin-bottom: 10px
  .searchSurveyInLive
    .form-control
      background: none
      border: none
      border-radius: 0px
      border-bottom: 1px #ffc10750 solid
      color: #fff
      font-size: 12px
      &:active
        background: none !important
        color: #fff
        border-bottom: 1px #ffc107 solid
      &:focus
        background: none !important
        border-bottom: 1px #ffc107 solid
        color: #fff
        box-shadow: none
    .btn
      margin: auto
      font-size: 12px
      padding: 5px 15px
  .liveSGTabs
    .nav-item
      width: 50%
      text-align: center
      .nav-link
        background: #00000090
        color: #cacaca
        border-radius: 0px
      .active
        background-color: #000000 !important
        color: #fff !important
  .surveyBox
    width: 100%
    overflow-x: hidden
    overflow-y: scroll
    height: 45vh
    background: #fff
    border-radius: 10px
  .videoSmall
    width: 100%
    overflow: hidden
    height: 45vh
    background: #000
    border-radius: 10px
  .videoActionsArea
    height: 86vh
    overflow: hidden
    position: relative
    .videoChatBox
      background: rgba(0,0,0,.3)
      border-radius: 5px
      height: 90vh
      overflow: auto
      margin-bottom: 2vh
      padding-bottom: 100px
      & ul
        list-style: none
        padding: 5px
        & li
          float: right
          margin-bottom: 8px
          color: #e2e2e2
          border-bottom: 5px #00000080 solid
          border-radius: 5px 0px 0px 15px
          clear: both
          & h6
            text-align: right
            font-size: 10px
            width: -webkit-fit-content
            width: -moz-fit-content
            width: fit-content
            background: #00000080
            border-radius: 5px 0 0 0
            color: #fff
            float: right
            margin: 0px
            padding: 3px 5px
          & p
            font-size: 12px
            background: #1e425870
            padding: 4px 10px 7px 25px
            margin: 0px
            &:last-child
              border-radius: 5px 0px 0px 15px
  .surveysBox
    position: relative
    background: #00000090
    border-radius: 10px
    color: #cacaca
    padding: 0px 10px
    height: 45vh
    overflow-x: hidden
    overflow-y: auto
    & h4
      padding: 10px 0 0 0
      margin: 0px
    & ul
      height: 45vh
      font-size: 12px
      overflow: auto
      list-style: none
      padding: 0px
      margin-top: 2vh
      & li
        color: #cacaca
        display: block
        padding: 5px 0
        margin-bottom: 5px
        border-bottom: 1px #323232 solid
        &:last-child
          border-bottom: none
        &:hover
          cursor: pointer
  .videoOperations
    display: inline-block
    color: #cacaca
    padding: 5px 10px
    font-size: 12px
    transition: 0.3s
    cursor: pointer
    margin-right: 15px
    & i
      margin-right: 5px
    &:last-child
      margin-right: 0
    &:hover
      background: #000
      transition: 0.3s
  .videoCharts
    text-align: center
    background: #00000090
    padding: 10px 30px
    color: #cacaca
    font-size: 22px
    font-weight: bold
    border-radius: 10px
  .videoInfo
    margin-top: 0.5rem
    color: #fff
    & h3
      padding: 0px
      margin: 0px
      font-size: 20px
      font-weight: lighter
    & h5
      padding: 0px
      margin: 10px 0px
      font-size: 14px
      font-weight: lighter
  .videoChat
    height: 18vh
    float: right
    width: 100%
    .form-control
      width: 100%
      background: #1e425870
      color: #e2e2e2
      border: none
      font-size: 13px
  .studentsList
    background: rgba(0,0,0,.2)
    height: 84vh
    overflow: auto
    padding: 0px
    list-style: none
    & li
      background: #00000020
      height: 40px
      margin-bottom: 5px
      border-bottom: 1px #00000050 solid
      transition: 0.3s
      &:hover
        background: #00000050
        transition: 0.3s
    .dropdown
      float: left
      & p
        color: #fff
        cursor: pointer
        font-size: 12px
        margin: 10px 0 0 10px
      .dropdown-menu
        background: rgba(0,0,0,.9)
        .dropdown-item
          color: #cacaca
          font-size: 12px
          padding: .25rem 0.5rem
          &:hover
            background: #000
            color: #fff
        .dropdown-divider
          border-top: 1px #ffc107 solid
    .sendFeedback
      float: right
      width: 38px
      height: 38px
      margin-top: 1px
      padding-top: 7px
      border-radius: 5px
      font-weight: bold
      transition: 0.3s
      position: relative
      text-align: center
      cursor: pointer
      overflow: hidden
      .sfb
        display: none
        position: absolute
        left: 0px
        top: 0px
        width: 100%
        height: 100%
        font-size: 20px
        line-height: 38px
      .sfbPositive
        background: #cddc39
        color: #353434
      .sfbNegative
        background: #b549c7
        color: #ffecec
      .sfbUnderstood
        background: #FF9800
        color: #1d2021
      .sfbNotUnderstood
        background: #f44336
        color: #353434
  .groupsList
    height: 84vh
    overflow: auto
    padding: 0px
    list-style: none
    & li
      background: #00000020
      height: 40px
      margin-bottom: 5px
      border-bottom: 1px #00000050 solid
      transition: 0.3s
      &:hover
        background: #00000050
        transition: 0.3s
    .dropdown
      float: left
      & p
        color: #fff
        cursor: pointer
        font-size: 12px
        margin: 10px 0 0 10px
      .dropdown-menu
        background: rgba(0,0,0,.9)
        .dropdown-item
          color: #cacaca
          font-size: 12px
          padding: .25rem 0.5rem
          &:hover
            background: #000
            color: #fff
        .dropdown-divider
          border-top: 1px #ffc107 solid
</style>