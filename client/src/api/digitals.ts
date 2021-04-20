import request from '@/utils/request'
import { IDataBaseDigitalData } from './types'
import i18n from "@/i18n";

export const defaultDigitalQuery = {
    page: 1,
    limit: 10,
    name: undefined
}
export const defaultDigitalRules = {
    position: [{ required: true, message: i18n.t('tables.digital.rules.rule2'), trigger: 'blur' }],
    name: [{ required: true, message: i18n.t('tables.digital.rules.rule3'), trigger: 'blur' }],
    name1: [{ required: true, message: i18n.t('tables.digital.rules.rule4'), trigger: 'blur' }],
    tag: [{ required: true, message: i18n.t('tables.digital.rules.rule5'), trigger: 'blur' }],
    address: [{ required: true, message: i18n.t('tables.digital.rules.rule6'), trigger: 'blur' }],
    idEquip: [{ required: true, message: i18n.t('tables.digital.rules.rule7'), trigger: 'blur' }],
    idTank: [{ required: true, message: i18n.t('tables.digital.rules.rule8'), trigger: 'blur' }],
    indexCreation: [{ required: true, message: i18n.t('tables.digital.rules.rule9'), trigger: 'blur' }]
}
export const defaultDigitalData: IDataBaseDigitalData = {
    id: "",
    name: "",
    name1: "",
    tag: "",
    address: "",
    position: 0,
    idEquip: "",
    idTank: "",
    indexCreation: 0,
}

export const defaultDigitalExcelHeater = ['id', 'position', 'name', 'name1', 'tag', 'address', 'idEquip', 'idTank', 'indexCreation']

export const getDBDigitals = (params: any) =>
    request({
        headers: { },
        url: 'http://localhost:5000/digitals/all',
        method: 'get',
        params
    })

export const updateDBDigitals = (data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/digitals/all`,
        method: 'put',
        withCredentials: true,
        data
    })

export const updateDBDigital = (id: number, data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/digitals/digital/${id}`,
        method: 'put',
        withCredentials: true,
        data
    })

export const deleteDBDigital = (id: number, data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/digitals/digital/${id}`,
        method: 'delete',
        withCredentials: true,
    })
