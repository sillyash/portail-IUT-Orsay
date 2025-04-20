<template>
  <ExpansionPanel class="expansion-panel" :color="color" width="100%">
    <template #card-header>
      <div class="card-header">
        <h2>{{ title }}</h2>
        <SvgIcon :color="color" :width="20" :height="20" @click="toggle" v-if="!isCollapsed">
          <template #path>
            <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
          </template>
        </SvgIcon>

        <SvgIcon :color="color" :width="20" :height="20" @click="toggle" v-else>
          <template #path>
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
          </template>
        </SvgIcon>
      </div>
    </template>

    <template #card-content>
      <div class="card-body" v-if="!isCollapsed">
        <AppLink
          v-for="app in applications"
          :key="app.id"
          :app="app"
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

svg {
  width: 20px;
  height: 20px;
}

.card-header {
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
}

.card-body {
  margin-top: 10px;
  border-radius: 4px;
}

</style>

<script>
import ExpansionPanel from './ExpansionPanel.vue';
import AppLink from './AppLink.vue';
import SvgIcon from './SvgIcon.vue';
import chevronUp from '@/assets/chevron-up.svg';
import chevronDown from '@/assets/chevron-down.svg';

export default {
  name: 'AppCategory',
  components: {
    AppLink,
    SvgIcon,
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
