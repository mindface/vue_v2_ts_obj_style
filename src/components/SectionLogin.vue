<template>
  <section class="login-section">
    <div class="login-section--body">
      <div class="login" v-if="state.pageView">
        <div class="login__title">
          <h3 class="title">login</h3>
        </div>
        <div class="login__body">
          <div class="field">
            <label for="email" class="label">email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="メールアドレス"
              v-model="state.email"
            />
          </div>
          <div class="field">
            <label for="password" class="label">password</label>
            <input
              type="password"
              name="email"
              id="password"
              placeholder="パスワード"
              v-model="state.password"
            />
          </div>
          <div class="field">
            <button class="btn" @click="loginAction">送信</button>
            <button class="btn" @click="test">test</button>
          </div>
        </div>
      </div>
      <div class="login" v-else>
        <div class="login__title">
          <h3 class="title">新規登録</h3>
        </div>
        <div class="login__body">
          <label for=""></label>
          <input type="text" name="email" id="email" />
          <input type="password" name="email" id="password" />
          <button class="btn" @click="btnAction">btnAction</button>
        </div>
        <div class="login__footer"></div>
      </div>
    </div>
    <div class="login-section__btns">
      <button class="btn chnage-btn" @click="cahngePage">
        <span class="aid" v-if="state.pageView">新規登録</span>
        <span class="aid" v-else>戻る</span>
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, onMounted } from "vue";
import { ReadaidData } from "@/store/readaidData/interface";
import { useStore } from "vuex";

type ReactiveType = {
  email: string;
  password: string;
  pageView: boolean;
  readaid_data: any;
};

export default defineComponent({
  name: "ReadaidSection",
  setup(props) {
    const store = useStore();
    const state = reactive<ReactiveType>({
      email: "",
      password: "",
      pageView: true,
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

    const loginAction = (): void => {
      const sendPassword: { email: string; password: string } = {
        email: state.email,
        password: state.password,
      };
      store.dispatch("user/loginAction", sendPassword);
    };

    const test = (): void => {
      console.log(store.getters["user/getUserUidData"]);
    };

    const cahngePage = (): void => {
      state.pageView = !state.pageView;
    };

    onMounted(() => {
      store.dispatch("readaid/setReadaidAction");
    });

    return {
      state,
      btnAction,
      cahngePage,
      loginAction,
      test,
    };
  },
});
</script>
