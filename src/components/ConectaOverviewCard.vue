<template>
  <div class="card-overview">

    <div class="tooltip-wrap">
      <slot name="tooltip"></slot>
    </div>
    
    <div class="card-wrap">
      <slot name="card"></slot>
    </div>

  </div>
</template>

<style lang="scss" scoped>

.card-overview {
  margin: 0px 15px;
  border: 1px solid red;
  width: 269px;
  height: 200px;
  position: relative;
}

.tooltip-wrap {
  position: absolute;
  width: 269px;
  height: 63px;
  left: 0px;
  top: 0px;
}

.card-wrap {
  position: absolute;
  left: 4.46%;
  right: 6.32%;
  top: 36.12%;
  bottom: 0.27%;
}

</style>