

export interface IDataBaseUserData {
  id: number
  username: string;
  email: string;
  position: number;
  idFactory: string;
  isAdmin: boolean;
  isManager: boolean;
  isOperator: boolean;
  isVisitor: boolean;
  isActif: boolean;
  //token: string;
  //roles: string[];
}
export interface IDataBaseFactoryData {
  id: string;
  idNode: string;
  name: string;
  name1: string;
  langue: string;
  address: string;
  currency: string;
  currencyEuro: string;
  position: number;
  isCartography: boolean;
  isOptimisation: boolean;
  isTraceability: boolean;
}
export interface IDataBaseComputerData {
  id: string;
  idNode: string;
  name: string;
  name1: string;
  position: number;
  isServerMain: boolean;
  isServerLocal: boolean;
  isComputerLocal: boolean;
  isComputerCarto: boolean;
  idFactory: string;
}
export interface IDataBaseAreaData {
  id: string;
  idNode: string;
  name: string;
  name1: string;
  position: number;
  menu: string;
  idFactory: string;
}

export interface IDataBaseTankAreaData {
  id: string;
  idNode: string;
  position: number;
  name: string;
  name1: string;
  idArea: string;
}
export interface IDataBaseTankAreaDefEmptyingData {
  id: string;
  idNode: string;
  position: number;
  name: string;
  name1: string;
  dataComment: string;
  dataType: string;
  options: any;
}
export interface IDataBaseTankAreaDefFillingData {
  id: string;
  idNode: string;
  position: number;
  name: string;
  name1: string;
  dataComment: string;
  dataType: string;
  options: any;
}
export interface IDataBaseServerData {
  id: string;
  idNode: string;
  position: number;
  name: string;
  serverType: string;
}
export interface IDataBasePlcData {
  id: string;
  idNode: string;
  position: number;
  name: string;
  name1: string;
  brand: string;
  connection: string;
  slot: string;
  rack: string;
  ip: string;
  idServer: string;
  idArea: string;
}
export interface IDataBaseEquipData {
  id: string;
  idNode: string;
  position: number;
  name: string;
  name1: string;
  menu: string;
  idPlc: string;
  idEquipDef: string;
}
export interface IDataBaseTankData {
  id: string;
  idNode: string;
  name: string;
  name1: string;
  position: number;
  idTankArea: string;
  idTankDef: string;
}
export interface IDataBaseDigitalData {
  id: string | null;
  name: string;
  name1: string;
  tag: string;
  address: string | null;
  position: number;
  idEquip: string;
  idTank: string;
  indexCreation: number;
}
export interface IDataBaseAnalogData {
  id: string | null;
  name: string;
  name1: string;
  tag: string;
  address: string | null;
  type: string;
  position: number;
  idEquip: string;
  idTank: string;
  indexCreation: number;
}
export interface IDataBaseFonctionData {
  id: number;
  position: number;
  name: string;
  idType: number;
  idAreaSource: string;
  idAreaDest: string;
  freqCheck: number;
  freqDelay: number;
  maxLosse: number;
  haveToBeCheck: boolean;
  haveBeenCheck: boolean;
  modeAutoCheckActif: boolean;
  picture1: string | null;
  picture2: string | null;
  idProjectLink: number | null;
  projectPosition: number | null;
  projectPercentRecovery: number | null;
  idFactory: string | null;
  idArea: string | null;
  idPlc: string | null;
  idEquip: string | null;
  idEquipIndex: number | null;
}
export interface IDataBaseMeasureData {
  id: string;
  position: number;
  name: string;
  comment: string;
  type: string;
  losses: number;
  ts: number;
  measure1: number;
  ts1: number;
  measure2: number;
  ts2: number;
  measure3: number;
  ts3: number;
  idProduct: string;
  idFonction: string;
}
export interface IDataBaseDataProjectData {
  id: number;
  position: number;
  comment: string;
  creationDate: date;
  dueDate: date;
  idProject: number;
  status: number;
}
export interface IDataBaseProjectData {
  id: number;
  position: number;
  name: string;
  comment: string;
  type: string;
  idOwner: string;
  priority: number;
  difficulty: number;
  idArea: string;
  materialPrice: number;
}
export interface IDataBaseProductData {
  id: string;
  name: string;
  totalSolid: number;
  price: number;
  position: number;
  idFactory: string;
}
export interface IDataBaseMeasureTypeData {
  id: string;
  position: number;
  name: string;
  value: number;
}

export interface INodeFactoryData {
  id: string;
  type: string;
  name: string;
  name1: string;
  langue: string;
  address: string;
  currency: string;
  currencyEuro: string;
  position: number;
  menuCartography: boolean;
  menuOptimisation: boolean;
  menuTraceability: boolean;
}
export interface INodeComputerData {
  id: string;
  type: string;
  name: string;
  name1: string;
  ServerMain: boolean;
  ServerLocal: boolean;
  ComputerLocal: boolean;
  ComputerCarto: boolean;
  idFactory: string;
}
export interface INodeAreaData {
  id: string;
  type: string;
  name: string;
  name1: string;
  comment: number;
  menu: string;
  idFactory: string;
}
export interface INodeTankAreaData {
  id: string;
  type: string;
  name: string;
  name1: string;
  idArea: string;
}
export interface INodeTankAreaDefEmptyingData {
  id: string;
  type: string;
  name: string;
  name1: string;
  dataComment: string;
  dataType: string;
  options: any;
}
export interface INodeTankAreaDefFillingData {
  id: string;
  type: string;
  name: string;
  name1: string;
  dataComment: string;
  dataType: string;
  options: any;
}
export interface INodeServerData {
  id: string;
  type: string;
  name: string;
  ServerType: string;
}
export interface INodePlcData {
  id: string;
  type: string;
  name: string;
  name1: string;
  plcBrand: string;
  plcConnection: string;
  plcSlot: string;
  plcRack: string;
  plcIp: string;
  idServer: string;
  idArea: string;
}
export interface INodeEquipData {
  id: string;
  type: string;
  name: string;
  name1: string;
  menu: string;
  idPlc: string;
  idEquipDef: string;
  options: {
    EquipCaract: [{
        label: string,
        valeur: string,
        type: string,
        unit: string }],
    FillingFromTank: [{
        label: string }],
    FillingFromEquip: [{
        label: string }],
    EmptyingToTank: [{
        label: string }],
    EmptyingToEquip: [{
        label: string }]
  };
}
export interface INodeTankData {
  id: string;
  type: string;
  name: string;
  name1: string;
  idTankArea: string;
  idTankDef: string;
}
export interface INodeTankDefData {
  id: string | null;
  type: string;
  name: string;
  name1: string;
  idTankDefDigital: string;
  idTankDefAnalog: string;
  idTankDefGAlarms: string;
}
export interface INodeEquipDefData {
  id: string | null;
  idType: number;
  name: string;
  name1: string;
  idEquipDefDigital: string;
  idEquipDefAnalog: string;
  idEquipDefGAlarms: string;
  idEquipDefCarto: string;
  idEquipDefEventList: string;
}
export interface INodeDefDigitalData {
  id: string;
  type: string;
  name: string;
  name1: string;
  options: any;

}
export interface INodeDefAnalogData {
  id: string;
  type: string;
  name: string;
  name1: string;
  options: any;
}
export interface INodeDefCartoData {
  id: string;
  type: string;
  name: string;
  name1: string;
  options: any;
}

export interface ITreeElementsFactory {
  label: string;
  children: any;
}


