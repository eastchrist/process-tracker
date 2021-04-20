import request from '@/utils/request'
import { IDataBaseTankAreaData } from './types'
import i18n from "@/i18n";

export const defaultTankAreaQuery = {
    page: 1,
    limit: 10,
    name: undefined,
    idArea: undefined
}
export const defaultTankAreaRules = {
    position: [{ required: true, message: i18n.t('tables.tankArea.rules.rule3'), trigger: 'blur' }],
    name: [{ required: true, message: i18n.t('tables.tankArea.rules.rule4'), trigger: 'blur' }],
    name1: [{ required: true, message: i18n.t('tables.tankArea.rules.rule5'), trigger: 'blur' }],
    idArea: [{ required: true, message: i18n.t('tables.tankArea.rules.rule6'), trigger: 'blur' }],
}
export const defaultTankAreaData: IDataBaseTankAreaData = {
    id: "",
    idNode: "",
    name: "",
    name1: "",
    position: 0,
    idArea: "",
}

export const defaultTankAreaExcelHeater = ['id', 'idNode', 'name', 'name1', 'position', 'idArea']


export const getDBTankAreas = (params: any) =>
    request({
        headers: { },
        url: 'http://localhost:5000/tankareas/all',
        method: 'get',
        params
    })

export const updateDBTankAreas = (data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/tankareas/all`,
        method: 'put',
        withCredentials: true,
        data
    })

export const updateDBTankArea = (id: number, data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/tankareas/tankarea/${id}`,
        method: 'put',
        withCredentials: true,
        data
    })

export const deleteDBTankArea = (id: number, data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/tankareas/tankarea/${id}`,
        method: 'delete',
        withCredentials: true,
    })
