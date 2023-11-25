<template>
  <v-text-field label="ФИО заказчика" v-model="text"></v-text-field>
  <v-text-field label="Номер телефона заказчика" v-model="text"></v-text-field>
  <v-text-field label="Адрес" v-model="text"></v-text-field>
</template>
<script>
export default {
  name: 'client-info-tab'
}
</script>