import request from '@/utils/request'
import { IDataBaseTankAreaDefFillingData } from './types'
import i18n from "@/i18n";

export const defaultTankAreaDefFillingQuery = {
    page: 1,
    limit: 10,
    name: undefined
}
export const defaultTankAreaDefFillingRules = {
    position: [{ required: true, message: i18n.t('tables.tankAreaDefFilling.rules.rule3'), trigger: 'blur' }],
    name: [{ required: true, message: i18n.t('tables.tankAreaDefFilling.rules.rule4'), trigger: 'blur' }],
    name1: [{ required: true, message: i18n.t('tables.tankAreaDefFilling.rules.rule5'), trigger: 'blur' }],
    dataComment: [{ required: true, message: i18n.t('tables.tankAreaDefFilling.rules.rule6'), trigger: 'blur' }],
    dataType: [{ required: true, message: i18n.t('tables.tankAreaDefFilling.rules.rule7'), trigger: 'blur' }],
}
export const defaultTankAreaDefFillingData: IDataBaseTankAreaDefFillingData = {
    id: "",
    idNode: "",
    position: 0,
    name: "",
    name1: "",
    dataComment: "",
    dataType: "",
    options: "",
}

export const defaultTankAreaDefFillingExcelHeater = ['id', 'idNode', 'name', 'name1']


export const getDBTankAreaDefFillings = (params: any) =>
    request({
        headers: { },
        url: 'http://localhost:5000/tankAreaDefFillings/all',
        method: 'get',
        params
    })

export const updateDBTankAreaDefFillings = (data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/tankAreaDefFillings/all`,
        method: 'put',
        withCredentials: true,
        data
    })

export const updateDBTankAreaDefFilling = (id: number, data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/tankAreaDefFillings/tankAreaDefFilling/${id}`,
        method: 'put',
        withCredentials: true,
        data
    })

export const deleteDBTankAreaDefFilling = (id: number, data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/tankAreaDefFillings/tankAreaDefFilling/${id}`,
        method: 'delete',
        withCredentials: true,
    })
