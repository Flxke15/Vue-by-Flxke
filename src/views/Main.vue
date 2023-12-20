<template>
  <v-container fluid>
    <SelectBar/>
    <HelloWorld />  
  </v-container>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import SelectBar from '@/components/SelectBar.vue'

export default {
  components: {
    HelloWorld,
    SelectBar,
  }
}
</script>
