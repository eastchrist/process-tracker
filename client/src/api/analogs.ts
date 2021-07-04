import requestSql from '@/utils/requestSql'
import { IDataBaseAnalogData } from './types'
import i18n from "@/i18n";
import variables from "@/styles/_variables.scss";


export const defaultAnalogQuery = {
    page: 1,
    limit: 10,
    name: undefined
}
export const defaultAnalogRules = {
    position: [{ required: true, message: i18n.t('tables.analog.rules.rule2'), trigger: 'blur' }],
    name: [{ required: true, message: i18n.t('tables.analog.rules.rule3'), trigger: 'blur' }],
    name1: [{ required: true, message: i18n.t('tables.analog.rules.rule4'), trigger: 'blur' }],
    tag: [{ required: true, message: i18n.t('tables.analog.rules.rule5'), trigger: 'blur' }],
    address: [{ required: true, message: i18n.t('tables.analog.rules.rule6'), trigger: 'blur' }],
    type: [{ required: true, message: i18n.t('tables.analog.rules.rule7'), trigger: 'blur' }],
    idEquip: [{ required: true, message: i18n.t('tables.analog.rules.rule8'), trigger: 'blur' }],
    idTank: [{ required: true, message: i18n.t('tables.analog.rules.rule9'), trigger: 'blur' }],
    indexCreation: [{ required: true, message: i18n.t('tables.analog.rules.rule10'), trigger: 'blur' }]
}
export const defaultAnalogData: IDataBaseAnalogData = {
    id: "",
    name: "",
    name1: "",
    tag: "",
    address: "",
    type: "",
    position: 0,
    idEquip: "",
    idTank: "",
    indexCreation: 0,
}

export const defaultAnalogExcelHeater = ['id', 'position', 'name', 'name1', 'tag', 'address', 'type', 'idEquip', 'idTank', 'indexCreation']

export const getDBAnalogs = (params: any) =>
    requestSql({
        headers: { },
        url: '/analogs/all',
        method: 'get',
        params
    })

export const updateDBAnalogs = (data: any) =>
    requestSql({
        headers: { },
        url: `/analogs/all`,
        method: 'put',
        withCredentials: true,
        data
    })

export const updateDBAnalog = (id: number, data: any) =>
    requestSql({
        headers: { },
        url: `/analogs/analog/${id}`,
        method: 'put',
        withCredentials: true,
        data
    })

export const deleteDBAnalog = (id: number, data: any) =>
    requestSql({
        headers: { },
        url: `/analogs/analog/${id}`,
        method: 'delete',
        withCredentials: true,
    })
