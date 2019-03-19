<template>
  <div id="app">
    <div class="container">
      <header-nav></header-nav>

    </div>
    <div class="container">
      <router-view/>

    </div>
    <div class="container">
      <div class="row mt-5">
        <div class="col-sm-12 col-md-4">
          <router-view name="history"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="orderingGuide"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="delivery"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from './components/Header';
export default {
  data () {
    return{

    }
  },
  components:{
    HeaderNav
  }
}
</script>

<style>


</style>
