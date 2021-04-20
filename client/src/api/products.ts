import request from '@/utils/request'
import { IDataBaseProductData } from './types'
import i18n from "@/i18n";

export const defaultProductQuery = {
    page: 1,
    limit: 10,
    name: undefined,
    idFactory: undefined
}
export const defaultProductRules = {
    position: [{ required: true, message: i18n.t('tables.product.rules.rule2'), trigger: 'blur' }],
    name: [{ required: true, message: i18n.t('tables.product.rules.rule3'), trigger: 'blur' }],
    totalSolid: [{ required: true, message: i18n.t('tables.product.rules.rule4'), trigger: 'blur' }],
    price: [{ required: true, message: i18n.t('tables.product.rules.rule5'), trigger: 'blur' }],
    idFactory: [{ required: true, message: i18n.t('tables.product.rules.rule6'), trigger: 'blur' }]
}
export const defaultProductData: IDataBaseProductData = {
    id: "",
    name: "",
    totalSolid: 0,
    price: 0,
    position: 0,
    idFactory: "",
}

export const defaultProductExcelHeater = ['id', 'position', 'name', 'totalSolid', 'price', 'idFactory']

export const getDBProducts = (params: any) =>
    request({
        headers: { },
        url: 'http://localhost:5000/products/all',
        method: 'get',
        params
    })

export const updateDBProducts = (data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/products/all`,
        method: 'put',
        withCredentials: true,
        data
    })

export const addDBProduct = (data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/products/product`,
        method: 'put',
        withCredentials: true,
        data
    })

export const updateDBProduct = (id: number, data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/products/product/${id}`,
        method: 'put',
        withCredentials: true,
        data
    })

export const deleteDBProduct = (id: number, data: any) =>
    request({
        headers: { },
        url: `http://localhost:5000/products/product/${id}`,
        method: 'delete',
        withCredentials: true,
    })
