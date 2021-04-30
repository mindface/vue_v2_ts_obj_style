<template>
  <div class="box">
    <div class="record-act-box">
      <RecordSideItem
        v-for="item in state.record_data"
        :key="item.id"
        :item="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, onMounted } from "vue";
import { useStore } from "vuex";
import RecordSideItem from "@/components/RecordSideItem.vue";

type ReactiveType = {
  record_data: any;
};

export default defineComponent({
  name: "RecordSideAct",
  components: {
    RecordSideItem,
  },
  setup(props) {
    const store = useStore();
    const state = reactive<ReactiveType>({
      record_data: computed(() => {
        return store.state.record.record_data ? store.state.record.record_data : [];
      })
    });

    onMounted(() => {
      store.dispatch("record/setRecordAction");
    });

    return {
      state
    };
  },
});
</script>
