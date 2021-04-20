
import { IDataBaseFactoryData, IDataBaseComputerData, IDataBaseAreaData, IDataBaseTankAreaData, IDataBaseTankAreaDefEmptyingData, IDataBaseTankAreaDefFillingData, IDataBaseServerData, IDataBasePlcData,
         IDataBaseTankData, IDataBaseEquipData, IDataBaseDigitalData, IDataBaseAnalogData, IDataBaseFonctionData } from '@/api/types'
import { INodeFactoryData, INodeComputerData, INodeAreaData, INodeTankAreaData, INodeTankAreaDefEmptyingData, INodeTankAreaDefFillingData, INodeServerData, INodePlcData,
         INodeTankData, INodeEquipData, INodeDefDigitalData, INodeDefAnalogData, INodeDefCartoData } from '@/api/types'
import { INodeTankDefData, INodeEquipDefData } from '@/api/types'
import { ITreeElementsFactory } from '@/api/types'

import { updateDBFactorys } from '@/api/factorys'
import { updateDBComputers } from '@/api/computers'
import { updateDBAreas } from '@/api/areas'
import { updateDBTankAreas } from '@/api/tankAreas'
import { updateDBTankAreaDefEmptyings } from '@/api/tankAreaDefEmptyings'
import { updateDBTankAreaDefFillings } from '@/api/tankAreaDefFillings'
import { updateDBServers } from '@/api/servers'
import { updateDBPlcs } from '@/api/plcs'
import { updateDBTanks } from '@/api/tanks'
import { updateDBEquips } from '@/api/equips'
import { updateDBDigitals } from '@/api/digitals'
import { updateDBAnalogs } from '@/api/analogs'
import { updateDBFonctions } from '@/api/fonctions'

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
                        {label: 'Id Equip Definition : ' + data.idEquip_Def},
                        {label: 'menu : ' + data.Menu},
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
    const IDataBaseFactoryDatas: IDataBaseFactoryData[] = []
    for (const data of datas) {
        if (data.type === "Factory") {
              const IDataBase: IDataBaseFactoryData = {
                                      id: data.id, idNode: data.id, name: data.name, name1: data.name1, position: 999999, langue: data.langue,
                                      address: data.address, currency: data.currency, currencyEuro: data.currencyEuro,
                                      isCartography: data.menuCartography, isOptimisation: data.menuOptimisation, isTraceability: data.menuTraceability
                                   }
              IDataBaseFactoryDatas.push(IDataBase)
        }
    }
    return IDataBaseFactoryDatas
}
const GetDataBaseComputerFromNodes = (datas: INodeComputerData[]) => {
    const IDataBaseComputerDatas: IDataBaseComputerData[] = []
    for (const data of datas) {
        if (data.type === "Computer") {
            const IDataBase: IDataBaseComputerData = {
                id: data.id, idNode: data.id, name: data.name, name1: data.name1, position: 999999,
                idFactory: data.idFactory,
                isServerMain: data.ServerMain, isServerLocal: data.ServerLocal, isComputerLocal: data.ComputerLocal, isComputerCarto: data.ComputerCarto
            }
            IDataBaseComputerDatas.push(IDataBase)
        }
    }
    return IDataBaseComputerDatas
}
const GetDataBaseAreaFromNodes = (datas: INodeAreaData[]) => {
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
    return IDataBaseAreaDatas
}
const GetDataBaseTankAreaFromNodes = (datas: INodeTankAreaData[]) => {
    const IDataBaseTankAreaDatas: IDataBaseTankAreaData[] = []
    for (const data of datas) {
        if (data.type === "TankArea") {
            const IDataBase: IDataBaseTankAreaData = {
                id: data.id, idNode: data.id, name: data.name, name1: data.name1, position: 999999,
                idArea: data.idArea,
            }
            IDataBaseTankAreaDatas.push(IDataBase)
        }
    }
    return IDataBaseTankAreaDatas
}

const GetDataBaseTankAreaDefEmptyingFromNodes = (datas: INodeTankAreaDefEmptyingData[]) => {
    const IDataBaseTankAreaDefEmptyingDatas: IDataBaseTankAreaDefEmptyingData[] = []
    for (const data of datas) {
        if (data.type === "TankAreaDefEmptying") {
            const IDataBase: IDataBaseTankAreaDefEmptyingData = {
                id: data.id, idNode: data.id, name: data.name, name1: data.name1, position: 999999, dataComment:data.dataComment, dataType:data.dataType, options:data.options,
            }
            IDataBaseTankAreaDefEmptyingDatas.push(IDataBase)
        }
    }
    return IDataBaseTankAreaDefEmptyingDatas
}
const GetDataBaseTankAreaDefFillingFromNodes = (datas: INodeTankAreaDefFillingData[]) => {
    const IDataBaseTankAreaDefFillingDatas: IDataBaseTankAreaDefFillingData[] = []
    for (const data of datas) {
        if (data.type === "TankAreaDefFilling") {
            const IDataBase: IDataBaseTankAreaDefFillingData = {
                id: data.id, idNode: data.id, name: data.name, name1: data.name1, position: 999999, dataComment:data.dataComment, dataType:data.dataType, options:data.options,
            }
            IDataBaseTankAreaDefFillingDatas.push(IDataBase)
        }
    }
    return IDataBaseTankAreaDefFillingDatas
}
const GetDataBaseServerFromNodes = (datas: INodeServerData[]) => {
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
    return IDataBaseServerDatas
}
const GetDataBasePlcFromNodes = (datas: INodePlcData[]) => {
    const IDataBasePlcDatas: IDataBasePlcData[] = []
    for (const data of datas) {
        if (data.type === "Plc") {
            const IDataBase: IDataBasePlcData = {
                id: data.id, idNode: data.id, position: 999999, name: data.name, name1: data.name1,
                brand: data.plcBrand, connection: data.plcConnection, slot: data.plcSlot, rack: data.plcRack, ip: data.plcIp,
                idServer: data.idServer, idArea: data.idArea,
            }
            IDataBasePlcDatas.push(IDataBase)
        }
    }
    return IDataBasePlcDatas
}
const GetDataBaseTankFromNodes = (datas: INodeTankData[]) => {
    const IDataBaseTankDatas: IDataBaseTankData[] = []
    for (const data of datas) {
        if (data.type === "Tank") {
            const IDataBase: IDataBaseTankData = {
                id: data.id, idNode: data.id, name: data.name, name1: data.name1, position: 999999,
                idTankArea: data.idTankArea, idTankDef: data.idTankDef
            }
            IDataBaseTankDatas.push(IDataBase)
        }
    }
    return IDataBaseTankDatas
}
const GetDataBaseEquipFromNodes = (datas: INodeEquipData[]) => {
    const IDataBaseEquipDatas: IDataBaseEquipData[] = []
    for (const data of datas) {
        if (data.type === "Equip") {
            const IDataBase: IDataBaseEquipData = {
                id: data.id, idNode: data.id, name: data.name, name1: data.name1, position: 999999, menu: data.menu,
                idPlc: data.idPlc, idEquipDef: data.idEquipDef
            }
            IDataBaseEquipDatas.push(IDataBase)
        }
    }
    return IDataBaseEquipDatas
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
    return IDataBaseDigitalDatas
}
const GetDataBaseAnalogFromNodes = (Nodedatas: INodeDefAnalogData[]) => {
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
    return IDataBaseAnalogDatas
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

const GetDataBaseFonctionFromNodes = (Nodedatas: any) => {
    const IDataBaseFonctionDatas: IDataBaseFonctionData[] = []
    const AreaList: INodeEquipData[] = []
    const PlcList: INodeEquipData[] = []
    const EquipList: INodeEquipData[] = []
    const EquipDefList: INodeEquipDefData[] = []
    const EquipCartoList: any = []
    const TankAreaDefEmptying: any = []
    const TankAreaDefFilling: any = []
    for ( const Nodedata of Nodedatas) {
        if ( Nodedata.type === "Area" ) { AreaList.push(Nodedata) }
        else if ( Nodedata.type === "Plc" ) { PlcList.push(Nodedata) }
        else if ( Nodedata.type === "Equip" ) { EquipList.push(Nodedata) }
        else if ( Nodedata.type === "EquipDef" ) { EquipDefList.push(Nodedata) }
        else if ( Nodedata.type === "EquipDefCarto" ) { EquipCartoList.push(Nodedata) }
        else if ( Nodedata.type === "TankAreaDefEmptying" ) { TankAreaDefEmptying.push(Nodedata) }
        else if ( Nodedata.type === "TankAreaDefFilling" ) { TankAreaDefFilling.push(Nodedata) }
    }
    for ( const Equip of EquipList) {
        const { number, data } = GetDefEquipData (Equip.idEquipDef, EquipDefList, EquipCartoList, "Carto")
        let i = 0;
        while (i < number) {
            let str = data[i].label;
            str = str.replace("/*Equip/*", Equip.name1);
            str = str.replace("/*TankAreaDefEmptying/*", FindNodeNameById(Equip.options.FillingFromTank[0].label, TankAreaDefEmptying));
            str = str.replace("/*TankAreaDefFilling/*", FindNodeNameById(Equip.options.EmptyingToTank[0].label, TankAreaDefFilling));

            // Find information about Factory and Area of the Plc
            let PlcNode = { idArea: null }
            let AreaNode = { idFactory: null }
            PlcNode = FindNodeInfoById(Equip.idPlc, PlcList)
            if ( PlcNode.idArea !== null ) { AreaNode = FindNodeInfoById(PlcNode.idArea, AreaList) }

            const IDataBase: IDataBaseFonctionData = {
                id: 1, position: 999999, name: str, idType: data[i].type,
                idAreaSource: Equip.options.FillingFromTank[0].label, idAreaDest: Equip.options.EmptyingToTank[0].label,
                freqCheck: data[i].freq_check, freqDelay: data[i].delay_check, maxLosse: data[i].max_losse, haveToBeCheck: false, haveBeenCheck: false, modeAutoCheckActif: true,
                picture1: null, picture2: null,
                idProjectLink: null, projectPosition: null, projectPercentRecovery: null,
                idFactory: AreaNode.idFactory, idArea: PlcNode.idArea,
                idPlc: Equip.idPlc, idEquip: Equip.id, idEquipIndex: i
            }
            IDataBaseFonctionDatas.push(IDataBase)
            i++;
        }
    }
    return IDataBaseFonctionDatas
}

export const updateDataBaseFromNodes = async (nodeData: any, orderCreation: any, type: string) => {
    let updatedList = { }
    if (type === "Factory") {
        const nodeList = GetDataBaseFactoryFromNodes(nodeData)
        updatedList = await updateDBFactorys (nodeList)
    }
    else if (type === "Computer") {
        const nodeList = GetDataBaseComputerFromNodes(nodeData)
        updatedList = await updateDBComputers (nodeList)
    }
    else if (type === "Area") {
        const nodeList = GetDataBaseAreaFromNodes(nodeData)
        updatedList = await updateDBAreas (nodeList)
    }
    else if (type === "TankArea") {
        const nodeList = GetDataBaseTankAreaFromNodes(nodeData)
        updatedList = await updateDBTankAreas (nodeList)
    }
    else if (type === "TankAreaDefEmptying") {
        const nodeList = GetDataBaseTankAreaDefEmptyingFromNodes(nodeData)
        updatedList = await updateDBTankAreaDefEmptyings (nodeList)
    }
    else if (type === "TankAreaDefFilling") {
        const nodeList = GetDataBaseTankAreaDefFillingFromNodes(nodeData)
        updatedList = await updateDBTankAreaDefFillings (nodeList)
    }
    else if (type === "Server") {
        const nodeList = GetDataBaseServerFromNodes(nodeData)
        updatedList = await updateDBServers (nodeList)
    }
    else if (type === "Plc") {
        const nodeList = GetDataBasePlcFromNodes(nodeData)
        updatedList = await updateDBPlcs (nodeList)
    }
    else if (type === "Tank") {
        const nodeList = GetDataBaseTankFromNodes(nodeData)
        updatedList = await updateDBTanks (nodeList)
    }
    else if (type === "Equip") {
        const nodeList = GetDataBaseEquipFromNodes(nodeData)
        updatedList = await updateDBEquips (nodeList)
    }
    else if (type === "Digital") {
        const nodeList = GetDataBaseDigitalFromNodes(nodeData)
        updatedList = await updateDBDigitals (nodeList)
    }
    else if (type === "Analog") {
        const nodeList = GetDataBaseAnalogFromNodes(nodeData)
        updatedList = await updateDBAnalogs (nodeList)
    }
    else if (type === "Fonction") {
        const nodeList = GetDataBaseFonctionFromNodes(nodeData)
        updatedList = await updateDBFonctions (nodeList)
    }
    return updatedList
}
