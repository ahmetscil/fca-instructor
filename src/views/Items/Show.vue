<template>
  <div>
    <div class="row pt-3 mx-0">
      <div class="col-12">
        <div :class="themeClasses.dataListClass">
          <div class="dataList row pt-2 pb-0 px-2">
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <iframe id="ytplayer" type="text/html" height="400" width="100%" :src="'http://www.youtube.com/embed/' + getItems.video_url + '?autoplay=1'" frameborder="0"/>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h3>{{getItems.item_name}}</h3>
              <div class="clearfix w-100"></div>
              <h3>{{getItems.item_description}}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data: () => ({
      item_ID: null
    }),
    created() {
      this.item_ID = `${this.$route.params.itemurl}`
      this.itemData(this.item_ID)
    },
    computed: {
      ...mapState(['themeClasses','getItems'])
    },
    methods: {
      itemData(uni) {
        this.$store.dispatch('getItems', { ...this.selected, id: uni })
      }
    }
  }
</script>
