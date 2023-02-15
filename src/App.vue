<template>
  <div class="wrapper">
    <div class="list-group">
      <a href="#" :class="'list-group-item list-group-item-action '+(sMode=='forms' ? 'active' :'')" @click="sMode='forms'">Формы</a>
      <a href="#" :class="'list-group-item list-group-item-action '+(sMode=='lists' ? 'active' :'')" @click="sMode='lists'">Списки</a>
      <a href="#" :class="'list-group-item list-group-item-action '+(sMode=='tables' ? 'active' :'')" @click="sMode='tables'">Таблицы</a>
    </div>
    <template v-if="sMode=='forms'">
      <div class="container">
        <h3>Формы</h3>
        <div class="container-inner">
          <forms :form_name="'form1'" />
        </div>
      </div>
    </template>
    <template v-if="sMode=='lists'">
      <div class="container">
        <h3>Списки</h3>
        <div class="container-inner">
          <div style="width: 300px">
            <list :form_name="'form2'" :table_name="'table1'" :filter_field="'text_field1'">
              <template v-slot:default="p">
                {{ p.oItem.text_field1 }}
              </template>
            </list>
          </div>
        </div>
      </div>
    </template>
    <template v-if="sMode=='tables'">
      <div class="container">
        <h3>Таблицы</h3>
        <div class="">
          <grid :table_name="'table2'" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>

import forms from "./components/forms.vue"
import list from "./components/list.vue"
import grid from "./components/grid.vue"

export default {
  name: 'App',

  components: {
    forms,
    list,
    grid
  },

  data() {
    return {
      sMode: "tables",
    }
  }
}
</script>

<style>
:root {
  font-size: 12px;
}
* {
  border-radius: 0px !important;
}
html, body {
  padding: 0px;
  margin: 0px;
  height: 100%;
}
#app {
  height: 100%;
}
.wrapper {
  display: grid;
  grid-template-columns: 200px 1fr;
}
.wrapper {
  height: 100%;
}
.container-inner {
  height: calc(100vh - 50px);
  overflow-y: scroll;
}
.mb-3 input[type=checkbox]{
  margin: 3px;
}
.mb-3 input[type=radio]{
  margin: 3px;
}
</style>
