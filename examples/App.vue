<template>
  <div id="app">
    <beats-nav></beats-nav>
    <router-view></router-view>
  </div>
</template>
<script>
import BeatsNav from './pages/nav'

export default {
  name: 'app',
  components: {
    BeatsNav
  }
}

</script>
