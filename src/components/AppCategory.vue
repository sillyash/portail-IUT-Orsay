<template>
  <ExpansionPanel class="expansion-panel" :color="color" width="100%">
    <template #card-header>
      <div class="card-header" @click="toggle">
        <h2>{{ title }}</h2>
        <img
          :src="isCollapsed ? chevronDown : chevronUp"
          :alt="isCollapsed ? 'Expand' : 'Collapse'"
          :width="20"
          :height="20"
        />
      </div>
    </template>

    <template #card-content>
      <div class="card-body" v-if="!isCollapsed">
        <AppLink
          v-for="app in applications"
          :key="app.id"
          :app="app"
          :bgColor="color"
          :color="bgColor"
        />
      </div>
    </template>
  </ExpansionPanel>
</template>

<style scoped>
@import '@/styles/main.css';

.expansion-panel {
  background-color: v-bind(bgColor);
}

.card-header {
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
}

.card-body {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;
}
</style>

<script>
import ExpansionPanel from './ExpansionPanel.vue';
import AppLink from './AppLink.vue';
import chevronUp from '@/assets/chevron-up.svg';
import chevronDown from '@/assets/chevron-down.svg';

export default {
  name: 'AppCategory',
  components: {
    AppLink,
    ExpansionPanel
  },

  props: {
    category: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      title: this.category.title,
      color: 'white',
      bgColor: this.category.color,
      applications: this.category.applications,
      isCollapsed: true,
      chevronUp,
      chevronDown
    };
  },

  methods: {
    toggle() { this.isCollapsed = !this.isCollapsed; }
  }
};

</script>
