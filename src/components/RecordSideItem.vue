<template>
  <div class="act">
    <div class="act__block">About
      <router-link :to="'/records/'+item.id">
        <div class="block">
          <h3 class="title">{{item.title}}</h3>
          <div class="text">{{item.body}}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";



export default defineComponent({
  name: "RecordSideItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const store = useStore();

    return {};
  },
});
</script>
