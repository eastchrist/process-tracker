import request from '@/utils/request'
import { IDataBaseMeasureTypeData } from './types'
import i18n from "@/i18n";

export const defaultMeasureTypeQuery = {
    page: 1,
    limit: 10,
    name: undefined
}

export const defaultMeasureTypeData: IDataBaseMeasureTypeData = {
    id: "",
    position: 0,
    name: "",
    value: 0
}

export const defaultMeasureTypeExcelHeater = ['id', 'position', 'name', 'value']

export const getDBMeasureTypes = (params: any) =>
    request({
        headers: { },
        url: 'http://localhost:5000/measureTypes/all',
        method: 'get',
        params
    })

export const updateDBMeasureTypes = (data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/measureTypes/all`,
        method: 'put',
        withCredentials: true,
        data
    })

export const updateDBMeasureType = (id: number, data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/measureTypes/measureType/${id}`,
        method: 'put',
        withCredentials: true,
        data
    })

export const deleteDBMeasureType = (id: number, data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/measureTypes/measureType/${id}`,
        method: 'delete',
        withCredentials: true,
    })
