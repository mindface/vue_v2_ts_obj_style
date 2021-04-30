<template>
  <div class="record">
    <SectionRecord />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SectionRecord from "@/components/SectionRecord.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Record",
  components: {
    SectionRecord,
  }
});
</script>
