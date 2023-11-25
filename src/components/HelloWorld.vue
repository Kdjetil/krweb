<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">

      <div class="text-body-2 font-weight-light mb-n1">Наверное будет хрень с кто сделал</div>

      <h3 class="text-h4 font-weight-bold">Смета ремонтных работ</h3>

      <div class="py-14" />

      <v-card color="#71efa3">
        <v-card-title class="text-center justify-center py-6">
          <h1 class="font-weight-bold text-h2 text-basil " style="color: rgb(142 160 239)">
            UgLin
          </h1>
        </v-card-title>
        <div class="pa-4">
          <v-tabs
            v-model="tab"
            bg-color="#71efa3"
          >
            <v-tab value="seven"><v-icon>mdi-home</v-icon> Объект </v-tab>
            <v-tab value="one"><v-icon>mdi-meter-electric</v-icon> Электрика </v-tab>
            <v-tab value="two"><v-icon>mdi-water-boiler</v-icon> Сантехника </v-tab>
            <v-tab value="three"><v-icon>mdi-wall</v-icon> Строй материалы </v-tab>
            <v-tab value="four"><v-icon>mdi-sofa-single</v-icon> Мебель </v-tab>
            <v-tab value="five"><v-icon>mdi-hvac</v-icon> Вентеляция </v-tab>
            <v-tab value="six"><v-icon>mdi-thermometer-low</v-icon> Отопление </v-tab>
          </v-tabs>
        </div>

        <v-card-text>
          <v-window v-model="tab">
            <v-window-item value="one">
              <v-row justify="left">
              <div class="text-caption pa-2" style="margin-top: 10px">Данные объекта</div>
              </v-row>
            </v-window-item>

            <v-window-item value="two">
              Two
            </v-window-item>

            <v-window-item value="three">
              Three
            </v-window-item>
            <v-window-item value="four">
              Four
            </v-window-item>
            <v-window-item value="five">
              Five
            </v-window-item>
            <v-window-item value="six">
              Six
            </v-window-item>
            <v-window-item value="seven">
              <client-info-tab/>
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script>
import ClientInfoTab from "@/components/ClientInfoTab.vue";

export default {
  components: {ClientInfoTab},
  data: () => ({
    tab: null,
  }),
}
</script>
<style scoped>
.test{
  color: #a7b7ff;
}
</style>
