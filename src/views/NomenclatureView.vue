<template>
  <v-container class="fill-height">
    <v-responsive class="text-center fill-height">
      <h2 class="text-h4 font-weight-bold"> Номенклатура ремонтных работ </h2>
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
                <v-col cols="auto">
                    <div class="text-h6 pa-2" style="margin-top: 10px">
                      <v-data-table color="#a7b7ff" style="background-color: #a7b7ff; border-radius: 5px" :items="items"></v-data-table>

                  </div>

                </v-col>
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
          </v-window>
        </v-card-text>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script>
  import ClientInfoTab from "@/components/ClientInfoTab.vue";

  export default {
    components: {},
    data: () => ({
      tab: null,
    }),
  }
</script>
<script setup>
const items = [
  {
    Название: 'Силовой кабель',
    Еденицы: '1 Метр',
    Цена: '100 Р/метр',
  },
  // ... more items
]
</script>
