<template>
  <div>
    <div v-if="pageLoader" class="miniLoader"></div>
    <div class="row operationHeader my-0 pt-2 px-2">
      <div class="col-8">
        <h4>Create New University</h4>
      </div>
      <div class="col-4 text-right">
        <button type="button" class="btn btn-sm btn-danger mr-1" @click="close('createUniversity')">Cancel</button>
        <button type="button" class="btn btn-sm btn-warning" @click="create()">Create</button>
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="row operationPage mt-0 py-2 px-2 position-relative">
      <div class="col-md-12">
        <form>
          <div class="form-group row" :class="{ 'hasError': $v.post.university.$error }">
            <label class="col-sm-4 col-form-label">university</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" v-model="post.university">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-4 col-form-label">address</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" v-model="post.address">
            </div>
          </div>
          <div class="form-group row" :class="{ 'hasError': $v.post.responsible.$error }">
            <label class="col-sm-4 col-form-label">responsible</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" v-model="post.responsible">
            </div>
          </div>
          <div class="form-group row" :class="{ 'hasError': $v.post.responsible_phone.$error }">
            <label class="col-sm-4 col-form-label">responsible_phone</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" v-model="post.responsible_phone">
            </div>
          </div>
          <div class="form-group row" :class="{ 'hasError': $v.post.responsible_mail.$error }">
            <label class="col-sm-4 col-form-label">responsible_mail</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" v-model="post.responsible_mail">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-4 col-form-label">bank</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" v-model="post.bank">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-4 col-form-label">bank_account</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" v-model="post.bank_account">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-4 col-form-label">Logo</label>
            <div class="col-sm-8">
              <file-select v-model="file"></file-select>
              {{uploadedFile}}
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
  import { required, email, numeric, minLength } from 'vuelidate/lib/validators'
  export default {
    data: () => ({
      pageLoader: false,
      file: null,
      universities: [],
      post: {
        university: null,
        address: null,
        logo: null,
        bank_account: null,
        bank: null,
        responsible: null,
        responsible_phone: null,
        responsible_mail: null
      }
    }),
    validations: {
      post: {
        university: {required, min: minLength(2)},
        responsible: {required, min: minLength(2)},
        responsible_phone: {required, numeric, min: minLength(11)},
        responsible_mail: {required, email, min: minLength(2)}
      }
    },
    computed: {
      ...mapState(['apiLink','uploadedFile'])
    },
    methods: {
      ...mapMutations(['closeModal']),
      close(e) {
        this.closeModal({
          modal: e
        })
        this.$modal.hide(e)
      },
      create() {
        this.post.logo = $('#uploadedFile').val()
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
          axios.put( this.apiLink + 'create/university?', { 
            university: this.post.university,
            address: this.post.address,
            logo: this.post.logo,
            bank_account: this.post.bank_account,
            bank: this.post.bank,
            responsible: this.post.responsible,
            responsible_phone: this.post.responsible_phone,
            responsible_mail: this.post.responsible_mail,
            access_token: localStorage.getItem('access_token')
          }).then(response => {
            let ret = response.data.status
            switch (ret) {
              case 200:
                this.$toasted.show('University Created', {
                  type: 'success',
                  duration: 2500,
                  keepOnHover: true,
                  theme: 'bubble'
                })
                this.pageLoader = false
                this.close('createUniversity')
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
