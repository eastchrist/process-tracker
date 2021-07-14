import i18n from "@/i18n";
import variables from "@/styles/_variables.scss";

export interface AIUserState {
  token: string
  username: string
  email: string
  idFactory: string
  factoryName: string
  roles: string[]
}

//interfaces pour tables UI et table normal
export interface ITableDataUiDesignFont {
  "family": string,
  "color": string,
  "size": string
}
export interface ITableDataUiDesignColumn {
  "textAlign": string,
  "width": string,
  "padding": 5,
  "font": ITableDataUiDesignFont
}

//
interface IFont_TableData {
  "family": string,
  "color": string,
  "size": string
}
interface IBordure_TableData {
  length: number,
  color: string
}
interface IDesign_TableData {
  "background-color": string
  "textAlign": string
  "padding": string,
  width: string,
  "font": IFont_TableData,
}
interface ITitle_TableData {
  text: string
  height: string
  "background-color": string
  "textAlign": string
  "padding": string,
  "font": IFont_TableData,
  "bordure": IBordure_TableData,
}
interface IHeader_TableData {
  text: string[]
  height: string
  "background-color": string
  "textAlign": string
  "padding": string,
  "font": IFont_TableData,
  "bordure": IBordure_TableData,
}
interface IHeaderSub_TableData {
  text: string[]
  height: string
  "background-color": string
  "textAlign": string
  "padding": string,
  "font": IFont_TableData,
  "bordure": IBordure_TableData,
}

interface IColumns_TableData {
  text: string[],
  height: string
  design: IDesign_TableData[]
  "bordure": IBordure_TableData,
}
interface IColumns_TableDataWithData {
  height: string
  enabled: boolean[],
  design: IDesign_TableData[]
  "bordure": IBordure_TableData,
}
interface IColumns_TableDataWithoutData {
  height: string
  design: IDesign_TableData[]
  "bordure": IBordure_TableData,
}
//Tables Normal
export interface ITableDataFactoryMain {
  title: ITitle_TableData
  header: IHeader_TableData
  columns: IColumns_TableData,
  fonctionFirstAnnual: {
    losses: number | string
    price: number | string
    priceEuro: number | string
  }
  fonctionCurrentAnnual: {
    losses: number | string
    price: number | string
    priceEuro: number | string
  }
  fonctionSavingAnnual: {
    losses: number | string
    price: number | string
    priceEuro: number | string
  }
  fonctionProjectRecoveryRequestAnnual: {
    losses: number | string
    price: number | string
    priceEuro: number | string
  }
}
export interface ITableDataFactoryInfo {
  title: ITitle_TableData
  header: IHeader_TableData
  columns: IColumns_TableData,

  fonctionNb: number | string
  fonctionInitAnnualPrice: number | string
  fonctionCurrentAnnualPrice: number | string
  fonctionProjectRecoveryRequestAnnual: number | string
  fonctionProjectRecoveryRealAnnual: number | string

  fonctionDone: number | string
  fonctionNotDone: number | string
  fonctionInAlarm: number | string
  fonctionNotLink: number | string
  fonctionNotLinkInitialLosse: number | string
}
export interface ITableDataLevelDifficultys {
    veryHard: {
      number: number | string
      projectFunctionLinkedFirstAnnualLosses: number | string
      projectFunctionLinkedFirstAnnualPrice: number | string
      projectFunctionLinkedCurrentAnnualLosses: number | string
      projectFunctionLinkedCurrentAnnualPrice: number | string
      projectFunctionLinkedRecoveryAnnualLosses: number | string
      projectFunctionLinkedRecoveryAnnualPrice: number | string
    }
    hard: {
      number: number | string
      projectFunctionLinkedFirstAnnualLosses: number | string
      projectFunctionLinkedFirstAnnualPrice: number | string
      projectFunctionLinkedCurrentAnnualLosses: number | string
      projectFunctionLinkedCurrentAnnualPrice: number | string
      projectFunctionLinkedRecoveryAnnualLosses: number | string
      projectFunctionLinkedRecoveryAnnualPrice: number | string
    }
    difficile: {
      number: number | string
      projectFunctionLinkedFirstAnnualLosses: number | string
      projectFunctionLinkedFirstAnnualPrice: number | string
      projectFunctionLinkedCurrentAnnualLosses: number | string
      projectFunctionLinkedCurrentAnnualPrice: number | string
      projectFunctionLinkedRecoveryAnnualLosses: number | string
      projectFunctionLinkedRecoveryAnnualPrice: number | string
    }
    normal: {
      number: number | string
      projectFunctionLinkedFirstAnnualLosses: number | string
      projectFunctionLinkedFirstAnnualPrice: number | string
      projectFunctionLinkedCurrentAnnualLosses: number | string
      projectFunctionLinkedCurrentAnnualPrice: number | string
      projectFunctionLinkedRecoveryAnnualLosses: number | string
      projectFunctionLinkedRecoveryAnnualPrice: number | string
    }
    easy: {
      number: number | string
      projectFunctionLinkedFirstAnnualLosses: number | string
      projectFunctionLinkedFirstAnnualPrice: number | string
      projectFunctionLinkedCurrentAnnualLosses: number | string
      projectFunctionLinkedCurrentAnnualPrice: number | string
      projectFunctionLinkedRecoveryAnnualLosses: number | string
      projectFunctionLinkedRecoveryAnnualPrice: number | string
    }
}
export interface IPriorityDifficulty {
  veryHigh: ITableDataLevelDifficultys
  high: ITableDataLevelDifficultys
  normal: ITableDataLevelDifficultys
  low: ITableDataLevelDifficultys
  veryLow: ITableDataLevelDifficultys
}
export interface ITableProjectPriorityDifficulty {
  title: ITitle_TableData
  header: IHeader_TableData
  headerSub: IHeaderSub_TableData
  columns: IColumns_TableData,

  veryHigh: ITableDataLevelDifficultys
  high: ITableDataLevelDifficultys
  normal: ITableDataLevelDifficultys
  low: ITableDataLevelDifficultys
  veryLow: ITableDataLevelDifficultys
}
export interface IFonctionByAreas {
  area: string
  name: string
}
export interface ITableDataUiDesignedWithData {
  title: ITitle_TableData
  header: IHeader_TableData
  columns: IColumns_TableDataWithData,
  data: []
}
export interface ITableDataUiDesignedWithoutData {
  title: ITitle_TableData
  header: IHeader_TableData
  columns: IColumns_TableDataWithoutData,
}
export interface ITableDataFonctionByAreasOld {
  title: ITitle_TableData
  header: IHeader_TableData
  columns: IColumns_TableData,
  //data: []
}

export interface IChart_oneSerie {
  Value: number[]
  itemStyle: { }
}
export interface IChart_TextStyle {
  fontSize: number,
  color: string,
  fontWeight: string,
  fontFamily: string,
  fontStyle: string
}
export interface IChart_Title {
  text: string
  show: boolean
  textStyle: IChart_TextStyle
  left: string,
  top: string,
  titleSub: {
      text: string
      textStyle: IChart_TextStyle
  }
}
export interface IChart_Legend {
  show: boolean
  orient: string,
  top: string,
  left: string | undefined,
  right: string,
  align: string,
  itemGap: number,
  itemWidth: number,
  itemHeight: number,
  textStyle: IChart_TextStyle
}
export interface IChart_Tooltip {
  trigger: string,
  backgroundColor: string,
  textStyle: IChart_TextStyle,
  borderWidth: number ,
  borderColor: string | undefined,
  formatter: string | undefined,
  axisPointer: {} | undefined,
}
export interface IChart_Toolbox {
  right: string,
  bottom: string,
}

export interface IBarChart {
  dimensions: {
    width: string,
    height: string,
  },
  title: IChart_Title,
  legend: IChart_Legend,
  tooltip: IChart_Tooltip,
  toolbox: IChart_Toolbox,
  grid: {
    left: string
    right: string
    bottom: string
    width: string
    height: string
  }
  serieLabelShow: boolean
  yAxisSplitNumber: number
  xAxisRotation: number
  serieStack: string // 'Total'= On Top
  xAxisText: string[]
  serieName: string[]
  series: IChart_oneSerie[]
}
export interface IMixedChart {
  dimensions: {
    width: string,
    height: string,
  },
  title: IChart_Title,
  legend: IChart_Legend,
  tooltip: IChart_Tooltip,
  toolbox: IChart_Toolbox,
  grid: {
    left: string
    right: string
    bottom: string
    width: string
    height: string
  }
  serieLabelShow: boolean
  yAxisSplitNumber: number
  xAxisRotation: number
  serieStack: string // 'Total'= On Top
  xAxisText: string[]
  serieName: string[]
  series: IChart_oneSerie[ ]
}
export interface IPieChart {
  dimensions: {
    width: string,
    height: string,
  },
  title: IChart_Title,
  legend: IChart_Legend,
  tooltip: IChart_Tooltip,
  toolbox: IChart_Toolbox,
  series: {
    radius: any,
    center: any,
    legendHoverLink: boolean,
    avoidLabelOverlap: boolean,
    stillShowZeroSum: boolean,
    animationEasing: string,
    animationDuration: number
    label: {
      show: boolean,
      position: string,
      textStyle: IChart_TextStyle
      //fontWeight: string,
      //fontFamily: string,
      //fontSize: number,
      overflow: string,
    },
  },
  serie1Name: string[]
  serie1Value: number[]
  serie1Color: string[]
}

export interface IDataBaseTraceabilityData {
  firstAnnualLosses: number
  firstAnnualPrice: number
  currentAnnualLosses: number
  currentAnnualPrice: number
  areas: []
}
export interface IDataBaseUserData {
  id: number
  username: string
  email: string
  position: number
  idFactory: string
  isAdmin: boolean
  isManager: boolean
  isOperator: boolean
  isVisitor: boolean
  isActif: boolean
  //token: string;
  //roles: string[];
}
export interface IDataBaseFactoryData {
  id: string
  idNode: string
  name: string
  name1: string
  langue: string
  address: string
  logoClient: string
  logoContractor: string
  currency: string
  currencyEuro: string
  position: number
  isCartography: boolean
  isOptimisation: boolean
  isTraceability: boolean
}
export interface IDataBaseComputerData {
  id: string
  idNode: string
  name: string
  name1: string
  position: number
  isServerMain: boolean
  isServerLocal: boolean
  isComputerLocal: boolean
  isComputerCarto: boolean
  idFactory: string
}
export interface IDataBaseAreaData {
  id: string
  idNode: string
  name: string
  name1: string
  position: number
  menu: string
  idFactory: string
}
export interface IDataBaseTankAreaData {
  id: string
  idNode: string
  position: number
  name: string
  name1: string
  idArea: string
}
export interface IDataBaseTankAreaDefEmptyingData {
  id: string
  idNode: string
  position: number
  name: string
  name1: string
  dataComment: string
  dataType: string
  options: any
}
export interface IDataBaseTankAreaDefFillingData {
  id: string
  idNode: string
  position: number
  name: string
  name1: string
  dataComment: string
  dataType: string
  options: any
}
export interface IDataBaseServerData {
  id: string
  idNode: string
  position: number
  name: string
  serverType: string
}
export interface IDataBasePlcData {
  id: string
  idNode: string
  position: number
  name: string
  name1: string
  brand: string
  connection: string
  slot: string
  rack: string
  ip: string
  idServer: string
  idArea: string
}
export interface IDataBaseEquipData {
  id: string
  idNode: string
  position: number
  name: string
  name1: string
  menu: string
  idPlc: string
  idEquipDef: string
}
export interface IDataBaseTankData {
  id: string
  idNode: string
  name: string
  name1: string
  position: number
  idTankArea: string
  idTankDef: string
}
export interface IDataBaseDigitalData {
  id: string | null
  name: string
  name1: string
  tag: string
  address: string | null
  position: number
  idEquip: string
  idTank: string
  indexCreation: number
}
export interface IDataBaseAnalogData {
  id: string | null
  name: string
  name1: string
  tag: string
  address: string | null
  type: string
  position: number
  idEquip: string
  idTank: string
  indexCreation: number
}
export interface IDataBaseFonctionMeasureData {
  lastCheckDate: Date
  haveBeenCheck: boolean
  haveToBeValidated: boolean
  alarmLosses: boolean
  Losses: number
  LossesPrice: number
  LossesAnnualLosses: number
  LossesAnnualPrice: number
  idEquip: string | null
  idEquipIndex: number | null
}
export interface IDataBaseFonctionData {
  id: string
  position: number
  name: string
  idType: number
  idAreaSource: string
  idAreaDest: string

  lastCheckDate: Date | null
  firstLosses: number | null
  firstLossesPrice: number | null
  currentLosses: number | null
  currentLossesPrice: number | null

  freqCheck: number
  freqDelay: number
  nbLosse: number
  maxLosse: number

  alarmLosses: boolean | undefined
  haveToBeCheck: boolean //Force by the manager
  haveToBeCheckActif: boolean  //Feed back for force manager or Date

  haveBeenCheck: boolean
  haveToBeValidated: boolean | undefined // validated by the manager
  modeAutoCheckActif: boolean
  enabled: boolean

  method: string
  picture1: string | null
  picture2: string | null
  idProjectLink: number | null
  idProjectLinkSelected: boolean | null
  projectPercentRecovery: number | string | null //number | null
  idEquip: string | null
  idEquipIndex: number | null
  measureType: IDataBaseMeasureTypeData | undefined
  tankAreaDefEmptying: IDataBaseTankAreaDefEmptyingData | undefined
  tankAreaDefFilling: IDataBaseTankAreaDefFillingData | undefined
}
export interface IDataBaseMeasureData {
  id: number
  position: number
  comment: string
  idType: number
  idTankSource: string
  idTankDest: string
  idProduct: string
  losses: number | string
  ts: number | string
  measure1: number | string
  ts1: number | string
  measure2: number | string
  ts2: number | string
  measure3: number | string
  ts3: number | string
  idFonction: string | null
}
export interface IDataBaseProjectActionData {
  id: number
  position: number
  comment: string
  creationDate: date
  dueDate: date
  idStatus: number | string | undefined  //Copy and past from project
  idProject: number
}
export interface IDataBaseProjectData {
  id: number
  position: number | undefined
  name: string | undefined
  comment: string | undefined
  idType: number | string | undefined
  idStatus: number | string | undefined
  priority: number | undefined
  difficulty: number | undefined
  idArea: string | undefined
  payback: number | string | undefined
  hoursPrice: number | string | undefined
  materialPrice: number | string | undefined
  electricalPrice: number | string | undefined
  lastCreationDate: date
  lastDueDate: date
}
export interface IDataBaseProjectTypeData {
  id: string
  position: number
  name: string
  value: number
}
export interface IDataBaseProjectStatusData {
  id: string
  position: number
  name: string
  value: number
}
export interface IDataBaseProductData {
  id: number
  name: string
  totalSolid: number
  price: number
  position: number
  idFactory: string
}
export interface IDataBaseMeasureTypeData {
  id: string
  position: number
  name: string
  value: number
}

export interface INodeFactoryData {
  id: string
  type: string
  name: string
  name1: string
  langue: string
  address: string
  logoClient: string
  logoContractor: string
  currency: string
  currencyEuro: string
  position: number
  menuCartography: boolean
  menuOptimisation: boolean
  menuTraceability: boolean
}
export interface INodeComputerData {
  id: string
  type: string
  name: string
  name1: string
  ServerMain: boolean
  ServerLocal: boolean
  ComputerLocal: boolean
  ComputerCarto: boolean
  idFactory: string
}
export interface INodeAreaData {
  id: string
  type: string
  name: string
  name1: string
  comment: number
  menu: string
  idFactory: string
}
export interface INodeTankAreaData {
  id: string
  type: string
  name: string
  name1: string
  idArea: string
}
export interface INodeTankAreaDefEmptyingData {
  id: string
  type: string
  name: string
  name1: string
  dataComment: string
  dataType: string
  options: any
}
export interface INodeTankAreaDefFillingData {
  id: string
  type: string
  name: string
  name1: string
  dataComment: string
  dataType: string
  options: any
}
export interface INodeServerData {
  id: string
  type: string
  name: string
  ServerType: string
}
export interface INodePlcData {
  id: string
  type: string
  name: string
  name1: string
  plcBrand: string
  plcConnection: string
  plcSlot: string
  plcRack: string
  plcIp: string
  idServer: string
  idArea: string
}
export interface INodeEmptyingToTank { label: string }
export interface INodeFillingFromTank { label: string }
export interface INodeEmptyingToEquip { label: string }
export interface INodeFillingFromEquip { label: string }
export interface INodeEquipCaract {
  label: string
  valeur: string
  type: string
  unit: string
}
export interface INodeEquipData {
  id: string
  type: string
  name: string
  name1: string
  menu: string
  idPlc: string
  idEquipDef: string
  options: {
    EquipCaract: INodeEquipCaract[]
    FillingFromTank: INodeFillingFromTank[]
    FillingFromEquip: INodeFillingFromEquip[]
    EmptyingToTank: INodeEmptyingToTank[]
    EmptyingToEquip: INodeEmptyingFromEquip[]
  }
}
export interface INodeTankData {
  id: string
  type: string
  name: string
  name1: string
  idTankArea: string
  idTankDef: string
}
export interface INodeTankDefData {
  id: string | null
  type: string
  name: string
  name1: string
  idTankDefDigital: string
  idTankDefAnalog: string
  idTankDefGAlarms: string
}
export interface INodeEquipDefData {
  id: string | null
  idType: number
  name: string
  name1: string
  idEquipDefDigital: string
  idEquipDefAnalog: string
  idEquipDefGAlarms: string
  idEquipDefCarto: string
  idEquipDefEventList: string
}
export interface INodeDefDigitalData {
  id: string
  type: string
  name: string
  name1: string
  options: any

}
export interface INodeDefAnalogData {
  id: string
  type: string
  name: string
  name1: string
  options: any
}
export interface INodeDefCartoData {
  id: string
  type: string
  name: string
  name1: string
  options: any
}

export interface ITreeElementsFactory {
  label: string
  children: any
}


