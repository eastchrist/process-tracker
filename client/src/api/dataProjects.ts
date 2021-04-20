import request from '@/utils/request'
import { IDataBaseDataProjectData } from './types'
import i18n from "@/i18n";

export const defaultDataProjectQuery = {
    page: 1,
    limit: 10,
    name: undefined
}
export const defaultDataProjectRules = {
    position: [{ required: true, message: i18n.t('tables.dataProject.rules.rule2'), trigger: 'blur' }],
    comment: [{ required: true, message: i18n.t('tables.dataProject.rules.rule3'), trigger: 'blur' }],
    creationDate: [{ required: true, message: i18n.t('tables.dataProject.rules.rule4'), trigger: 'blur' }],
    dueDate: [{ required: true, message: i18n.t('tables.dataProject.rules.rule5'), trigger: 'blur' }],
    idProject: [{ required: true, message: i18n.t('tables.dataProject.rules.rule6'), trigger: 'blur' }],
    status: [{ required: true, message: i18n.t('tables.dataProject.rules.rule7'), trigger: 'blur' }],
}
export const defaultDataProjectData: IDataBaseDataProjectData = {
    id: 0,
    position: 0,
    comment: "",
    creationDate: "",
    dueDate: "",
    idProject: 0,
    status: 0
}
export const defaultDataProjectExcelHeater = ['id', 'position', 'comment', 'creationDate', 'dueDate', 'status', 'idProject']

export const getDBDataProjects = (params: any) =>
    request({
        headers: { },
        url: 'http://localhost:5000/dataProjects/all',
        method: 'get',
        params
    })

export const updateDBDataProjects = (data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/dataProjects/all`,
        method: 'put',
        withCredentials: true,
        data
    })

export const updateDBDataProject = (id: number, data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/dataProjects/dataProject/${id}`,
        method: 'put',
        withCredentials: true,
        data
    })

export const deleteDBDataProject = (id: number, data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/dataProjects/dataProject/${id}`,
        method: 'delete',
        withCredentials: true,
    })
