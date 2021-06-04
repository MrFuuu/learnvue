<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>
          购物车
        </div>
      </template>
    </nav-bar>
    <recommend-view :recommends="recommends"/>
    <tab-control class="tab-control"
                 :titles="['流行','新款','精选']"
                 @tabClick="tabClick"></tab-control>
    <goods-list :goods="showGoods"></goods-list>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/context/tabControl/TabControl";
import GoodsList from "components/context/goods/GoodsList";

import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import {getHomeMultidata, getHomeGoods} from "network/home";
import GoodsList from "../../components/context/goods/GoodsList";


export default {
  name: "home",
  components:{
    GoodsList,
    NavBar,
    TabControl,

    RecommendView,
    FeatureView
  },
  data(){
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0,list: []},
        'news': {page:0,list: []},
        'sell': {page:0,list: []}
      },
      currentType: 'pop'
    }
  },
  computed: {
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  created() {
   this.getHomeMultidata();

   this.getHomeGoods()
  },
  methods: {
    getHomeMultidata() {
      //请求数据
      // getHomeMultidata().then(res => {
      //   console.log(res)
      //   this.banners = res.data.banner
      // })
    },
    getHomeGoods(type) {
      // const page = this.goods[type].page+1
      // getHomeGoods(type, page).then(res => {
      //
      // })
    },
    tabClick(index){
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
      }
    }
  }
}
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }

  .home-nav{
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>