<template>
  <div id="category" class="expansion-panel" :style="{ color: color }">
    <slot name="card-header"></slot>
    <slot name="card-content" v-if="!isCollapsed"></slot>
  </div>
</template>

<style scoped>
.expansion-panel {
  margin: 10px 0;
  padding: 0 8px;
  border: 3px solid v-bind(color);
  border-radius: 10px;
}
</style>

<script>
export default {
  name: 'ExpansionPanel',
  props: {
    color: {
      type: String,
      default: 'black'
    }
  },

  data() {
    return {
      isCollapsed: false
    };
  },

  methods: {
    toggle() {
      this.isCollapsed = !this.isCollapsed;
    }
  }
}
</script>
