import variables from "@/styles/_variables.scss";
import i18n from "@/i18n";

import { ITableDataUiDesignedWithData, ITableDataUiDesignedWithoutData } from "@/api/types";

//'Tab05 '
export const defaultFonctionAlarmByAreas: ITableDataUiDesignedWithData = {
    title: {
        text: 'Tab05 ' + i18n.t('tables.fonctionAlarmByAreas.title') + '',
        height: "10px",
        "background-color": variables.tableTitleBgColor,
        "textAlign": "left",
        "padding": "0px",
        "font": {
            "family": variables.tableTitleFontFamily,
            "color": variables.tableTitleColor,
            "size": "10px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableTitleBordureLength,
            color: variables.tableTitleBordureColor,
        },
    },
    header: {
        text: [
            i18n.t(`tables.fonctionAlarmByAreas.header.header1`) + '',
            i18n.t(`tables.fonctionAlarmByAreas.header.header2`) + '',
            i18n.t(`tables.fonctionAlarmByAreas.header.header3`) + '',
            i18n.t(`tables.fonctionAlarmByAreas.header.header4`) + '',
            i18n.t(`tables.fonctionAlarmByAreas.header.header5`) + '',
            i18n.t(`tables.fonctionAlarmByAreas.header.header6`) + '',
        ],
        height: "10px",
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableSubTitleFontFamily,
            "color": variables.tableSubTitleColor,
            "size": "10px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableSubTitleBordureLength,
            color: variables.tableSubTitleBordureColor,
        },

    },
    columns: {
        height: "10px",
        enabled: [true,true,true,true,true,false],
        design: [
            { "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "0px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": "10px", "weight": "normal"} },
            { "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '400px', "padding": "0px", "font": { "family": variables.tableColumnFontFamily, "color": "green", "size": "10px", "weight": "normal" } },
            { "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "0px", "font": { "family": variables.tableColumnFontFamily, "color": "green", "size": "10px", "weight": "normal" } },
            { "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "0px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": "10px", "weight": "normal" } },
            { "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "0px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": "10px", "weight": "normal" } },
            { "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "0px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": "10px", "weight": "normal" } },
        ],
        bordure: {
            length: 1,
            color: "black"
        },
    },
    data: []
}
//'Tab06 '
export const defaultFonctionNotLinkedByAreas: ITableDataUiDesignedWithData = {
    title: {
        text: 'Tab06 ' + i18n.t('tables.fonctionNotLinkedByAreas.title') + '',
        height: "10px",
        "background-color": variables.tableTitleBgColor,
        "textAlign": "left",
        "padding": "0px",
        "font": {
            "family": variables.tableTitleFontFamily,
            "color": variables.tableTitleColor,
            "size": "10px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableTitleBordureLength,
            color: variables.tableTitleBordureColor,
        },
    },
    header: {
        text: [
            i18n.t(`tables.fonctionNotLinkedByAreas.header.header1`) + '',
            i18n.t(`tables.fonctionNotLinkedByAreas.header.header2`) + '',
            i18n.t(`tables.fonctionNotLinkedByAreas.header.header3`) + '',
            i18n.t(`tables.fonctionNotLinkedByAreas.header.header4`) + '',
            i18n.t(`tables.fonctionNotLinkedByAreas.header.header5`) + '',
            i18n.t(`tables.fonctionNotLinkedByAreas.header.header6`) + '',
        ],
        height: "10px",
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableSubTitleFontFamily,
            "color": variables.tableSubTitleColor,
            "size": "10px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableSubTitleBordureLength,
            color: variables.tableSubTitleBordureColor,
        },
    },
    columns: {
        height: "10px",
        enabled: [true,true,true,true,true,false],
        design: [
            { "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": "10px", "weight": "normal" } },
            { "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '400px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "green", "size": "10px", "weight": "normal" } },
            { "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "green", "size": "10px", "weight": "normal" } },
            { "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": "10px", "weight": "normal" } },
            { "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": "10px", "weight": "normal" } },
            { "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "0px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": "10px", "weight": "normal" } },
        ],
        bordure: {
            length: 1,
            color: "black"
        },
    },
    data: []
}
//'Tab07 '
export const defaultFonctionNeverDoneByAreas: ITableDataUiDesignedWithData = {
    title: {
        text: 'Tab07 ' + i18n.t('tables.fonctionNeverDoneByAreas.title') + '',
        height: "10px",
        "background-color": variables.tableTitleBgColor,
        "textAlign": "left",
        "padding": "0px",
        "font": {
            "family": variables.tableTitleFontFamily,
            "color": variables.tableTitleColor,
            "size": "10px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableTitleBordureLength,
            color: variables.tableTitleBordureColor,
        },
    },
    header: {
        text: [
            i18n.t(`tables.fonctionNeverDoneByAreas.header.header1`) + '',
            i18n.t(`tables.fonctionNeverDoneByAreas.header.header2`) + '',
            i18n.t(`tables.fonctionNeverDoneByAreas.header.header3`) + '',
            i18n.t(`tables.fonctionNeverDoneByAreas.header.header4`) + '',
            i18n.t(`tables.fonctionNeverDoneByAreas.header.header5`) + '',
            i18n.t(`tables.fonctionNeverDoneByAreas.header.header6`) + '',
        ],
        height: "10px",
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableSubTitleFontFamily,
            "color": variables.tableSubTitleColor,
            "size": "10px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableSubTitleBordureLength,
            color: variables.tableSubTitleBordureColor,
        },
    },
    columns: {
        height: "10px",
        enabled: [true,true,false,true,false,true],
        design: [
            { "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": "10px", "weight": "normal" } },
            { "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '400px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "green", "size": "10px", "weight": "normal" } },
            { "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "green", "size": "10px", "weight": "normal" } },
            { "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": "10px", "weight": "normal" } },
            { "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": "10px", "weight": "normal" } },
            { "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "0px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": "10px", "weight": "normal" } },
        ],
        bordure: {
            length: 1,
            color: "black"
        },
    },
    data: []
}
//'Tab08 '
export const defaultFonctionToCheckByAreas: ITableDataUiDesignedWithData = {
    title: {
        text: 'Tab08 ' + i18n.t('tables.fonctionToCheckByAreas.title') + '',
        height: "10px",
        "background-color": variables.tableTitleBgColor,
        "textAlign": "left",
        "padding": "0px",
        "font": {
            "family": variables.tableTitleFontFamily,
            "color": variables.tableTitleColor,
            "size": "10px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableTitleBordureLength,
            color: variables.tableTitleBordureColor,
        },
    },
    header: {
        text: [
            i18n.t(`tables.fonctionToCheckByAreas.header.header1`) + '',
            i18n.t(`tables.fonctionToCheckByAreas.header.header2`) + '',
            i18n.t(`tables.fonctionToCheckByAreas.header.header3`) + '',
            i18n.t(`tables.fonctionToCheckByAreas.header.header4`) + '',
            i18n.t(`tables.fonctionToCheckByAreas.header.header5`) + '',
            i18n.t(`tables.fonctionToCheckByAreas.header.header6`) + '',
        ],
        height: "10px",
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableSubTitleFontFamily,
            "color": variables.tableSubTitleColor,
            "size": "10px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableSubTitleBordureLength,
            color: variables.tableSubTitleBordureColor,
        },
    },
    columns: {
        height: "10px",
        enabled: [true,true,false,true,false,false],
        design: [
            { "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "0px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": "10px", "weight": "normal" } },
            { "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '400px', "padding": "0px", "font": { "family": variables.tableColumnFontFamily, "color": "green", "size": "10px", "weight": "normal" } },
            { "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "0px", "font": { "family": variables.tableColumnFontFamily, "color": "green", "size": "10px", "weight": "normal" } },
            { "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "0px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": "10px", "weight": "normal" } },
            { "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "0px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": "10px", "weight": "normal" } },
            { "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "0px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": "10px", "weight": "normal" } },
        ],
        bordure: {
            length: 1,
            color: "black"
        },
    },
    data: []
}

/*
export const defaultFonctionCartoDesignTable: ITableDataUiDesignedWithData  = {
    title: {
        text: i18n.t('tables.fonctionxxx.title') + '',
        height: "20px",
        "background-color": variables.tableTitleBgColor,
        "textAlign": "left",
        "padding": "0px",
        "font": {
            "family": variables.tableTitleFontFamily,
            "color": variables.tableTitleColor,
            "size": variables.tableTitleFontFamilySize + "px",
        },
        "bordure": {
            length: variables.tableTitleBordureLength,
            color: variables.tableTitleBordureColor,
        },
    },
    header: {
        text: ['TOTO','TOTO','TOTO','TOTO','TOTO','TOTO','TOTO','TOTO','TOTO','TOTO','TOTO','TOTO','TOTO','TOTO',],
        height: "20px",
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableSubTitleFontFamily,
            "color": variables.tableSubTitleColor,
            "size": variables.tableSubTitleFontFamilySize + "px",
        },
        "bordure": {
            length: variables.tableSubTitleBordureLength,
            color: variables.tableSubTitleBordureColor,
        },
    },
    columns: {
        height: "20px",
        design: [
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '270px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },

            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '100px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '100px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '100px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },

            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },

            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },

            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },

            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },

            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },

        ],
        bordure: {
            length: variables.tableColumnBordureLength,
            color: variables.tableColumnBordureColor,
        },
    },
    data: []
}
*/

//Tables Administatrator
export const defaultUserDesignTable: ITableDataUiDesignedWithoutData  = {
    title: {
        text: i18n.t('tables.password.title') + '',
        height: "20px",
        "background-color": variables.tableTitleBgColor,
        "textAlign": "left",
        "padding": "0px",
        "font": {
            "family": variables.tableTitleFontFamily,
            "color": variables.tableTitleColor,
            "size": variables.tableTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableTitleBordureLength,
            color: variables.tableTitleBordureColor,
        },
    },
    header: {
        text: [
            'Drag',
            i18n.t(`tables.password.champs.champs3`) + '',
            i18n.t(`tables.password.champs.champs4`) + '',
            i18n.t(`tables.password.champs.champs5`) + '',
            i18n.t(`tables.password.champs.champs6`) + '',
            i18n.t(`tables.password.champs.champs7`) + '',
        ],
        height: "20px",
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableSubTitleFontFamily,
            "color": variables.tableSubTitleColor,
            "size": variables.tableSubTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableSubTitleBordureLength,
            color: variables.tableSubTitleBordureColor,
        },
    },
    columns: {
        height: "20px",
        design: [
            { "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '70px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            { "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '250px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "green", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            { "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '250px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "green", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            { "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '250px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            { "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '350px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            { "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '150px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
        ],
        bordure: {
            length: variables.tableColumnBordureLength,
            color: variables.tableColumnBordureColor,
        },
    },
}
export const defaultAnalogDesignTable: ITableDataUiDesignedWithoutData = {
    title: {
        text: i18n.t('tables.analog.title') + '',
        height: "20px",
        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableTitleFontFamily,
            "color": variables.tableTitleColor,
            "size": variables.tableTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableTitleBordureLength,
            color: variables.tableTitleBordureColor,
        },
    },
    header: {
        text: [
            'Drag',
            i18n.t(`tables.analog.champs.champs3`) + '',
            i18n.t(`tables.analog.champs.champs4`) + '',
            i18n.t(`tables.analog.champs.champs5`) + '',
            i18n.t(`tables.analog.champs.champs6`) + '',
            i18n.t(`tables.analog.champs.champs7`) + '',
            i18n.t(`tables.analog.champs.champs8`) + '',
            i18n.t(`tables.analog.champs.champs9`) + '',
            i18n.t(`tables.analog.champs.champs10`) + '',
            i18n.t(`tables.analog.champs.champs12`) + '',
        ],
        height: "20px",
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableSubTitleFontFamily,
            "color": variables.tableSubTitleColor,
            "size": variables.tableSubTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableSubTitleBordureLength,
            color: variables.tableSubTitleBordureColor,
        },
    },
    columns: {
        height: "20px",
        design: [
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '270px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '270px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '270px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '400px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
        ],
        bordure: {
            length: variables.tableColumnBordureLength,
            color: variables.tableColumnBordureColor,
        },
    },
}
export const defaultAreaDesignTable: ITableDataUiDesignedWithoutData  = {
    title: {
        text: i18n.t('tables.area.title') + '',
        height: "20px",
        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableTitleFontFamily,
            "color": variables.tableTitleColor,
            "size": variables.tableTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableTitleBordureLength,
            color: variables.tableTitleBordureColor,
        },
    },
    header: {
        text: [
            'Drag',
            i18n.t(`tables.area.champs.champs4`) + '',
            i18n.t(`tables.area.champs.champs5`) + '',
            i18n.t(`tables.area.champs.champs6`) + '',
            i18n.t(`tables.area.champs.champs7`) + '',
            i18n.t(`tables.area.champs.champs8`) + '',
        ],
        height: "20px",
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableSubTitleFontFamily,
            "color": variables.tableSubTitleColor,
            "size": variables.tableSubTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableSubTitleBordureLength,
            color: variables.tableSubTitleBordureColor,
        },
    },
    columns: {
        height: "20px",
        design: [
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '70px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
        ],
        bordure: {
            length: variables.tableColumnBordureLength,
            color: variables.tableColumnBordureColor,
        },
    },
}
export const defaultComputerDesignTable: ITableDataUiDesignedWithoutData  = {
    title: {
        text: i18n.t('tables.computer.title') + '',
        height: "20px",
        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableTitleFontFamily,
            "color": variables.tableTitleColor,
            "size": variables.tableTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableTitleBordureLength,
            color: variables.tableTitleBordureColor,
        },
    },
    header: {
        text: [
            'Drag',
            i18n.t(`tables.computer.champs.champs4`) + '',
            i18n.t(`tables.computer.champs.champs5`) + '',
            i18n.t(`tables.computer.champs.champs6`) + '',
            i18n.t(`tables.computer.champs.champs7`) + '',
            i18n.t(`tables.computer.champs.champs8`) + '',
        ],
        height: "20px",
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableSubTitleFontFamily,
            "color": variables.tableSubTitleColor,
            "size": variables.tableSubTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableSubTitleBordureLength,
            color: variables.tableSubTitleBordureColor,
        },
    },
    columns: {
        height: "20px",
        design: [
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '70px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '250px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '500px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
        ],
        bordure: {
            length: variables.tableColumnBordureLength,
            color: variables.tableColumnBordureColor,
        },
    },
}
export const defaultDigitalDesignTable: ITableDataUiDesignedWithoutData  = {
    title: {
        text: i18n.t('tables.digital.title') + '',
        height: "20px",
        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableTitleFontFamily,
            "color": variables.tableTitleColor,
            "size": variables.tableTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableTitleBordureLength,
            color: variables.tableTitleBordureColor,
        },
    },
    header: {
        text: [
            'Drag',
            i18n.t(`tables.digital.champs.champs3`) + '',
            i18n.t(`tables.digital.champs.champs4`) + '',
            i18n.t(`tables.digital.champs.champs5`) + '',
            i18n.t(`tables.digital.champs.champs6`) + '',
            i18n.t(`tables.digital.champs.champs7`) + '',
            i18n.t(`tables.digital.champs.champs8`) + '',
            i18n.t(`tables.digital.champs.champs9`) + '',
            i18n.t(`tables.digital.champs.champs11`) + '',
        ],
        height: "20px",
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableSubTitleFontFamily,
            "color": variables.tableSubTitleColor,
            "size": variables.tableSubTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableSubTitleBordureLength,
            color: variables.tableSubTitleBordureColor,
        },
    },
    columns: {
        height: "20px",
        design: [
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '70px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '270px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '270px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '270px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '270px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '270px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '270px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
        ],
        bordure: {
            length: variables.tableColumnBordureLength,
            color: variables.tableColumnBordureColor,
        },
    },
}
export const defaultEquipDesignTable: ITableDataUiDesignedWithoutData  = {
    title: {
        text: i18n.t('tables.equip.title') + '',
        height: "20px",
        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableTitleFontFamily,
            "color": variables.tableTitleColor,
            "size": variables.tableTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableTitleBordureLength,
            color: variables.tableTitleBordureColor,
        },
    },
    header: {
        text: [
            'Drag',
            i18n.t(`tables.equip.champs.champs4`) + '',
            i18n.t(`tables.equip.champs.champs5`) + '',
            i18n.t(`tables.equip.champs.champs6`) + '',
            i18n.t(`tables.equip.champs.champs7`) + '',
            i18n.t(`tables.equip.champs.champs8`) + '',
            i18n.t(`tables.equip.champs.champs9`) + '',
            i18n.t(`tables.equip.champs.champs10`) + '',
            i18n.t(`tables.equip.champs.champs11`) + '',
        ],
        height: "20px",
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableSubTitleFontFamily,
            "color": variables.tableSubTitleColor,
            "size": variables.tableSubTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableSubTitleBordureLength,
            color: variables.tableSubTitleBordureColor,
        },
    },
    columns: {
        height: "20px",
        design: [
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '70px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '250px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
        ],
        bordure: {
            length: variables.tableColumnBordureLength,
            color: variables.tableColumnBordureColor,
        },
    },
}
export const defaultFactoryDesignTable: ITableDataUiDesignedWithoutData  = {
    title: {
        text: i18n.t('tables.factory.title') + '',
        height: "20px",
        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableTitleFontFamily,
            "color": variables.tableTitleColor,
            "size": variables.tableTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableTitleBordureLength,
            color: variables.tableTitleBordureColor,
        },
    },
    header: {
        text: [
            'Drag',
            i18n.t(`tables.factory.champs.champs4`) + '',
            i18n.t(`tables.factory.champs.champs5`) + '',
            i18n.t(`tables.factory.champs.champs6`) + '',
            i18n.t(`tables.factory.champs.champs7`) + '',
            i18n.t(`tables.factory.champs.champs8`) + '',
            i18n.t(`tables.factory.champs.champs9`) + '',
            i18n.t(`tables.factory.champs.champs10`) + '',
            i18n.t(`tables.factory.champs.champs11`) + '',
            i18n.t(`tables.factory.champs.champs12`) + '',
            i18n.t(`tables.factory.champs.champs13`) + '',
        ],
        height: "20px",
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableSubTitleFontFamily,
            "color": variables.tableSubTitleColor,
            "size": variables.tableSubTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableSubTitleBordureLength,
            color: variables.tableSubTitleBordureColor,
        },
    },
    columns: {
        height: "20px",
        design: [
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '350px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" }, },
        ],
        bordure: {
            length: variables.tableColumnBordureLength,
            color: variables.tableColumnBordureColor,
        },
    },
}
export const defaultFonctionDesignTable: ITableDataUiDesignedWithoutData  = {
    title: {
        text: i18n.t('tables.fonction.title') + '',
        height: "20px",
        "background-color": variables.tableTitleBgColor,
        "textAlign": "left",
        "padding": "0px",
        "font": {
            "family": variables.tableTitleFontFamily,
            "color": variables.tableTitleColor,
            "size": variables.tableTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableTitleBordureLength,
            color: variables.tableTitleBordureColor,
        },
    },
    header: {
        text: [
            'Drag',
            i18n.t(`tables.fonction.champs.champs23`) + '',
            i18n.t(`tables.fonction.champs.champs24`) + '',
            i18n.t(`tables.fonction.champs.champs25`) + '',
            i18n.t(`tables.fonction.champs.champs26`) + '',
            i18n.t(`tables.fonction.champs.champs35`) + '',
            i18n.t(`tables.fonction.champs.champs22`) + '',
            i18n.t(`tables.fonction.champs.champs3`) + '',
            i18n.t(`tables.fonction.champs.champs4`) + '',
            i18n.t(`tables.fonction.champs.champs37`) + '',
            i18n.t(`tables.fonction.champs.champs27`) + '',
            i18n.t(`tables.fonction.champs.champs28`) + '',
            i18n.t(`tables.fonction.champs.champs29`) + '',
            i18n.t(`tables.fonction.champs.champs30`) + '',
            i18n.t(`tables.fonction.champs.champs5`) + '',
            i18n.t(`tables.fonction.champs.champs6`) + '',
            i18n.t(`tables.fonction.champs.champs34`) + '',
            i18n.t(`tables.fonction.champs.champs7`) + '',
            i18n.t(`tables.fonction.champs.champs8`) + '',
            i18n.t(`tables.fonction.champs.champs9`) + '',
            i18n.t(`tables.fonction.champs.champs15`) + '',
            i18n.t(`tables.fonction.champs.champs16`) + '',
            i18n.t(`tables.fonction.champs.champs17`) + '',
            i18n.t(`tables.fonction.champs.champs18`) + '',
            i18n.t(`tables.fonction.champs.champs10`) + '',
            i18n.t(`tables.fonction.champs.champs11`) + '',
            i18n.t(`tables.fonction.champs.champs20`) + '',
            i18n.t(`tables.fonction.champs.champs21`) + '',
        ],
        height: "20px",
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableSubTitleFontFamily,
            "color": variables.tableSubTitleColor,
            "size": variables.tableSubTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableSubTitleBordureLength,
            color: variables.tableSubTitleBordureColor,
        },
    },
    columns: {
        height: "20px",
        design: [
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '270px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },

            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '100px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '100px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '100px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },

            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },

            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },

            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },

            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },

            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },

        ],
        bordure: {
            length: variables.tableColumnBordureLength,
            color: variables.tableColumnBordureColor,
        },
    },
}
export const defaultMeasureDesignTable: ITableDataUiDesignedWithoutData  = {
    title: {
        text: i18n.t('tables.measure.title') + '',
        height: "20px",
        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableTitleFontFamily,
            "color": variables.tableTitleColor,
            "size": variables.tableTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableTitleBordureLength,
            color: variables.tableTitleBordureColor,
        },
    },
    header: {
        text: [
            i18n.t(`tables.measure.champs.champs1`) + '',
            i18n.t(`tables.measure.champs.champs2`) + '',
            i18n.t(`tables.measure.champs.champs3`) + '',
            i18n.t(`tables.measure.champs.champs4`) + '',
            i18n.t(`tables.measure.champs.champs5`) + '',
            i18n.t(`tables.measure.champs.champs6`) + '',
            i18n.t(`tables.measure.champs.champs7`) + '',
            i18n.t(`tables.measure.champs.champs8`) + '',
            i18n.t(`tables.measure.champs.champs9`) + '',
            i18n.t(`tables.measure.champs.champs10`) + '',
            i18n.t(`tables.measure.champs.champs11`) + '',
            i18n.t(`tables.measure.champs.champs12`) + '',
            i18n.t(`tables.measure.champs.champs13`) + '',
            i18n.t(`tables.measure.champs.champs14`) + '',
            i18n.t(`tables.measure.champs.champs15`) + '',
            i18n.t(`tables.measure.champs.champs16`) + '',
        ],
        height: "20px",
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableSubTitleFontFamily,
            "color": variables.tableSubTitleColor,
            "size": variables.tableSubTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableSubTitleBordureLength,
            color: variables.tableSubTitleBordureColor,
        },
    },
    columns: {
        height: "20px",
        design: [
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '250px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '250px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '250px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '100px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '100px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '100px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '100px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '100px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '100px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '100px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '100px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '250px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '250px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
        ],
        bordure: {
            length: variables.tableColumnBordureLength,
            color: variables.tableColumnBordureColor,
        },
    },
}
export const defaultMeasureTypeDesignTable: ITableDataUiDesignedWithoutData  = {
    title: {
        text: i18n.t('tables.measureType.title') + '',
        height: "20px",
        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableTitleFontFamily,
            "color": variables.tableTitleColor,
            "size": variables.tableTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableTitleBordureLength,
            color: variables.tableTitleBordureColor,
        },
    },
    header: {
        text: [
            'Drag',
            i18n.t(`tables.measureType.champs.champs3`) + '',
            i18n.t(`tables.measureType.champs.champs4`) + '',
            i18n.t(`tables.measureType.champs.champs5`) + '',
        ],
        height: "20px",
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableSubTitleFontFamily,
            "color": variables.tableSubTitleColor,
            "size": variables.tableSubTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableSubTitleBordureLength,
            color: variables.tableSubTitleBordureColor,
        },
    },
    columns: {
        height: "20px",
        design: [
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '270px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '270px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '150px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
        ],
        bordure: {
            length: variables.tableColumnBordureLength,
            color: variables.tableColumnBordureColor,
        },
    },
}
export const defaultPlcDesignTable: ITableDataUiDesignedWithoutData  = {
    title: {
        text: i18n.t('tables.plc.title') + '',
        height: "20px",
        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableTitleFontFamily,
            "color": variables.tableTitleColor,
            "size": variables.tableTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableTitleBordureLength,
            color: variables.tableTitleBordureColor,
        },
    },
    header: {
        text: [
            'Drag',
            i18n.t(`tables.plc.champs.champs4`) + '',
            i18n.t(`tables.plc.champs.champs5`) + '',
            i18n.t(`tables.plc.champs.champs6`) + '',
            i18n.t(`tables.plc.champs.champs7`) + '',
            i18n.t(`tables.plc.champs.champs8`) + '',
            i18n.t(`tables.plc.champs.champs9`) + '',
            i18n.t(`tables.plc.champs.champs10`) + '',
            i18n.t(`tables.plc.champs.champs11`) + '',
            i18n.t(`tables.plc.champs.champs12`) + '',
            i18n.t(`tables.plc.champs.champs13`) + '',
            i18n.t(`tables.plc.champs.champs14`) + '',
        ],
        height: "20px",
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableSubTitleFontFamily,
            "color": variables.tableSubTitleColor,
            "size": variables.tableSubTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableSubTitleBordureLength,
            color: variables.tableSubTitleBordureColor,
        },
    },
    columns: {
        height: "20px",
        design: [
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '250px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '250px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '250px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '250px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '250px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '150px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '150px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '100px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '100px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '100px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
        ],
        bordure: {
            length: variables.tableColumnBordureLength,
            color: variables.tableColumnBordureColor,
        },
    },
}
export const defaultProductDesignTable: ITableDataUiDesignedWithoutData  = {
    title: {
        text: i18n.t('tables.product.title') + '',
        height: "20px",
        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableTitleFontFamily,
            "color": variables.tableTitleColor,
            "size": variables.tableTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableTitleBordureLength,
            color: variables.tableTitleBordureColor,
        },
    },
    header: {
        text: [
            'Drag',
            i18n.t(`tables.product.champs.champs3`) + '',
            i18n.t(`tables.product.champs.champs4`) + '',
            i18n.t(`tables.product.champs.champs5`) + '',
            i18n.t(`tables.product.champs.champs6`) + '',
            i18n.t(`tables.product.champs.champs7`) + '',
        ],
        height: "20px",
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableSubTitleFontFamily,
            "color": variables.tableSubTitleColor,
            "size": variables.tableSubTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableSubTitleBordureLength,
            color: variables.tableSubTitleBordureColor,
        },
    },
    columns: {
        height: "20px",
        design: [
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '250px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '150px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '150px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '250px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
        ],
        bordure: {
            length: variables.tableColumnBordureLength,
            color: variables.tableColumnBordureColor,
        },
    },
}
export const defaultProjectActionDesignTable: ITableDataUiDesignedWithoutData  = {
    title: {
        text: i18n.t('tables.projectAction.title') + '',
        height: "20px",
        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableTitleFontFamily,
            "color": variables.tableTitleColor,
            "size": variables.tableTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableTitleBordureLength,
            color: variables.tableTitleBordureColor,
        },
    },
    header: {
        text: [
            i18n.t(`tables.projectAction.champs.champs1`) + '',
            i18n.t(`tables.projectAction.champs.champs2`) + '',
            i18n.t(`tables.projectAction.champs.champs3`) + '',
            i18n.t(`tables.projectAction.champs.champs4`) + '',
            i18n.t(`tables.projectAction.champs.champs5`) + '',
            i18n.t(`tables.projectAction.champs.champs6`) + '',
            i18n.t(`tables.projectAction.champs.champs7`) + '',
            i18n.t(`tables.projectAction.champs.champs8`) + '',
        ],
        height: "20px",
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableSubTitleFontFamily,
            "color": variables.tableSubTitleColor,
            "size": variables.tableSubTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableSubTitleBordureLength,
            color: variables.tableSubTitleBordureColor,
        },
    },
    columns: {
        height: "20px",
        design: [
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '270px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '150px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '150px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '270px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '270px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
        ],
        bordure: {
            length: variables.tableColumnBordureLength,
            color: variables.tableColumnBordureColor,
        },
    },
}
export const defaultProjectDesignTable: ITableDataUiDesignedWithoutData  = {
    title: {
        text: i18n.t('tables.project.title') + '',
        height: "20px",
        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableTitleFontFamily,
            "color": variables.tableTitleColor,
            "size": variables.tableTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableTitleBordureLength,
            color: variables.tableTitleBordureColor,
        },
    },
    header: {
        text: [
            i18n.t(`tables.project.champs.champs3`) + '',
            i18n.t(`tables.project.champs.champs15`) + '',
            i18n.t(`tables.project.champs.champs4`) + '',
            i18n.t(`tables.project.champs.champs5`) + '',
            i18n.t(`tables.project.champs.champs6`) + '',
            i18n.t(`tables.project.champs.champs17`) + '',
            i18n.t(`tables.project.champs.champs18`) + '',
            i18n.t(`tables.project.champs.champs7`) + '',
            i18n.t(`tables.project.champs.champs8`) + '',
            i18n.t(`tables.project.champs.champs9`) + '',
            i18n.t(`tables.project.champs.champs10`) + '',
            i18n.t(`tables.project.champs.champs11`) + '',
            i18n.t(`tables.project.champs.champs12`) + '',
            i18n.t(`tables.project.champs.champs13`) + '',
            i18n.t(`tables.project.champs.champs14`) + '',
            i18n.t(`tables.project.champs.champs16`) + '',
        ],
        height: "20px",
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableSubTitleFontFamily,
            "color": variables.tableSubTitleColor,
            "size": variables.tableSubTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableSubTitleBordureLength,
            color: variables.tableSubTitleBordureColor,
        },
    },
    columns: {
        height: "20px",
        design: [
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '250px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '250px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '70px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '100px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '250px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },

            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '100px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '100px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },

            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '100px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '100px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },

            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '250px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '250px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },

            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '100px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '100px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '100px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '100px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },

            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '170px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },

        ],
        bordure: {
            length: variables.tableColumnBordureLength,
            color: variables.tableColumnBordureColor,
        },
    },
}
export const defaultProjectDesignTableSub1: ITableDataUiDesignedWithoutData  = {
    title: {
        text: i18n.t('tables.project.subTableAction.title') + '',
        height: "20px",
        "background-color": "#eee",
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableTitleFontFamily,
            "color": variables.tableTitleColor,
            "size": variables.tableTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableTitleBordureLength,
            color: variables.tableTitleBordureColor,
        },
    },
    header: {
        text: [
            i18n.t(`tables.project.subTableAction.champs3`) + '',
            i18n.t(`tables.project.subTableAction.champs1`) + '',
            i18n.t(`tables.project.subTableAction.champs2`) + '',
        ],
        height: "20px",
        "background-color": "#eee",
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableSubTitleFontFamily,
            "color": variables.tableSubTitleColor,
            "size": variables.tableSubTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableSubTitleBordureLength,
            color: variables.tableSubTitleBordureColor,
        },
    },
    columns: {
        height: "20px",
        design: [
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '250px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '100px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '70px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '70px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
        ],
        bordure: {
            length: variables.tableColumnBordureLength,
            color: variables.tableColumnBordureColor,
        },
    },
}
export const defaultProjectDesignTableSub2: ITableDataUiDesignedWithoutData  = {
    title: {
        text: i18n.t('tables.project.titleSub2') + '',
        height: "20px",
        "background-color": "#eee",
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableTitleFontFamily,
            "color": variables.tableTitleColor,
            "size": variables.tableTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableTitleBordureLength,
            color: variables.tableTitleBordureColor,
        },
    },
    header: {
        text: [
            'Drag',
            i18n.t(`tables.project.subTableFonction.champs1`) + '',
            i18n.t(`tables.project.subTableFonction.champs2`) + '',
            i18n.t(`tables.project.subTableFonction.champs3`) + '',
            i18n.t(`tables.project.subTableFonction.champs4`) + '',
        ],
        height: "20px",
        "background-color": "#eee",
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableSubTitleFontFamily,
            "color": variables.tableSubTitleColor,
            "size": variables.tableSubTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableSubTitleBordureLength,
            color: variables.tableSubTitleBordureColor,
        },
    },
    columns: {
        height: "20px",
        design: [
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '250px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '100px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '70px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '70px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
        ],
        bordure: {
            length: variables.tableColumnBordureLength,
            color: variables.tableColumnBordureColor,
        },
    },
}
export const defaultProjectStatusDesignTable: ITableDataUiDesignedWithoutData  = {
    title: {
        text: i18n.t('tables.projectStatus.title') + '',
        height: "20px",
        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableTitleFontFamily,
            "color": variables.tableTitleColor,
            "size": variables.tableTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableTitleBordureLength,
            color: variables.tableTitleBordureColor,
        },
    },
    header: {
        text: [
            'Drag',
            i18n.t(`tables.projectStatus.champs.champs3`) + '',
            i18n.t(`tables.projectStatus.champs.champs4`) + '',
            i18n.t(`tables.projectStatus.champs.champs5`) + '',
        ],
        height: "20px",
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableSubTitleFontFamily,
            "color": variables.tableSubTitleColor,
            "size": variables.tableSubTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableSubTitleBordureLength,
            color: variables.tableSubTitleBordureColor,
        },
    },
    columns: {
        height: "20px",
        design: [
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '270px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '150px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '150px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
        ],
        bordure: {
            length: variables.tableColumnBordureLength,
            color: variables.tableColumnBordureColor,
        },
    },
}
export const defaultProjectTypeDesignTable: ITableDataUiDesignedWithoutData  = {
    title: {
        text: i18n.t('tables.projectType.title') + '',
        height: "20px",
        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableTitleFontFamily,
            "color": variables.tableTitleColor,
            "size": variables.tableTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableTitleBordureLength,
            color: variables.tableTitleBordureColor,
        },
    },
    header: {
        text: [
            'Drag',
            i18n.t(`tables.projectType.champs.champs3`) + '',
            i18n.t(`tables.projectType.champs.champs4`) + '',
            i18n.t(`tables.projectType.champs.champs5`) + '',
        ],
        height: "20px",
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableSubTitleFontFamily,
            "color": variables.tableSubTitleColor,
            "size": variables.tableSubTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableSubTitleBordureLength,
            color: variables.tableSubTitleBordureColor,
        },
    },
    columns: {
        height: "20px",
        design: [
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '270px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '150px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '150px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
        ],
        bordure: {
            length: variables.tableColumnBordureLength,
            color: variables.tableColumnBordureColor,
        },
    },
}
export const defaultServerDesignTable: ITableDataUiDesignedWithoutData  = {
    title: {
        text: i18n.t('tables.server.title') + '',
        height: "20px",
        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableTitleFontFamily,
            "color": variables.tableTitleColor,
            "size": variables.tableTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableTitleBordureLength,
            color: variables.tableTitleBordureColor,
        },
    },
    header: {
        text: [
            'Drag',
            i18n.t(`tables.server.champs.champs4`) + '',
            i18n.t(`tables.server.champs.champs5`) + '',
            i18n.t(`tables.server.champs.champs6`) + '',
        ],
        height: "20px",
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableSubTitleFontFamily,
            "color": variables.tableSubTitleColor,
            "size": variables.tableSubTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableSubTitleBordureLength,
            color: variables.tableSubTitleBordureColor,
        },
    },
    columns: {
        height: "20px",
        design: [
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '150px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '150px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
        ],
        bordure: {
            length: variables.tableColumnBordureLength,
            color: variables.tableColumnBordureColor,
        },
    },
}
export const defaultTankAreaDefEmptyingDesignTable: ITableDataUiDesignedWithoutData  = {
    title: {
        text: i18n.t('tables.tankAreaDefEmptying.title') + '',
        height: "20px",
        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableTitleFontFamily,
            "color": variables.tableTitleColor,
            "size": variables.tableTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableTitleBordureLength,
            color: variables.tableTitleBordureColor,
        },
    },
    header: {
        text: [
            'Drag',
            i18n.t(`tables.tankAreaDefEmptying.champs.champs4`) + '',
            i18n.t(`tables.tankAreaDefEmptying.champs.champs5`) + '',
            i18n.t(`tables.tankAreaDefEmptying.champs.champs6`) + '',
            i18n.t(`tables.tankAreaDefEmptying.champs.champs7`) + '',
            i18n.t(`tables.tankAreaDefEmptying.champs.champs8`) + '',
            i18n.t(`tables.tankAreaDefEmptying.champs.champs9`) + '',
        ],
        height: "20px",
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableSubTitleFontFamily,
            "color": variables.tableSubTitleColor,
            "size": variables.tableSubTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableSubTitleBordureLength,
            color: variables.tableSubTitleBordureColor,
        },
    },
    columns: {
        height: "20px",
        design: [
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '70px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '70px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '270px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '270px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '150px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '120px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
        ],
        bordure: {
            length: variables.tableColumnBordureLength,
            color: variables.tableColumnBordureColor,
        },
    },
}
export const defaultTankAreaDefEmptyingDesignTableSub: ITableDataUiDesignedWithoutData  = {
    title: {
        text: i18n.t('tables.tankAreaDefEmptying.subTable.title') + '',
        height: "20px",
        "background-color": "#eee",
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableTitleFontFamily,
            "color": variables.tableTitleColor,
            "size": variables.tableTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableTitleBordureLength,
            color: variables.tableTitleBordureColor,
        },
    },
    header: {
        text: [
            i18n.t(`tables.tankAreaDefEmptying.subTable.champs1`) + '',
            i18n.t(`tables.tankAreaDefEmptying.subTable.champs2`) + '',
            i18n.t(`tables.tankAreaDefEmptying.subTable.champs3`) + '',
            i18n.t(`tables.tankAreaDefEmptying.subTable.champs4`) + '',
            i18n.t(`tables.tankAreaDefEmptying.subTable.champs5`) + '',
            i18n.t(`tables.tankAreaDefEmptying.subTable.champs6`) + '',
            i18n.t(`tables.tankAreaDefEmptying.subTable.champs7`) + '',
            i18n.t(`tables.tankAreaDefEmptying.subTable.champs8`) + '',
        ],
        height: "20px",
        "background-color": "#eee",
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableSubTitleFontFamily,
            "color": variables.tableSubTitleColor,
            "size": variables.tableSubTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableSubTitleBordureLength,
            color: variables.tableSubTitleBordureColor,
        },
    },
    columns: {
        height: "20px",
        design: [
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '70px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '250px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '170px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '170px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '100px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '100px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
        ],
        bordure: {
            length: variables.tableColumnBordureLength,
            color: variables.tableColumnBordureColor,
        },
    },
}
export const defaultTankAreaDefFillingDesignTable: ITableDataUiDesignedWithoutData  = {
    title: {
        text: i18n.t('tables.tankAreaDefFilling.title') + '',
        height: "20px",
        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableTitleFontFamily,
            "color": variables.tableTitleColor,
            "size": variables.tableTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableTitleBordureLength,
            color: variables.tableTitleBordureColor,
        },
    },
    header: {
        text: [
            'Drag',
            i18n.t(`tables.tankAreaDefFilling.champs.champs4`) + '',
            i18n.t(`tables.tankAreaDefFilling.champs.champs5`) + '',
            i18n.t(`tables.tankAreaDefFilling.champs.champs6`) + '',
            i18n.t(`tables.tankAreaDefFilling.champs.champs7`) + '',
            i18n.t(`tables.tankAreaDefFilling.champs.champs8`) + '',
            i18n.t(`tables.tankAreaDefFilling.champs.champs9`) + '',
        ],
        height: "20px",
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableSubTitleFontFamily,
            "color": variables.tableSubTitleColor,
            "size": variables.tableSubTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableSubTitleBordureLength,
            color: variables.tableSubTitleBordureColor,
        },
    },
    columns: {
        height: "20px",
        design: [
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '70px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '70px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '270px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '270px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '140px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '120px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
        ],
        bordure: {
            length: variables.tableColumnBordureLength,
            color: variables.tableColumnBordureColor,
        },
    },
}
export const defaultTankAreaDefFillingDesignTableSub: ITableDataUiDesignedWithoutData  = {
    title: {
        text: i18n.t('tables.tankAreaDefFilling.subTable.title') + '',
        height: "20px",
        "background-color": "#eee",
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableTitleFontFamily,
            "color": variables.tableTitleColor,
            "size": variables.tableTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableTitleBordureLength,
            color: variables.tableTitleBordureColor,
        },
    },
    header: {
        text: [
            i18n.t(`tables.tankAreaDefFilling.subTable.champs1`) + '',
            i18n.t(`tables.tankAreaDefFilling.subTable.champs2`) + '',
            i18n.t(`tables.tankAreaDefFilling.subTable.champs3`) + '',
            i18n.t(`tables.tankAreaDefFilling.subTable.champs4`) + '',
            i18n.t(`tables.tankAreaDefFilling.subTable.champs5`) + '',
            i18n.t(`tables.tankAreaDefFilling.subTable.champs6`) + '',
            i18n.t(`tables.tankAreaDefFilling.subTable.champs7`) + '',
            i18n.t(`tables.tankAreaDefFilling.subTable.champs8`) + '',
        ],
        height: "20px",
        "background-color": "#eee",
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableSubTitleFontFamily,
            "color": variables.tableSubTitleColor,
            "size": variables.tableSubTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableSubTitleBordureLength,
            color: variables.tableSubTitleBordureColor,
        },
    },
    columns: {
        height: "20px",
        design: [
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '70px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '250px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '170px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '170px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '80px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '100px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '100px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
        ],
        bordure: {
            length: variables.tableColumnBordureLength,
            color: variables.tableColumnBordureColor,
        },
    },
}
export const defaultTankAreaDesignTable: ITableDataUiDesignedWithoutData  = {
    title: {
        text: i18n.t('tables.tankArea.title') + '',
        height: "20px",
        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableTitleFontFamily,
            "color": variables.tableTitleColor,
            "size": variables.tableTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableTitleBordureLength,
            color: variables.tableTitleBordureColor,
        },
    },
    header: {
        text: [
            'Drag',
            i18n.t(`tables.tankArea.champs.champs4`) + '',
            i18n.t(`tables.tankArea.champs.champs5`) + '',
            i18n.t(`tables.tankArea.champs.champs6`) + '',
            i18n.t(`tables.tankArea.champs.champs7`) + '',
        ],
        height: "20px",
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableSubTitleFontFamily,
            "color": variables.tableSubTitleColor,
            "size": variables.tableSubTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableSubTitleBordureLength,
            color: variables.tableSubTitleBordureColor,
        },
    },
    columns: {
        height: "20px",
        design: [
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '70px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '270px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '270px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '270px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '250px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
        ],
        bordure: {
            length: variables.tableColumnBordureLength,
            color: variables.tableColumnBordureColor,
        },
    },
}
export const defaultTankDesignTable: ITableDataUiDesignedWithoutData  = {
    title: {
        text: i18n.t('tables.tank.title') + '',
        height: "20px",
        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableTitleFontFamily,
            "color": variables.tableTitleColor,
            "size": variables.tableTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableTitleBordureLength,
            color: variables.tableTitleBordureColor,
        },
    },
    header: {
        text: [
            'Drag',
            i18n.t(`tables.tank.champs.champs4`) + '',
            i18n.t(`tables.tank.champs.champs5`) + '',
            i18n.t(`tables.tank.champs.champs6`) + '',
            i18n.t(`tables.tank.champs.champs7`) + '',
            i18n.t(`tables.tank.champs.champs8`) + '',
            i18n.t(`tables.tank.champs.champs9`) + '',
            i18n.t(`tables.tank.champs.champs10`) + '',
        ],
        height: "20px",
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": "0px",
        "font": {
            "family": variables.tableSubTitleFontFamily,
            "color": variables.tableSubTitleColor,
            "size": variables.tableSubTitleFontFamilySize + "px",
            "weight": "bold",
        },
        "bordure": {
            length: variables.tableSubTitleBordureLength,
            color: variables.tableSubTitleBordureColor,
        },
    },
    columns: {
        height: "20px",
        design: [
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '70px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '250px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '250px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '250px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '250px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '250px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"left", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
            {   "textAlign":"center", "background-color": variables.tableTitleBgColor, "width": '200px', "padding": "5px", "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px", "weight": "normal" } },
        ],
        bordure: {
            length: variables.tableColumnBordureLength,
            color: variables.tableColumnBordureColor,
        },
    },
}

