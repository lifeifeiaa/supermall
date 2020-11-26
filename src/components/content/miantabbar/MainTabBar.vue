<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <!--使用别名进行对图片的配置，别名前加一个‘~’  -->
      <img slot="item-img" src="~assets/img/tabbar/home.svg">
      <img slot="item-img-active" src="~assets/img/tabbar/home-active.svg">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-img" src="~assets/img/tabbar/category.svg">
      <img slot="item-img-active" src="~assets/img/tabbar/category-active.svg">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopcart">
      <img slot="item-img" src="~assets/img/tabbar/shopcart.svg">
      <img slot="item-img-active" src="~assets/img/tabbar/shopcart-active.svg">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-img" src="~assets/img/tabbar/profile.svg">
      <img slot="item-img-active" src="~assets/img/tabbar/profile-active.svg">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "../../common/tabbar/TabBar";
  import TabBarItem from "../../common/tabbar/TabBarItem";

    export default {
        name: "MainTabBar",
      components:{
          TabBar,
        TabBarItem
      }
    }
</script>

<style scoped>

</style>
