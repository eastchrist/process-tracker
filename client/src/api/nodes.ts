import request from '@/utils/request'
//import { INodesFactory } from './types'

//export const defaultNodesFactory: INodesFactory = {
//    id: "",
//    type: "",
//    name: "",
//    name1: "",
//    address: "",
//    currency: "",
//    currencyEuro: 0,
//    menuCartography: false,
//    menuOptimisation: false,
//    menuTraceability: false,
//}

export const getAllNodes = () =>
    request({
        headers: { },
        url: 'http://localhost:3000/admin/nodes/flows',
        method: 'get'
    })


