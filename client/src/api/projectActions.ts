import requestSql from '@/utils/requestSql'
import { IDataBaseProjectActionData } from './types'
import i18n from "@/i18n";
import { validateNumber2To99 } from "@/utils/validate";
import variables from "@/styles/_variables.scss";


export interface AIProjectActionQuery {
    page: number
    limit: number
    name: string | undefined
}

export const defaultProjectActionQuery: AIProjectActionQuery = {
    page: 1,
    limit: 10,
    name: undefined
}
export const defaultProjectActionRules = {
    position: [{ required: true, message: i18n.t('tables.projectAction.rules.rule2'), trigger: 'blur' }],
    comment: [{ required: true, message: i18n.t('tables.projectAction.rules.rule3'), trigger: 'blur' }],
    creationDate: [{ required: true, message: i18n.t('tables.projectAction.rules.rule4'), trigger: 'blur' }],
    idProject: [{ required: true, message: i18n.t('tables.projectAction.rules.rule6'), trigger: 'blur' }],
    idStatus: [{ required: true, message: i18n.t('tables.projectAction.rules.rule15'), trigger: 'blur' }, { validator: validateNumber2To99, trigger: 'blur' }],
    //dueDate: [{ required: true, message: i18n.t('tables.projectAction.rules.rule5'), trigger: 'blur' }],
    dueDate: [{ required: true, message: i18n.t('tables.projectAction.rules.rule5'), trigger: 'change' }],
    //timestamp: [{ required: true, message: 'timestamp is required', trigger: 'change' }],
    //dueDate: [ { validator: validateDateFutur, trigger: 'blur' }],
}
export const defaultProjectActionData: IDataBaseProjectActionData = {
    id: 0,
    position: 0,
    comment: "",
    creationDate: "",
    dueDate: "",
    idStatus: "",
    idProject: 0
}
export const defaultProjectActionExcelHeader = ['id', 'position', 'comment', 'creationDate', 'dueDate', 'status', 'idProject']

export const getDBProjectActions = (params: any) =>
    requestSql({
        headers: { },
        url: '/projectActions/all',
        method: 'get',
        params
    })

export const updateDBProjectActions = (data: any) =>
    requestSql({
        headers: { },
        url: `/projectActions/all`,
        method: 'put',
        withCredentials: true,
        data
    })

export const addDBProjectAction = (data: any) =>
    requestSql({
        headers: { },
        url: `/projectActions/projectAction`,
        method: 'put',
        withCredentials: true,
        data
    })



export const updateDBProjectAction = (id: number, data: any) =>
    requestSql({
        headers: { },
        url: `/projectActions/projectAction/${id}`,
        method: 'put',
        withCredentials: true,
        data
    })

export const deleteDBProjectAction = (id: number, data: any) =>
    requestSql({
        headers: { },
        url: `/projectActions/projectAction/${id}`,
        method: 'delete',
        withCredentials: true,
    })
