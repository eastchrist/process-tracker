import requestSql from '@/utils/requestSql'
import { IDataBaseFonctionData } from './types'
import { defaultMeasureTypeData } from './measureTypes'
import { defaultTankAreaDefEmptyingData } from './tankAreaDefEmptyings'
import { defaultTankAreaDefFillingData } from './tankAreaDefFillings'

import i18n from "@/i18n";
import variables from "@/styles/_variables.scss";
import { validateDecimalValue } from "@/utils/validate";



export interface AIFonctionQuery {
    page: number
    limit: number
    name: string | undefined
    alarmLosses: boolean | undefined
    enabled: boolean | undefined
    //haveToBeCheck: boolean | undefined
    haveToBeCheckActif: boolean | undefined  //Feed back for force manager or Date
    haveBeenCheck: boolean | undefined
    initialhaveNotBeenDone: boolean | undefined
    currenthaveNotBeenDone: boolean | undefined
    NbLost: number | undefined
    idFactory: string | undefined
    idArea: string | undefined
    idType: string | undefined
    idPlc: string | undefined
    idEquip: string | undefined
    idEquipIndex: string | undefined
    idProjectLink: number | undefined
    idProjectLinkNull: boolean | undefined
}
export const defaultFonctionQuery: AIFonctionQuery = {
    page: 1,
    limit: 10,
    name: undefined,
    alarmLosses: undefined,
    enabled: undefined,
    haveToBeCheckActif: undefined,  //Feed back for force manager or Date
    haveBeenCheck: undefined,
    initialhaveNotBeenDone: undefined,
    currenthaveNotBeenDone: undefined,
    NbLost: undefined,
    idFactory: undefined,
    idArea: undefined,
    idType: undefined,
    idPlc: undefined,
    idEquip: undefined,
    idEquipIndex: undefined,
    idProjectLink: undefined,
    idProjectLinkNull: undefined,
}
export const defaultProjectFonctionQuery: AIFonctionQuery = {
    page: 1,
    limit: 500,
    name: undefined,
    alarmLosses: undefined,
    enabled: undefined,
    haveToBeCheckActif: undefined,  //Feed back for force manager or Date
    haveBeenCheck: undefined,
    initialhaveNotBeenDone: undefined,
    currenthaveNotBeenDone: undefined,
    NbLost: undefined,
    idFactory: undefined,
    idArea: undefined,
    idType: undefined,
    idPlc: undefined,
    idEquip: undefined,
    idEquipIndex: undefined,
    idProjectLink: undefined,
    idProjectLinkNull: undefined,
}

export const defaultFonctionRules = {
    position: [{ required: true, message: i18n.t('tables.fonction.rules.rule2'), trigger: 'blur' }],
    name: [{ required: true, message: i18n.t('tables.fonction.rules.rule3'), trigger: 'blur' }],
    idType: [{ required: true, message: i18n.t('tables.fonction.rules.rule4'), trigger: 'blur' }],
    idAreaSource: [{ required: true, message: i18n.t('tables.fonction.rules.rule5'), trigger: 'blur' }],
    idAreaDest: [{ required: true, message: i18n.t('tables.fonction.rules.rule6'), trigger: 'blur' }],

    nbLosse: [{ required: true, message: i18n.t('tables.fonction.rules.rule20'), trigger: 'blur' }, { validator: validateDecimalValue, trigger: 'blur' }],
    freqCheck: [{ required: true, message: i18n.t('tables.fonction.rules.rule7'), trigger: 'blur' }, { validator: validateDecimalValue, trigger: 'blur' }],
    freqDelay: [{ required: true, message: i18n.t('tables.fonction.rules.rule8'), trigger: 'blur' }, { validator: validateDecimalValue, trigger: 'blur' }],
    maxLosse: [{ required: true, message: i18n.t('tables.fonction.rules.rule9'), trigger: 'blur' }, { validator: validateDecimalValue, trigger: 'blur' }],

    picture1: [{ required: true, message: i18n.t('tables.fonction.rules.rule10'), trigger: 'blur' }],
    picture2: [{ required: true, message: i18n.t('tables.fonction.rules.rule11'), trigger: 'blur' }],

    idProjectLink: [{ required: true, message: i18n.t('tables.fonction.rules.rule12'), trigger: 'blur' }],
    idProjectLinkSelected: [{ required: true, message: i18n.t('tables.fonction.rules.rule13'), trigger: 'blur' }],
    projectPercentRecovery: [{ required: true, message: i18n.t('tables.fonction.rules.rule14'), trigger: 'blur' }],
    //idFactory: [{ required: true, message: i18n.t('tables.fonction.rules.rule15'), trigger: 'blur' }],
    //idArea: [{ required: true, message: i18n.t('tables.fonction.rules.rule16'), trigger: 'blur' }],
    //idPlc: [{ required: true, message: i18n.t('tables.fonction.rules.rule17'), trigger: 'blur' }],
    idEquip: [{ required: true, message: i18n.t('tables.fonction.rules.rule18'), trigger: 'blur' }],
    idEquipIndex: [{ required: true, message: i18n.t('tables.fonction.rules.rule19'), trigger: 'blur' }],

    firstLosses: [{ validator: validateDecimalValue, trigger: 'blur' }],
    firstLossesPrice: [{ validator: validateDecimalValue, trigger: 'blur' }],
    currentLosses: [{ validator: validateDecimalValue, trigger: 'blur' }],
    currentLossesPrice: [{ validator: validateDecimalValue, trigger: 'blur' }],
}

export const defaultFonctionData: IDataBaseFonctionData = {
    id: '',
    position: 0,
    name: "",
    idType: 0,
    idAreaSource: "",
    idAreaDest: "",
    lastCheckDate: new Date(),

    firstLosses: 0,
    firstLossesPrice: 0,
    currentLosses: 0,
    currentLossesPrice: 0,

    freqCheck: 0,
    freqDelay: 0,
    nbLosse: 0,
    maxLosse: 0,

    alarmLosses: false,
    haveToBeCheck: false, //Force by the manager
    haveToBeCheckActif: false,  //Feed back for force manager or Date
    haveBeenCheck: false,
    haveToBeValidated: false, //By the manager
    modeAutoCheckActif: false,
    enabled: true,

    method: "",
    picture1: "",
    picture2: "",
    idProjectLink: 0,
    idProjectLinkSelected: false,
    projectPercentRecovery: 0,
    idEquip: "",
    idEquipIndex: 0,
    measureType: defaultMeasureTypeData,
    tankAreaDefEmptying: defaultTankAreaDefEmptyingData,
    tankAreaDefFilling: defaultTankAreaDefFillingData
}

export const defaultFonctionExcelHeader = ['id', 'name', 'position', 'lastCheckDate', 'idType', 'idAreaSource', 'idAreaDest',
    'nbLosse', 'freqCheck', 'freqDelay', 'maxLosse', 'alarmLosses',
    'haveToBeCheck', 'haveBeenCheck', 'haveToBeValidated', 'modeAutoCheckActif','enabled',
    'firstLosses', 'firstLossesPrice',
    'currentLosses', 'currentLossesPrice',
    'method', 'picture1', 'picture2', 'idProjectLink', 'idProjectLinkSelected', 'projectPercentRecovery', 'idEquip', 'idEquipIndex']

export const getDBFonctions = (params: any) =>
    requestSql({
        headers: { },
        url: '/fonctions/all',
        method: 'get',
        params
    })
export const updateDBFonctions = (data: any) =>
    requestSql({
        headers: { },
        url: `/fonctions/all`,
        method: 'put',
        withCredentials: true,
        data
    })
export const updateDBFonction = (id: string, data: any) =>
    requestSql({
        headers: { },
        url: `/fonctions/fonction/${id}`,
        method: 'put',
        withCredentials: true,
        data
    })
export const addDBFonctionMeasure = (data: any) =>
    requestSql({
        headers: { },
        url: `/fonctions/fonction`,
        method: 'put',
        withCredentials: true,
        data
    })
export const deleteDBFonction = (id: number, data: any) =>
    requestSql({
        headers: { },
        url: `/fonctions/fonction/${id}`,
        method: 'delete',
        withCredentials: true,
    })


