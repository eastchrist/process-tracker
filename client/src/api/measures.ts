import request from '@/utils/request'
import { IDataBaseMeasureData } from './types'
import i18n from "@/i18n";

export const defaultMeasureQuery = {
    page: 1,
    limit: 10,
    name: undefined
}
export const defaultMeasureRules = {
    position: [{ required: true, message: i18n.t('tables.measure.rules.rule2'), trigger: 'blur' }],
    name: [{ required: true, message: i18n.t('tables.measure.rules.rule3'), trigger: 'blur' }],
    comment: [{ required: true, message: i18n.t('tables.measure.rules.rule4'), trigger: 'blur' }],
    type: [{ required: true, message: i18n.t('tables.measure.rules.rule5'), trigger: 'blur' }],
    losses: [{ required: true, message: i18n.t('tables.measure.rules.rule6'), trigger: 'blur' }],
    ts: [{ required: true, message: i18n.t('tables.measure.rules.rule7'), trigger: 'blur' }],
    measure1: [{ required: true, message: i18n.t('tables.measure.rules.rule8'), trigger: 'blur' }],
    ts1: [{ required: true, message: i18n.t('tables.measure.rules.rule9'), trigger: 'blur' }],
    measure2: [{ required: true, message: i18n.t('tables.measure.rules.rule10'), trigger: 'blur' }],
    ts2: [{ required: true, message: i18n.t('tables.measure.rules.rule11'), trigger: 'blur' }],
    measure3: [{ required: true, message: i18n.t('tables.measure.rules.rule12'), trigger: 'blur' }],
    ts3: [{ required: true, message: i18n.t('tables.measure.rules.rule13'), trigger: 'blur' }],
    idProduct: [{ required: true, message: i18n.t('tables.measure.rules.rule14'), trigger: 'blur' }],
    idFonction: [{ required: true, message: i18n.t('tables.measure.rules.rule15'), trigger: 'blur' }],
}
export const defaultMeasureData: IDataBaseMeasureData = {
    id: "",
    position: 0,
    name: "",
    comment: "",
    type: "",
    losses: 0,
    ts: 0,
    measure1: 0,
    ts1: 0,
    measure2: 0,
    ts2: 0,
    measure3: 0,
    ts3: 0,
    idProduct: "",
    idFonction: ""
}

export const defaultMeasureExcelHeater = ['id', 'name', 'position', 'type', 'comment', 'losses', 'ts', 'measure1', 'measure2', 'measure3', 'ts1', 'ts2', 'ts3', 'idProduct', 'idFonction']

export const getDBMeasures = (params: any) =>
    request({
        headers: { },
        url: 'http://localhost:5000/measures/all',
        method: 'get',
        params
    })

export const updateDBMeasures = (data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/measures/all`,
        method: 'put',
        withCredentials: true,
        data
    })

export const updateDBMeasure = (id: number, data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/measures/measure/${id}`,
        method: 'put',
        withCredentials: true,
        data
    })

export const deleteDBMeasure = (id: number, data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/measures/measure/${id}`,
        method: 'delete',
        withCredentials: true,
    })
