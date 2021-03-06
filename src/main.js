import Vue from "vue";
import App from "./App";
import store from "@/store/index";
// 注册全局组件
import UniNavBar from "components/uni-nav-bar/uni-nav-bar.vue";
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue";
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
import xlkTabs from "components/xlk-tabs/xlk-tabs.vue";

// 全局挂载
Vue.component("uni-nav-bar", UniNavBar);
Vue.component("mescroll-body", MescrollBody);
Vue.component("mescroll-uni", MescrollUni);
Vue.component("xlk-tabs", xlkTabs);
Vue.prototype.$store = store;

Vue.config.productionTip = false;
App.mpType = "app";

const app = new Vue({
    store,
    ...App,
});
app.$mount();

export default app;
