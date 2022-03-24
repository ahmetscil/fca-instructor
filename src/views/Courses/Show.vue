<template>
  <div>
    <div class="row pt-3 mx-0">
      <div class="col-12">
        <div :class="themeClasses.dataListClass">
          <div class="dataList row pt-2 pb-0 px-2">
            <div class="col-xs-12 col-sm-6 col-md-5 col-lg-3 dataListLogo">
              <img :src="getUniversity.university_logo">
            </div>
            <div class="col-xs-12 col-sm-6 col-md-7 col-lg-9">
              <div class="row">
                <div class="col-sm-12">
                  <h3><i class="fas fa-university"></i> {{getUniversity.university_name}}</h3>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-4">
                  <h4><i class="fas fa-user"></i> {{getUniversity.university_responsible}}</h4>
                  <h4><a :href="'tel:'+getUniversity.university_responsible_phone"><i class="fas fa-phone-square"></i> {{getUniversity.university_responsible_phone}}</a></h4>
                  <h4><a :href="'mailto:'+getUniversity.university_responsible_mail"><i class="fas fa-envelope"></i> {{getUniversity.university_responsible_mail}}</a></h4>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-8">
                  <h4><i class="fas fa-warehouse"></i> {{getUniversity.university_bank}} {{getUniversity.university_bank_account}}</h4>
                  <h4><a target="_blank" :href="'https://www.google.com/maps/place/' + getUniversity.university_address"><i class="fas fa-home"></i> {{getUniversity.university_address}}</a></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FacultiesList :uniID="univ_ID"></FacultiesList>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import axios from 'axios'
  export default {
    data: () => ({
      univ_ID: null
    }),
    created() {
      this.univ_ID = `${this.$route.params.univ}`
      this.univData(this.univ_ID)
    },
    computed: {
      ...mapState(['themeClasses','getUniversity'])
    },
    methods: {
      univData(uni) {
        this.$store.dispatch('getUniversity', { ...this.selected, id: uni })
      }
    }
  }
</script>
