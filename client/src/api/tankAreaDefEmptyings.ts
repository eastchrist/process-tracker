import requestSql from '@/utils/requestSql'
import { IDataBaseTankAreaDefEmptyingData } from './types'
import i18n from "@/i18n";
import variables from "@/styles/_variables.scss";


export const defaultTankAreaDefEmptyingQuery = {
    page: 1,
    limit: 10,
    name: undefined
}
export const defaultTankAreaDefEmptyingRules = {
    position: [{ required: true, message: i18n.t('tables.tankAreaDefEmptying.rules.rule3'), trigger: 'blur' }],
    name: [{ required: true, message: i18n.t('tables.tankAreaDefEmptying.rules.rule4'), trigger: 'blur' }],
    name1: [{ required: true, message: i18n.t('tables.tankAreaDefEmptying.rules.rule5'), trigger: 'blur' }],
    dataComment: [{ required: true, message: i18n.t('tables.tankAreaDefEmptying.rules.rule6'), trigger: 'blur' }],
    dataType: [{ required: true, message: i18n.t('tables.tankAreaDefEmptying.rules.rule7'), trigger: 'blur' }],
}
export const defaultTankAreaDefEmptyingData: IDataBaseTankAreaDefEmptyingData = {
    id: "",
    idNode: "",
    position: 0,
    name: "",
    name1: "",
    dataComment: "",
    dataType: "",
    options: "",
}

export const defaultTankAreaDefEmptyingExcelHeater = ['id', 'idNode', 'name', 'name1']


export const getDBTankAreaDefEmptyings = (params: any) =>
    requestSql({
        headers: { },
        url: '/tankAreaDefEmptyings/all',
        method: 'get',
        params
    })

export const updateDBTankAreaDefEmptyings = (data: any) =>
    requestSql({
        headers: { },
        url: `/tankAreaDefEmptyings/all`,
        method: 'put',
        withCredentials: true,
        data
    })

export const updateDBTankAreaDefEmptying = (id: number, data: any) =>
    requestSql({
        headers: { },
        url: `/tankAreaDefEmptyings/tankAreaDefEmptying/${id}`,
        method: 'put',
        withCredentials: true,
        data
    })

export const deleteDBTankAreaDefEmptying = (id: number, data: any) =>
    requestSql({
        headers: { },
        url: `/tankAreaDefEmptyings/tankAreaDefEmptying/${id}`,
        method: 'delete',
        withCredentials: true,
    })
