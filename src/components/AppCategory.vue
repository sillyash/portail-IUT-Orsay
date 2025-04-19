<template>
  <div id="category" class="expansion-panel" :style="{ color: color }">
    <div class="card-header">
      <h2>{{title}}</h2>

      <a class="panel-button" @click="toggle">
        <Icon name="chevron-up" color="black" v-if="!isCollapsed"/>
        <Icon name="chevron-down" color="black" v-if="isCollapsed"/>
      </a>
    </div>

    <div class="card-body" v-if="!isCollapsed">
      <div class="card-content">
        <AppLink v-for="app in applications" :key="app.id" :app="app" />
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

#category {
  margin: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
}

</style>

<script>
import AppLink from './AppLink.vue';
import Icon from './Icon.vue';

export default {
  name: 'AppCategory',
  components: {
    AppLink,
    Icon
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
      isCollapsed: false
    };
  },

  methods: {
    toggle() { this.isCollapsed = !this.isCollapsed; }
  }
};

</script>
