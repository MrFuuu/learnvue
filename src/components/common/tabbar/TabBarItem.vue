<template>
  <div class="tab-bar-item" @click="itemClick">
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      // isActive: false
    }
  },
  computed: {
    isActive(){
      return this.$route.path == this.path
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick(){
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }
</style>