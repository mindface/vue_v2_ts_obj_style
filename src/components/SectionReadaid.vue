<template>
  <section class="readaid-section">
    <div class="readaid-section--body">
      <div class="readaid">
        <div class="readaid__title">
          <h3 class="title">readaid__title</h3>
        </div>
        <div class="readaid__body">
          readaid__body
          <buttom class="t" @click="btnAction">btnAction</buttom>
          <buttom class="t" @click="re">btnAction</buttom>
        </div>
        <li class="item" v-for="k in state.readaid_data" :key="k.id">
          {{ k.title }}
        </li>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, onMounted } from "vue";
import { ReadaidData } from "@/store/readaidData/interface";
import { useStore } from "vuex";

type ReactiveType = {
  readaid_data: any;
};

export default defineComponent({
  name: "LoginSection",
  setup(props) {
    const store = useStore();
    const state = reactive<ReactiveType>({
      readaid_data: computed(() => {
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
