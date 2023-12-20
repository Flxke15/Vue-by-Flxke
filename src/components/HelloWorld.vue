<template>
  <Header header="ข้อมูลคำขอ"/>
  <v-row >
    <v-col cols="12" md="3">
      <v-text-field
        label="เลขที่ใบคำขอ"
        placeholder="ระบุเลขที่ใบคำขอ"
        persistent-placeholder
        variant="underlined"
        density="compact"
        hide-details="auto"
        readonly
      />
    </v-col>
    <v-col cols="12" md="3">
      <v-text-field
        label="วันที่"
        placeholder="วันที่"
        persistent-placeholder
        variant="underlined"
        density="compact"
        hide-details="auto"
        readonly
      />
    </v-col>
    <v-col cols="12" md="3">
      <v-text-field
        label="เขียนที่"
        placeholder="เขียนที่"
        persistent-placeholder
        variant="underlined"
        density="compact"
        hide-details="auto"
        readonly
      />
    </v-col>
  </v-row>
  <Header header="ข้อมูลใบอนุญาต สบ.2"/>
  <v-row >
    <v-col cols="12" md="3">
      <v-text-field
        label="เลขที่"
        placeholder="เลขที่"
        persistent-placeholder
        variant="outlined"
        density="compact"
        hide-details="auto"
        readonly
      />
    </v-col>
    <v-col cols="12" md="3">
      <v-text-field
        label="วันที่"
        placeholder="วันที่"
        persistent-placeholder
        variant="outlined"
        density="compact"
        hide-details="auto"
        readonly
      />
    </v-col>
  </v-row>
  <v-row >
    <v-col cols="12" md="3">
      <v-text-field
        label="วันที่มีผลบังคับใช้"
        placeholder="วันที่มีผลบังคับใช้"
        persistent-placeholder
        variant="outlined"
        density="compact"
        hide-details="auto"
        readonly
      />
    </v-col>
    <v-col cols="12" md="3">
      <v-text-field
        label="วันที่สิ้นอายุ"
        placeholder="วันที่สิ้นอายุ"
        persistent-placeholder
        variant="outlined"
        density="compact"
        hide-details="auto"
        readonly
      />
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" md="3">
      <v-text-field
        label="อายุ"
        placeholder="อายุ"
        persistent-placeholder
        variant="outlined"
        density="compact"
        hide-details="auto"
        readonly
      />
    </v-col>
    <v-col cols="12" md="3">
      <v-text-field
        label="สัญชาติ"
        placeholder="สัญชาติ"
        persistent-placeholder
        variant="outlined"
        density="compact"
        hide-details="auto"
        readonly
      />
    </v-col>
    <v-col cols="12" md="3">
      <v-text-field
        label="เชื้อชาติ"
        placeholder="เชื้อชาติ"
        persistent-placeholder
        variant="outlined"
        density="compact"
        hide-details="auto"
        readonly
      />
    </v-col>
    <v-col cols="12" md="3">
      <v-text-field
        label="บ้านเลขที่"
        placeholder="บ้านเลขที่"
        persistent-placeholder
        variant="outlined"
        density="compact"
        hide-details="auto"
        readonly
      />
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" md="3">
      <v-text-field
        label="หมู่ที่"
        placeholder="หมู่ที่"
        persistent-placeholder
        variant="outlined"
        density="compact"
        hide-details="auto"
        readonly
      />
    </v-col>
    <v-col cols="12" md="3">
      <v-text-field
        label="ตรอก"
        placeholder="ตรอก"
        persistent-placeholder
        variant="outlined"
        density="compact"
        hide-details="auto"
        readonly
      />
    </v-col>
    <v-col cols="12" md="3">
      <v-text-field
        label="ซอย"
        placeholder="ซอย"
        persistent-placeholder
        variant="outlined"
        density="compact"
        hide-details="auto"
        readonly
      />
    </v-col>
    <v-col cols="12" md="3">
      <v-text-field
        label="ถนน"
        placeholder="ถนน"
        persistent-placeholder
        variant="outlined"
        density="compact"
        hide-details="auto"
        readonly
      />
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" md="3">
      <v-select
        label="แขวง/ตำบล"
        placeholder="แขวง/ตำบล"
        persistent-placeholder
        variant="outlined"
        density="compact"
        hide-details="auto"
        readonly
      />
    </v-col>
    <v-col cols="12" md="3">
      <v-select
        label="เขต/อำเขต"
        placeholder="เขต/อำเขต"
        persistent-placeholder
        variant="outlined"
        density="compact"
        hide-details="auto"
        readonly
      />
    </v-col>
    <v-col cols="12" md="3">
      <v-select
        label="จังหวัด"
        placeholder="จังหวัด"
        persistent-placeholder
        variant="outlined"
        density="compact"
        hide-details="auto"
        readonly
      />
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" sm="6" lg="3">
      <p class="text-center "><span class="text-red">*  </span>สถานบริการตามมาตรา 3</p>
    </v-col>
    <v-col cols="12" sm="6" lg="4">
      <v-radio-group
        inline
        hide-details="auto"
        density="compact"
      >
        <v-radio label="(1)" value="1" class="mr-4"/>
        <v-radio label="(2)" value="2" class="mr-4"/>
        <v-radio label="(3)" value="3" class="mr-4"/>
        <v-radio label="(4)" value="4" class="mr-4"/>
        <v-radio label="(5)" value="5" class="mr-4"/>
      </v-radio-group>
    </v-col>
  </v-row>
  

</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  }
}
  //
</script>
