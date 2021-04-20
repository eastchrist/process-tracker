import request from '@/utils/request'
import { IDataBasePlcData } from './types'
import i18n from "@/i18n";

export const defaultPlcQuery = {
    page: 1,
    limit: 10,
    name: undefined,
    idServer: undefined,
    idArea: undefined
}
export const defaultPlcRules = {
    position: [{ required: true, message: i18n.t('tables.plc.rules.rule3'), trigger: 'blur' }],
    name: [{ required: true, message: i18n.t('tables.plc.rules.rule4'), trigger: 'blur' }],
    name1: [{ required: true, message: i18n.t('tables.plc.rules.rule5'), trigger: 'blur' }],
    idServer: [{ required: true, message: i18n.t('tables.plc.rules.rule6'), trigger: 'blur' }],
    idArea: [{ required: true, message: i18n.t('tables.plc.rules.rule7'), trigger: 'blur' }],
    brand: [{ required: true, message: i18n.t('tables.plc.rules.rule8'), trigger: 'blur' }],
    connection: [{ required: true, message: i18n.t('tables.plc.rules.rule9'), trigger: 'blur' }],
    ip: [{ required: true, message: i18n.t('tables.plc.rules.rule10'), trigger: 'blur' }],
    slot: [{ required: true, message: i18n.t('tables.plc.rules.rule11'), trigger: 'blur' }],
    rack: [{ required: true, message: i18n.t('tables.plc.rules.rule12'), trigger: 'blur' }],
}
export const defaultPlcData: IDataBasePlcData = {
    id: "",
    idNode: "",
    position: 0,
    name: "",
    name1: "",
    brand: "",
    connection: "",
    ip: "",
    slot: "",
    rack: "",
    idServer: "",
    idArea: ""
}

export const defaultPlcExcelHeater = ['id', 'idNode', 'position', 'name', 'name1', 'brand', 'connection', 'slot', 'rack', 'ip', 'idServer', 'idArea']


export const getDBPlcs = (params: any) =>
    request({
        headers: { },
        url: 'http://localhost:5000/plcs/all',
        method: 'get',
        params
    })

export const updateDBPlcs = (data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/plcs/all`,
        method: 'put',
        withCredentials: true,
        data
    })

export const updateDBPlc = (id: number, data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/plcs/plc/${id}`,
        method: 'put',
        withCredentials: true,
        data
    })

export const deleteDBPlc = (id: number, data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/plcs/plc/${id}`,
        method: 'delete',
        withCredentials: true,
    })
