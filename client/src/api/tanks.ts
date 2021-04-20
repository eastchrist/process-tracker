import request from '@/utils/request'
import { IDataBaseTankData } from './types'
import i18n from "@/i18n";

export const defaultTankQuery = {
    page: 1,
    limit: 10,
    name: undefined,
    idTankArea: undefined,
    idTankDef: undefined
}
export const defaultTankRules = {
    position: [{ required: true, message: i18n.t('tables.tank.rules.rule3'), trigger: 'blur' }],
    name: [{ required: true, message: i18n.t('tables.tank.rules.rule4'), trigger: 'blur' }],
    name1: [{ required: true, message: i18n.t('tables.tank.rules.rule5'), trigger: 'blur' }],
    idTankArea: [{ required: true, message: i18n.t('tables.tank.rules.rule6'), trigger: 'blur' }],
    idTankDef: [{ required: true, message: i18n.t('tables.tank.rules.rule7'), trigger: 'blur' }],
}
export const defaultTankData: IDataBaseTankData = {
    id: "",
    idNode: "",
    name: "",
    name1: "",
    position: 0,
    idTankArea: "",
    idTankDef: "",
}

export const defaultTankExcelHeater = ['id', 'idNode', 'name', 'name1', 'position', 'idTankArea', 'idTankDef']


export const getDBTanks = (params: any) =>
    request({
        headers: { },
        url: 'http://localhost:5000/tanks/all',
        method: 'get',
        params
    })

export const updateDBTanks = (data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/tanks/all`,
        method: 'put',
        withCredentials: true,
        data
    })

export const updateDBTank = (id: number, data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/tanks/tank/${id}`,
        method: 'put',
        withCredentials: true,
        data
    })

export const deleteDBTank = (id: number, data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/tanks/tank/${id}`,
        method: 'delete',
        withCredentials: true,
    })
