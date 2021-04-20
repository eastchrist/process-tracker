<template>
  <div>
    <template v-if="!$route.meta.allowAnonymous">
      <v-app id="inspire">
        <div class="app-container">
          <navbar @toggleNavigationBar="drawer = !drawer"/>
          <sidebar :toggle="drawer"/>
          <v-main>
              <router-view/>
              <Footer/>
          </v-main>
        </div>
      </v-app>
    </template>
    <template v-else>
      <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </template>
  </div>
</template>

<script>
  import Navbar from "./layout/components/Navbar"
  import Sidebar from "./layout/components/Sidebar"
  import Footer from "./layout/components/Footer"

  export default {
    name: 'App',
    components: {
      Sidebar,
      Navbar,
      Footer,
    },
    data() {
      return {
        drawer: true
      }
    }
  }
</script>

<style>
  .v-btn:hover:before{
    color: transparent !important;
  }
</style>
