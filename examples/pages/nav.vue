<template>
  <div class="nav-wrapper">
    <div class="container clearfix">
      <h1 class="nav-title">
        <router-link :to="{name: 'index'}" exact>Beats</router-link>
      </h1>
      <ul class="nav-links clearfix">
        <li class="nav-links-item">
          <router-link :to="{name: 'components'}"
            exact>组件</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'nav-page'
}

</script>
<style lang="less">
.nav-wrapper {
  background-color: #00a7de;
  color: #fff;
  .nav-title {
    float: left;
    line-height: 60px;
    font-size: 24px;
    a:hover {
      color: #fff;
    }
  }

  .nav-links {
    float: right;
    li {
      position: relative;
      float: left;
    }
    a {
      display: block;
      line-height: 20px;
      width: 50px;
      padding: 20px 0;
      font-size: 14px;
      text-align: center;
      cursor: pointer;
      &:hover {
        color: darken(#fff, 5%);
      }
      &.active-link {
        &:after {
          content: '';
          position: absolute;
          z-index: 1;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0;
          border-top: 4px solid darken(#fff, 10%);
        }
      }
    }
  }
}

</style>
