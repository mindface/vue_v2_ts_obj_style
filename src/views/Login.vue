<template>
  <div class="login">
    <SectionLogin />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SectionLogin from "@/components/SectionLogin.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    SectionLogin,
  },
});
</script>
