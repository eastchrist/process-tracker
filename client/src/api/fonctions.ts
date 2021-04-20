import request from '@/utils/request'
import { IDataBaseFonctionData } from './types'
import i18n from "@/i18n";

export const defaultFonctionQuery = {
    page: 1,
    limit: 10,
    name: undefined,
    idFactory: undefined,
    idArea: undefined,
    idType: undefined,
    idPlc: undefined,
    idEquip: undefined
}
export const defaultFonctionRules = {
    position: [{ required: true, message: i18n.t('tables.fonction.rules.rule2'), trigger: 'blur' }],
    name: [{ required: true, message: i18n.t('tables.fonction.rules.rule3'), trigger: 'blur' }],
    idType: [{ required: true, message: i18n.t('tables.fonction.rules.rule4'), trigger: 'blur' }],
    idAreaSource: [{ required: true, message: i18n.t('tables.fonction.rules.rule5'), trigger: 'blur' }],
    idAreaDest: [{ required: true, message: i18n.t('tables.fonction.rules.rule6'), trigger: 'blur' }],
    freqCheck: [{ required: true, message: i18n.t('tables.fonction.rules.rule7'), trigger: 'blur' }],
    freqDelay: [{ required: true, message: i18n.t('tables.fonction.rules.rule8'), trigger: 'blur' }],
    maxLosse: [{ required: true, message: i18n.t('tables.fonction.rules.rule9'), trigger: 'blur' }],
    picture1: [{ required: true, message: i18n.t('tables.fonction.rules.rule10'), trigger: 'blur' }],
    picture2: [{ required: true, message: i18n.t('tables.fonction.rules.rule11'), trigger: 'blur' }],
    idProjectLink: [{ required: true, message: i18n.t('tables.fonction.rules.rule12'), trigger: 'blur' }],
    projectPosition: [{ required: true, message: i18n.t('tables.fonction.rules.rule13'), trigger: 'blur' }],
    projectPercentRecovery: [{ required: true, message: i18n.t('tables.fonction.rules.rule14'), trigger: 'blur' }],
    idFactory: [{ required: true, message: i18n.t('tables.fonction.rules.rule15'), trigger: 'blur' }],
    idArea: [{ required: true, message: i18n.t('tables.fonction.rules.rule16'), trigger: 'blur' }],
    idPlc: [{ required: true, message: i18n.t('tables.fonction.rules.rule17'), trigger: 'blur' }],
    idEquip: [{ required: true, message: i18n.t('tables.fonction.rules.rule18'), trigger: 'blur' }],
    idEquipIndex: [{ required: true, message: i18n.t('tables.fonction.rules.rule19'), trigger: 'blur' }]
}

export const defaultFonctionData: IDataBaseFonctionData = {
    id: 0,
    position: 0,
    name: "",
    idType: 0,
    idAreaSource: "",
    idAreaDest: "",
    freqCheck: 0,
    freqDelay: 0,
    maxLosse: 0,
    haveToBeCheck: false,
    haveBeenCheck: false,
    modeAutoCheckActif: false,
    picture1: "",
    picture2: "",
    idProjectLink: 0,
    projectPosition: 0,
    projectPercentRecovery: 0,
    idFactory: "",
    idArea: "",
    idPlc: "",
    idEquip: "",
    idEquipIndex: 0
}

export const defaultFonctionExcelHeater = ['id', 'name', 'position', 'idType', 'idAreaSource', 'idAreaDest', 'freqCheck', 'freqDelay', 'maxLosse', 'haveToBeCheck', 'haveBeenCheck', 'modeAutoCheckActif', 'picture1', 'picture2', 'idProjectLink', 'projectPosition', 'projectPercentRecovery', 'idFactory', 'idArea', 'idPlc', 'idEquip', 'idEquipIndex']

export const getDBFonctions = (params: any) =>
    request({
        headers: { },
        url: 'http://localhost:5000/fonctions/all',
        method: 'get',
        params
    })

export const updateDBFonctions = (data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/fonctions/all`,
        method: 'put',
        withCredentials: true,
        data
    })

export const updateDBFonction = (id: number, data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/fonctions/fonction/${id}`,
        method: 'put',
        withCredentials: true,
        data
    })

export const deleteDBFonction = (id: number, data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/fonctions/fonction/${id}`,
        method: 'delete',
        withCredentials: true,
    })
