<template>
  <div id="app">
    <!-- 单独铺一层绝对定位的 div，使背景虚化 -->
    <div class="cover"></div>
    <Header />
    <p>{{fullNmae}}</p>
    <Content />
    <Footer />
  </div>
</template>

<script>
import Header from "./layout/header.vue";
import Content from "./views/todo/content.vue";
import Footer from "./layout/footer.jsx";

export default {
  components: {
    Header,
    Footer,
    Content
  },
  mounted() {
    console.log(this.$store)
    let i = 1
    setInterval(() => {
      this.$store.commit('update', i++)
    }, 1000)
  },
  computed: {
    count() {
      return this.$store.state.count
    },
    fullNmae() {
      return this.$store.getters.fullName
    }
  }
};
</script>

<style lang="stylus" scoped>
#app
  position absolute
  left 0
  right 0
  top 0
  bottom 0
  .cover
    position absolute
    left 0
    top 0
    right 0
    bottom 0
    background-color #000
    opacity 0.6
    z-index -1
</style>


