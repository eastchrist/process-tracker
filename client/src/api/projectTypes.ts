import requestSql from '@/utils/requestSql'
import { IDataBaseProjectTypeData } from './types'
import i18n from "@/i18n";
import variables from "@/styles/_variables.scss";


export interface AIProjectTypeQuery {
    page: number
    limit: number
    name: string | undefined
}

export const defaultProjectTypeQuery: AIProjectTypeQuery = {
    page: 1,
    limit: 10,
    name: undefined
}

export const defaultProjectTypeData: IDataBaseProjectTypeData = {
    id: "",
    position: 0,
    name: "",
    value: 0
}

export const defaultProjectTypeExcelHeater = ['id', 'position', 'name', 'value']

export const getDBProjectTypes = (params: any) =>
    requestSql({
        headers: { },
        url: '/projectTypes/all',
        method: 'get',
        params
    })

export const updateDBProjectTypes = (data: any) =>
    requestSql({
        headers: { },
        url: `/projectTypes/all`,
        method: 'put',
        withCredentials: true,
        data
    })

export const updateDBProjectType = (id: number, data: any) =>
    requestSql({
        headers: { },
        url: `/projectTypes/projectType/${id}`,
        method: 'put',
        withCredentials: true,
        data
    })

export const deleteDBProjectType = (id: number, data: any) =>
    requestSql({
        headers: { },
        url: `/projectTypes/projectType/${id}`,
        method: 'delete',
        withCredentials: true,
    })
