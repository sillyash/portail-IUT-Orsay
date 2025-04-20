<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="viewBox"
  >
    <slot name="path"></slot>
  </svg>
</template>

<style scoped>
svg {
  fill: var(--svg-color);
  stroke: var(--svg-color);
  color: var(--svg-color);
}
</style>

<script>
export default {
  name: 'SvgIcon',
  props: {
    width: {
      type: String,
      default: '16'
    },

    height: {
      type: String,
      default: '16'
    },

    color: {
      type: String,
      default: '#000'
    }
  },
  mounted() {
    this.$el.style.setProperty('--svg-color', this.color);
  },

  computed: {
    viewBox() {
      return `0 0 ${this.width} ${this.height}`;
    }
  }
}
</script>
