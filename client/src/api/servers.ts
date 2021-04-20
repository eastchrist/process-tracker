import request from '@/utils/request'
import { IDataBaseServerData } from './types'
import i18n from "@/i18n";

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

export const defaultServerExcelHeater = ['id', 'idNode', 'position', 'name', 'serverType']

export const getDBServers = (params: any) =>
    request({
        headers: { },
        url: 'http://localhost:5000/servers/all',
        method: 'get',
        params
    })

export const updateDBServers = (data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/servers/all`,
        method: 'put',
        withCredentials: true,
        data
    })

export const updateDBServer = (id: number, data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/servers/server/${id}`,
        method: 'put',
        withCredentials: true,
        data
    })

export const deleteDBServer = (id: number, data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/servers/server/${id}`,
        method: 'delete',
        withCredentials: true,
    })
