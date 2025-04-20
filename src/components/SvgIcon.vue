<template>
  <div v-if="icon" :style="{ width: width + 'px', height: height + 'px' }" v-html="sanitizedIcon"></div>

  <svg
    v-else
    :width="width"
    :height="height"
    :aria-labelledby="name"
    xmlns="http://www.w3.org/2000/svg"
    role="presentation"
  >
    <title
      :id="name"
      lang="en"
    >{{ name }} icon</title>
    <g :fill="color">
      <slot name="icon" />
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

    icon: {
      type: String,
      default: null
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
    },

    computed: {
      sanitizedIcon() {
        const parser = new DOMParser();
        const doc = parser.parseFromString(this.icon, 'image/svg+xml');
        return doc.documentElement.outerHTML;
      }
    }
  }
}
</script>
