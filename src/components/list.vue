<template>
    <div class="list_top-panel">
        <input type="text" class="form-control" v-model="sFilter"  />
        <dropdown :items="aDropdownMenu" @clickitem="fnDropdownMenuItemClick" />
    </div>
    <div class="list_wrapper">
        <div class="list-group">
            <a v-for="oItem in aItems" :key="oItem"
                href="#" :class="'list-group-item list-group-item-action '+(oItem.id == sSelectedID ? 'active' :'')" @click="(oE) => fnItemClick(oItem)">
                <slot v-bind:oItem="oItem"></slot>
            </a>
        </div>
    </div>
    <edit_window title="Редактирование" :form_name="form_name" :table_name="table_name" />
</template>

<script>

import { mapMutations, mapState, mapActions, mapGetters } from 'vuex'
import { a, cc } from "../lib"

import dropdown from "./dropdown.vue"
import edit_window from "./edit_window.vue"

export default {
    props: ['modelValue', 'form_name', 'table_name', 'filter_field', 'relation_field'],
    emits: ['clickitem', 'update:modelValue'],

    components: {
        dropdown,
        edit_window
    },

    watch: {
        oSelectedRelationItem(oN, oO) {
            var aItems = this.aItems
            if (aItems[0]) {
                this.fnItemClick(aItems[0])
            } else {
                this.fnItemClick(null)
            }
        }
    },

    computed: {
        oSelectedItem: {
            get() {
                return this.$store.state.oDatabase[this.table_name][`selection_item`]
            },
            set(mV) {
                this.$store.commit('fnUpdateDatabaseVar', { sTableName: this.table_name, sVarName: `selection_item`, mV })
            }
        },
        oSelectedRelationItem: {
            get() {
                if (this.relation_field) {
                    var oRF = this.$store.state.oStructure[this.table_name][this.relation_field]
                    var aRT = this.$store.state.oDatabase[oRF.table]
                    return aRT[`selection_item`]
                } else {
                    return null
                }
            },
        },
        sSelectedID: {
            get() {
                return this.$store.state.oDatabase[this.table_name][`selection_id`]
            },
            set(mV) {
                this.$store.commit('fnUpdateDatabaseVar', { sTableName: this.table_name, sVarName: `selection_id`, mV })
            }
        },
        aItems() {
            var aD = this.$store.state.oDatabase[this.table_name][`data`]
            if (this.relation_field) {
                if (!this.oSelectedRelationItem) {
                    aD = []
                } else {
                    aD = aD.filter((oI) => this.oSelectedRelationItem.id==oI[this.relation_field] )
                }
            }
            if (this.filter_field) {
                aD = aD.filter((oI) => oI[this.filter_field] && ~oI[this.filter_field].indexOf(this.sFilter))
            }
            return aD
        }
    },

    data() {
        return {
            sFilter: "",
            oSelectedItem: null,

            aDropdownMenu: [
                { id:"add", title:'<i class="bi bi-plus-lg"></i> Добавить' },
                { id:"edit", title:'<i class="bi bi-pencil"></i> Редактировать' },
                { id:"delete", title:'<i class="bi bi-trash"></i> Удалить' },
            ],
        }
    },

    methods: {
        ...mapMutations(a`fnShowEditWindow fnRemoveFromTable`),
        fnItemClick(oItem) {
            this.sSelectedID = oItem ? oItem.id : null
            this.oSelectedItem = oItem
            this.$store.commit('fnUpdateDatabaseVar', { sTableName: this.table_name, sVarName: `selection_item`, mV:oItem })
            this.$emit('update:modelValue', oItem)
            this.$emit('clickitem', oItem)
        },
        fnDropdownMenuItemClick(oItem) {
            if (oItem.id == "add") {
                this.fnShowEditWindow({ sFormName: this.form_name, oItem: {} })
            }
            if (oItem.id == "edit") {
                if (!this.oSelectedItem) {
                    alert("Нужно выбрать");
                }
                this.fnShowEditWindow({ sFormName: this.form_name, oItem: this.oSelectedItem })
            }
            if (oItem.id == "delete") {
                this.fnRemoveFromTable({ sTableName: this.table_name, oItem: this.oSelectedItem })
            }
        }
    }
}
</script>

<style>
.list_top-panel {
    display: flex;
}

.list_wrapper {
    height: 100%;
}
</style>