<template>
  <v-row>
    <v-col cols="12" md="3">
        <v-select
            label="จังหวัด"
            placeholder="--เลือกจังหวัด--"
            persistent-placeholder
            variant="outlined"
            density="compact"
            hide-details="auto"
        />
    </v-col>
    <v-col cols="12" md="3">
        <v-select
            label="สำนักทะเบียน"
            placeholder="--เลือกสำนักทะเบียน--"
            persistent-placeholder
            variant="outlined"
            density="compact"
            hide-details="auto"
        />
    </v-col>
    <v-col cols="12" md="3">
        <v-btn
            color="primary"
            rounded
            variant="outlined"
            hide-details="auto"
        >
        ตกลง
      </v-btn>

    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" md="3">
        <v-select
            label="ประเภทคำขอ"
            placeholder="--เลือกประเภทคำขอ--"
            persistent-placeholder
            variant="outlined"
            density="compact"
            hide-details="auto"
            :items="listRequest"
        />
    </v-col>
    <v-col cols="12" md="3">
        <v-text-field
            label="เลขที่ใบคำขอ"
            placeholder="ระบุเลขที่ใบคำขอ"
            persistent-placeholder
            variant="outlined"
            density="compact"
            hide-details="auto"
        />
    </v-col>
    <v-col cols="12" md="3">
        <v-text-field
            label="ปีใบคำขอ"
            placeholder="ระบุปีใบคำขอ"
            persistent-placeholder
            variant="outlined"
            density="compact"
            hide-details="auto"
        />
    </v-col>
  </v-row>
</template>

<script>
export default {
    data(){
        return {
            listRequest : [
                'คำขอ สบ.1 (ตั้งใหม่)',
                'คำขอ สบ.3 (ต่ออายุ)',
                'คำขอ ใบแทน'
            ],


        }
    }
}
</script>
