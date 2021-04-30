<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <SectionReadaid />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SectionReadaid from "@/components/SectionReadaid.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    SectionReadaid,
  },
});
</script>
