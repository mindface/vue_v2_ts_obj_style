<template>
  <section class="record-section">
    <div class="record-section--body">
      <div class="record">
        <div class="record__title">
          <h3 class="title">記録</h3>
        </div>
        <div class="record__content">
          <RecordPlayArticle />
        </div>
        <div class="record__side">
          <RecordSideAct />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, onMounted } from "vue";
import { RecordData } from "@/store/recordData/interface";
import { useStore } from "vuex";
import RecordSideAct from "@/components/RecordSideAct.vue";
import RecordPlayArticle from "@/components/RecordPlayArticle.vue";

export default defineComponent({
  name: "SectionRecord",
  components: {
    RecordSideAct,
    RecordPlayArticle,
  },
  setup(props) {
    return {};
  },
});
</script>
