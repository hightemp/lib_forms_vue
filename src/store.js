import { createStore } from 'vuex'

import default_scheme from './default_scheme'


export default createStore({
    state () {
        return {
            oStructure: {
                form1: {
                    group_first: {
                        type: "group",
                        items: {
                            text_group_field1: {
                                label: "Текстовое поле из группы",
                                type: "text",
                            },
                            text_group_field2: {
                                label: "Текстовое поле из группы",
                                type: "text",
                            },
                            text_group_field3: {
                                label: "Текстовое поле из группы",
                                type: "text",
                            },
                        }
                    },
                    text_field: {
                        label: "Текстовое поле",
                        type: "text",
                    },
                    email_field: {
                        label: "email поле",
                        type: "email",
                    },
                    color_field: {
                        label: "Цветовое поле",
                        type: "color",
                    },
                    date_field: {
                        label: "date поле",
                        type: "date",
                    },
                    datetime_local_field: {
                        label: "datetime-local поле",
                        type: "datetime-local",
                    },
                    file_field: {
                        label: "file поле",
                        type: "file",
                    },
                    month_field: {
                        label: "month поле",
                        type: "month",
                    },
                    number_field: {
                        label: "number поле",
                        type: "number",
                    },
                    password_field: {
                        label: "password поле",
                        type: "password",
                    },
                    range_field: {
                        label: "range поле",
                        type: "range",
                        min: "0",
                        max: "100"
                    },
                    search_field: {
                        label: "search поле",
                        type: "search",
                    },
                    tel_field: {
                        label: "tel поле",
                        type: "tel",
                    },
                    time_field: {
                        label: "time поле",
                        type: "time",
                    },
                    url_field: {
                        label: "url поле",
                        type: "url",
                    },
                    week_field: {
                        label: "week поле",
                        type: "week",
                    },
                    checkbox_list_field: {
                        label: "checkbox_list поле",
                        type: "checkbox_list",
                        items: [
                            { label: "Выбор 1", value: "1" },
                            { label: "Выбор 2", value: "2" },
                            { label: "Выбор 3", value: "3" },
                            { label: "Выбор 4", value: "4" },
                            { label: "Выбор 5", value: "5" },
                        ]
                    },
                    radio_list_field: {
                        label: "radio_list поле",
                        type: "radio_list",
                        items: [
                            { label: "Выбор 1", value: "1" },
                            { label: "Выбор 2", value: "2" },
                            { label: "Выбор 3", value: "3" },
                            { label: "Выбор 4", value: "4" },
                            { label: "Выбор 5", value: "5" },
                        ]
                    },
                    select_field: {
                        label: "select поле",
                        type: "select",
                        items: [
                            { label: "Выбор 1", value: "1" },
                            { label: "Выбор 2", value: "2" },
                            { label: "Выбор 3", value: "3" },
                            { label: "Выбор 4", value: "4" },
                            { label: "Выбор 5", value: "5" },
                        ]
                    },
                },
                form2: {
                    text_field1: {
                        label: "Текстовое поле 1",
                        type: "text",
                    },
                    text_field2: {
                        label: "Текстовое поле 2",
                        type: "text",
                    },
                    text_field3: {
                        label: "Текстовое поле 3",
                        type: "text",
                    },
                },
                table2: {
                    field1: {
                        label: "Текстовое поле 1",
                        type: "text",
                    },
                    field2: {
                        label: "Текстовое поле 2",
                        type: "text",
                    },
                    text_field3: {
                        label: "Текстовое поле 3",
                        type: "text",
                    },
                }
            },
            oEditWindow: {
                form2:{
                    window_show: false,
                    edit_item: {},
                },
                table2:{
                    window_show: false,
                    edit_item: {},
                }
            },
            oDatabase: {
                table1: {
                    last_index: 6,
                    data: [
                        { id:1, text_field1: "Текстовое поле 1", text_field2: "Текстовое поле 1", text_field3: "Текстовое поле 1", },
                        { id:2, text_field1: "Текстовое поле 2", text_field2: "Текстовое поле 2", text_field3: "Текстовое поле 2", },
                        { id:3, text_field1: "Текстовое поле 3", text_field2: "Текстовое поле 3", text_field3: "Текстовое поле 3", },
                        { id:4, text_field1: "Текстовое поле 4", text_field2: "Текстовое поле 4", text_field3: "Текстовое поле 4", },
                        { id:5, text_field1: "Текстовое поле 5", text_field2: "Текстовое поле 5", text_field3: "Текстовое поле 5", },
                        { id:6, text_field1: "Текстовое поле 6", text_field2: "Текстовое поле 6", text_field3: "Текстовое поле 6", },
                    ],
                    selection_id: null,
                },
                table2: {
                    last_index: 15,
                    data: [
                        { id:1, field1: "1", field2: "1111", text_field3: "789", },
                        { id:2, field1: "2", field2: "2222", text_field3: "789", },
                        { id:3, field1: "3", field2: "333", text_field3: "789", },
                        { id:4, field1: "4", field2: "444", text_field3: "789", },
                        { id:5, field1: "5", field2: "444", text_field3: "789", },
                        { id:6, field1: "1", field2: "1111", text_field3: "789", },
                        { id:7, field1: "2", field2: "2222", text_field3: "789", },
                        { id:8, field1: "3", field2: "333", text_field3: "789", },
                        { id:9, field1: "4", field2: "444", text_field3: "789", },
                        { id:10, field1: "5", field2: "444", text_field3: "789", },
                        { id:11, field1: "1", field2: "1111", text_field3: "789", },
                        { id:12, field1: "2", field2: "2222", text_field3: "789", },
                        { id:13, field1: "3", field2: "333", text_field3: "789", },
                        { id:14, field1: "4", field2: "444", text_field3: "789", },
                        { id:15, field1: "5", field2: "444", text_field3: "789", },
                    ],
                    selection_id: null,
                    filter: {
                        field1: "", 
                        field2: "", 
                        text_field3: "",
                    }
                }
            },
            oForms: {
                form1: {
                    text_group_field1: "Тест1",
                    text_group_field2: "Тест2",
                    text_group_field3: "Тест3",
                    text_field: "Текст",
                    color_field: "#eeeeee",
                    email_field: "user@gmail.com",
                    date_field: "",
                    datetime_local_field: "",
                    file_field: "",
                    month_field: "",
                    number_field: "",
                    number_field: "",
                    password_field: "",
                    range_field: 0,
                    search_field: "",
                    tel_field: "",
                    time_field: "",
                    url_field: "",
                    week_field: "",
                    date_field: "",
                    checkbox_list_field: [],
                    select_field: "",
                },
                form2: {
                    text_field1: "",
                    text_field2: "",
                    text_field3: "",
                },
                table2: {
                    field1: "",
                    field2: "",
                    text_field3: "",
                }
            },
        }
    },
    mutations: {
        fnUpdateFormVar(state, { sFormName, sFieldName, mV }) {
            state.oForms[sFormName][sFieldName] = mV
        },
        fnUpdateDatabaseVar(state, { sTableName, sVarName, mV }) {
            state.oDatabase[sTableName][sVarName] = mV
        },
        fnUpdateVar(state, { sName, sV }) {
            state[sName] = sV
        },
        fnUpdateFilter(state, { sTableName, sName, sV }) {
            state.oDatabase[sTableName].filter[sName] = sV
        },
        fnHideEditWindow(state, sFormName) {
            state.oEditWindow[sFormName].window_show = false
        },
        fnShowEditWindow(state, { sFormName, oItem }) {
            state.oEditWindow[sFormName].window_show = true
            state.oEditWindow[sFormName].edit_item = oItem
            console.log('>>>', oItem)
            for (var sN in state.oForms[sFormName]) {
                if (sN in oItem) {
                    state.oForms[sFormName][sN] = oItem[sN]
                } else {
                    state.oForms[sFormName][sN] = ""
                }
            }
        },
        fnEditWindowSave(state, { sTableName, sFormName }) {
            for (var sN in state.oForms[sFormName]) {
                state.oEditWindow[sFormName].edit_item[sN] = state.oForms[sFormName][sN]
            }
            if (!state.oEditWindow[sFormName].edit_item.id) {
                state.oEditWindow[sFormName].edit_item.id = ++state.oDatabase[sTableName][`last_index`]
                state.oDatabase[sTableName][`data`].push(state.oEditWindow[sFormName].edit_item)
            }
        },
        fnRemoveFromTable(state, { sTableName, oItem }) {
            state.oDatabase[sTableName][`data`] = state.oDatabase[sTableName][`data`].filter((oI) => oI.id != oItem.id)
        }
    },
    actions: {
        fnGetFieldValue: ({ state, getters }) => (sFormName, sFieldName) => {
            return getters.fnGetFieldValue(sFormName, sFieldName)
        }
    },
    getters: {
        fnGetFieldValue: (state) => (sFormName, sFieldName) => {
            return state.oForms[sFormName][sFieldName]
        }
    }
})