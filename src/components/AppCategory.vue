<template>
  <div id="category" class="expansion-panel" :style="{ color: color }">
    <div class="card-header">
      <h2>{{title}}</h2>

      <a class="panel-button" @click="toggle">
        <SvgIcon
          :icon="chevronUp"
          name="chevron-up"
          :color="color"
          v-if="!isCollapsed"
        />

        <SvgIcon
          :icon="chevronDown"
          name="chevron-down"
          :color="color"
          v-if="isCollapsed"
        />
      </a>
    </div>

    <div class="card-body" v-if="!isCollapsed">
      <div class="card-content">
        <AppLink
          v-for="app in applications"
          :key="app.id"
          :app="app"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '@/styles/main.css';

svg {
  width: 20px;
  height: 20px;
}

.card-header {
  display: flex;

  justify-content: space-between;
  align-items: center;

  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 8px;
}

#category {
  margin: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
}

</style>

<script>
import AppLink from './AppLink.vue';
import SvgIcon from './SvgIcon.vue';
import chevronUp from '@/assets/chevron-up.svg';
import chevronDown from '@/assets/chevron-down.svg';

export default {
  name: 'AppCategory',
  components: {
    AppLink,
    SvgIcon
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
      color: this.category.color,
      applications: this.category.applications,
      isCollapsed: false,
      chevronUp,
      chevronDown
    };
  },

  methods: {
    toggle() { this.isCollapsed = !this.isCollapsed; }
  }
};

</script>
