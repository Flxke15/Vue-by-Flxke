<template>
  <!-- <AppBar/> -->
  <router-view :key="$route.fullPath"/>
</template>

<script>
import AppBar from '@/components/AppBar.vue'

export default {
  components: {
    AppBar
  }
}
</script>
