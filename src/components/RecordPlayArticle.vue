<template>
  <div class="act">
    <div class="act__block">RecordPlayArticle</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, onMounted } from "vue";
import { RecordData } from "@/store/recordData/interface";
import { useStore } from "vuex";

type ReactiveType = {
  record_data: any;
};

export default defineComponent({
  name: "RecordPlayArticle",
  setup(props) {
    const store = useStore();
    const state = reactive<ReactiveType>({
      record_data: computed(() => {
        return store.state.readaid.readaid_data
          ? store.state.readaid.readaid_data
          : [];
      }),
    });

    const btnAction = (event: MouseEvent): void => {
      const i = {
        id: 0,
        title: "string002",
        body: "string",
        reedtag_id: 0,
        created_at: "string",
        updated_at: "string",
      };
      store.dispatch("readaid/getData", i);
    };
    const re = (event: MouseEvent): void => {
      console.log(event);
    };

    onMounted(() => {
      store.dispatch("readaid/setReadaidAction");
    });

    return {
      state,
      btnAction,
      re,
    };
  },
});
</script>
