<template>
  <div>
    <div v-if="pageLoader" class="miniLoader"></div>
    <div v-else>
      <div class="row operationHeader my-0 pt-2 px-2">
        <div class="col-8">
          <h4>Create New Lecture</h4>
        </div>
        <div class="col-4 text-right">
          <button type="button" class="btn btn-sm btn-danger mr-1" @click="close('instructorCreateLecture')">Cancel</button>
          <button type="button" class="btn btn-sm btn-warning" @click="create()">Create</button>
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="row operationPage mt-0 py-2 px-2 position-relative">
        <div class="col-md-12">
          <form>
            <div class="form-group row" :class="{ 'hasError': $v.post.title.$error }">
              <label class="col-sm-4 col-form-label">Title</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" v-model="post.title">
              </div>
            </div>
            <div class="form-group row" :class="{ 'hasError': $v.post.description.$error }">
              <label class="col-sm-4 col-form-label">description</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" v-model="post.description">
              </div>
            </div>
          </form>
        </div>
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
      universities: [],
      faculties: [],
      departments: [],
      pageLoader: true,
      post: {
        title: null,
        description: null,
        course_ID: null
      }
    }),
    props: ['courseID'],
    validations: {
      post: {
        title: {required, min: minLength(3)},
        description: {required, min: minLength(3)},
        course_ID: {required},
      }
    },
    mounted() {
      this.pageLoader = false
      this.post.course_ID = this.courseID
    },
    computed: {
      ...mapState(['apiLink'])
    },
    methods: {
      ...mapMutations(['closeModal']),
      close(e) {
        this.closeModal({
          modal: e,
          courseID: this.post.course_ID
        })
        this.$modal.hide(e)
      },
      create() {
        this.pageLoader = true
        this.$v.post.$touch();
        if(this.$v.post.$error) {
          this.$toasted.show('Please fill in the required fields', {
            type: 'error',
            duration: 2500,
            keepOnHover: true,
            theme: 'bubble'
          })
          return
        } else {
          axios.defaults.headers.common['Authorization'] = localStorage.getItem('id_token');
          axios.put( this.apiLink + 'create/lecture?', { 
            title: this.post.title,
            description: this.post.description,
            course_ID: this.post.course_ID,
            access_token: localStorage.getItem('access_token')
          }).then(response => {
            let ret = response.data.status
            switch (ret) {
              case 200:
                this.$toasted.show('Lecture Created', {
                  type: 'success',
                  duration: 2500,
                  keepOnHover: true,
                  theme: 'bubble'
                })
                this.close('instructorCreateLecture',this.post.course_ID)
                this.pageLoader = false
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
