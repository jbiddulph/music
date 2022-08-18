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
    <section id="recordings"></section>
  </div>
</template>

<script>
export default {
  name: "Countdown",
  data() {
    return {
      timerEnabled: false,
      timerCount: 10,
      chunks: [],
      audioChunks: {},
      mediaRecorder: {},
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
          this.mediaRecorder.stop();
          this.mediaRecorder.addEventListener("stop", () => {
            const audioBlob = new Blob(self.audioChunks);
            self.recordedVoice = URL.createObjectURL(audioBlob);
          });
        }
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
  },
  methods: {
    play() {
      this.timerEnabled = true;
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        this.mediaRecorder = new MediaRecorder(stream);
        this.mediaRecorder.start(1000);
        var recordingsElement = document.getElementById("recordings");
        // Build the player
        var clipContainerElement = document.createElement("article");
        var clipLabelElement = document.createElement("p");
        var audioElement = document.createElement("audio");
        audioElement.setAttribute("controls", "");
        clipContainerElement.appendChild(audioElement);
        clipContainerElement.appendChild(clipLabelElement);
        recordingsElement.appendChild(clipContainerElement);
        audioElement.controls = true;

        this.mediaRecorder.ondataavailable = function (event) {
          console.log("Event: ", event.data);
          var blob = new Blob(this.chunks, { type: "audio/ogg; codecs=opus" });
          this.chunks = [];

          audioElement.src = window.URL.createObjectURL(blob);

          this.chunks.push(event.data);
        };
      });
    },
  },
};
</script>