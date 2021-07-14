import requestSql from '@/utils/requestSql'
import { IDataBaseComputerData } from './types'
import i18n from "@/i18n";
import variables from "@/styles/_variables.scss";


export const defaultComputerQuery = {
    page: 1,
    limit: 10,
    name: undefined,
    idFactory: undefined
}
export const defaultComputerRules = {
    position: [{ required: true, message: i18n.t('tables.computer.rules.rule3'), trigger: 'blur' }],
    name: [{ required: true, message: i18n.t('tables.computer.rules.rule4'), trigger: 'blur' }],
    name1: [{ required: true, message: i18n.t('tables.computer.rules.rule5'), trigger: 'blur' }],
    idFactory: [{ required: true, message: i18n.t('tables.computer.rules.rule6'), trigger: 'blur' }],
    isServerMain: [{ required: true, message: i18n.t('tables.computer.rules.rule7'), trigger: 'blur' }],
    isServerLocal: [{ required: true, message: i18n.t('tables.computer.rules.rule8'), trigger: 'blur' }],
    isComputerLocal: [{ required: true, message: i18n.t('tables.computer.rules.rule9'), trigger: 'blur' }],
    isComputerCarto: [{ required: true, message: i18n.t('tables.computer.rules.rule10'), trigger: 'blur' }],
}
export const defaultComputerData: IDataBaseComputerData = {
    id: "",
    idNode: "",
    position: 0,
    name: "",
    name1: "",
    isServerMain: false,
    isServerLocal: false,
    isComputerLocal: false,
    isComputerCarto: false,
    idFactory: "",
}
export const defaultComputerExcelHeader = ['id', 'idNode', 'name', 'name1', 'position', 'isServerMain', 'isServerLocal', 'isComputerLocal', 'isComputerCarto', 'idFactory']

export const getDBComputers = (params: any) =>
    requestSql({
        headers: { },
        url: '/computers/all',
        method: 'get',
        params
    })

export const updateDBComputers = (data: any) =>
    requestSql({
        headers: { },
        url: `/computers/all`,
        method: 'put',
        withCredentials: true,
        data
    })

export const updateDBComputer = (id: string, data: any) =>
    requestSql({
        headers: { },
        url: `/computers/computer/${id}`,
        method: 'put',
        withCredentials: true,
        data
    })

export const deleteDBComputer = (id: string, data: any) =>
    requestSql({
        headers: { },
        url: `/computers/computer/${id}`,
        method: 'delete',
        withCredentials: true,
    })
