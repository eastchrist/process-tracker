import requestSql from '@/utils/requestSql'
import { IDataBaseProjectStatusData } from './types'
import i18n from "@/i18n";
import variables from "@/styles/_variables.scss";


export interface AIProjectStatusQuery {
    page: number
    limit: number
    name: string | undefined
}

export const defaultProjectStatusQuery: AIProjectStatusQuery = {
    page: 1,
    limit: 10,
    name: undefined
}

export const defaultProjectStatusData: IDataBaseProjectStatusData = {
    id: "",
    position: 0,
    name: "",
    value: 0
}

export const defaultProjectStatusExcelHeader = ['id', 'position', 'name', 'value']

export const getDBProjectStatus = (params: any) =>
    requestSql({
        headers: { },
        url: '/projectStatus/all',
        method: 'get',
        params
    })

export const updateDBProjectStatuss = (data: any) =>
    requestSql({
        headers: { },
        url: `/projectStatus/all`,
        method: 'put',
        withCredentials: true,
        data
    })

export const updateDBProjectStatus = (id: number, data: any) =>
    requestSql({
        headers: { },
        url: `/projectStatus/projectStatus/${id}`,
        method: 'put',
        withCredentials: true,
        data
    })

export const deleteDBProjectStatus = (id: number, data: any) =>
    requestSql({
        headers: { },
        url: `/projectStatus/projectStatus/${id}`,
        method: 'delete',
        withCredentials: true,
    })
