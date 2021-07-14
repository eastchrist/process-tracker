import requestSql from '@/utils/requestSql'
import { IDataBaseEquipData } from './types'
import i18n from "@/i18n";
import variables from "@/styles/_variables.scss";


export interface AIEquipQuery {
    page: number
    limit: number
    name: string | undefined
    idFactory: string | undefined
    idArea: string | undefined
    idPlc: string | undefined
    idEquip: string | undefined
}

export const defaultEquipQuery: AIEquipQuery = {
    page: 1,
    limit: 10,
    name: undefined,
    idFactory: undefined,
    idArea: undefined,
    idPlc: undefined,
    idEquip: undefined
}
export const defaultEquipRules = {
    position: [{ required: true, message: i18n.t('tables.equip.rules.rule3'), trigger: 'blur' }],
    name: [{ required: true, message: i18n.t('tables.equip.rules.rule4'), trigger: 'blur' }],
    name1: [{ required: true, message: i18n.t('tables.equip.rules.rule5'), trigger: 'blur' }],
    menu: [{ required: true, message: i18n.t('tables.equip.rules.rule6'), trigger: 'blur' }],
    idPlc: [{ required: true, message: i18n.t('tables.equip.rules.rule7'), trigger: 'blur' }],
    idEquipDef: [{ required: true, message: i18n.t('tables.equip.rules.rule8'), trigger: 'blur' }],
}
export const defaultEquipData: IDataBaseEquipData = {
    id: "",
    idNode: "",
    position: 0,
    name: "",
    name1: "",
    menu: "",
    idPlc: "",
    idEquipDef: "",
}

export const defaultEquipExcelHeader = ['id', 'idNode', 'name', 'name1', 'position', 'menu', 'idPlc', 'idEquipDef']

export const getDBEquips = (params: any) =>
    requestSql({
        headers: { },
        url: 'http://localhost:5000/equips/all',
        method: 'get',
        params
    })

export const updateDBEquips = (data: any) =>
    requestSql({
        headers: { },
        url: `/equips/all`,
        method: 'put',
        withCredentials: true,
        data
    })

export const updateDBEquip = (id: number, data: any) =>
    requestSql({
        headers: { },
        url: `/equips/equip/${id}`,
        method: 'put',
        withCredentials: true,
        data
    })

export const deleteDBEquip = (id: number, data: any) =>
    requestSql({
        headers: { },
        url: `/equips/equip/${id}`,
        method: 'delete',
        withCredentials: true,
    })
