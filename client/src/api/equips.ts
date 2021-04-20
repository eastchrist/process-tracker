import request from '@/utils/request'
import { IDataBaseEquipData } from './types'
import i18n from "@/i18n";

export const defaultEquipQuery = {
    page: 1,
    limit: 10,
    name: undefined,
    idFactory: undefined,
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

export const defaultEquipExcelHeater = ['id', 'idNode', 'name', 'name1', 'position', 'menu', 'idPlc', 'idEquipDef']

export const getDBEquips = (params: any) =>
    request({
        headers: { },
        url: 'http://localhost:5000/equips/all',
        method: 'get',
        params
    })

export const updateDBEquips = (data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/equips/all`,
        method: 'put',
        withCredentials: true,
        data
    })

export const updateDBEquip = (id: number, data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/equips/equip/${id}`,
        method: 'put',
        withCredentials: true,
        data
    })

export const deleteDBEquip = (id: number, data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/equips/equip/${id}`,
        method: 'delete',
        withCredentials: true,
    })
