import requestNode from '@/utils/requestNode'
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
    requestNode({
        headers: { },
        url: '/admin/nodes/flows',
        method: 'get'
    })


