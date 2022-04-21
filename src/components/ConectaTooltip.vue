<script setup>

const props = defineProps({
  content: String,
  color: String,
  bgColor: String,
})

</script>

<template>
  <div class="tooltip" >

    <div class="bubble" :style="{ 'background-color': bgColor, 'color': color }">
      <p class="hint">{{ content }}</p>
    </div>

    <div class="arrow">
      <svg width="27" height="9" viewBox="0 0 27 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.3334 7.54549C14.3343 8.20094 13.0414 8.20093 12.0423 7.54548L0.540396 4.38021e-05L26.8353 4.57764e-05L15.3334 7.54549Z" :fill="bgColor" :class="{ 'color-arrow': !bgColor }"/>
      </svg>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>
.tooltip {
  position: relative;
  width: 100%;
  height: 100%;
  
  .bubble {
    background-color: $color-darken-2;
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 9px;
    border-radius: 8px;
  }

  .arrow {
    position: absolute;
    width: 26.29px;
    height: 8.62px;
    right: 22px;
    bottom: 8px;
  }

  .hint {
    position: absolute;
    left: 10px;
    right: 10px;
    top: 10px;
    bottom: 17px;

    font-weight: 400;
    font-size: 12px;
    line-height: 140%;

    font-feature-settings: 'salt' on, 'ss02' on, 'ss04' on;
  }
}

.color-arrow {
  fill: $color-darken-2;
}

</style>