<template>
  <header class="header _flex_">
    <div class="header__title"><h1 class="site-title">coach advice</h1></div>
    <div class="header__nav">
      <Nav />
    </div>
    <button @click="logoutAction">ログアウト</button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Nav from "@/components/Nav.vue";

export default defineComponent({
  name: 'Header',
  components: {
    Nav
  },
  setup(props) {
    const store = useStore()
    const router = useRouter()
    const logoutAction = () => {
      store.dispatch('user/logoutAction')
      console.log(store.getters);
      if(!store.getters['user/getUserUidData']){
        router.push('/login')
      }
    }
    return {
      logoutAction
    }
  }
});
</script>
