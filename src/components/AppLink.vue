<template>
  <div>
    <h3 v-text="title"></h3>
    <p v-text="description"></p>
  </div>
</template>

<script>

export default {
  name: 'AppLink',
  props: {
    app: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      title: this.app.title,
      description: this.app.description
    };
  },

  methods: {
    // Define your component methods here
  }
};

</script>
