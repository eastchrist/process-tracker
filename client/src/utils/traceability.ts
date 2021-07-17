import {IDataBaseFactoryData, IPriorityDifficulty} from '@/api/types'
import { IBarAndMixeChart, IPieChart, ITableDataFactoryMain, ITableDataFactoryInfo, ITableProjectPriorityDifficulty, ITableDataUiDesignedWithData } from '@/api/types'

import { defaultPriorityDifficulty } from '@/api/traceability'
import i18n from "@/i18n";


const getPriorityDifficultyAndLossesInfoProject = (area: any, DifficultyInfoProject: any) => {
    const PriorityDifficultyInfoProject = DifficultyInfoProject
    for (let indexArea = 0; indexArea < Object.values(area).length; indexArea++) {
        const objectArea: any = Object.values(area)[indexArea]
        const projectPriority = objectArea.projectPriority
        const projectDifficulty = objectArea.projectDifficulty
        const projectFunctionLinkedFirstAnnualLosses = objectArea.projectFunctionLinkedFirstAnnualLosses
        const projectFunctionLinkedFirstAnnualPrice = objectArea.projectFunctionLinkedFirstAnnualPrice
        const projectFunctionLinkedCurrentAnnualLosses = objectArea.projectFunctionLinkedCurrentAnnualLosses
        const projectFunctionLinkedCurrentAnnualPrice = objectArea.projectFunctionLinkedCurrentAnnualPrice
        const projectFunctionLinkedRecoveryAnnualLosses = objectArea.projectFunctionLinkedRecoveryAnnualLosses
        const projectFunctionLinkedRecoveryAnnualPrice = objectArea.projectFunctionLinkedRecoveryAnnualPrice

        let indexPriority = -1
        if (( projectPriority >= 1 ) && ( projectPriority <= 5 ) && ( projectDifficulty >= 1 ) && ( projectDifficulty <= 5 )) {

            if (projectPriority === 5) { indexPriority = 4} //Priority veryLow
            if (projectPriority === 4) { indexPriority = 3} //Priority low
            if (projectPriority === 3) { indexPriority = 2} //Priority normal
            if (projectPriority === 2) { indexPriority = 1} //Priority high
            if (projectPriority === 1) { indexPriority = 0} //Priority veryHigh

            const objectIndexPriority: any = Object.values(PriorityDifficultyInfoProject)[indexPriority]
            let ObjectPriority: any = {}
            if (projectDifficulty === 5) {
                // Difficulty easy
                ObjectPriority = objectIndexPriority.easy
            }
            if (projectDifficulty === 4) {
                // Difficulty normal
                ObjectPriority = objectIndexPriority.normal
            }
            if (projectDifficulty === 3) {
                // Difficulty difficile
                ObjectPriority = objectIndexPriority.difficile
            }
            if (projectDifficulty === 2) {
                // Difficulty hard
                ObjectPriority = objectIndexPriority.hard
            }
            if (projectDifficulty === 1) {
                // Difficulty veryHard
                ObjectPriority = objectIndexPriority.veryHard
            }

            ObjectPriority.number = ObjectPriority.number + 1
            ObjectPriority.projectFunctionLinkedFirstAnnualLosses = ObjectPriority.projectFunctionLinkedFirstAnnualLosses + parseInt(projectFunctionLinkedFirstAnnualLosses)
            ObjectPriority.projectFunctionLinkedFirstAnnualPrice = ObjectPriority.projectFunctionLinkedFirstAnnualPrice + parseInt(projectFunctionLinkedFirstAnnualPrice)
            ObjectPriority.projectFunctionLinkedCurrentAnnualLosses = ObjectPriority.projectFunctionLinkedCurrentAnnualLosses + parseInt(projectFunctionLinkedCurrentAnnualLosses)
            ObjectPriority.projectFunctionLinkedCurrentAnnualPrice = ObjectPriority.projectFunctionLinkedCurrentAnnualPrice + parseInt(projectFunctionLinkedCurrentAnnualPrice)
            ObjectPriority.projectFunctionLinkedRecoveryAnnualLosses = ObjectPriority.projectFunctionLinkedRecoveryAnnualLosses + parseInt(projectFunctionLinkedRecoveryAnnualLosses)
            ObjectPriority.projectFunctionLinkedRecoveryAnnualPrice = ObjectPriority.projectFunctionLinkedRecoveryAnnualPrice + parseInt(projectFunctionLinkedRecoveryAnnualPrice)
        }
    }
    return PriorityDifficultyInfoProject
}
const getAnnualInfoProject = (area: any) => {
    const AnnualInfoProject = {
        projectFunctionLinkedFirstAnnualLosses: 0,
        projectFunctionLinkedFirstAnnualPrice: 0,
        projectFunctionLinkedCurrentAnnualLosses: 0,
        projectFunctionLinkedCurrentAnnualPrice: 0,
        projectFunctionLinkedRecoveryAnnualLosses: 0,
        projectFunctionLinkedRecoveryAnnualPrice: 0,
    }
    for (let indexArea = 0; indexArea < Object.values(area).length; indexArea++) {
        const objectArea: any = Object.values(area)[indexArea]
        AnnualInfoProject.projectFunctionLinkedFirstAnnualLosses = AnnualInfoProject.projectFunctionLinkedFirstAnnualLosses + objectArea.projectFunctionLinkedFirstAnnualLosses
        AnnualInfoProject.projectFunctionLinkedFirstAnnualPrice = AnnualInfoProject.projectFunctionLinkedFirstAnnualPrice + objectArea.projectFunctionLinkedFirstAnnualPrice
        AnnualInfoProject.projectFunctionLinkedCurrentAnnualLosses = AnnualInfoProject.projectFunctionLinkedCurrentAnnualLosses + objectArea.projectFunctionLinkedCurrentAnnualLosses
        AnnualInfoProject.projectFunctionLinkedCurrentAnnualPrice = AnnualInfoProject.projectFunctionLinkedCurrentAnnualPrice + + objectArea.projectFunctionLinkedCurrentAnnualPrice
        AnnualInfoProject.projectFunctionLinkedRecoveryAnnualLosses = AnnualInfoProject.projectFunctionLinkedRecoveryAnnualLosses + objectArea.projectFunctionLinkedRecoveryAnnualLosses
        AnnualInfoProject.projectFunctionLinkedRecoveryAnnualPrice = AnnualInfoProject.projectFunctionLinkedRecoveryAnnualPrice + objectArea.projectFunctionLinkedRecoveryAnnualPrice
    }
    return AnnualInfoProject
}
const getAnnualInfoProjectRunningByType = (area: any) => {
    const annualInfoProjectRunningByType = {
        ChangeParameters: {
            number: 0,
            projectFunctionLinkedFirstAnnualLosses: 0, projectFunctionLinkedFirstAnnualPrice: 0,
            projectFunctionLinkedCurrentAnnualLosses: 0, projectFunctionLinkedCurrentAnnualPrice: 0,
            projectFunctionLinkedRecoveryAnnualLosses: 0, projectFunctionLinkedRecoveryAnnualPrice: 0,
        },
        SmallProg: {
            number: 0,
            projectFunctionLinkedFirstAnnualLosses: 0, projectFunctionLinkedFirstAnnualPrice: 0, projectFunctionLinkedCurrentAnnualLosses: 0,
            projectFunctionLinkedCurrentAnnualPrice: 0, projectFunctionLinkedRecoveryAnnualLosses: 0, projectFunctionLinkedRecoveryAnnualPrice: 0,
        },
        MediumProg: {
            number: 0,
            projectFunctionLinkedFirstAnnualLosses: 0, projectFunctionLinkedFirstAnnualPrice: 0, projectFunctionLinkedCurrentAnnualLosses: 0,
            projectFunctionLinkedCurrentAnnualPrice: 0, projectFunctionLinkedRecoveryAnnualLosses: 0, projectFunctionLinkedRecoveryAnnualPrice: 0,
        },
        BigProg: {
            number: 0,
            projectFunctionLinkedFirstAnnualLosses: 0, projectFunctionLinkedFirstAnnualPrice: 0, projectFunctionLinkedCurrentAnnualLosses: 0,
            projectFunctionLinkedCurrentAnnualPrice: 0, projectFunctionLinkedRecoveryAnnualLosses: 0, projectFunctionLinkedRecoveryAnnualPrice: 0,
        },

        SmallProject: {
            number: 0,
            projectFunctionLinkedFirstAnnualLosses: 0, projectFunctionLinkedFirstAnnualPrice: 0, projectFunctionLinkedCurrentAnnualLosses: 0,
            projectFunctionLinkedCurrentAnnualPrice: 0, projectFunctionLinkedRecoveryAnnualLosses: 0, projectFunctionLinkedRecoveryAnnualPrice: 0,
        },
        MediumProject: {
            number: 0,
            projectFunctionLinkedFirstAnnualLosses: 0, projectFunctionLinkedFirstAnnualPrice: 0, projectFunctionLinkedCurrentAnnualLosses: 0,
            projectFunctionLinkedCurrentAnnualPrice: 0, projectFunctionLinkedRecoveryAnnualLosses: 0, projectFunctionLinkedRecoveryAnnualPrice: 0,
        },
        BigProject: {
            number: 0,
            projectFunctionLinkedFirstAnnualLosses: 0, projectFunctionLinkedFirstAnnualPrice: 0, projectFunctionLinkedCurrentAnnualLosses: 0,
            projectFunctionLinkedCurrentAnnualPrice: 0, projectFunctionLinkedRecoveryAnnualLosses: 0, projectFunctionLinkedRecoveryAnnualPrice: 0,
        },
    }
    for (let indexArea = 0; indexArea < Object.values(area).length; indexArea++) {
        const project: any = Object.values(area)[indexArea]
        if (project.projectTypeValue === 1 ) {
            annualInfoProjectRunningByType.ChangeParameters.number = annualInfoProjectRunningByType.ChangeParameters.number + 1

            annualInfoProjectRunningByType.ChangeParameters.projectFunctionLinkedFirstAnnualLosses = annualInfoProjectRunningByType.ChangeParameters.projectFunctionLinkedFirstAnnualLosses + project.projectFunctionLinkedFirstAnnualLosses
            annualInfoProjectRunningByType.ChangeParameters.projectFunctionLinkedFirstAnnualPrice = annualInfoProjectRunningByType.ChangeParameters.projectFunctionLinkedFirstAnnualPrice + project.projectFunctionLinkedFirstAnnualPrice
            annualInfoProjectRunningByType.ChangeParameters.projectFunctionLinkedCurrentAnnualLosses = annualInfoProjectRunningByType.ChangeParameters.projectFunctionLinkedCurrentAnnualLosses + project.projectFunctionLinkedCurrentAnnualLosses
            annualInfoProjectRunningByType.ChangeParameters.projectFunctionLinkedCurrentAnnualPrice = annualInfoProjectRunningByType.ChangeParameters.projectFunctionLinkedCurrentAnnualPrice + project.projectFunctionLinkedCurrentAnnualPrice
            annualInfoProjectRunningByType.ChangeParameters.projectFunctionLinkedRecoveryAnnualLosses = annualInfoProjectRunningByType.ChangeParameters.projectFunctionLinkedRecoveryAnnualLosses + project.projectFunctionLinkedRecoveryAnnualLosses
            annualInfoProjectRunningByType.ChangeParameters.projectFunctionLinkedRecoveryAnnualPrice = annualInfoProjectRunningByType.ChangeParameters.projectFunctionLinkedRecoveryAnnualPrice + project.projectFunctionLinkedRecoveryAnnualPrice
        }
        else if (project.projectTypeValue === 2 ) {
            annualInfoProjectRunningByType.SmallProg.number = annualInfoProjectRunningByType.SmallProg.number + 1

            annualInfoProjectRunningByType.SmallProg.projectFunctionLinkedFirstAnnualLosses = annualInfoProjectRunningByType.SmallProg.projectFunctionLinkedFirstAnnualLosses + project.projectFunctionLinkedFirstAnnualLosses
            annualInfoProjectRunningByType.SmallProg.projectFunctionLinkedFirstAnnualPrice = annualInfoProjectRunningByType.SmallProg.projectFunctionLinkedFirstAnnualPrice + project.projectFunctionLinkedFirstAnnualPrice
            annualInfoProjectRunningByType.SmallProg.projectFunctionLinkedCurrentAnnualLosses = annualInfoProjectRunningByType.SmallProg.projectFunctionLinkedCurrentAnnualLosses + project.projectFunctionLinkedCurrentAnnualLosses
            annualInfoProjectRunningByType.SmallProg.projectFunctionLinkedCurrentAnnualPrice = annualInfoProjectRunningByType.SmallProg.projectFunctionLinkedCurrentAnnualPrice + project.projectFunctionLinkedCurrentAnnualPrice
            annualInfoProjectRunningByType.SmallProg.projectFunctionLinkedRecoveryAnnualLosses = annualInfoProjectRunningByType.SmallProg.projectFunctionLinkedRecoveryAnnualLosses + project.projectFunctionLinkedRecoveryAnnualLosses
            annualInfoProjectRunningByType.SmallProg.projectFunctionLinkedRecoveryAnnualPrice = annualInfoProjectRunningByType.SmallProg.projectFunctionLinkedRecoveryAnnualPrice + project.projectFunctionLinkedRecoveryAnnualPrice
        }
        else if (project.projectTypeValue === 3 ) {
            annualInfoProjectRunningByType.MediumProg.number = annualInfoProjectRunningByType.MediumProg.number + 1

            annualInfoProjectRunningByType.MediumProg.projectFunctionLinkedFirstAnnualLosses = annualInfoProjectRunningByType.MediumProg.projectFunctionLinkedFirstAnnualLosses + project.projectFunctionLinkedFirstAnnualLosses
            annualInfoProjectRunningByType.MediumProg.projectFunctionLinkedFirstAnnualPrice = annualInfoProjectRunningByType.MediumProg.projectFunctionLinkedFirstAnnualPrice + project.projectFunctionLinkedFirstAnnualPrice
            annualInfoProjectRunningByType.MediumProg.projectFunctionLinkedCurrentAnnualLosses = annualInfoProjectRunningByType.MediumProg.projectFunctionLinkedCurrentAnnualLosses + project.projectFunctionLinkedCurrentAnnualLosses
            annualInfoProjectRunningByType.MediumProg.projectFunctionLinkedCurrentAnnualPrice = annualInfoProjectRunningByType.MediumProg.projectFunctionLinkedCurrentAnnualPrice + project.projectFunctionLinkedCurrentAnnualPrice
            annualInfoProjectRunningByType.MediumProg.projectFunctionLinkedRecoveryAnnualLosses = annualInfoProjectRunningByType.MediumProg.projectFunctionLinkedRecoveryAnnualLosses + project.projectFunctionLinkedRecoveryAnnualLosses
            annualInfoProjectRunningByType.MediumProg.projectFunctionLinkedRecoveryAnnualPrice = annualInfoProjectRunningByType.MediumProg.projectFunctionLinkedRecoveryAnnualPrice + project.projectFunctionLinkedRecoveryAnnualPrice
        }
        else if (project.projectTypeValue === 4 ) {
            annualInfoProjectRunningByType.BigProg.number = annualInfoProjectRunningByType.BigProg.number + 1

            annualInfoProjectRunningByType.BigProg.projectFunctionLinkedFirstAnnualLosses = annualInfoProjectRunningByType.BigProg.projectFunctionLinkedFirstAnnualLosses + project.projectFunctionLinkedFirstAnnualLosses
            annualInfoProjectRunningByType.BigProg.projectFunctionLinkedFirstAnnualPrice = annualInfoProjectRunningByType.BigProg.projectFunctionLinkedFirstAnnualPrice + project.projectFunctionLinkedFirstAnnualPrice
            annualInfoProjectRunningByType.BigProg.projectFunctionLinkedCurrentAnnualLosses = annualInfoProjectRunningByType.BigProg.projectFunctionLinkedCurrentAnnualLosses + project.projectFunctionLinkedCurrentAnnualLosses
            annualInfoProjectRunningByType.BigProg.projectFunctionLinkedCurrentAnnualPrice = annualInfoProjectRunningByType.BigProg.projectFunctionLinkedCurrentAnnualPrice + project.projectFunctionLinkedCurrentAnnualPrice
            annualInfoProjectRunningByType.BigProg.projectFunctionLinkedRecoveryAnnualLosses = annualInfoProjectRunningByType.BigProg.projectFunctionLinkedRecoveryAnnualLosses + project.projectFunctionLinkedRecoveryAnnualLosses
            annualInfoProjectRunningByType.BigProg.projectFunctionLinkedRecoveryAnnualPrice = annualInfoProjectRunningByType.BigProg.projectFunctionLinkedRecoveryAnnualPrice + project.projectFunctionLinkedRecoveryAnnualPrice
        }
        else if (project.projectTypeValue === 5 ) {
            annualInfoProjectRunningByType.SmallProject.number = annualInfoProjectRunningByType.SmallProject.number + 1

            annualInfoProjectRunningByType.SmallProject.projectFunctionLinkedFirstAnnualLosses = annualInfoProjectRunningByType.SmallProject.projectFunctionLinkedFirstAnnualLosses + project.projectFunctionLinkedFirstAnnualLosses
            annualInfoProjectRunningByType.SmallProject.projectFunctionLinkedFirstAnnualPrice = annualInfoProjectRunningByType.SmallProject.projectFunctionLinkedFirstAnnualPrice + project.projectFunctionLinkedFirstAnnualPrice
            annualInfoProjectRunningByType.SmallProject.projectFunctionLinkedCurrentAnnualLosses = annualInfoProjectRunningByType.SmallProject.projectFunctionLinkedCurrentAnnualLosses + project.projectFunctionLinkedCurrentAnnualLosses
            annualInfoProjectRunningByType.SmallProject.projectFunctionLinkedCurrentAnnualPrice = annualInfoProjectRunningByType.SmallProject.projectFunctionLinkedCurrentAnnualPrice + project.projectFunctionLinkedCurrentAnnualPrice
            annualInfoProjectRunningByType.SmallProject.projectFunctionLinkedRecoveryAnnualLosses = annualInfoProjectRunningByType.SmallProject.projectFunctionLinkedRecoveryAnnualLosses + project.projectFunctionLinkedRecoveryAnnualLosses
            annualInfoProjectRunningByType.SmallProject.projectFunctionLinkedRecoveryAnnualPrice = annualInfoProjectRunningByType.SmallProject.projectFunctionLinkedRecoveryAnnualPrice + project.projectFunctionLinkedRecoveryAnnualPrice
        }
        else if (project.projectTypeValue === 6 ) {
            annualInfoProjectRunningByType.MediumProject.number = annualInfoProjectRunningByType.MediumProject.number + 1

            annualInfoProjectRunningByType.MediumProject.projectFunctionLinkedFirstAnnualLosses = annualInfoProjectRunningByType.MediumProject.projectFunctionLinkedFirstAnnualLosses + project.projectFunctionLinkedFirstAnnualLosses
            annualInfoProjectRunningByType.MediumProject.projectFunctionLinkedFirstAnnualPrice = annualInfoProjectRunningByType.MediumProject.projectFunctionLinkedFirstAnnualPrice + project.projectFunctionLinkedFirstAnnualPrice
            annualInfoProjectRunningByType.MediumProject.projectFunctionLinkedCurrentAnnualLosses = annualInfoProjectRunningByType.MediumProject.projectFunctionLinkedCurrentAnnualLosses + project.projectFunctionLinkedCurrentAnnualLosses
            annualInfoProjectRunningByType.MediumProject.projectFunctionLinkedCurrentAnnualPrice = annualInfoProjectRunningByType.MediumProject.projectFunctionLinkedCurrentAnnualPrice + project.projectFunctionLinkedCurrentAnnualPrice
            annualInfoProjectRunningByType.MediumProject.projectFunctionLinkedRecoveryAnnualLosses = annualInfoProjectRunningByType.MediumProject.projectFunctionLinkedRecoveryAnnualLosses + project.projectFunctionLinkedRecoveryAnnualLosses
            annualInfoProjectRunningByType.MediumProject.projectFunctionLinkedRecoveryAnnualPrice = annualInfoProjectRunningByType.MediumProject.projectFunctionLinkedRecoveryAnnualPrice + project.projectFunctionLinkedRecoveryAnnualPrice
        }
        else if (project.projectTypeValue === 7 ) {
            annualInfoProjectRunningByType.BigProject.number = annualInfoProjectRunningByType.BigProject.number + 1

            annualInfoProjectRunningByType.BigProject.projectFunctionLinkedFirstAnnualLosses = annualInfoProjectRunningByType.BigProject.projectFunctionLinkedFirstAnnualLosses + project.projectFunctionLinkedFirstAnnualLosses
            annualInfoProjectRunningByType.BigProject.projectFunctionLinkedFirstAnnualPrice = annualInfoProjectRunningByType.BigProject.projectFunctionLinkedFirstAnnualPrice + project.projectFunctionLinkedFirstAnnualPrice
            annualInfoProjectRunningByType.BigProject.projectFunctionLinkedCurrentAnnualLosses = annualInfoProjectRunningByType.BigProject.projectFunctionLinkedCurrentAnnualLosses + project.projectFunctionLinkedCurrentAnnualLosses
            annualInfoProjectRunningByType.BigProject.projectFunctionLinkedCurrentAnnualPrice = annualInfoProjectRunningByType.BigProject.projectFunctionLinkedCurrentAnnualPrice + project.projectFunctionLinkedCurrentAnnualPrice
            annualInfoProjectRunningByType.BigProject.projectFunctionLinkedRecoveryAnnualLosses = annualInfoProjectRunningByType.BigProject.projectFunctionLinkedRecoveryAnnualLosses + project.projectFunctionLinkedRecoveryAnnualLosses
            annualInfoProjectRunningByType.BigProject.projectFunctionLinkedRecoveryAnnualPrice = annualInfoProjectRunningByType.BigProject.projectFunctionLinkedRecoveryAnnualPrice + project.projectFunctionLinkedRecoveryAnnualPrice
        }
    }
    return annualInfoProjectRunningByType
}

const initBarchar = (barChart: IBarAndMixeChart, currency: string) => {
    barChart.title.text = barChart.title.text.replace("/*Currency/*", currency);
    barChart.title.titleSub.text = barChart.title.titleSub.text.replace("/*Currency/*", currency);
    //Replace currency inside serieName
    for (let indexSerieName = 0; indexSerieName < barChart.serieName.length; indexSerieName++) {
        barChart.serieName[indexSerieName] = barChart.serieName[indexSerieName].replace("/*Currency/*", currency);
    }
    return barChart
}
const initPiechar = (pieChart: IPieChart, currency: string) => {
    pieChart.title.text = pieChart.title.text.replace("/*Currency/*", currency);
    pieChart.title.titleSub.text = pieChart.title.titleSub.text.replace("/*Currency/*", currency);
    return pieChart
}
const initMixedChart = (mixedChart: IBarAndMixeChart, currency: string) => {
    mixedChart.title.text = mixedChart.title.text.replace("/*Currency/*", currency);
    mixedChart.title.titleSub.text = mixedChart.title.titleSub.text.replace("/*Currency/*", currency);
    //Replace currency inside serieName
    for (let indexSerieName = 0; indexSerieName < mixedChart.serieName.length; indexSerieName++) {
        mixedChart.serieName[indexSerieName] = mixedChart.serieName[indexSerieName].replace("/*Currency/*", currency);
    }
    return mixedChart
}
const initTableData = (tableData: any, currency: string) => {
    tableData.title.text = tableData.title.text.replace("/*Currency/*", currency);
    if (tableData.header.text) {
        for (let indexTextColumn = 0; indexTextColumn < tableData.header.text.length; indexTextColumn++) {
            tableData.header.text[indexTextColumn] = tableData.header.text[indexTextColumn].replace("/*Currency/*", currency);
        }
    }
    if (tableData.columns.text) {
        for (let indexTextColumn = 0; indexTextColumn < tableData.columns.text.length; indexTextColumn++) {
            tableData.columns.text[indexTextColumn] = tableData.columns.text[indexTextColumn].replace("/*Currency/*", currency);
        }
    }
    return tableData
}

// ******* Tables Data

export const getFactoryTableDataFonctionNotLinkedAndNeverDoneAndToCheckAndInAlarmByAreas = (data: any, TableDataFonctionAlarmByAreas: ITableDataUiDesignedWithData, TableDataFonctionNotLinkedByAreas: ITableDataUiDesignedWithData, TableDataFonctionNeverDoneByAreas: ITableDataUiDesignedWithData, TableDataFonctionToCheckByAreas: ITableDataUiDesignedWithData, factoryInfo: IDataBaseFactoryData) => {
    TableDataFonctionAlarmByAreas = initTableData( TableDataFonctionAlarmByAreas, factoryInfo.currency)
    TableDataFonctionNotLinkedByAreas = initTableData( TableDataFonctionNotLinkedByAreas, factoryInfo.currency)
    TableDataFonctionNeverDoneByAreas = initTableData( TableDataFonctionNeverDoneByAreas, factoryInfo.currency)
    TableDataFonctionToCheckByAreas = initTableData( TableDataFonctionToCheckByAreas, factoryInfo.currency)

    TableDataFonctionAlarmByAreas.data = data.fonctionAlarm
    TableDataFonctionNotLinkedByAreas.data = data.fonctionNotLinked
    TableDataFonctionNeverDoneByAreas.data = data.fonctionNeverDone
    TableDataFonctionToCheckByAreas.data = data.fonctionToCheck

    return {
        tableDataFonctionAlarmByAreas: TableDataFonctionAlarmByAreas,
        tableDataFonctionNotLinkedByAreas: TableDataFonctionNotLinkedByAreas,
        tableDataFonctionNeverDoneByAreas: TableDataFonctionNeverDoneByAreas,
        tableDataFonctionToCheckByAreas: TableDataFonctionToCheckByAreas,
    }
}



export const getFactoryTableDataFactoryProjectAllPriorityDifficulty = (data: any, tableDataFactoryProjectAllPriorityDifficulty: ITableProjectPriorityDifficulty, tableDataFactoryProjectRunningPriorityDifficulty: ITableProjectPriorityDifficulty, factoryInfo: IDataBaseFactoryData) => {
    tableDataFactoryProjectAllPriorityDifficulty = initTableData( tableDataFactoryProjectAllPriorityDifficulty, factoryInfo.currency)
    tableDataFactoryProjectRunningPriorityDifficulty = initTableData( tableDataFactoryProjectRunningPriorityDifficulty, factoryInfo.currency)

    const PriorityDifficultyInfoProjectEmpty:  IPriorityDifficulty = defaultPriorityDifficulty
    for (let indexArea = 0; indexArea < Object.values(data.areas).length; indexArea++) {
        const areaByIndex: any = Object.values(data.areas)[indexArea]
        const ProjectStatusRunningInfo = getPriorityDifficultyAndLossesInfoProject( areaByIndex.projectRunning, PriorityDifficultyInfoProjectEmpty )
        const ProjectStatusStandByInfo = getPriorityDifficultyAndLossesInfoProject( areaByIndex.projectStandBy, ProjectStatusRunningInfo)
        const ProjectStatusFinishInfo = getPriorityDifficultyAndLossesInfoProject( areaByIndex.projectFinished, ProjectStatusStandByInfo )

        //the datas are add empty=PriorityDifficultyInfoProjectEmpty + running + standby + finished, result inside finished
        tableDataFactoryProjectAllPriorityDifficulty.veryHigh = ProjectStatusFinishInfo.veryHigh
        tableDataFactoryProjectAllPriorityDifficulty.high = ProjectStatusFinishInfo.high
        tableDataFactoryProjectAllPriorityDifficulty.normal = ProjectStatusFinishInfo.normal
        tableDataFactoryProjectAllPriorityDifficulty.low = ProjectStatusFinishInfo.low
        tableDataFactoryProjectAllPriorityDifficulty.veryLow = ProjectStatusFinishInfo.veryLow

        tableDataFactoryProjectRunningPriorityDifficulty.veryHigh = ProjectStatusRunningInfo.veryHigh
        tableDataFactoryProjectRunningPriorityDifficulty.high = ProjectStatusRunningInfo.high
        tableDataFactoryProjectRunningPriorityDifficulty.normal = ProjectStatusRunningInfo.normal
        tableDataFactoryProjectRunningPriorityDifficulty.low = ProjectStatusRunningInfo.low
        tableDataFactoryProjectRunningPriorityDifficulty.veryLow = ProjectStatusRunningInfo.veryLow

    }
    return {
        tableDataFactoryProjectAllPriorityDifficulty: tableDataFactoryProjectAllPriorityDifficulty,
        tableDataFactoryProjectRunningPriorityDifficulty: tableDataFactoryProjectRunningPriorityDifficulty,
    }
}


export const getFactoryProjectAllAndProjectRunningNumberPrice = (data: any, MixedChartFactoryProjectAllNumberPrice: IBarAndMixeChart, MixedChartFactoryProjectRunningNumberPrice: IBarAndMixeChart, factoryInfo: IDataBaseFactoryData) => {
    MixedChartFactoryProjectAllNumberPrice = initMixedChart( MixedChartFactoryProjectAllNumberPrice, factoryInfo.currency)
    MixedChartFactoryProjectRunningNumberPrice = initMixedChart( MixedChartFactoryProjectRunningNumberPrice, factoryInfo.currency)
    for (let indexArea = 0; indexArea < Object.values(data.areas).length; indexArea++) {
        const areaByIndex: any = Object.values(data.areas)[indexArea]
        const projectTotalNb = areaByIndex.projectStandByNb + areaByIndex.projectRunningNb + areaByIndex.projectFinishedNb
        const annualProjectsStandBy = getAnnualInfoProject( areaByIndex.projectStandBy )
        const annualProjectsRunning = getAnnualInfoProject( areaByIndex.projectRunning )
        const annualProjectsFinish = getAnnualInfoProject( areaByIndex.projectFinished )
        const annualProjectsFirstAnnualPrice: number = annualProjectsStandBy.projectFunctionLinkedFirstAnnualPrice + annualProjectsRunning.projectFunctionLinkedFirstAnnualPrice + annualProjectsFinish.projectFunctionLinkedFirstAnnualPrice
        const annualProjectsCurrentAnnualPrice: number = annualProjectsStandBy.projectFunctionLinkedCurrentAnnualPrice + annualProjectsRunning.projectFunctionLinkedCurrentAnnualPrice + annualProjectsFinish.projectFunctionLinkedCurrentAnnualPrice
        const annualProjectsRecoveryAnnualPrice = annualProjectsStandBy.projectFunctionLinkedRecoveryAnnualLosses + annualProjectsRunning.projectFunctionLinkedRecoveryAnnualLosses + annualProjectsFinish.projectFunctionLinkedRecoveryAnnualLosses
        MixedChartFactoryProjectAllNumberPrice.xAxisText.push( areaByIndex.name );
        MixedChartFactoryProjectAllNumberPrice.series[0].Value.push( projectTotalNb );
        MixedChartFactoryProjectAllNumberPrice.series[1].Value.push( Math.round(annualProjectsFirstAnnualPrice) );
        MixedChartFactoryProjectAllNumberPrice.series[2].Value.push( Math.round(annualProjectsCurrentAnnualPrice) );
        MixedChartFactoryProjectAllNumberPrice.series[3].Value.push( Math.round(annualProjectsFirstAnnualPrice - annualProjectsRecoveryAnnualPrice) );

        const projectRunningNb = areaByIndex.projectRunningNb
        const annualProjectsRunningFirstAnnualPrice: number = annualProjectsRunning.projectFunctionLinkedFirstAnnualPrice
        const annualProjectsRunningCurrentAnnualPrice: number = annualProjectsRunning.projectFunctionLinkedCurrentAnnualPrice
        const annualProjectsRunningRecoveryAnnualPrice = annualProjectsRunning.projectFunctionLinkedRecoveryAnnualLosses
        MixedChartFactoryProjectRunningNumberPrice.xAxisText.push( areaByIndex.name );
        MixedChartFactoryProjectRunningNumberPrice.series[0].Value.push( projectRunningNb );
        MixedChartFactoryProjectRunningNumberPrice.series[1].Value.push( Math.round(annualProjectsRunningFirstAnnualPrice) );
        MixedChartFactoryProjectRunningNumberPrice.series[2].Value.push( Math.round(annualProjectsRunningCurrentAnnualPrice) );
        MixedChartFactoryProjectRunningNumberPrice.series[3].Value.push( Math.round(annualProjectsRunningFirstAnnualPrice - annualProjectsRunningRecoveryAnnualPrice) );
    }

    return {
        MixedChartFactoryProjectAllNumberPrice: MixedChartFactoryProjectAllNumberPrice,
        MixedChartFactoryProjectRunningNumberPrice: MixedChartFactoryProjectRunningNumberPrice,
    }
}
export const getFactoryTableDataFactoryMainAndMeasurePointStatusAndProjectStatusAndProjectAllTypeNumberAndProjectAllInitialLosses = (data: any, tableDataFactoryMain: ITableDataFactoryMain, tableDataFactoryInfo: ITableDataFactoryInfo, PieChartMeasurePointStatusByFactory: IPieChart, PieChartProjectStatusByFactory: IPieChart, PieChartProjectAllTypeNumberByFactory: IPieChart, PieChartProjectAllInitialLossesByFactory: IPieChart, factoryInfo: IDataBaseFactoryData) => {
    tableDataFactoryMain = initTableData( tableDataFactoryMain, factoryInfo.currency)
    tableDataFactoryInfo = initTableData( tableDataFactoryInfo, factoryInfo.currency)

    PieChartMeasurePointStatusByFactory = initPiechar( PieChartMeasurePointStatusByFactory, factoryInfo.currency)
    PieChartProjectStatusByFactory = initPiechar( PieChartProjectStatusByFactory, factoryInfo.currency)
    PieChartProjectAllTypeNumberByFactory = initPiechar( PieChartProjectAllTypeNumberByFactory, factoryInfo.currency)
    PieChartProjectAllInitialLossesByFactory = initPiechar( PieChartProjectAllInitialLossesByFactory, factoryInfo.currency)

    tableDataFactoryMain.fonctionFirstAnnual.losses = Math.round((data.fonctionFirstAnnualLosses))
    tableDataFactoryMain.fonctionFirstAnnual.price = Math.round((data.fonctionFirstAnnualPrice))
    tableDataFactoryMain.fonctionFirstAnnual.priceEuro = Math.round((data.fonctionFirstAnnualPrice / parseFloat(factoryInfo.currencyEuro) ))
    tableDataFactoryMain.fonctionCurrentAnnual.losses = Math.round((data.fonctionCurrentAnnualLosses))
    tableDataFactoryMain.fonctionCurrentAnnual.price = Math.round((data.fonctionCurrentAnnualPrice))
    tableDataFactoryMain.fonctionCurrentAnnual.priceEuro = Math.round((data.fonctionCurrentAnnualPrice / parseFloat(factoryInfo.currencyEuro)))
    tableDataFactoryMain.fonctionSavingAnnual.losses = Math.round((data.fonctionFirstAnnualLosses - data.fonctionCurrentAnnualLosses))
    tableDataFactoryMain.fonctionSavingAnnual.price = Math.round((data.fonctionFirstAnnualPrice - data.fonctionCurrentAnnualPrice))
    tableDataFactoryMain.fonctionSavingAnnual.priceEuro = Math.round(((data.fonctionFirstAnnualPrice - data.fonctionCurrentAnnualPrice) / parseFloat(factoryInfo.currencyEuro) ))
    tableDataFactoryMain.fonctionProjectRecoveryRequestAnnual.losses = Math.round(data.fonctionProjectRecoveryRequestAnnualLosses)
    tableDataFactoryMain.fonctionProjectRecoveryRequestAnnual.price = Math.round(data.fonctionProjectRecoveryRequestAnnualPrice)
    tableDataFactoryMain.fonctionProjectRecoveryRequestAnnual.priceEuro = Math.round((data.fonctionProjectRecoveryRequestAnnualPrice / parseFloat(factoryInfo.currencyEuro)))

    tableDataFactoryInfo.fonctionNb = data.fonctionNb
    tableDataFactoryInfo.fonctionInitAnnualPrice = Math.round(data.fonctionFirstAnnualPrice)
    tableDataFactoryInfo.fonctionCurrentAnnualPrice = Math.round(data.fonctionCurrentAnnualLosses)
    tableDataFactoryInfo.fonctionProjectRecoveryRequestAnnual = Math.round(data.fonctionProjectRecoveryRequestAnnualPrice)
    tableDataFactoryInfo.fonctionProjectRecoveryRealAnnual = Math.round((data.fonctionFirstAnnualPrice - data.fonctionCurrentAnnualLosses))

    tableDataFactoryInfo.fonctionDone = data.fonctionNb - data.fonctionNeverDoneNb
    tableDataFactoryInfo.fonctionNotDone = data.fonctionNeverDoneNb
    tableDataFactoryInfo.fonctionInAlarm = data.fonctionAlarmNb
    tableDataFactoryInfo.fonctionNotLink = data.fonctionNotLinkedNb
    tableDataFactoryInfo.fonctionNotLinkInitialLosse = 0

    const fonctionNb: number = data.fonctionNb
    const fonctionNeverDoneNb: number = data.fonctionNeverDoneNb
    const fonctionToCheckNb: number = data.fonctionToCheckNb
    PieChartMeasurePointStatusByFactory.serie1Value = [ fonctionNb - (fonctionToCheckNb + fonctionNeverDoneNb ), fonctionToCheckNb, fonctionNeverDoneNb]

    const projectStandByNb = data.projectStandByNb
    const projectRunningNb = data.projectRunningNb
    const projectFinishedNb = data.projectFinishedNb
    PieChartProjectStatusByFactory.serie1Value= [projectStandByNb, projectRunningNb, projectFinishedNb]

    const projectChangeParametersNb = data.projectChangeParametersNb
    const projectSmallProgNb = data.projectSmallProgNb
    const projectMediumProgNb = data.projectMediumProgNb
    const projectBigProgNb = data.projectBigProgNb
    const projectSmallProjectNb = data.projectSmallProjectNb
    const projectMediumProjectNb = data.projectMediumProjectNb
    const projectBigProjectNb = data.projectBigProjectNb
    PieChartProjectAllTypeNumberByFactory.serie1Value= [projectChangeParametersNb, projectSmallProgNb, projectMediumProgNb, projectBigProgNb, projectSmallProjectNb, projectMediumProjectNb, projectBigProjectNb]

    const annualProjectChangeParameters = getAnnualInfoProject( data.projectChangeParameters )
    const annualProjectSmallProg = getAnnualInfoProject( data.projectSmallProg )
    const annualProjectMediumProg = getAnnualInfoProject( data.projectMediumProg )
    const annualProjectBigProg = getAnnualInfoProject( data.projectBigProg )
    const annualProjectSmallProject = getAnnualInfoProject( data.projectSmallProject )
    const annualProjectMediumProject = getAnnualInfoProject( data.projectMediumProject )
    const annualProjectBigProject = getAnnualInfoProject( data.projectBigProject )
    PieChartProjectAllInitialLossesByFactory.serie1Value= [
        annualProjectChangeParameters.projectFunctionLinkedFirstAnnualPrice,
        annualProjectSmallProg.projectFunctionLinkedFirstAnnualPrice,
        annualProjectMediumProg.projectFunctionLinkedFirstAnnualPrice,
        annualProjectBigProg.projectFunctionLinkedFirstAnnualPrice,
        annualProjectSmallProject.projectFunctionLinkedFirstAnnualPrice,
        annualProjectMediumProject.projectFunctionLinkedFirstAnnualPrice,
        annualProjectBigProject.projectFunctionLinkedFirstAnnualPrice,
    ]
    return {
        tableDataFactoryMain: tableDataFactoryMain,
        tableDataFactoryInfo: tableDataFactoryInfo,
        PieChartMeasurePointStatusByFactory: PieChartMeasurePointStatusByFactory,
        PieChartProjectStatusByFactory: PieChartProjectStatusByFactory,
        PieChartProjectAllTypeNumberByFactory: PieChartProjectAllTypeNumberByFactory,
        PieChartProjectAllInitialLossesByFactory: PieChartProjectAllInitialLossesByFactory,
    }
}
export const getFactoryProjectRunningTypeNumberAndInitialLossesAndCurrentLosses = (data: any, PieChartProjectRunningTypeNumberByFactory: IPieChart, PieChartProjectRunningInitialLossesByFactory: IPieChart, PieChartProjectRunningCurrentLossesByFactory: IPieChart, factoryInfo: IDataBaseFactoryData) => {
    PieChartProjectRunningTypeNumberByFactory = initPiechar( PieChartProjectRunningTypeNumberByFactory, factoryInfo.currency)
    PieChartProjectRunningInitialLossesByFactory = initPiechar( PieChartProjectRunningInitialLossesByFactory, factoryInfo.currency)
    PieChartProjectRunningCurrentLossesByFactory = initPiechar( PieChartProjectRunningCurrentLossesByFactory, factoryInfo.currency)

    const annualInfoProjectRunningByType = getAnnualInfoProjectRunningByType( data.projectRunning )
    PieChartProjectRunningTypeNumberByFactory.serie1Value= [
        annualInfoProjectRunningByType.ChangeParameters.number,
        annualInfoProjectRunningByType.SmallProg.number,
        annualInfoProjectRunningByType.MediumProg.number,
        annualInfoProjectRunningByType.BigProg.number,
        annualInfoProjectRunningByType.SmallProject.number,
        annualInfoProjectRunningByType.MediumProject.number,
        annualInfoProjectRunningByType.BigProject.number,
    ]
    PieChartProjectRunningInitialLossesByFactory.serie1Value= [
        annualInfoProjectRunningByType.ChangeParameters.projectFunctionLinkedFirstAnnualPrice,
        annualInfoProjectRunningByType.SmallProg.projectFunctionLinkedFirstAnnualPrice,
        annualInfoProjectRunningByType.MediumProg.projectFunctionLinkedFirstAnnualPrice,
        annualInfoProjectRunningByType.BigProg.projectFunctionLinkedFirstAnnualPrice,
        annualInfoProjectRunningByType.SmallProject.projectFunctionLinkedFirstAnnualPrice,
        annualInfoProjectRunningByType.MediumProject.projectFunctionLinkedFirstAnnualPrice,
        annualInfoProjectRunningByType.BigProject.projectFunctionLinkedFirstAnnualPrice,
    ]
    PieChartProjectRunningCurrentLossesByFactory.serie1Value= [
        annualInfoProjectRunningByType.ChangeParameters.projectFunctionLinkedCurrentAnnualPrice,
        annualInfoProjectRunningByType.SmallProg.projectFunctionLinkedCurrentAnnualPrice,
        annualInfoProjectRunningByType.MediumProg.projectFunctionLinkedCurrentAnnualPrice,
        annualInfoProjectRunningByType.BigProg.projectFunctionLinkedCurrentAnnualPrice,
        annualInfoProjectRunningByType.SmallProject.projectFunctionLinkedCurrentAnnualPrice,
        annualInfoProjectRunningByType.MediumProject.projectFunctionLinkedCurrentAnnualPrice,
        annualInfoProjectRunningByType.BigProject.projectFunctionLinkedCurrentAnnualPrice,
    ]
    return {
        PieChartProjectRunningTypeNumberByFactory: PieChartProjectRunningTypeNumberByFactory,
        PieChartProjectRunningInitialLossesByFactory: PieChartProjectRunningInitialLossesByFactory,
        PieChartProjectRunningCurrentLossesByFactory: PieChartProjectRunningCurrentLossesByFactory,
    }
}

export const getAreasInitialCurrentLossesQtyAndPrice = (data: any, BarChartInitialCurrentLossesQtyByAreas: IBarAndMixeChart, BarChartInitialCurrentLossesPriceByAreas: IBarAndMixeChart, BarChartProjectStatusByAreas: IBarAndMixeChart, factoryInfo: IDataBaseFactoryData) => {
    BarChartInitialCurrentLossesQtyByAreas = initBarchar( BarChartInitialCurrentLossesQtyByAreas, factoryInfo.currency)
    BarChartInitialCurrentLossesPriceByAreas = initBarchar( BarChartInitialCurrentLossesPriceByAreas, factoryInfo.currency)
    BarChartProjectStatusByAreas = initBarchar( BarChartProjectStatusByAreas, factoryInfo.currency)
    for (let indexArea = 0; indexArea < Object.values(data.areas).length; indexArea++) {
        //const areaByIndex = GetAreaByIndex( data.areas, indexArea)
        const areaByIndex: any = Object.values(data.areas)[indexArea]

        BarChartInitialCurrentLossesQtyByAreas.xAxisText.push( areaByIndex.name );
        BarChartInitialCurrentLossesQtyByAreas.series[0].Value.push( Math.round( areaByIndex.fonctionFirstAnnualLosses ) );
        BarChartInitialCurrentLossesQtyByAreas.series[1].Value.push( Math.round( areaByIndex.fonctionCurrentAnnualLosses  ) );

        BarChartInitialCurrentLossesPriceByAreas.xAxisText.push( areaByIndex.name );
        BarChartInitialCurrentLossesPriceByAreas.series[0].Value.push( Math.round( areaByIndex.fonctionFirstAnnualPrice  ) );
        BarChartInitialCurrentLossesPriceByAreas.series[1].Value.push( Math.round( areaByIndex.fonctionCurrentAnnualPrice  ) );

        BarChartProjectStatusByAreas.xAxisText.push( areaByIndex.name );
        const projectStandByNb = areaByIndex.projectStandByNb
        const projectRunningNb = areaByIndex.projectRunningNb
        const projectFinishedNb = areaByIndex.projectFinishedNb
        BarChartProjectStatusByAreas.series[0].Value.push( projectStandByNb );
        BarChartProjectStatusByAreas.series[1].Value.push( projectRunningNb );
        BarChartProjectStatusByAreas.series[2].Value.push( projectFinishedNb );
    }

    return {
        BarChartInitialCurrentLossesQtyByAreas: BarChartInitialCurrentLossesQtyByAreas,
        BarChartInitialCurrentLossesPriceByAreas : BarChartInitialCurrentLossesPriceByAreas,
        BarChartProjectStatusByAreas: BarChartProjectStatusByAreas,
    }
}
export const getAreasMeasurePointStatusAndAlarmAndFonctionNotLinked = (data: any, BarChartMeasurePointStatusByAreas: IBarAndMixeChart, BarChartMeasurePointInAlarmByAreas: IBarAndMixeChart, BarChartFonctionNotLinkedByAreas: IBarAndMixeChart, factoryInfo: IDataBaseFactoryData) => {
    BarChartMeasurePointStatusByAreas = initBarchar( BarChartMeasurePointStatusByAreas, factoryInfo.currency)
    BarChartMeasurePointInAlarmByAreas = initBarchar( BarChartMeasurePointInAlarmByAreas, factoryInfo.currency)
    BarChartFonctionNotLinkedByAreas = initBarchar( BarChartFonctionNotLinkedByAreas, factoryInfo.currency)

    for (let indexArea = 0; indexArea < Object.values(data.areas).length; indexArea++) {
        const areaByIndex: any = Object.values(data.areas)[indexArea]
        BarChartMeasurePointStatusByAreas.xAxisText.push( areaByIndex.name );

        const fonctionNeverDoneNb = areaByIndex.fonctionNeverDoneNb
        const fonctionToCheckNb = areaByIndex.fonctionToCheckNb
        const fonctionNb = areaByIndex.fonctionNb - (fonctionNeverDoneNb + fonctionToCheckNb)
        BarChartMeasurePointStatusByAreas.series[0].Value.push( fonctionNb );
        BarChartMeasurePointStatusByAreas.series[1].Value.push( fonctionToCheckNb );
        BarChartMeasurePointStatusByAreas.series[2].Value.push( fonctionNeverDoneNb );

        BarChartMeasurePointInAlarmByAreas.xAxisText.push( areaByIndex.name );
        const fonctionAlarmNb = areaByIndex.fonctionAlarmNb
        BarChartMeasurePointInAlarmByAreas.series[0].Value.push( fonctionAlarmNb );

        BarChartFonctionNotLinkedByAreas.xAxisText.push( areaByIndex.name );
        const fonctionNotLinkedNb = areaByIndex.fonctionNotLinkedNb
        BarChartFonctionNotLinkedByAreas.series[0].Value.push( fonctionNotLinkedNb );
    }

    return {
        BarChartMeasurePointStatusByAreas: BarChartMeasurePointStatusByAreas,
        BarChartMeasurePointInAlarmByAreas: BarChartMeasurePointInAlarmByAreas,
        BarChartFonctionNotLinkedByAreas: BarChartFonctionNotLinkedByAreas,
    }
}



