import request from '@/utils/request'
import { IDataBaseUserData } from './types'
import i18n from '@/i18n' // Internationalization

export const defaultUserQuery = {
    page: 1,
    limit: 10,
    username: undefined,
    idFactory: undefined
}
export const defaultUserRules = {
    username: [{ required: true, message: i18n.t('tables.password.rules.rule3'), trigger: 'blur' }],
    email: [{ required: true, message: i18n.t('tables.password.rules.rule4'), trigger: 'blur' }],
    idFactory: [{ required: true, message: i18n.t('tables.password.rules.rule5'), trigger: 'blur' }],
    isAdmin: [{ required: true, message: i18n.t('tables.password.rules.rule6'), trigger: 'blur' }],
    isManager: [{ required: true, message: i18n.t('tables.password.rules.rule7'), trigger: 'blur' }],
    isOperator: [{ required: true, message: i18n.t('tables.password.rules.rule8'), trigger: 'blur' }],
    isVisitor: [{ required: true, message: i18n.t('tables.password.rules.rule9'), trigger: 'blur' }],
    isActif: [{ required: true, message: i18n.t('tables.password.rules.rule10'), trigger: 'blur' }]
}
export const defaultUserData: IDataBaseUserData = {
    id: 0,
    username: '',
    email: '',
    position: 0,
    idFactory: '',
    isAdmin: false,
    isManager: false,
    isOperator: false,
    isVisitor: false,
    isActif: false,
    //token: '',
    //roles: []
}
export const defaultUserExcelHeater = ['id', 'username', 'email', 'password', 'position', 'isAdmin', 'isManager', 'isOperator', 'isVisitor', 'isActif', 'idFactory']

export const getDBUsers = (params: any) =>
    request({
        headers: { },
        url: 'http://localhost:5000/users/all',
        method: 'get',
        params
    })


export const updateDBUsers = (data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/users/all`,
        method: 'put',
        withCredentials: true,
        data
    })

//export const getDBUserInfo = ( data: any) =>
//    request({
//        headers: { },
//        url: 'http://localhost:5000/users/info',
//        method: 'post',
//        withCredentials: true,
//        data
//    })

export const getDBUserInfoWithToken = (data: any) =>
    request({
        headers: { },
        url: 'http://localhost:5000/users/user/info',
        method: 'post',
        withCredentials: true,
        data
    })

export const updateDBUser = (id: number, data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/users/user/${id}`,
        method: 'put',
        withCredentials: true,
        data
    })
export const deleteDBUser = (id: number, data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/users/user/${id}`,
        method: 'delete',
        withCredentials: true,
    })



export const login = (data: any) =>
    request({
        url: 'http://localhost:5000/users/login',
        method: 'post',
        withCredentials: true,
        data
    })

export const logout = () =>
    request({
        url: '/users/logout',
        method: 'post'
    })

export const register = (data: any) =>
    request({
        url: 'http://localhost:5000/users/register',
        method: 'post',
        withCredentials: true,
        data
    })
