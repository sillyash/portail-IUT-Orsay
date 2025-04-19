<template>
  <svg
    :width="width"
    :height="height"
    :aria-labelledby="name"
    role="presentation"
  >
    <title
      :id="name"
      lang="en"
    >{{ name }} icon</title>
    <g :fill="color">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'box'
    },

    width: {
      type: [Number, String],
      default: 18
    },

    height: {
      type: [Number, String],
      default: 18
    },

    color: {
      type: String,
      default: 'black'
    }
  }
}
</script>
