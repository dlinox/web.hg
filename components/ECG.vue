<template>
  <div class="wrapper">
    <div class="blockcont">
      <div v-for="index in 80" :key="index" class="block"></div>
    </div>
  </div>
</template>
<script setup>

const props = defineProps({
  delay: {
    type: Number,
    default: 0,
  },
  color: {
    type: String,
    default: "#9e0a0a",
  },
  width: {
    type: String,
    default: "300px",
  },
  height: {
    type: String,
    default: "40px",
  },
  
});

</script>

<style lang="scss">
.wrapper {
  position: relative;
  width: v-bind(width);
  height: v-bind(height);
  overflow: hidden;
}
.blockcont {
  position: relative;
  top: 50%;
  width: 100%;
}

.block {
  background: v-bind(color);
  width: 4px;
  height: 4px;
  position: absolute;
  float: left;
  border-radius: 3px;
  transition: all 2s;
  animation: ecg 5s linear infinite;
}


$delay-step: 10ms;

@for $i from 1 through 80 {
  .block:nth-child(#{$i}) {
    animation-delay: (232 - ($i - 1) * $delay-step);
  }
}

@keyframes ecg {
  0% {
    left: 0;
  }

  25% {
    left: 25%;
    transform: translate(0, 0);
  }

  50% {
    left: 50%;
    transform: translate(0, 0);
  }

  26%,
  51%,
  76% {
    transform: translate(0, -15px);
  }

  27%,
  52%,
  77% {
    transform: translate(0, 0);
  }

  28%,
  53%,
  78% {
    transform: translate(0, 15px);
  }

  29%,
  54%,
  79% {
    transform: translate(0, 0);
  }

  30%,
  55%,
  80% {
    transform: translate(0, 10px);
  }

  31%,
  56%,
  81% {
    transform: translate(0, 0);
  }

  75% {
    left: 75%;
    transform: translate(0, 0);
  }

  100% {
    left: 100%;
  }
}
</style>
