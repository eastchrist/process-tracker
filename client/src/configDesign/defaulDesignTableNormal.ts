import {
    ITableDataFactoryInfo,
    ITableDataFactoryMain,
    ITableProjectPriorityDifficulty
} from "@/api/types";
import i18n from "@/i18n";
import variables from "@/styles/_variables.scss";

//'Tab01 ' +
export const defaultTableDataFactoryMain: ITableDataFactoryMain = {
    title: {
        title: 'Tab01 ' + i18n.t('tables.tableDataFactoryMain.title') + '',
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
        i18n.t(`tables.tableDataFactoryMain.header.header1`) + '',
        i18n.t(`tables.tableDataFactoryMain.header.header2`) + '',
        i18n.t(`tables.tableDataFactoryMain.header.header3`) + '',
        i18n.t(`tables.tableDataFactoryMain.header.header4`) + '',
    ],
    textColumn: [
        i18n.t(`tables.tableDataFactoryMain.column.column1`) + '',
        i18n.t(`tables.tableDataFactoryMain.column.column2`) + '',
        i18n.t(`tables.tableDataFactoryMain.column.column3`) + '',
        i18n.t(`tables.tableDataFactoryMain.column.column4`) + '',
    ],
    columnsBordure: {
        length: 1,
        color: "black"
    },
    columns: [
        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"left", "width": '70px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"center", "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"center", "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"center", "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },
    ],
    fonctionFirstAnnual : {
        losses: '',
        price: '',
        priceEuro: '',
    },
    fonctionCurrentAnnual: {
        losses: '',
        price: '',
        priceEuro: '',
    },
    fonctionSavingAnnual: {
        losses: '',
        price: '',
        priceEuro: '',
    },
    fonctionProjectRecoveryRequestAnnual: {
        losses: '',
        price: '',
        priceEuro: '',
    },
}

//'Tab02 ' +
export const defaultTableDataFactoryInfo: ITableDataFactoryInfo = {
    title: {
        title: 'Tab02 ' + i18n.t('tables.tableDataFactoryInfo.title') + '',
    },
    textColumn: [
        i18n.t(`tables.tableDataFactoryInfo.column.column1`) + '',
        i18n.t(`tables.tableDataFactoryInfo.column.column2`) + '',
        i18n.t(`tables.tableDataFactoryInfo.column.column3`) + '',
        i18n.t(`tables.tableDataFactoryInfo.column.column4`) + '',
        i18n.t(`tables.tableDataFactoryInfo.column.column5`) + '',
        i18n.t(`tables.tableDataFactoryInfo.column.column6`) + '',
        i18n.t(`tables.tableDataFactoryInfo.column.column7`) + '',
        i18n.t(`tables.tableDataFactoryInfo.column.column8`) + '',
        i18n.t(`tables.tableDataFactoryInfo.column.column9`) + '',
        i18n.t(`tables.tableDataFactoryInfo.column.column10`) + '',
        i18n.t(`tables.tableDataFactoryInfo.column.column11`) + '',
        i18n.t(`tables.tableDataFactoryInfo.column.column12`) + '',
        i18n.t(`tables.tableDataFactoryInfo.column.column13`) + '',
        i18n.t(`tables.tableDataFactoryInfo.column.column14`) + '',
        i18n.t(`tables.tableDataFactoryInfo.column.column15`) + '',
    ],
    fonctionNb: 266,
    fonctionInitAnnualPrice: 8100494,
    fonctionCurrentAnnualPrice: 4150465,
    fonctionProjectRecoveryRequestAnnual: 6509554,
    fonctionProjectRecoveryRealAnnual: 3950029,

    fonctionNotDone: 25,
    fonctionDone: 241,
    fonctionInAlarm: 32,
    fonctionNotLink: 123,
    fonctionNotLinkInitialLosse: 1525187,
}

//'Tab03 ' +
export const defaultTableDataProjectAllPriorityDifficulty: ITableProjectPriorityDifficulty = {
    title: {
        title: 'Tab03 ' + i18n.t('tables.projectAllPriorityDifficultyTableData.title') + '',
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
        i18n.t(`tables.projectAllPriorityDifficultyTableData.header.header1`) + '',
        i18n.t(`tables.projectAllPriorityDifficultyTableData.header.header2`) + '',
        i18n.t(`tables.projectAllPriorityDifficultyTableData.header.header3`) + '',
        i18n.t(`tables.projectAllPriorityDifficultyTableData.header.header4`) + '',
        i18n.t(`tables.projectAllPriorityDifficultyTableData.header.header5`) + '',
        i18n.t(`tables.projectAllPriorityDifficultyTableData.header.header6`) + '',
    ],
    textHeaderSub: [
        i18n.t(`tables.projectAllPriorityDifficultyTableData.subHeader.subHeader1`) + '',
        i18n.t(`tables.projectAllPriorityDifficultyTableData.subHeader.subHeader2`) + '',
        i18n.t(`tables.projectAllPriorityDifficultyTableData.subHeader.subHeader3`) + '',
    ],
    textColumn: [
        i18n.t(`tables.projectAllPriorityDifficultyTableData.column.column1`) + '',
        i18n.t(`tables.projectAllPriorityDifficultyTableData.column.column2`) + '',
        i18n.t(`tables.projectAllPriorityDifficultyTableData.column.column3`) + '',
        i18n.t(`tables.projectAllPriorityDifficultyTableData.column.column4`) + '',
        i18n.t(`tables.projectAllPriorityDifficultyTableData.column.column5`) + '',
    ],

    columnsBordure: {
        length: 1,
        color: "yellow"
    },
    columns: [
        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"left", "width": '70px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },

        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"center", "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"center", "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"center", "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"center", "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"center", "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"center", "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"center", "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"center", "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"center", "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"center", "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"center", "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"center", "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"center", "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"center", "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"center", "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },
    ],

    veryHigh: {
        veryHard: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        hard: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        difficile: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        normal: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        easy: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
    },
    high: {
        veryHard: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        hard: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        difficile: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        normal: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        easy: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
    },
    normal: {
        veryHard: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        hard: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        difficile: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        normal: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        easy: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
    },
    low: {
        veryHard: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        hard: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        difficile: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        normal: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        easy: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
    },
    veryLow: {
        veryHard: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        hard: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        difficile: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        normal: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        easy: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
    },
}

//'Tab04 ' +
export const defaultTableDataProjectRunningPriorityDifficulty: ITableProjectPriorityDifficulty = {
    title: {
        title: 'Tab04 ' + i18n.t('tables.projectRunningPriorityDifficultyTableData.title') + '',
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
        i18n.t(`tables.projectRunningPriorityDifficultyTableData.header.header1`) + '',
        i18n.t(`tables.projectRunningPriorityDifficultyTableData.header.header2`) + '',
        i18n.t(`tables.projectRunningPriorityDifficultyTableData.header.header3`) + '',
        i18n.t(`tables.projectRunningPriorityDifficultyTableData.header.header4`) + '',
        i18n.t(`tables.projectRunningPriorityDifficultyTableData.header.header5`) + '',
        i18n.t(`tables.projectRunningPriorityDifficultyTableData.header.header6`) + '',
    ],
    textHeaderSub: [
        i18n.t(`tables.projectRunningPriorityDifficultyTableData.subHeader.subHeader1`) + '',
        i18n.t(`tables.projectRunningPriorityDifficultyTableData.subHeader.subHeader2`) + '',
        i18n.t(`tables.projectRunningPriorityDifficultyTableData.subHeader.subHeader3`) + '',
    ],
    textColumn: [
        i18n.t(`tables.projectRunningPriorityDifficultyTableData.column.column1`) + '',
        i18n.t(`tables.projectRunningPriorityDifficultyTableData.column.column2`) + '',
        i18n.t(`tables.projectRunningPriorityDifficultyTableData.column.column3`) + '',
        i18n.t(`tables.projectRunningPriorityDifficultyTableData.column.column4`) + '',
        i18n.t(`tables.projectRunningPriorityDifficultyTableData.column.column5`) + '',
    ],

    columnsBordure: {
        length: 1,
        color: "black"
    },
    columns: [
        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"left", "width": '70px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },

        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"center", "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"center", "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"center", "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"center", "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"center", "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"center", "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"center", "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"center", "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"center", "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"center", "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"center", "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"center", "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"center", "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"center", "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },
        {   "backgroundColor": variables.tableColumnBgColor, "textAlign":"center", "width": '270px', "padding": 5, "font": { "family": variables.tableColumnFontFamily, "color": "red", "size": variables.tableColumnFontFamilySize + "px" }, },
    ],

    veryHigh: {
        veryHard: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        hard: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        difficile: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        normal: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        easy: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
    },
    high: {
        veryHard: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        hard: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        difficile: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        normal: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        easy: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
    },
    normal: {
        veryHard: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        hard: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        difficile: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        normal: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        easy: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
    },
    low: {
        veryHard: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        hard: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        difficile: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        normal: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        easy: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
    },
    veryLow: {
        veryHard: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        hard: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        difficile: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        normal: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
        easy: {
            number: '',
            projectFunctionLinkedFirstAnnualLosses: '',
            projectFunctionLinkedFirstAnnualPrice: '',
            projectFunctionLinkedCurrentAnnualLosses: '',
            projectFunctionLinkedCurrentAnnualPrice: '',
            projectFunctionLinkedRecoveryAnnualLosses: '',
            projectFunctionLinkedRecoveryAnnualPrice: '',
        },
    },
}




