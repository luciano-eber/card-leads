<script setup>
import { computed } from 'vue'
import ConectaIcon from '@/components/ConectaIcon'

const props = defineProps({
  data: Object,
})

const iconColorClass = computed(() => `icon-${props.data.color}`)
const iconClass = computed(() => `icon-${props.data.icon}`)

</script>

<template>
  <div class="conecta-card">
    <div class="card-sup-icon">
      <ConectaIcon id="info"/>
    </div>
    <div class="card-wrap">
      <div class="icon-circle" :class="[ iconColorClass, iconClass ]">
        <ConectaIcon :id="data.icon" class="icon"/>
      </div>
      <div class="content">
        <h2 class="value">{{ data.value }}</h2>
        <h3 class="label">{{ data.name }}</h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.conecta-card {
  position: absolute;
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
}

.card-wrap {
  position: absolute;
  left: 10%;
  top: 29%;

  .icon-circle {
    position: absolute;
    width: 55.37px;
    height: 55.37px;
    left: 0;
    top: 0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
      position: absolute;
      top: 31%;

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  .content {
    position: absolute;
    width: 133px;
    height: 52px;
    left: 66.9px;
    top: 0;

    .value {
      color: $color-darken-2;
      font-weight: bold;
      font-size: 32px;
      line-height: 110%;
    }
    .label {
      color: $color-lighten-1;
      font-weight: 400;
      font-size: 16px;
    }
  }
}

.icon-blue {
  background-color: rgba($color-blue, 0.3);
}
.icon-purple {
  background-color: rgba($color-purple, 0.3);
}
.icon-green {
  background-color: rgba($color-green, 0.3);
}

.icon-blue {
  svg {
    path {
      fill: $color-blue;
    }
  }
}

.icon-purple.icon-person {
  svg {
    path {
      fill: $color-purple;
    }
  }
}

.icon-green.icon-currency {
  svg {
    path {
      stroke: $color-green;
    }
  }
}
</style>