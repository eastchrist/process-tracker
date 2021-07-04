import requestSql from '@/utils/requestSql'
import { IDataBaseProjectData } from './types'
import {validateDecimalValue, validateNumber1To5, validateNumber2To99} from '@/utils/validate'
import i18n from "@/i18n";
import variables from "@/styles/_variables.scss";




export interface AIProjectQuery {
    page: number
    limit: number
    name: string | undefined
    id: string | undefined
    idType: string | undefined
    idStatus: string | undefined
    idFactory: string | undefined
    idArea: string | undefined
}
export const defaultProjectQuery: AIProjectQuery = {
    page: 1,
    limit: 10,
    name: undefined,
    id: undefined,
    idType: undefined,
    idStatus: undefined,
    idFactory: undefined,
    idArea: undefined,
}

export const defaultProjectRules = {
    position: [{ required: true, message: i18n.t('tables.project.rules.rule2'), trigger: 'blur' }],
    name: [{ required: true, message: i18n.t('tables.project.rules.rule3'), trigger: 'blur' }],
    idType: [{ required: true, message: i18n.t('tables.project.rules.rule4'), trigger: 'blur' }],
    //idStatus: [{ required: true, message: i18n.t('tables.project.rules.rule14'), trigger: 'blur' }, { validator: validateNumber2To99, trigger: 'blur' }],
    comment: [{ required: true, message: i18n.t('tables.project.rules.rule5'), trigger: 'blur' }],
    priority: [{ required: true, message: i18n.t('tables.project.rules.rule6'), trigger: 'blur' }, { validator: validateNumber1To5, trigger: 'blur' }],
    difficulty: [{ required: true, message: i18n.t('tables.project.rules.rule7'), trigger: 'blur' }, { validator: validateNumber1To5, trigger: 'blur' }],
    idArea: [{ required: true, message: i18n.t('tables.project.rules.rule8'), trigger: 'blur' }],
    hoursPrice: [{ required: true, message: i18n.t('tables.project.rules.rule9'), trigger: 'blur' }, { validator: validateDecimalValue, trigger: 'blur' }],
    materialPrice: [{ required: true, message: i18n.t('tables.project.rules.rule10'), trigger: 'blur' }, { validator: validateDecimalValue, trigger: 'blur' }],
    electricalPrice: [{ required: true, message: i18n.t('tables.project.rules.rule11'), trigger: 'blur' }, { validator: validateDecimalValue, trigger: 'blur' }],
}

export const defaultProjectData: IDataBaseProjectData = {
    id: 0,
    position: 0,
    name: "",
    comment: "",
    idType: "",
    idStatus: "",
    priority: 0,
    difficulty: 0,
    idArea: "",
    payback: "",
    hoursPrice: "",
    materialPrice: "",
    electricalPrice: "",
    lastCreationDate: "",
    lastDueDate: "",
}
export const defaultProjectExcelHeater = ['id', 'position', 'name', 'type', 'comment', 'idOwner', 'priority', 'difficulty', 'idArea', 'hoursPrice', 'materialPrice', 'electricalPrice']
export const getDBProjects = (params: any) =>
    requestSql({
        headers: { },
        url: '/projects/all',
        method: 'get',
        params
    })

export const updateDBProjects = (data: any) =>
    requestSql({
        headers: { },
        url: `/projects/all`,
        method: 'put',
        withCredentials: true,
        data
    })

export const updateDBProject = (id: number, data: any) =>
    requestSql({
        headers: { },
        url: `/projects/project/${id}`,
        method: 'put',
        withCredentials: true,
        data
    })

export const deleteDBProject = (id: number, data: any) =>
    requestSql({
        headers: { },
        url: `/projects/project/${id}`,
        method: 'delete',
        withCredentials: true,
    })

export const updateDBProjectFonctions = (data: any) =>
    requestSql({
        headers: { },
        url: '/projects/fonctions',
        method: 'put',
        withCredentials: true,
        data
    })

export const deleteDBProjectFonctions = (id: number, data: any) =>
    requestSql({
        headers: { },
        url: `/projects/fonctions/${id}`,
        method: 'delete',
        withCredentials: true,
    })

export const deleteDBProjectProjectActions = (id: number, data: any) =>
    requestSql({
        headers: { },
        url: `/projects/actions/${id}`,
        method: 'delete',
        withCredentials: true,
    })
