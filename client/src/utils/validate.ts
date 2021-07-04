import i18n from "@/i18n";

export const validateUsernameLength = (rule: any, value: string, callback: Function) => {
  if (value.length < 3) {
    const message: string = i18n.t('message.40001') + ''
    callback(new Error( message ))
  } else {
    callback()
  }
}

export const validateEmailLength = (rule: any, value: string, callback: Function) => {
  if (value.length < 5) {
    const message: string = i18n.t('message.40001') + ''
    callback(new Error( message ))
  } else {
    callback()
  }
}

export const validatePasswordLength = (rule: any, value: string, callback: Function) => {
  if (value.length < 5) {
    const message: string = i18n.t('message.40003') + ''
    callback(new Error( message ))
  } else {
    callback()
  }
}
export const validateConfPasswordLength = (rule: any, value: string, callback: Function) => {
  if (value.length < 5) {
    const message: string = i18n.t('message.40004') + ''
    callback(new Error( message ))
  } else {
    callback()
  }
}

export const validateEmail = (rule: any, value: any, callback: any) => {
  const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  const test = reg.test(value)
  if (!test) {
    const message: string = i18n.t('tables.generique.rules.rule3') + ''
    callback(new Error( message ))
  } else {
    callback()
  }
}

export const validateDecimalValue = (rule: any, value: any, callback: any) => {
  const reg = /^\d+(\.\d{1,2})?$/
  const test = reg.test(value)
  if (!test) {
    const message: string = i18n.t('tables.generique.rules.rule4') + ''
    callback(new Error( message ))
  } else {
    callback()
  }
}


export const validateNumber1To5 = (rule: any, value: any, callback: any) => {
  if (value < 1 || value > 5) {
    const message: string = i18n.t('tables.generique.rules.rule1') + ''
    callback(new Error( message ))
  } else {
    callback()
  }
}
export const validateNumber2To99 = (rule: any, value: any, callback: any) => {
  if (value < 2 || value > 99) {
    const message: string = i18n.t('tables.generique.rules.rule2') + ''
    callback(new Error( message ))
  } else {
    callback()
  }
}

export const isExternal = (path: string) => /^(https?:|mailto:|tel:)/.test(path)
export const isArray = (arg: any) => {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

export const isValidURL = (url: string) => {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}
