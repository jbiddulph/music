<template>
  <div>
    <h2>Countdown herexx</h2>
    <div class="text-5xl">{{ timerCount }}</div>
    <button
      class="
        block
        w-full
        bg-purple-600
        text-white
        py-1.5
        px-3
        rounded
        transition
        hover:bg-purple-700
      "
      @click.prevent="play"
    >
      start countdown
    </button>
  </div>
</template>

<script>
export default {
  name: "Countdown",
  data() {
    return {
      timerEnabled: false,
      timerCount: 10,
    };
  },
  watch: {
    timerEnabled(value) {
      if (value) {
        setTimeout(() => {
          this.timerCount--;
        }, 1000);
      }
    },

    timerCount: {
      handler(value) {
        if (value > 0 && this.timerEnabled) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        }
        if (value == 0) {
          console.log("stopped");
        }
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
    if() {},
  },
  methods: {
    play() {
      this.timerEnabled = true;
    },
  },
};
</script>