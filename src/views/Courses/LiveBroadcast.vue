<template>
  <div>
    <div v-if="pageLoader" class="miniLoader"></div>
    <div class="row operationHeader my-0 pt-2 px-2">
      <div class="col-7">
        <h4>Generate New Broadcast</h4>
      </div>
      <div class="col-5 text-right">
        <button type="button" class="btn btn-sm btn-danger mr-1" @click="close('LiveBroadcast')">Cancel</button>
        <button type="button" class="btn btn-sm btn-warning" @click="create()">Save</button>
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="row operationPage mt-0 py-2 px-2 position-relative">
      <div class="col-md-12">
        <form>
          <div class="form-group row" :class="{ 'hasError': $v.post.name.$error }">
            <label class="col-sm-4 col-form-label">name</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" v-model="post.name">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-4 col-form-label">description</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" v-model="post.description">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-4 col-form-label">estimated lenght</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" v-model="post.estimated_lenght">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-4 col-form-label">estimated start time</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" v-model="post.estimated_startTime">
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import { mapState, mapMutations } from 'vuex'
  import { required, minLength } from 'vuelidate/lib/validators'
  export default {
    data: () => ({
      pageLoader: false,
      file: null,
      universities: [],
      post: {
        lecture_ID: null,
        item_type: 'live_item',
        name: null,
        description: null,
        estimated_lenght: null,
        estimated_startTime: null,
        survey_IDs: []
      }
    }),
    props: ['lectureID'],
    validations: {
      post: {
        name: {required, min: minLength(9)}
      }
    },
    mounted() {
      this.post.lecture_ID = this.lectureID
    },
    computed: {
      ...mapState(['apiLink','returncode','uploadedFile'])
    },
    methods: {
      ...mapMutations(['closeModal']),
      close(e) {
        this.closeModal({
          modal: e,
          lecture: this.post.lecture_ID
        })
        this.$modal.hide(e)
      },
      create() {
        this.pageLoader = true
        this.$v.post.$touch();
        if(this.$v.post.$error) {
          this.pageLoader = false
          this.$toasted.show('Please fill in the required fields', {
            type: 'error',
            duration: 2500,
            keepOnHover: true,
            theme: 'bubble'
          })
          return
        } else {
          axios.defaults.headers.common['Authorization'] = localStorage.getItem('id_token');
          axios.put( this.apiLink + 'create/item-in-lecture?', { 
            lecture_ID: this.post.lecture_ID,
            item_type: this.post.item_type,
            name: this.post.name,
            description: this.post.description,
            estimated_lenght: this.post.estimated_lenght,
            estimated_startTime: this.post.estimated_startTime,
            survey_IDs: this.post.survey_IDs,
            access_token: localStorage.getItem('access_token')
          }).then(response => {
            let ret = response.status
            switch (ret) {
              case 200:
                this.$toasted.show('Data Saved', {
                  type: 'success',
                  duration: 2500,
                  keepOnHover: true,
                  theme: 'bubble'
                })
                this.pageLoader = false
                this.close('LiveBroadcast')
              break
              default:
                this.$toasted.show(this.returncode[ret], {
                  type: 'error',
                  duration: 2500,
                  keepOnHover: true,
                  theme: 'bubble'
                })
                this.pageLoader = false
              break
            }
          })
        }
      }
    }
  }
</script>
