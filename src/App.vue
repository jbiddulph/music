<template>
  <Header />

  <router-view v-slot="{ Component }">
    <tansition name="fade" mode="out-in">
      <component :is="Component"></component>
    </tansition>
  </router-view>
  <app-player />
  <auth />
  <short />
</template>

<script>
import Header from "@/components/Header.vue";
import Auth from "@/components/Auth.vue";
import Short from "@/components/Short.vue";
import { mapWritableState } from "pinia";
import useUserStore from "@/stores/user";
import { auth } from "./includes/firebase";
import AppPlayer from "@/components/Player.vue";

export default {
  name: "App",
  components: {
    Header,
    Auth,
    Short,
    AppPlayer,
  },
  computed: {
    ...mapWritableState(useUserStore, ["userLoggedIn"]),
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true;
    }
  },
};
</script>

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s linear;
}

.fade-leave-to {
  transition: all 0.5s linear;
  opacity: 0;
}
</style>