<template>
    <div class="d-flex align-center pb-5">
      <v-icon v-if="icon" style="font-size: 30px" class="pr-2" :color="color">
        {{ icon }}
      </v-icon>
     <h2>{{ header }}</h2>
    </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
    },
    icon: {
      type: String,
      default: '',
    },
    header: {
      type: String,
      default: '',
    },
  },
}
</script>
