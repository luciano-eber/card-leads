<script setup>
import { ref, reactive, onBeforeUpdate } from 'vue'
import mockupLeads from '@/mockups/leads'
import ConectaOverviewCard from '@/components/ConectaOverviewCard'
import ConectaTooltip from '@/components/ConectaTooltip'
import ConectaCard from '@/components/ConectaCard'

const data = ref(mockupLeads.data)

const cards = reactive({
  tooltips: [],
  tooltipMouseEnter: function(id) {
    cards.tooltips[id].show()
  },
  tooltipMouseLeave: function(id) {
    cards.tooltips[id].hide()
  }
})

onBeforeUpdate(() => {
  cards.value = {}
})

</script>

<template>
  <div class="cards-wrap">
    <ConectaOverviewCard v-for="(d,i) in data" :key="i" :data="d">
      <template #tooltip>
        <ConectaTooltip :content="d.legend" :ref="el => { cards.tooltips[i] = el }"/>
      </template>
      <template #card>
        <ConectaCard 
          :id="i" 
          :data="d" 
          @infoMouseEnter="cards.tooltipMouseEnter"
          @infoMouseLeave="cards.tooltipMouseLeave"
        />
      </template>
    </ConectaOverviewCard>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap');

html {
  font-size: 16px;
  * {
    margin: 0;
    padding: 0;
  }
}

body {
  margin: 10px;
  color: $body-color;
  background-color: $body-bg;
  font-size: 100%;
}

#app {
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  min-height: calc(100vh - 20px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
}

.cards-wrap {
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  position: relative;
}
</style>
