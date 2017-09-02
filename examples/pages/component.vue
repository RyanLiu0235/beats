<template>
  <div class="component-wrapper">
    <div class="container clearfix">
      <div class="component-nav">
        <ul class="component-nav-wrapper">
          <li class="component-nav-item"
            v-for="c in components">
            <router-link :to="{name: c.name}" append>{{c.text}}</router-link>
          </li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import components from '../components.json'

export default {
  name: 'component-page',
  data() {
    return {
      components
    }
  }
}

</script>
<style lang="less">
.component-wrapper {
  margin-top: 20px;
  .component-nav {
    float: left;
    &-item {
      width: 200px;
      line-height: 30px;
      font-size: 14px;
      color: #333;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      a {
        display: block;
      }
    }
  }
}

</style>
