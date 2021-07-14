import requestSql from '@/utils/requestSql'
import { IDataBaseFactoryData } from './types'
import i18n from "@/i18n";
import variables from "@/styles/_variables.scss";



export interface AIFactoryQuery {
    page: number
    limit: number
    name: string | undefined
    id: string | undefined
}

export const defaultFactoryQuery: AIFactoryQuery = {
    page: 1,
    limit: 10,
    name: undefined,
    id: undefined,
}
export const defaultFactoryRules = {
    position: [{ required: true, message: i18n.t('tables.factory.rules.rule3'), trigger: 'blur' }],
    name: [{ required: true, message: i18n.t('tables.factory.rules.rule4'), trigger: 'blur' }],
    name1: [{ required: true, message: i18n.t('tables.factory.rules.rule5'), trigger: 'blur' }],
    langue: [{ required: true, message: i18n.t('tables.factory.rules.rule6'), trigger: 'blur' }],
    address: [{ required: true, message: i18n.t('tables.factory.rules.rule7'), trigger: 'blur' }],

    logoClient: [{ required: true, message: i18n.t('tables.factory.rules.rule8'), trigger: 'blur' }],
    logoContractor: [{ required: true, message: i18n.t('tables.factory.rules.rule9'), trigger: 'blur' }],

    currency: [{ required: true, message: i18n.t('tables.factory.rules.rule10'), trigger: 'blur' }],
    currencyEuro: [{ required: true, message: i18n.t('tables.factory.rules.rule11'), trigger: 'blur' }],
    isCartography: [{ required: true, message: i18n.t('tables.factory.rules.rule12'), trigger: 'blur' }],
    isOptimisation: [{ required: true, message: i18n.t('tables.factory.rules.rule13'), trigger: 'blur' }],
    isTraceability: [{ required: true, message: i18n.t('tables.factory.rules.rule14'), trigger: 'blur' }],
}
export const defaultFactoryData: IDataBaseFactoryData = {
    id: "",
    idNode: "",
    name: "",
    name1: "",
    langue: "",
    address: "",
    logoClient: "",
    logoContractor: "",
    currency: "",
    currencyEuro: "",
    position: 0,
    isCartography: false,
    isOptimisation: false,
    isTraceability: false,
}
export const defaultFactoryExcelHeader = ['id', 'idNode', 'name', 'name1', 'langue','position', 'address', 'logoClient', 'logoContractor', 'currency', 'currencyEuro', 'isCartography', 'isOptimisation', 'isTraceability']


export const getDBFactorys = (params: any) =>
    requestSql({
        headers: { },
        url: '/factorys/all',
        method: 'get',
        params
    })

export const updateDBFactorys = (data: any) =>
    requestSql({
        headers: { },
        url: `/factorys/all`,
        method: 'put',
        withCredentials: true,
        data
    })

export const updateDBFactory = (id: string, data: any) =>
    requestSql({
        headers: { },
        url: `/factorys/factory/${id}`,
        method: 'put',
        withCredentials: true,
        data
    })

export const deleteDBFactory = (id: string, data: any) =>
    requestSql({
        headers: { },
        url: `/factorys/factory/${id}`,
        method: 'delete',
        withCredentials: true,
    })
