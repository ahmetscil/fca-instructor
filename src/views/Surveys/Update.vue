<template>
  <div>
    <div id="universityLoader" class="miniLoader"></div>
    <div class="row operationHeader my-0 pt-2 px-2">
      <div class="col-8">
        <h4>Update University</h4>
      </div>
      <div class="col-4 text-right">
        <button type="button" class="btn btn-sm btn-danger mr-1" @click="close('updateUniversity')">Cancel</button>
        <button type="button" class="btn btn-sm btn-warning" @click="create()">Update</button>
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="row operationPage mt-0 py-2 px-2 position-relative">
      <div class="col-md-12">
        <form>
          <div class="form-group row" :class="{ 'hasError': $v.post.university.$error }">
            <label class="col-sm-4 col-form-label">Üniversite</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" v-model="post.university = getUniversity.university_name">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-4 col-form-label">Adres</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" v-model="post.address = getUniversity.university_address">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-4 col-form-label">Üniversite Yetkilisi</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" v-model="post.responsible = getUniversity.university_responsible">
            </div>
          </div>
          <div class="form-group row" :class="{ 'hasError': $v.post.responsible.$error }">
            <label class="col-sm-4 col-form-label">Üniversite Yetkili Telefonu</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" v-model="post.responsible_phone = getUniversity.university_responsible_phone">
            </div>
          </div>
          <div class="form-group row" :class="{ 'hasError': $v.post.responsible_mail.$error }">
            <label class="col-sm-4 col-form-label">Üniversite Yetkili E-Mail</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" v-model="post.responsible_mail = getUniversity.university_responsible_mail">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-4 col-form-label">Banka</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" v-model="post.bank = getUniversity.university_bank">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-4 col-form-label">Banka Hesabı</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" v-model="post.bank_account = getUniversity.university_bank_account">
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
      universities: [],
      pageLoader: true,
      post: {
        university: null,
        address: null,
        logo: 'logo.png',
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
    props: ['updateData'],
    mounted() {
      this.univData(this.updateData)
    },
    computed: {
      ...mapState(['apiLink','getUniversity'])
    },
    methods: {
      ...mapMutations(['closeModal']),
      close(e) {
        this.closeModal({
          modal: e
        })
        this.$modal.hide(e)
      },
      univData(uni) {
        this.$store.dispatch('getUniversity', { ...this.selected, id: uni })
      },
      create() {
        this.$v.post.$touch();
        if(this.$v.post.$error) {
          this.$toasted.show('Please fill in the required fields', {
            type: 'error',
            keepOnHover: true,
            theme: 'bubble'
          })
          return
        } else {
          $('#universityLoader').show()
          axios.defaults.headers.common['Authorization'] = localStorage.getItem('id_token');
          axios.put( this.apiLink + 'update/university?', { 
            access_token: localStorage.getItem('access_token'),
            university_ID: this.updateData,
            update_data : {
              uni_logo: this.post.logo,
              uni_name: this.post.university,
              uni_address: this.post.address,
              uni_bank_name: this.post.bank,
              uni_bank_account: this.post.bank_account,
              uni_responsible: this.post.responsible,
              uni_responsible_phone: this.post.responsible_phone,
              uni_responsible_mail: this.post.responsible_mail,
            }
          }).then(response => {
            let ret = response.data.status
            switch (ret) {
              case 200:
                this.$toasted.show('University Updated', {
                  type: 'success',
                  duration: 2500,
                  keepOnHover: true,
                  theme: 'bubble'
                })
                this.close('updateUniversity')
                this.$store.dispatch("loadAllUnivs")
                $('#universityLoader').hide()
              break
              default:
                this.$toasted.show(this.returncode[ret], {
                  type: 'error',
                  duration: 2500,
                  keepOnHover: true,
                  theme: 'bubble'
                })
                $('#universityLoader').hide()
              break
            }
          })
        }
      }

    }
  }
</script>
