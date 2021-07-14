import requestSql from '@/utils/requestSql'
import { IDataBaseAreaData } from './types'
import i18n from "@/i18n";
import variables from "@/styles/_variables.scss";


export interface AIAreaQuery {
    page: number
    limit: number
    name: string | undefined
    idFactory: string | undefined
}

export const defaultAreaQuery: AIAreaQuery  = {
    page: 1,
    limit: 10,
    name: undefined,
    idFactory: undefined
}
export const defaultAreaRules = {
    position: [{ required: true, message: i18n.t('tables.area.rules.rule3'), trigger: 'blur' }],
    name: [{ required: true, message: i18n.t('tables.area.rules.rule4'), trigger: 'blur' }],
    name1: [{ required: true, message: i18n.t('tables.area.rules.rule5'), trigger: 'blur' }],
    menu: [{ required: true, message: i18n.t('tables.area.rules.rule6'), trigger: 'blur' }],
    idFactory: [{ required: true, message: i18n.t('tables.area.rules.rule7'), trigger: 'blur' }]
}
export const defaultAreaData: IDataBaseAreaData = {
    id: "",
    idNode: "",
    name: "",
    name1: "",
    position: 0,
    menu: "",
    idFactory: ""
}

export const defaultAreaExcelHeader = ['id', 'idNode', 'name', 'name1', 'position', 'menu', 'idFactory']

export const getDBAreas = (params: any) =>
    requestSql({
        headers: { },
        url: '/areas/all',
        method: 'get',
        params
    })

export const updateDBAreas = (data: any) =>
    requestSql({
        headers: { },
        url: `/areas/all`,
        method: 'put',
        withCredentials: true,
        data
    })

export const updateDBArea = (id: number, data: any) =>
    requestSql({
        headers: { },
        url: `/areas/area/${id}`,
        method: 'put',
        withCredentials: true,
        data
    })

export const deleteDBArea = (id: number, data: any) =>
    requestSql({
        headers: { },
        url: `/areas/area/${id}`,
        method: 'delete',
        withCredentials: true,
    })
