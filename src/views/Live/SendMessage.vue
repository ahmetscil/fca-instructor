<template>
  <div>
    <div v-if="pageLoader" class="miniLoader"></div>
    <div v-else>
      <div class="row operationHeader my-0 pt-2 px-2">
        <div class="col-8">
          <h4>Send Message</h4>
        </div>
        <div class="col-4 text-right">
          <button type="button" class="btn btn-sm btn-danger mr-1" @click="close('sendMessageToStudent')">Cancel</button>
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="row operationPage mt-0 py-2 px-2 position-relative">
        <div class="col-md-12">
          <form>
            <div class="form-group row" :class="{ 'hasError': $v.post.message.$error }">
              <div class="col-12">
                <textarea rows="10" class="form-control" v-model="post.message"></textarea>
              </div>
              <div class="col-12">
                <button type="button" class="btn btn-sm btn-warning mt-2" @click="send(post.message, student)">send</button>
                {{sendText}}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    // let connection = new WebSocket('wss://3smg9tk01m.execute-api.eu-west-1.amazonaws.com/Prod');
  import { mapState, mapMutations } from 'vuex'
  import { required, minLength } from 'vuelidate/lib/validators'
  export default {
    data: () => ({
      sendText: '',
      studentID: '',
      pageLoader: true,
      post: {
        message: null
      }
    }),
    props: ['student'],
    validations: {
      post: {
        message: {required, min: minLength(2)}
      }
    },
    mounted() {
      this.pageLoader = false
    },
    methods: {
      send(p,s) {
        this.sendMessageToStudent(s,p)
        this.sendText = 'mesajın ne durumda olduğunu göremiyorum.'
      },
      close(e) {
        this.$modal.hide(e)
      },
      sendMessageToStudent(studentID, instructorMessage) {
        this.$store.dispatch('sendStudentMessage', {...this.getmessage, to: studentID, message: instructorMessage})

      }


    }
  }
</script>
