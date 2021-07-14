import requestSql from '@/utils/requestSql'
import { IDataBaseServerData } from './types'
import i18n from "@/i18n";
import variables from "@/styles/_variables.scss";


export const defaultServerQuery = {
    page: 1,
    limit: 10,
    name: undefined
}
export const defaultServerRules = {
    position: [{ required: true, message: i18n.t('tables.server.rules.rule3'), trigger: 'blur' }],
    name: [{ required: true, message: i18n.t('tables.server.rules.rule4'), trigger: 'blur' }],
    serverType: [{ required: true, message: i18n.t('tables.server.rules.rule5'), trigger: 'blur' }],
}
export const defaultServerData: IDataBaseServerData = {
    id: "",
    idNode: "",
    position: 0,
    name: "",
    serverType: "",
}

export const defaultServerExcelHeader = ['id', 'idNode', 'position', 'name', 'serverType']

export const getDBServers = (params: any) =>
    requestSql({
        headers: { },
        url: '/servers/all',
        method: 'get',
        params
    })

export const updateDBServers = (data: any) =>
    requestSql({
        headers: { },
        url: `/servers/all`,
        method: 'put',
        withCredentials: true,
        data
    })

export const updateDBServer = (id: number, data: any) =>
    requestSql({
        headers: { },
        url: `/servers/server/${id}`,
        method: 'put',
        withCredentials: true,
        data
    })

export const deleteDBServer = (id: number, data: any) =>
    requestSql({
        headers: { },
        url: `/servers/server/${id}`,
        method: 'delete',
        withCredentials: true,
    })
