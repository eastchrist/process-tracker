import variables from "@/styles/_variables.scss";
import i18n from "@/i18n";
import { ITableDataFonctionByAreas, ITableDataUiDesign} from "@/api/types";

//'Tab05 '
export const defaultFonctionAlarmByAreas: ITableDataFonctionByAreas = {
    title: {
        title: 'Tab05 ' + i18n.t('tables.fonctionAlarmByAreas.title') + '',
        "background-color": variables.tableTitleBgColor,
        "textAlign": "left",
        "padding": "20px",
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
    subTitle: {
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": "10px",
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
    textHeader: [
        i18n.t(`tables.fonctionAlarmByAreas.header.header1`) + '',
        i18n.t(`tables.fonctionAlarmByAreas.header.header2`) + '',
        i18n.t(`tables.fonctionAlarmByAreas.header.header3`) + '',
        i18n.t(`tables.fonctionAlarmByAreas.header.header4`) + '',
        i18n.t(`tables.fonctionAlarmByAreas.header.header5`) + '',
        i18n.t(`tables.fonctionAlarmByAreas.header.header6`) + '',
    ],
    data: []
}
//'Tab06 '
export const defaultFonctionNotLinkedByAreas: ITableDataFonctionByAreas = {
    title: {
        title: 'Tab06 ' + i18n.t('tables.fonctionNotLinkedByAreas.title') + '',
        "background-color": variables.tableTitleBgColor,
        "textAlign": "left",
        "padding": "20px",
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
    subTitle: {
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": "10px",
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
    textHeader: [
        i18n.t(`tables.fonctionNotLinkedByAreas.header.header1`) + '',
        i18n.t(`tables.fonctionNotLinkedByAreas.header.header2`) + '',
        i18n.t(`tables.fonctionNotLinkedByAreas.header.header3`) + '',
        i18n.t(`tables.fonctionNotLinkedByAreas.header.header4`) + '',
        i18n.t(`tables.fonctionNotLinkedByAreas.header.header5`) + '',
        i18n.t(`tables.fonctionNotLinkedByAreas.header.header6`) + '',
    ],
    data: []
}
//'Tab07 '
export const defaultFonctionNeverDoneByAreas: ITableDataFonctionByAreas = {
    title: {
        title: 'Tab07 ' + i18n.t('tables.fonctionNeverDoneByAreas.title') + '',
        "background-color": variables.tableTitleBgColor,
        "textAlign": "left",
        "padding": "20px",
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
    subTitle: {
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": "10px",
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
    textHeader: [
        i18n.t(`tables.fonctionNeverDoneByAreas.header.header1`) + '',
        i18n.t(`tables.fonctionNeverDoneByAreas.header.header2`) + '',
        i18n.t(`tables.fonctionNeverDoneByAreas.header.header3`) + '',
        i18n.t(`tables.fonctionNeverDoneByAreas.header.header4`) + '',
        i18n.t(`tables.fonctionNeverDoneByAreas.header.header5`) + '',
        i18n.t(`tables.fonctionNeverDoneByAreas.header.header6`) + '',
    ],
    data: []
}
//'Tab08 '
export const defaultFonctionToCheckByAreas: ITableDataFonctionByAreas = {
    title: {
        title: 'Tab08 ' + i18n.t('tables.fonctionToCheckByAreas.title') + '',
        "background-color": variables.tableTitleBgColor,
        "textAlign": "left",
        "padding": "20px",
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
    subTitle: {
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": "10px",
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
    textHeader: [
        i18n.t(`tables.fonctionToCheckByAreas.header.header1`) + '',
        i18n.t(`tables.fonctionToCheckByAreas.header.header2`) + '',
        i18n.t(`tables.fonctionToCheckByAreas.header.header3`) + '',
        i18n.t(`tables.fonctionToCheckByAreas.header.header4`) + '',
        i18n.t(`tables.fonctionToCheckByAreas.header.header5`) + '',
        i18n.t(`tables.fonctionToCheckByAreas.header.header6`) + '',
    ],
    data: []
}


//Tables Administatrator
//TODO export const defaultAnalogDesignTable: ITableDataUiDesign = {
export const defaultAnalogDesignTable: ITableDataUiDesign = {
    title: {
        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": 7,
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
    subTitle: {
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": 5,
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
    columnsBordure: {
        length: variables.tableColumnBordureLength,
        color: variables.tableColumnBordureColor,
    },
    columns: [
        {   "textAlign":"center",
            "width": '70px',
            "padding": 5,
            "font": {
                "family": variables.tableColumnFontFamily,
                "color": "black",
                "size": variables.tableColumnFontFamilySize + "px"
            },
        },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '400px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
    ],
}
export const defaultAreaDesignTable: ITableDataUiDesign  = {
    title: {
        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": 7,
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
    subTitle: {

        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": 5,
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
    columnsBordure: {
        length: variables.tableColumnBordureLength,
        color: variables.tableColumnBordureColor,
    },
    columns: [
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '70px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
    ],
}
export const defaultComputerDesignTable: ITableDataUiDesign  = {
    title: {

        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": 7,
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
    subTitle: {

        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": 5,
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
    columnsBordure: {
        length: variables.tableColumnBordureLength,
        color: variables.tableColumnBordureColor,
    },
    columns: [
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '70px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '250px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '500px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
    ],
}
export const defaultDigitalDesignTable: ITableDataUiDesign  = {
    title: {
        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": 7,
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
    subTitle: {
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": 5,
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
    columnsBordure: {
        length: variables.tableColumnBordureLength,
        color: variables.tableColumnBordureColor,
    },
    columns: [
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '70px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '80px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '80px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
    ],
}
export const defaultEquipDesignTable: ITableDataUiDesign  = {
    title: {
        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": 7,
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
    subTitle: {
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": 5,
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
    columnsBordure: {
        length: variables.tableColumnBordureLength,
        color: variables.tableColumnBordureColor,
    },
    columns: [
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '70px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '250px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
    ],
}
export const defaultFactoryDesignTable: ITableDataUiDesign  = {
    title: {
        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": 7,
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
    subTitle: {
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": 5,
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
    columnsBordure: {
        length: variables.tableColumnBordureLength,
        color: variables.tableColumnBordureColor,
    },
    columns: [
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '80px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '350px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" }, },
    ],
}
export const defaultFonctionCartoDesignTable: ITableDataUiDesign  = {
    title: {

        "background-color": variables.tableTitleBgColor,
        "textAlign": "left",
        "padding": 7,
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
    subTitle: {

        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": 5,
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
    columnsBordure: {
        length: variables.tableColumnBordureLength,
        color: variables.tableColumnBordureColor,
    },
    columns: [
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '80px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },

        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '100px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '100px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '100px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },

        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },

        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },

        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },

        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },

        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },

    ],
}
export const defaultFonctionDesignTable: ITableDataUiDesign  = {
    title: {
        "background-color": variables.tableTitleBgColor,
        "textAlign": "left",
        "padding": 7,
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
    subTitle: {
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": 5,
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
    columnsBordure: {
        length: variables.tableColumnBordureLength,
        color: variables.tableColumnBordureColor,
    },
    columns: [
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '80px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },

        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '100px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '100px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '100px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },

        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },

        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },

        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },

        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },

        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },

    ],
}
export const defaultMeasureDesignTable: ITableDataUiDesign  = {
    title: {
        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": 7,
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
    subTitle: {

        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": 5,
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
    columnsBordure: {
        length: variables.tableColumnBordureLength,
        color: variables.tableColumnBordureColor,
    },
    columns: [
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '80px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '80px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '250px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '250px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '250px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '100px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '100px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '100px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '100px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '100px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '100px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '100px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '100px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '250px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '250px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
    ],
}
export const defaultMeasureTypeDesignTable: ITableDataUiDesign  = {
    title: {
        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": 7,
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
    subTitle: {
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": 5,
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
    columnsBordure: {
        length: variables.tableColumnBordureLength,
        color: variables.tableColumnBordureColor,
    },
    columns: [
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '80px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '150px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
    ],
}
export const defaultPlcDesignTable: ITableDataUiDesign  = {
    title: {
        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": 7,
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
    subTitle: {
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": 5,
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
    columnsBordure: {
        length: variables.tableColumnBordureLength,
        color: variables.tableColumnBordureColor,
    },
    columns: [
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '80px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '250px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '250px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '250px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '250px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '250px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '150px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '150px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '100px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '100px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '100px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
    ],
}
export const defaultProductDesignTable: ITableDataUiDesign  = {
    title: {
        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": 7,
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
    subTitle: {
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": 5,
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
    columnsBordure: {
        length: variables.tableColumnBordureLength,
        color: variables.tableColumnBordureColor,
    },
    columns: [
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '80px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '250px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '150px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '150px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '250px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
    ],
}
export const defaultProjectActionDesignTable: ITableDataUiDesign  = {
    title: {
        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": 7,
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
    subTitle: {

        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": 5,
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
    columnsBordure: {
        length: variables.tableColumnBordureLength,
        color: variables.tableColumnBordureColor,
    },
    columns: [
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '80px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '80px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '150px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '150px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
    ],
}
export const defaultProjectDesignTable: ITableDataUiDesign  = {
    title: {
        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": 7,
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
    subTitle: {

        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": 5,
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
    columnsBordure: {
        length: variables.tableColumnBordureLength,
        color: variables.tableColumnBordureColor,
    },
    columns: [
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '250px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '250px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '70px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '100px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '250px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },

        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '100px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '100px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },

        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '100px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '100px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },

        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '250px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '250px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },

        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '100px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '100px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '100px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '100px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },

        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '170px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
    ],
}
export const defaultProjectDesignTableSub1: ITableDataUiDesign  = {
    title: {
        "background-color": "#eee",
        "textAlign": "center",
        "padding": 7,
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
    subTitle: {
        "background-color": "#eee",
        "textAlign": "center",
        "padding": 5,
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
    columnsBordure: {
        length: variables.tableColumnBordureLength,
        color: variables.tableColumnBordureColor,
    },
    columns: [
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '250px', "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '100px', "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '70px', "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '70px', "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
    ],
}
export const defaultProjectDesignTableSub2: ITableDataUiDesign  = {
    title: {
        "background-color": "#eee",
        "textAlign": "center",
        "padding": 7,
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
    subTitle: {
        "background-color": "#eee",
        "textAlign": "center",
        "padding": 5,
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
    columnsBordure: {
        length: variables.tableColumnBordureLength,
        color: variables.tableColumnBordureColor,
    },
    columns: [
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '250px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '100px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '70px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '70px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
    ],
}
export const defaultProjectStatusDesignTable: ITableDataUiDesign  = {
    title: {

        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": 7,
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
    subTitle: {

        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": 5,
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
    columnsBordure: {
        length: variables.tableColumnBordureLength,
        color: variables.tableColumnBordureColor,
    },
    columns: [
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '80px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '150px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '150px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
    ],
}
export const defaultProjectTypeDesignTable: ITableDataUiDesign  = {
    title: {
        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": 7,
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
    subTitle: {

        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": 5,
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
    columnsBordure: {
        length: variables.tableColumnBordureLength,
        color: variables.tableColumnBordureColor,
    },
    columns: [
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '80px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '150px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '150px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
    ],
}
export const defaultServerDesignTable: ITableDataUiDesign  = {
    title: {
        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": 7,
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
    subTitle: {
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": 5,
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
    columnsBordure: {
        length: variables.tableColumnBordureLength,
        color: variables.tableColumnBordureColor,
    },
    columns: [
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '80px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '150px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '150px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
    ],
}
export const defaultTankAreaDefEmptyingDesignTable: ITableDataUiDesign  = {
    title: {

        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": 7,
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
    subTitle: {

        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": 5,
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
    columnsBordure: {
        length: variables.tableColumnBordureLength,
        color: variables.tableColumnBordureColor,
    },
    columns: [
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '70px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '70px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '150px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '120px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
    ],
}
export const defaultTankAreaDefEmptyingDesignTableSub: ITableDataUiDesign  = {
    title: {
        "background-color": "#eee",
        "textAlign": "center",
        "padding": 7,
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
    subTitle: {
        "background-color": "#eee",
        "textAlign": "center",
        "padding": 5,
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
    columnsBordure: {
        length: variables.tableColumnBordureLength,
        color: variables.tableColumnBordureColor,
    },
    columns: [
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '70px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '250px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '170px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '170px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '80px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '80px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '100px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '100px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
    ],
}
export const defaultTankAreaDefFillingDesignTable: ITableDataUiDesign  = {
    title: {
        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": 7,
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
    subTitle: {

        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": 5,
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
    columnsBordure: {
        length: variables.tableColumnBordureLength,
        color: variables.tableColumnBordureColor,
    },
    columns: [
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '70px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '70px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '140px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '120px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
    ],
}
export const defaultTankAreaDefFillingDesignTableSub: ITableDataUiDesign  = {
    title: {
        "background-color": "#eee",
        "textAlign": "center",
        "padding": 7,
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
    subTitle: {
        "background-color": "#eee",
        "textAlign": "center",
        "padding": 5,
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
    columnsBordure: {
        length: variables.tableColumnBordureLength,
        color: variables.tableColumnBordureColor,
    },
    columns: [
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '70px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '250px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '170px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '170px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '80px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '80px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '100px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '100px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
    ],
}
export const defaultTankAreaDesignTable: ITableDataUiDesign  = {
    title: {

        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": 7,
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
    subTitle: {

        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": 5,
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
    columnsBordure: {
        length: variables.tableColumnBordureLength,
        color: variables.tableColumnBordureColor,
    },
    columns: [
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '70px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '250px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
    ],
}
export const defaultTankDesignTable: ITableDataUiDesign  = {
    title: {
        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": 7,
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
    subTitle: {
        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": 5,
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
    columnsBordure: {
        length: variables.tableColumnBordureLength,
        color: variables.tableColumnBordureColor,
    },
    columns: [
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '70px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '250px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '250px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '250px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '250px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '250px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        {   "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '200px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
    ],
}
export const defaultUserDesignTable: ITableDataUiDesign  = {
    title: {

        "background-color": variables.tableTitleBgColor,
        "textAlign": "center",
        "padding": 7,
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
    subTitle: {

        "background-color": variables.tableSubTitleBgColor,
        "textAlign": "center",
        "padding": 5,
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
    columnsBordure: {
        length: variables.tableColumnBordureLength,
        color: variables.tableColumnBordureColor,
    },
    columns: [
        { "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '70px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        { "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '250px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "green", "size": variables.tableColumnFontFamilySize + "px" } },
        { "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '250px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "green", "size": variables.tableColumnFontFamilySize + "px" } },
        { "textAlign":"left", "backgroundColor": variables.tableTitleBgColor, "width": '250px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        { "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '350px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
        { "textAlign":"center", "backgroundColor": variables.tableTitleBgColor, "width": '150px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "black", "size": variables.tableColumnFontFamilySize + "px" } },
    ],
}
