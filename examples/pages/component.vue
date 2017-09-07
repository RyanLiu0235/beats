<template>
  <div class="component-wrapper">
    <div class="container clearfix">
      <div class="component-nav">
        <ul class="component-nav-wrapper">
          <li class="component-nav-item"
            v-for="c in components">
            <router-link :to="{name: c.name}"
              append>{{c.text}}</router-link>
          </li>
        </ul>
      </div>
      <div class="comp-demo-page">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import components from '../components.json'
import 'highlight.js/styles/github-gist.css'

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
    width: 200px;
    &-item {
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
  /* 组件展示页模块 */
  .comp-demo-page {
    float: right;
    width: 880px;
    .comp {
      &-title {
        line-height: 28px;
        font-size: 24px;
        color: #222;
        &:hover {
          .comp-block-anchor {
            opacity: 1;
          }
        }
      }
      &-desc {
        line-height: 20px;
        margin-top: 5px;
        font-size: 14px;
        color: #333;
      }
    }
    .comp-block {
      &-title {
        margin-top: 24px;
        font-size: 20px;
        color: #222;
        &:hover {
          .comp-block-anchor {
            opacity: 1;
          }
        }
      }
      &-desc {
        line-height: 20px;
        margin-top: 5px;
        font-size: 14px;
        color: #333;
      }
      &-anchor {
        margin-left: 4px;
        color: #00a1d6;
        opacity: 0;
        transition: opacity .2s ease;
      }
    }
  }
  .comp-demo {
    margin: 20px 0;
    border: 1px solid #f1f3f7;
    border-radius: 4px;
    .demo {
      padding: 20px;
      border-bottom: 1px solid #f1f3f7;
    }
    .source {
      padding: 20px;
      background-color: #f9f9f9;
    }
  }
}

</style>
