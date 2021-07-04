
import {
    IDataBaseFactoryData,
    IDataBaseComputerData,
    IDataBaseAreaData,
    IDataBaseTankAreaData,
    IDataBaseTankAreaDefEmptyingData,
    IDataBaseTankAreaDefFillingData,
    IDataBaseServerData,
    IDataBasePlcData,
    IDataBaseTankData,
    IDataBaseEquipData,
    IDataBaseDigitalData,
    IDataBaseAnalogData,
    IDataBaseFonctionData,
    IDataBaseMeasureTypeData
} from '@/api/types'
import { INodeFactoryData, INodeComputerData, INodeAreaData, INodeTankAreaData, INodeTankAreaDefEmptyingData, INodeTankAreaDefFillingData, INodeServerData, INodePlcData,
         INodeTankData, INodeEquipData, INodeDefDigitalData, INodeDefAnalogData, INodeDefCartoData } from '@/api/types'
import { INodeTankDefData, INodeEquipDefData } from '@/api/types'
import { ITreeElementsFactory } from '@/api/types'

import { updateDBFactorys, getDBFactorys } from '@/api/factorys'
import { updateDBComputers } from '@/api/computers'
import { updateDBAreas, getDBAreas } from '@/api/areas'
import { getDBTankAreas, updateDBTankAreas} from '@/api/tankAreas'
import { updateDBTankAreaDefEmptyings } from '@/api/tankAreaDefEmptyings'
import { updateDBTankAreaDefFillings } from '@/api/tankAreaDefFillings'
import { updateDBServers } from '@/api/servers'
import { updateDBPlcs, getDBPlcs } from '@/api/plcs'
import { updateDBTanks } from '@/api/tanks'
import { updateDBEquips, getDBEquips } from '@/api/equips'
import { updateDBDigitals } from '@/api/digitals'
import { updateDBAnalogs } from '@/api/analogs'
import { updateDBFonctions } from '@/api/fonctions'

import i18n from "@/i18n";

const findchildLevel3 = (datas: any, FindNivel3: string, IdLevel2: string) => {
    const TreeFromNodes: ITreeElementsFactory[] = []
    for( const data of datas){
        if (data.type === FindNivel3) {
            if ((FindNivel3 === 'Plc') && (data.idArea === IdLevel2)) {
                TreeFromNodes.push({
                    label: 'Plc Name :  ' + data.name,
                    children: [
                        {label: 'Id: ' + data.id},
                        {label: 'Brand : ' + data.plcBrand},
                        {label: 'Connection : ' + data.plcConnection},
                        {label: 'IP : ' + data.plcIp},
                        {label: 'Slot : ' + data.plcSlot},
                        {label: 'Rack : ' + data.plcRack}
                        ]
                })
            }
            else if ((FindNivel3 === 'TankArea') && (data.idArea === IdLevel2)) {
                TreeFromNodes.push({
                    label: 'TankArea Node :  ' + data.name,
                    children: [
                        {label: 'Id: ' + data.id},
                        {label: 'TankArea Name : ' + data.name1},
                        {label: 'Id Area : ' + data.idArea},
                    ]
                })
            }
            else if ((FindNivel3 === 'Tank') && (data.idTankArea === IdLevel2)) {
                TreeFromNodes.push({
                    label: 'Tank Node :  ' + data.name,
                    children: [
                        {label: 'Id: ' + data.id},
                        {label: 'Tank Name : ' + data.name1},
                        {label: 'Id Tank Def : ' + data.idTankDef},
                    ]
                })
            }
            else if ((FindNivel3 === 'Equip') && (data.idPlc === IdLevel2)) {
                TreeFromNodes.push({
                    label: 'Equip Node :  ' + data.name,
                    children: [
                        {label: 'Id: ' + data.id},
                        {label: 'Equip Name : ' + data.name1},
                        {label: 'Id Plc : ' + data.idPlc},
                        {label: 'Id Equip Definition : ' + data.idEquipDef},
                        {label: 'menu : ' + data.menu},
                    ]
                })
            }
        }
    }
    return TreeFromNodes
}
const findchildLevel2 = (datas: any, FindNivel2: string, FindNivel3: string, IdLevel1: string) => {
    const TreeFromNodes: ITreeElementsFactory[] = []
    for( const data of datas) {
        if (data.type === FindNivel2) {
            if (( FindNivel2 === 'Computer' ) && ( data.idFactory === IdLevel1 )) {
                TreeFromNodes.push({
                    label: 'Computer Name :  ' + data.name,
                    children: [
                        {label: 'Id: ' + data.id},
                        {label: 'Server Main : ' + data.ServerMain},
                        {label: 'Server Local : ' + data.ServerLocal},
                        {label: 'Computer Local : ' + data.ComputerLocal},
                        {label: 'Computer Carto : ' + data.ComputerCarto},
                    ]
                })
            }
            else if (( FindNivel2 === 'Area' ) && ( data.idFactory === IdLevel1 )) {
                if (FindNivel3 === '') {
                    TreeFromNodes.push({
                        label: 'Area Name :  ' + data.name,
                        children: [
                            {label: 'Id: ' + data.id},
                            {label: 'Name1 Main : ' + data.name1},
                            //{label: 'Comment : ' + data.comment},
                            {label: 'Menu : ' + data.menu}
                            ]
                    })
                }
                else {
                    const childLevel3 = findchildLevel3(datas, FindNivel3, data.id)
                    TreeFromNodes.push({
                        label: 'Area :  ' + data.name,
                        children: childLevel3
                    })
                }
            }
            else if (( FindNivel2 === 'TankArea' ) && ( data.idArea === IdLevel1 )) {
                if (FindNivel3 === '') {
                    TreeFromNodes.push({
                        label: 'TankArea Name :  ' + data.name,
                        children: [
                            {label: 'Id: ' + data.id},
                            {label: 'Name1 Main : ' + data.name1}
                        ]
                    })
                }
                else {
                    const childLevel3 = findchildLevel3(datas, FindNivel3, data.id)
                    TreeFromNodes.push({
                        label: 'TankArea :  ' + data.name,
                        children: childLevel3
                    })
                }
            }
            else if (( FindNivel2 === 'Plc' ) && ( data.idArea === IdLevel1 )) {
                if (FindNivel3 === '') {
                    TreeFromNodes.push({
                        label: 'Plc Name :  ' + data.name,
                        children: [
                            {label: 'Id: ' + data.id},
                            {label: 'Name1 Main : ' + data.name1},
                            {label: 'Brand : ' + data.plcBrand},
                            {label: 'Connection : ' + data.plcConnection},
                            {label: 'Slot : ' + data.plcSlot},
                            {label: 'Rack : ' + data.plcRack},
                            {label: 'Ip : ' + data.plcIp},
                            {label: 'Id Server : ' + data.idServer},
                            {label: 'Id Area : ' + data.idArea},
                        ]
                    })
                }
                else {
                    const childLevel3 = findchildLevel3(datas, FindNivel3, data.id)
                    TreeFromNodes.push({
                        label: 'Plc Name :  ' + data.name,
                        children: childLevel3
                    })
                }
            }
        }
    }
    return TreeFromNodes
}
export const createTreeFromNodes = (datas: any, FindNivel1: string, FindNivel2: string, FindNivel3: string) => {
    const TreeFromNodes: ITreeElementsFactory[] = []
    for( const data of datas){
        if (data.type === FindNivel1) {
            if (FindNivel1 === 'Factory') {
                if (FindNivel2 === '') {
                    TreeFromNodes.push({
                        label: 'Factory :  ' + data.name,
                        children: [
                            {label: 'Id: ' + data.id},
                            {label: 'Name1: ' + data.name1},
                            {label: 'Address : ' + data.address},
                            {label: 'Logo Client : ' + data.logoClient},
                            {label: 'Logo Contractor : ' + data.logoContractor},
                            {label: 'Currency : ' + data.currency},
                            {label: 'Currency/Euro : ' + data.currencyEuro},
                        ]
                    })
                }
                else {
                    const childLevel2 = findchildLevel2(datas, FindNivel2, FindNivel3, data.id)
                    TreeFromNodes.push({
                        label: 'Factory :  ' + data.name,
                        children: childLevel2
                    })
                }
            }
            else if (FindNivel1 === 'Server') {
                TreeFromNodes.push({
                    label: 'Server :  ' + data.name,
                    children: [
                        {label: 'Id: ' + data.id},
                        {label: 'Type: ' + data.ServerType}
                    ]
                })
            }
            else if (FindNivel1 === 'Area') {
                if (FindNivel2 === '') {
                    TreeFromNodes.push({
                        label: 'Area :  ' + data.name,
                        children: [
                            {label: 'Id: ' + data.id},
                            {label: 'Name1: ' + data.name1}
                        ]
                    })
                }
                else {
                    const childLevel2 = findchildLevel2(datas, FindNivel2, FindNivel3, data.id)
                    TreeFromNodes.push({
                        label: 'Area :  ' + data.name,
                        children: childLevel2
                    })
                }
            }
            else if (FindNivel1 === 'TankDef') {
                if (FindNivel2 === '') {
                    TreeFromNodes.push({
                        label: 'Tank Definition :  ' + data.name,
                        children: [
                            {label: 'Id: ' + data.id},
                            {label: 'Id Digital: ' + data.idTankDefDigital},
                            {label: 'Id Analog: ' + data.idTankDefAnalog},
                            {label: 'Id Galarm: ' + data.idTankDefGAlarms}
                        ]
                    })
                }
            }
        }
    }
    return TreeFromNodes
}

const GetDataBaseFactoryFromNodes = (datas: INodeFactoryData[]) => {
    const errorList = ""
    const IDataBaseFactoryDatas: IDataBaseFactoryData[] = []
    for (const data of datas) {
        if (data.type === "Factory") {
              const IDataBase: IDataBaseFactoryData = {
                                      id: data.id, idNode: data.id, name: data.name, name1: data.name1, position: 999999, langue: data.langue,
                                      logoClient: data.logoClient, logoContractor: data.logoContractor,
                                      address: data.address, currency: data.currency, currencyEuro: data.currencyEuro,
                                      isCartography: data.menuCartography, isOptimisation: data.menuOptimisation, isTraceability: data.menuTraceability
                                   }
              IDataBaseFactoryDatas.push(IDataBase)
        }
    }
    return { errorList, updatedList: IDataBaseFactoryDatas }
}
const GetDataBaseComputerFromNodes = async (datas: INodeComputerData[]) => {
    const errorList = ""
    const IDataBaseComputerDatas: IDataBaseComputerData[] = []
    const { data } = await getDBFactorys({page: 1, limit: 1000, name: undefined})
    const orderCreations = data.rows
    for (const orderCreation of orderCreations) {
        const idOrderCreation = orderCreation.id
        for (const data of datas) {
            if ((data.type === "Computer") && ((data.idFactory === idOrderCreation) || (data.idFactory === ""))) {
                    const IDataBase: IDataBaseComputerData = {
                        id: data.id, idNode: data.id, name: data.name, name1: data.name1, position: 999999,
                        idFactory: data.idFactory,
                        isServerMain: data.ServerMain, isServerLocal: data.ServerLocal, isComputerLocal: data.ComputerLocal, isComputerCarto: data.ComputerCarto
                    }
                    IDataBaseComputerDatas.push(IDataBase)
            }
        }
    }
    return { errorList, updatedList: IDataBaseComputerDatas }
}
const GetDataBaseAreaFromNodes = (datas: INodeAreaData[]) => {
    const errorList = ""
    const IDataBaseAreaDatas: IDataBaseAreaData[] = []
    for (const data of datas) {
        if (data.type === "Area") {
            const IDataBase: IDataBaseAreaData = {
                id: data.id, idNode: data.id, name: data.name, name1: data.name1, position: 999999, menu: data.menu,
                idFactory: data.idFactory
            }
            IDataBaseAreaDatas.push(IDataBase)
        }
    }
    return { errorList, updatedList: IDataBaseAreaDatas }
}
const GetDataBaseTankAreaFromNodes = async (datas: INodeTankAreaData[]) => {
    const errorList = ""
    const IDataBaseTankAreaDatas: IDataBaseTankAreaData[] = []
    const { data } = await getDBAreas({page: 1, limit: 1000, name: undefined})
    const orderCreations = data.rows
    for (const orderCreation of orderCreations) {
        const idOrderCreation = orderCreation.id
        for (const data of datas) {
            if ((data.type === "TankArea") && (data.idArea === idOrderCreation)) {
                const IDataBase: IDataBaseTankAreaData = {
                    id: data.id, idNode: data.id, name: data.name, name1: data.name1, position: 999999,
                    idArea: data.idArea,
                }
                IDataBaseTankAreaDatas.push(IDataBase)
            }
        }
    }
    return { errorList, updatedList: IDataBaseTankAreaDatas }
}
const GetDataBaseTankAreaDefEmptyingFromNodes = (datas: INodeTankAreaDefEmptyingData[]) => {
    const errorList = ""
    const IDataBaseTankAreaDefEmptyingDatas: IDataBaseTankAreaDefEmptyingData[] = []
    for (const data of datas) {
        if (data.type === "TankAreaDefEmptying") {
            const IDataBase: IDataBaseTankAreaDefEmptyingData = {
                id: data.id, idNode: data.id, name: data.name, name1: data.name1, position: 999999, dataComment:data.dataComment, dataType:data.dataType, options:data.options,
            }
            IDataBaseTankAreaDefEmptyingDatas.push(IDataBase)
        }
    }
    return { errorList, updatedList: IDataBaseTankAreaDefEmptyingDatas }
}
const GetDataBaseTankAreaDefFillingFromNodes = (datas: INodeTankAreaDefFillingData[]) => {
    const errorList = ""
    const IDataBaseTankAreaDefFillingDatas: IDataBaseTankAreaDefFillingData[] = []
    for (const data of datas) {
        if (data.type === "TankAreaDefFilling") {
            const IDataBase: IDataBaseTankAreaDefFillingData = {
                id: data.id, idNode: data.id, name: data.name, name1: data.name1, position: 999999, dataComment:data.dataComment, dataType:data.dataType, options:data.options,
            }
            IDataBaseTankAreaDefFillingDatas.push(IDataBase)
        }
    }
    return { errorList, updatedList: IDataBaseTankAreaDefFillingDatas }
}
const GetDataBaseServerFromNodes = (datas: INodeServerData[]) => {
    const errorList = ""
    const IDataBaseServerDatas: IDataBaseServerData[] = []
    for (const data of datas) {
        if (data.type === "Server") {
            const IDataBase: IDataBaseServerData = {
                id: data.id, idNode: data.id, position: 999999, name: data.name,
                serverType: data.ServerType,
            }
            IDataBaseServerDatas.push(IDataBase)
        }
    }
    return { errorList, updatedList: IDataBaseServerDatas }
}
const GetDataBasePlcFromNodes = async (datas: INodePlcData[]) => {
    const errorList = ""
    const IDataBasePlcDatas: IDataBasePlcData[] = []
    const { data } = await getDBAreas({page: 1, limit: 1000, name: undefined})
    const orderCreations = data.rows
    for (const orderCreation of orderCreations) {
        const idOrderCreation = orderCreation.id
        for (const data of datas) {
            if ((data.type === "Plc") && (data.idArea === idOrderCreation)) {
                const IDataBase: IDataBasePlcData = {
                    id: data.id, idNode: data.id, position: 999999, name: data.name, name1: data.name1,
                    brand: data.plcBrand, connection: data.plcConnection, slot: data.plcSlot, rack: data.plcRack, ip: data.plcIp,
                    idServer: data.idServer, idArea: data.idArea,
                }
                IDataBasePlcDatas.push(IDataBase)
            }
        }
    }
    return { errorList, updatedList: IDataBasePlcDatas }
}
const GetDataBaseTankFromNodes = async (datas: INodeTankData[]) => {
    const errorList = ""
    const IDataBaseTankDatas: IDataBaseTankData[] = []
    const { data } = await getDBTankAreas({page: 1, limit: 10000, name: undefined})
    const orderCreations = data.rows
    for (const orderCreation of orderCreations) {
        const idOrderCreation = orderCreation.id
        for (const data of datas) {
            if ((data.type === "Tank") && (data.idTankArea === idOrderCreation)) {
                const IDataBase: IDataBaseTankData = {
                    id: data.id, idNode: data.id, name: data.name, name1: data.name1, position: 999999,
                    idTankArea: data.idTankArea, idTankDef: data.idTankDef
                }
                IDataBaseTankDatas.push(IDataBase)
            }
        }
    }
    return { errorList, updatedList: IDataBaseTankDatas }
}
const GetDataBaseEquipFromNodes = async (datas: INodeEquipData[]) => {
    const errorList = ""
    const IDataBaseEquipDatas: IDataBaseEquipData[] = []
    const { data } = await getDBPlcs({page: 1, limit: 1000, name: undefined})
    const orderCreations = data.rows
    for (const orderCreation of orderCreations) {
        const idOrderCreation = orderCreation.id
        for (const datos of datas) {
            if ((datos.type === "Equip") && (datos.idPlc === idOrderCreation)) {
                //&& ((datos.idPlc === idOrderCreation) || (datos.idPlc === idOrderCreation)))
                    const IDataBase: IDataBaseEquipData = {
                        id: datos.id, idNode: datos.id, name: datos.name, name1: datos.name1, position: 999999, menu: datos.menu,
                        idPlc: datos.idPlc, idEquipDef: datos.idEquipDef
                    }
                    IDataBaseEquipDatas.push(IDataBase)
            }
        }
    }
    return { errorList, updatedList: IDataBaseEquipDatas }
}
const GetDefCartoDigitalAnalogData = (TankDigitalId: string, DigAnaList: INodeDefDigitalData[], DataType: string) => {
    let number = 0
    let data: any = {}
    for (const DigAna of DigAnaList) {
        if ( DigAna.id === TankDigitalId ) {
            number = DigAna.options.length
            data = DigAna.options
            return { number, data }
        }
    }
    return { number, data }
}
const GetDefTankData = (TankDefId: string, TankDefList: INodeTankDefData[], DigAnaList: INodeDefDigitalData[], DataType: string) => {
    const number = 0
    const data: any = {}
    for (const TankDef of TankDefList) {
        if ( TankDef.id === TankDefId ) {
            if (DataType === "Digital") {
                return GetDefCartoDigitalAnalogData ( TankDef.idTankDefDigital, DigAnaList, DataType)
            }
            else if (DataType === "Analog") {
                return GetDefCartoDigitalAnalogData ( TankDef.idTankDefAnalog, DigAnaList, DataType)
            }
        }
    }
    return { number, data }
}
const GetDefEquipData = (EquipDefId: string, EquipDefList: INodeEquipDefData[], CartoDigAnaList: INodeDefDigitalData[], DataType: string) => {
    const number = 0
    const data = {}
    for (const EquipDef of EquipDefList) {
        if ( EquipDef.id === EquipDefId ) {
            if (DataType === "Digital") {
                return GetDefCartoDigitalAnalogData ( EquipDef.idEquipDefDigital, CartoDigAnaList, DataType)
            }
            else if (DataType === "Analog") {
                return GetDefCartoDigitalAnalogData ( EquipDef.idEquipDefAnalog, CartoDigAnaList, DataType)
            }
            else if (DataType === "Carto") {
                return GetDefCartoDigitalAnalogData ( EquipDef.idEquipDefCarto, CartoDigAnaList, DataType)
            }
        }
    }
    return { number, data }
}
const GetDataBaseDigitalFromNodes = (Nodedatas: INodeDefDigitalData[]) => {
    const errorList = ""
    const IDataBaseDigitalDatas: IDataBaseDigitalData[] = []
    const TankList: any = []
    const TankDefList: any = []
    const EquipTankDigitalList: any = []
    const EquipList: any = []
    const EquipDefList: any = []
    for ( const Nodedata of Nodedatas) {
        if ( Nodedata.type === "Equip" ) { EquipList.push(Nodedata) }
        else if ( Nodedata.type === "Tank" ) { TankList.push(Nodedata) }
        else if ( Nodedata.type === "EquipDef" ) { EquipDefList.push(Nodedata) }
        else if ( Nodedata.type === "TankDef" ) { TankDefList.push(Nodedata) }
        else if ( Nodedata.type === "EquipDefDigital" ) { EquipTankDigitalList.push(Nodedata) }
    }
    for ( const Tank of TankList) {
        const { number, data } = GetDefTankData (Tank.idTankDef, TankDefList, EquipTankDigitalList, "Digital")
        let i = 0;
        while (i < number) {
            const IDataBase: IDataBaseDigitalData = {
                id: null,
                name: Tank.name + ":" + data[i].label,
                name1: Tank.name1 + ":" + data[i].label,
                position: 999999,
                tag: Tank.name1 + ":" + data[i].label,
                address: null,
                idEquip: "",
                idTank: Tank.id,
                indexCreation: i}
            IDataBaseDigitalDatas.push(IDataBase)
            i++;
        }
    }
    for ( const Equip of EquipList) {
        const { number, data } = GetDefEquipData (Equip.idEquipDef, EquipDefList, EquipTankDigitalList, "Digital")
        let i = 0;
        while (i < number) {
            const IDataBase: IDataBaseDigitalData = {
                id: null,
                name: Equip.name + ":" + data[i].label,
                name1: Equip.name1 + ":" + data[i].label,
                position: 999999,
                tag: Equip.name1 + ":" + data[i].label,
                address: null,
                idEquip: Equip.id,
                idTank: "",
                indexCreation: i}
            IDataBaseDigitalDatas.push(IDataBase)
            i++;
        }
    }
    return { errorList, updatedList: IDataBaseDigitalDatas }
}
const GetDataBaseAnalogFromNodes = (Nodedatas: INodeDefAnalogData[]) => {
    const errorList = ""
    const IDataBaseAnalogDatas: IDataBaseAnalogData[] = []
    const TankList: any = []
    const TankDefList: any = []
    const EquipTankAnalogList: any = []
    const EquipList: any = []
    const EquipDefList: any = []
    for ( const Nodedata of Nodedatas) {
        if ( Nodedata.type === "Equip" ) { EquipList.push(Nodedata) }
        else if ( Nodedata.type === "Tank" ) { TankList.push(Nodedata) }
        else if ( Nodedata.type === "EquipDef" ) { EquipDefList.push(Nodedata) }
        else if ( Nodedata.type === "TankDef" ) { TankDefList.push(Nodedata) }
        else if ( Nodedata.type === "EquipDefAnalog" ) { EquipTankAnalogList.push(Nodedata) }
    }
    for ( const Tank of TankList) {
        const { number, data } = GetDefTankData (Tank.idTankDef, TankDefList, EquipTankAnalogList, "Analog")
        let i = 0;
        while (i < number) {
            const IDataBase: IDataBaseAnalogData = {
                id: null,
                name: Tank.name + ":" + data[i].label,
                name1: Tank.name1 + ":" + data[i].label,
                position: 999999,
                tag: Tank.name1 + ":" + data[i].label,
                address: null,
                type: data[i].type,
                idEquip: "",
                idTank: Tank.id,
                indexCreation: i}
            IDataBaseAnalogDatas.push(IDataBase)
            i++;
        }
    }
    for ( const Equip of EquipList) {
        const { number, data } = GetDefEquipData (Equip.idEquipDef, EquipDefList, EquipTankAnalogList, "Analog")
        let i = 0;
        while (i < number) {
            const IDataBase: IDataBaseAnalogData = {
                id: null,
                name: Equip.name + ":" + data[i].label,
                name1: Equip.name1 + ":" + data[i].label,
                position: 999999,
                tag: Equip.name1 + ":" + data[i].label,
                address: null,
                type: data[i].type,
                idEquip: Equip.id,
                idTank: "",
                indexCreation: i}
            IDataBaseAnalogDatas.push(IDataBase)
            i++;
        }
    }
    return { errorList, updatedList: IDataBaseAnalogDatas }
}
const FindNodeNameById = (idNode: string, nodeDatas: any) => {
    let outlet = "Not Find"
    for ( const nodeData of nodeDatas) {
        if (nodeData.id === idNode) {
            outlet = nodeData.name1
            return outlet
        }
    }
    return outlet
}
const FindNodeInfoById = (idNode: string | null, nodeDatas: any) => {
    let outlet = { idFactory: null, idArea: null, name: null, name1: null }
    for ( const nodeData of nodeDatas) {
        if (nodeData.id === idNode) {
            outlet = nodeData
            return outlet
        }
    }
    return outlet
}

const GetNodeById = (EquipDefId: string, EquipDefList: any) => {
    const DefEquip = ""
    for (const EquipDef of EquipDefList) {
        if (EquipDef.id === EquipDefId) {
            return EquipDef
        }
    }
    return DefEquip
}
const GetDataBaseFonctionFromNodes = async (Nodedatas: any) => {
    let errorList = ""
    const IDataBaseFonctionDatas: IDataBaseFonctionData[] = []
    let equipIdFactory = "";
    let equipIdArea = ""
    let equipIdPlc = ""
    let equipIdEquip = "";
    const idAreaSource = "";
    const idAreaDest = "";
    const { data } = await getDBEquips({page: 1, limit: 1000, name: undefined})
    const orderCreations = data.rows
    // orderCreations = List of equipments
    for (const orderCreation of orderCreations) {
        const Equip: INodeEquipData | "" = GetNodeById (orderCreation.id, Nodedatas)
        if ((Equip === "") || (Equip === null)) {
            errorList = errorList + orderCreation.name + i18n.t(`message.Have Been Deleted in Node`) + "\n"
        }
        else {
            equipIdEquip = Equip.id
            if ((Equip.idPlc === "") || (Equip.idPlc === null)) {
                errorList = errorList + Equip.name + i18n.t(`message.No PLC linked`) + "\n"
            } else {
                equipIdPlc = Equip.idPlc
                const Plc = GetNodeById (equipIdPlc, Nodedatas)
                if ((Plc.idArea === "") || (Plc.idArea === null)) {
                    errorList = errorList + Plc.name + i18n.t(`message.No Area linked`) + "\n"
                }
                else {
                    equipIdArea = Plc.idArea
                    const Area = GetNodeById (equipIdArea, Nodedatas)
                    if ((Area.idFactory === "") || (Area.idFactory === null)) {
                        errorList = errorList + Area.name + i18n.t(`message.No Factory linked`) + "\n"
                    }
                    else {
                        equipIdFactory = Area.idFactory
                        if ((Equip.idEquipDef === "") || (Equip.idEquipDef === null)) {
                            errorList = errorList + Equip.name + i18n.t(`message.No Equipment Definition linked`) + "\n"
                        }
                        else {
                            const DefEquip = GetNodeById (Equip.idEquipDef, Nodedatas)
                            if ((DefEquip.idEquipDefCarto === "") || (DefEquip.idEquipDefCarto === null)) {
                                errorList = errorList + DefEquip.name + i18n.t(`message.No Equipment Cartography linked`) + "\n"
                            }
                            else {
                                const DefEquipCarto: any = GetNodeById (DefEquip.idEquipDefCarto, Nodedatas)
                                let index = 0;
                                while (index < DefEquipCarto.options.length) {
                                    const delayCheck = DefEquipCarto.options[index].delay_check
                                    const freqCheck = DefEquipCarto.options[index].freq_check
                                    const nbLosse = DefEquipCarto.options[index].nb_losse
                                    const maxLosse = DefEquipCarto.options[index].max_losse
                                    const type = DefEquipCarto.options[index].type
                                    let label = DefEquipCarto.options[index].label
                                    const method = DefEquipCarto.options[index].method
                                    let idAreaSource = ''
                                    let idAreaDest = ''
                                    const labelIncludeEquip = label.includes("/*Equip/*")
                                    if (labelIncludeEquip) {
                                        label = label.replace("/*Equip/*", orderCreation.name1);
                                    }


                                    //recherche texte include TankAreaDefEmptying
                                    const labelIncludeEmptying0 = label.includes("/*TankAreaDefEmptying/*")
                                    const labelIncludeEmptying1 = label.includes("/*TankAreaDefEmptying1/*")
                                    const labelIncludeEmptying2 = label.includes("/*TankAreaDefEmptying2/*")
                                    const selectEmptyingTank1 = DefEquipCarto.options[index].aSource === "1" //Area source to be catch
                                    const selectEmptyingTank2 = DefEquipCarto.options[index].aSource === "2" //Area source to be catch
                                    if ( (labelIncludeEmptying0 === true) || (labelIncludeEmptying1 === true) || (selectEmptyingTank1 === true) ) {
                                        if (Equip.options.FillingFromTank.length <= 0) {
                                            errorList = errorList + Equip.name + i18n.t(`message.No Area filling find linked`) + "\n"
                                        } else if ((Equip.options.FillingFromTank[0].label === "") || (Equip.options.FillingFromTank[0].label === null)) {
                                            errorList = errorList + Equip.name + i18n.t(`message.No Area filling linked`) + "\n"
                                        } else {
                                            const DefTankNode: any = GetNodeById (Equip.options.FillingFromTank[0].label, Nodedatas)
                                            if ((DefTankNode === '') || (DefTankNode === null)) {
                                                errorList = errorList + Equip.name + i18n.t(`message.No Area filling linked`) + "\n"
                                            } else {
                                                if (labelIncludeEmptying0) { label = label.replace("/*TankAreaDefEmptying/*", DefTankNode.name1); }
                                                if (labelIncludeEmptying1) { label = label.replace("/*TankAreaDefEmptying1/*", DefTankNode.name1); }
                                                if (selectEmptyingTank1) { idAreaSource = Equip.options.FillingFromTank[0].label}
                                            }
                                        }
                                    }
                                    if ( (labelIncludeEmptying2 === true) || (selectEmptyingTank2 === true) ) {
                                        if (Equip.options.FillingFromTank.length <= 1) {
                                            errorList = errorList + Equip.name + i18n.t(`message.No Area filling2 find linked`) + "\n"
                                        } else if ((Equip.options.FillingFromTank[0].label === "") || (Equip.options.FillingFromTank[0].label === null)) {
                                            errorList = errorList + Equip.name + i18n.t(`message.No Area filling linked`) + "\n"
                                        } else {
                                            const DefTankNode: any = GetNodeById (Equip.options.FillingFromTank[1].label, Nodedatas)
                                            if ((DefTankNode === '') || (DefTankNode === null)) {
                                                errorList = errorList + Equip.name + i18n.t(`message.No Area filling linked`) + "\n"
                                            } else {
                                                if (labelIncludeEmptying2) { label = label.replace("/*TankAreaDefEmptying2/*", DefTankNode.name1); }
                                                if (selectEmptyingTank2) { idAreaSource = Equip.options.FillingFromTank[1].label}
                                            }
                                        }
                                    }


                                    //recherche texte include TankAreaDefFilling or TankAreaDefFilling1
                                    const labelIncludeFilling0 = label.includes("/*TankAreaDefFilling/*")
                                    const labelIncludeFilling1 = label.includes("/*TankAreaDefFilling1/*")
                                    const labelIncludeFilling2 = label.includes("/*TankAreaDefFilling2/*")
                                    const selectFillingTank1 = DefEquipCarto.options[index].aDest === "1" //Area Destination to be catch
                                    const selectFillingTank2 = DefEquipCarto.options[index].aDest === "2" //Area Destination to be catch
                                    if ( (labelIncludeFilling0 === true) || (labelIncludeFilling1 === true) || (selectFillingTank1 === true) ) {
                                        if (Equip.options.EmptyingToTank.length <= 0) {
                                            errorList = errorList + Equip.name + i18n.t(`message.No Area emptying find linked`) + "\n"
                                        } else if ((Equip.options.EmptyingToTank[0].label === "") || (Equip.options.EmptyingToTank[0].label === null)) {
                                            errorList = errorList + Equip.name + i18n.t(`message.No Area filling linked`) + "\n"
                                        } else {
                                            const DefTankNode: any = GetNodeById (Equip.options.EmptyingToTank[0].label, Nodedatas)
                                            if ((DefTankNode === '') || (DefTankNode === null)) {
                                                errorList = errorList + Equip.name + i18n.t(`message.No Area emptying linked`) + "\n"
                                            } else {
                                                if (labelIncludeFilling0) { label = label.replace("/*TankAreaDefFilling/*", DefTankNode.name1); }
                                                if (labelIncludeFilling1) { label = label.replace("/*TankAreaDefFilling1/*", DefTankNode.name1); }
                                                if (selectFillingTank1) { idAreaDest = Equip.options.EmptyingToTank[0].label}
                                            }
                                        }
                                    }
                                    if ( (labelIncludeFilling2 === true) || (selectFillingTank2 === true) ) {
                                        if (Equip.options.EmptyingToTank.length <= 1) {
                                            errorList = errorList + Equip.name + i18n.t(`message.No Area emptying2 find linked`) + "\n"
                                        } else if ((Equip.options.EmptyingToTank[0].label === "") || (Equip.options.EmptyingToTank[0].label === null)) {
                                            errorList = errorList + Equip.name + i18n.t(`message.No Area emptying linked`) + "\n"
                                        } else {
                                            const DefTankNode: any = GetNodeById (Equip.options.EmptyingToTank[1].label, Nodedatas)
                                            if ((DefTankNode === '') || (DefTankNode === null)) {
                                                errorList = errorList + Equip.name + i18n.t(`message.No Area emptying linked`) + "\n"
                                            } else {
                                                if (labelIncludeFilling2) { label = label.replace("/*TankAreaDefFilling2/*", DefTankNode.name1); }
                                                if (selectFillingTank2) { idAreaDest = Equip.options.EmptyingToTank[1].label}
                                            }
                                        }
                                    }
                                    const IDataBase: IDataBaseFonctionData = {
                                        id: Equip.id + '_' + index.toString(),
                                        position: 999999,
                                        name: label, idType: type, idAreaSource: idAreaSource, idAreaDest: idAreaDest,
                                        lastCheckDate: null, alarmLosses: undefined,
                                        freqCheck: freqCheck, freqDelay: delayCheck,
                                        nbLosse: nbLosse, maxLosse: maxLosse,
                                        haveToBeCheck: false, haveToBeCheckActif: false, haveBeenCheck: false, modeAutoCheckActif: true, haveToBeValidated: false, enabled: true,
                                        firstLosses: null, firstLossesPrice: null, currentLosses: null, currentLossesPrice: null,
                                        method: method, picture1: null, picture2: null, idProjectLink: null, idProjectLinkSelected: null, projectPercentRecovery: null,
                                        idEquip: Equip.id, idEquipIndex: index,
                                        measureType: {
                                            id: '',
                                            position: 0,
                                            name: '',
                                            value: 0
                                        },
                                        tankAreaDefEmptying: {
                                            id: '',
                                            idNode: '',
                                            position: 0,
                                            name: '',
                                            name1: '',
                                            dataComment: '',
                                            dataType: '',
                                            options: null
                                        },
                                        tankAreaDefFilling: {
                                            id: '',
                                            idNode: '',
                                            position: 0,
                                            name: '',
                                            name1: '',
                                            dataComment: '',
                                            dataType: '',
                                            options: null
                                        }
                                    }
                                    IDataBaseFonctionDatas.push(IDataBase)
                                    index++;
                                }
                            }
                        }
                    }
                }
            }
        }

    }
    return { errorList, updatedList: IDataBaseFonctionDatas }
}

export const updateDataBaseFromNodes = async (nodeData: any, type: string) => {
    let retour: { errorList: string, updatedList: {} } = { errorList: "", updatedList: { } }
    if (type === "Factory") {
        const { errorList, updatedList } = await GetDataBaseFactoryFromNodes(nodeData)
        if ( errorList !== "") {
            retour = { errorList: errorList, updatedList: updatedList }
            //return { errorList: errorList, updatedList: updatedList }
        } else {
            const data =  await updateDBFactorys (updatedList)
            retour = { errorList: "", updatedList: data }
            //return { errorList: errorList, updatedList: data }
        }
    }
    else if (type === "Computer") {
        const { errorList, updatedList } = await GetDataBaseComputerFromNodes(nodeData)
        if ( errorList !== "") {
            retour = { errorList: errorList, updatedList: updatedList }
            //return { errorList: errorList, updatedList: updatedList }
        } else {
            const data =  await updateDBComputers (updatedList)
            retour = { errorList: "", updatedList: data }
            //return { errorList: errorList, updatedList: data }
        }
    }
    else if (type === "Area") {
        const { errorList, updatedList } = await GetDataBaseAreaFromNodes(nodeData)
        if ( errorList !== "") {
            retour = { errorList: errorList, updatedList: updatedList }
            //return { errorList: errorList, updatedList: updatedList }
        } else {
            const data =  await updateDBAreas (updatedList)
            retour = { errorList: "", updatedList: data }
            //return { errorList: errorList, updatedList: data }
        }
    }
    else if (type === "TankArea") {
        const { errorList, updatedList } = await GetDataBaseTankAreaFromNodes(nodeData)
        if ( errorList !== "") {
            retour = { errorList: errorList, updatedList: updatedList }
            //return { errorList: errorList, updatedList: updatedList }
        } else {
            const data =  await updateDBTankAreas (updatedList)
            retour = { errorList: "", updatedList: data }
            //return { errorList: errorList, updatedList: data }
        }
    }
    else if (type === "TankAreaDefEmptying") {
        const { errorList, updatedList } = await GetDataBaseTankAreaDefEmptyingFromNodes(nodeData)
        if ( errorList !== "") {
            retour = { errorList: errorList, updatedList: updatedList }
            //return { errorList: errorList, updatedList: updatedList }
        } else {
            const data =  await updateDBTankAreaDefEmptyings (updatedList)
            retour = { errorList: "", updatedList: data }
            //return { errorList: errorList, updatedList: data }
        }
    }
    else if (type === "TankAreaDefFilling") {
        const { errorList, updatedList } = await GetDataBaseTankAreaDefFillingFromNodes(nodeData)
        if ( errorList !== "") {
            retour = { errorList: errorList, updatedList: updatedList }
            //return { errorList: errorList, updatedList: updatedList }
        } else {
            const data =  await updateDBTankAreaDefFillings (updatedList)
            retour = { errorList: "", updatedList: data }
            //return { errorList: errorList, updatedList: data }
        }
    }
    else if (type === "Server") {
        const { errorList, updatedList } = await GetDataBaseServerFromNodes(nodeData)
        if ( errorList !== "") {
            retour = { errorList: errorList, updatedList: updatedList }
            //return { errorList: errorList, updatedList: updatedList }
        } else {
            const data =  await updateDBServers (updatedList)
            retour = { errorList: "", updatedList: data }
            //return { errorList: errorList, updatedList: data }
        }
    }
    else if (type === "Plc") {
        const { errorList, updatedList } = await GetDataBasePlcFromNodes(nodeData)
        if ( errorList !== "") {
            retour = { errorList: errorList, updatedList: updatedList }
            //return { errorList: errorList, updatedList: updatedList }
        } else {
            const data =  await updateDBPlcs (updatedList)
            retour = { errorList: "", updatedList: data }
            //return { errorList: errorList, updatedList: data }
        }
    }
    else if (type === "Tank") {
        const { errorList, updatedList } = await GetDataBaseTankFromNodes(nodeData)
        if ( errorList !== "") {
            retour = { errorList: errorList, updatedList: updatedList }
            //return { errorList: errorList, updatedList: updatedList }
        } else {
            const data =  await updateDBTanks (updatedList)
            retour = { errorList: "", updatedList: data }
            //return { errorList: errorList, updatedList: data }
        }
    }
    else if (type === "Equip") {
        const { errorList, updatedList } = await GetDataBaseEquipFromNodes(nodeData)
        if ( errorList !== "") {
            retour = { errorList: errorList, updatedList: updatedList }
            //return { errorList: errorList, updatedList: updatedList }
        } else {
            const data =  await updateDBEquips (updatedList)
            retour = { errorList: "", updatedList: data }
            //return { errorList: errorList, updatedList: data }
        }
    }
    else if (type === "Digital") {
        const { errorList, updatedList } = await GetDataBaseDigitalFromNodes(nodeData)
        if ( errorList !== "") {
            retour = { errorList: errorList, updatedList: updatedList }
            //return { errorList: errorList, updatedList: updatedList }
        } else {
            const data =  await updateDBDigitals (updatedList)
            retour = { errorList: "", updatedList: data }
            //return { errorList: errorList, updatedList: data }
        }
    }
    else if (type === "Analog") {
        const { errorList, updatedList } = await GetDataBaseAnalogFromNodes(nodeData)
        if ( errorList !== "") {
            retour = { errorList: errorList, updatedList: updatedList }
            //return { errorList: errorList, updatedList: updatedList }
        } else {
            const data =  await updateDBAnalogs (updatedList)
            retour = { errorList: "", updatedList: data }
            //return { errorList: errorList, updatedList: data }
        }
    }
    else if (type === "Fonction") {
        const { errorList, updatedList } = await GetDataBaseFonctionFromNodes(nodeData)
        if ( errorList !== "") {
            retour = { errorList: errorList, updatedList: updatedList }
            //return { errorList: errorList, updatedList: updatedList }
        } else {
            const data =  await updateDBFonctions (updatedList)
            retour = { errorList: "", updatedList: data }
            //return { errorList: errorList, updatedList: data }
        }
    }
    return retour
}
