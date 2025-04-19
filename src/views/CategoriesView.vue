<template>
    <div class="categories">
        <AppCategory v-for="category in categories" :key="category.id" :category="category" />
    </div>
</template>

<style lang="css" scoped>
@import '@/styles/main.css';

</style>

<script>
import AppCategory from '@/components/AppCategory.vue';
import axios from 'axios';
import categoriesJson from '@/categories.json';

export default {
  name: 'CategoriesView',
  components: {
    AppCategory
  },

  data() {
    return {
      API_URL: 'https://portail.iut-orsay.fr/users/categories',
      categories: []
    };
  },

  methods: {
    async get_categories(prod = false) {
      if ( ! prod) return categoriesJson;

      try {
        const response = await axios.get(this.API_URL);
        this.categories = response.data;
      }

      catch (error) {
        console.error('Error fetching categories:', error);
      }
    }
  },

  async mounted() {
    let res = await this.get_categories();
    this.categories = JSON.parse(res.categories);
    console.log(this.categories);
  }
}

</script>
