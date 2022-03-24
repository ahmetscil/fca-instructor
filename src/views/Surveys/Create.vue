<template>
  <div>
    <Header></Header>
    <div class="container-fluid">
      <div class="row">
        <div v-if="pageLoader" class="miniLoader"></div>
        <div class="operationPage mt-0 py-2 px-0 position-relative">
          <SurveyCreator></SurveyCreator>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";
import { required, email, numeric, minLength } from "vuelidate/lib/validators";
import SurveyCreator from "../../components/SurveyCreator";

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
  components: {
    SurveyCreator
  },
  validations: {
    post: {
      university: { required, min: minLength(2) },
      responsible: { required, min: minLength(2) },
      responsible_phone: { required, numeric, min: minLength(11) },
      responsible_mail: { required, email, min: minLength(2) }
    }
  },
  computed: {
    ...mapState(["apiLink", "uploadedFile"])
  },
  methods: {
    ...mapMutations(["closeModal"]),
    close(e) {
      this.closeModal({
        modal: e
      });
      this.$modal.hide(e);
    },
    create() {
      this.post.logo = $("#uploadedFile").val();
      this.pageLoader = true;
      this.$v.post.$touch();
      if (this.$v.post.$error) {
        this.pageLoader = false;
        this.$toasted.show("Please fill in the required fields", {
          type: "error",
          duration: 2500,
          keepOnHover: true,
          theme: "bubble"
        });
        return;
      } else {
        axios.defaults.headers.common["Authorization"] = localStorage.getItem(
          "id_token"
        );
        axios
          .put(this.apiLink + "create/university?", {
            university: this.post.university,
            address: this.post.address,
            logo: this.post.logo,
            bank_account: this.post.bank_account,
            bank: this.post.bank,
            responsible: this.post.responsible,
            responsible_phone: this.post.responsible_phone,
            responsible_mail: this.post.responsible_mail,
            access_token: localStorage.getItem("access_token")
          })
          .then(response => {
            let ret = response.data.status;
            switch (ret) {
              case 200:
                this.$toasted.show("University Created", {
                  type: "success",
                  duration: 2500,
                  keepOnHover: true,
                  theme: "bubble"
                });
                this.pageLoader = false;
                this.close("createUniversity");
                break;
              default:
                this.$toasted.show(this.returncode[ret], {
                  type: "error",
                  duration: 2500,
                  keepOnHover: true,
                  theme: "bubble"
                });
                this.pageLoader = false;
                break;
            }
          });
      }
    }
  }
};
</script>
