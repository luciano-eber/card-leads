<script setup>
defineProps({
  data: Object,
  
})
</script>

<template>
  <div class="card">
    <div class="card-sup-icon">
      <slot name="sup-icon"/>
    </div>
    <div class="card-wrap">
      <!-- future content will not be slot -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  position: relative;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  .card-sup-icon {
    position: absolute;
    width: 14px;
    height: 14px;
    right: 11px;
    top: 11px;
  }

  .card-wrap {
    position: absolute;
    left: 10%;
    right: 10%;
    top: 36%;
    bottom: 36%;
    border: 1px solid blue;
  }
}
</style>