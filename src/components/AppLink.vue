<template>
  <a :href="link" target="_blank" rel="noopener noreferrer">
    <div class="app-link">
      <h3 v-text="title"></h3>
      <img :src="getIcon" alt="App Icon" />
    </div>
  </a>
</template>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}

.app-link {
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;
  text-align: center;

  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-word;

  width: 100px;
  height: 140px;
  margin: 8px 5px;

  background-color: v-bind(bgColor);
  color: v-bind(color);

  border: 1px solid v-bind(color);
  border-radius: 8px;
}

.app-link h3 {
  width: 100%;
  margin: 6px 0;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
  font-weight: bold;

  color: v-bind(color);
  align-self: flex-start;
}

.app-link img {
  width: 100%;
  height: 100%;

  align-self: flex-end;

  object-fit: contain;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>

<script>
export default {
  name: 'AppLink',
  props: {
    app: {
      type: Object,
      required: true
    },
    color: {
      type: String,
      default: 'black'
    },
    bgColor: {
      type: String,
      default: 'white'
    }
  },

  data() {
    return {
      title: this.app.title,
      description: this.app.content,
      icon: this.app.icon,
      link: this.app.link
    };
  },

  computed: {
    getIcon() {
      const prefix = 'https://portail.iut-orsay.fr/images/';
      return prefix + this.icon;
    }
  },
};
</script>
