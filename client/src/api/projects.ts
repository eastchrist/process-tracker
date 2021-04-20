import request from '@/utils/request'
import { IDataBaseProjectData } from './types'
import i18n from "@/i18n";

export const defaultProjectQuery = {
    page: 1,
    limit: 10,
    name: undefined,
    idArea: undefined
}
export const defaultProjectRules = {
    position: [{ required: true, message: i18n.t('tables.project.rules.rule2'), trigger: 'blur' }],
    name: [{ required: true, message: i18n.t('tables.project.rules.rule3'), trigger: 'blur' }],
    comment: [{ required: true, message: i18n.t('tables.project.rules.rule4'), trigger: 'blur' }],
    idOwner: [{ required: true, message: i18n.t('tables.project.rules.rule5'), trigger: 'blur' }],
    priority: [{ required: true, message: i18n.t('tables.project.rules.rule6'), trigger: 'blur' }],
    difficulty: [{ required: true, message: i18n.t('tables.project.rules.rule7'), trigger: 'blur' }],
    idArea: [{ required: true, message: i18n.t('tables.project.rules.rule8'), trigger: 'blur' }],
    materialPrice: [{ required: true, message: i18n.t('tables.project.rules.rule9'), trigger: 'blur' }],
    type: [{ required: true, message: i18n.t('tables.project.rules.rule10'), trigger: 'blur' }],
}
export const defaultProjectData: IDataBaseProjectData = {
    id: 0,
    position: 0,
    name: "",
    comment: "",
    type: "",
    idOwner: "",
    priority: 0,
    difficulty: 0,
    idArea: "",
    materialPrice: 0,
}

export const defaultProjectExcelHeater = ['id', 'position', 'name', 'type', 'comment', 'idOwner', 'priority', 'difficulty', 'idArea', 'materialPrice']

export const getDBProjects = (params: any) =>
    request({
        headers: { },
        url: 'http://localhost:5000/projects/all',
        method: 'get',
        params
    })

export const updateDBProjects = (data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/projects/all`,
        method: 'put',
        withCredentials: true,
        data
    })

export const updateDBProject = (id: number, data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/projects/project/${id}`,
        method: 'put',
        withCredentials: true,
        data
    })

export const deleteDBProject = (id: number, data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/projects/project/${id}`,
        method: 'delete',
        withCredentials: true,
    })
