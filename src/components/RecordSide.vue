<template>
  <header class="header">
    <h1 class="title">{{ msg }}</h1>
    <button @click="logoutAction">ログアウト</button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "RecordSide",
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const logoutAction = () => {
      store.dispatch("user/logoutAction");
      if (!store.getters["user/getUserUidData"]) {
        router.push("/login");
      }
    };
    return {
      logoutAction,
    };
  },
  methods: {
    // logoutAction(){
    //   console.log(this.$store);
    //   if(store.getters('user/getuser_infoUidData')){
    //     this.$router.push('/login')
    //   }
    // }
  },
});
</script>
