<script setup>
import { computed, defineAsyncComponent } from 'vue';
import iconsLib from './ConectaIcon/index'

const props = defineProps({
  id: String,
})

const currentIcon = computed(() => {
  if(!props.id || !iconsLib.includes(props.id))
    return defineAsyncComponent(() => import('./ConectaIcon/info.vue'))

  return defineAsyncComponent(() => import(`./ConectaIcon/${props.id}.vue`))
})

</script>

<template>
  <div>
    <div v-if="currentIcon" ref="current">
      <component :is="currentIcon"/>
    </div>
  </div>
</template>