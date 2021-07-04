import i18n from "@/i18n";
import {IDataBaseFactoryData} from "@/api/types";
import {validateEmail, validateUsernameLength, validateEmailLength, validatePasswordLength, validateConfPasswordLength} from "@/utils/validate";

export const defaultContactUsRules = {
    username: [{ required: true, message: i18n.t('views.contactUs.rules.rule1'), trigger: 'blur' }],
    email: [{ required: true, message: i18n.t('views.contactUs.rules.rule2'), trigger: 'blur' }, { validator: validateEmail, trigger: 'blur' }],
    subject: [{ required: true, message: i18n.t('views.contactUs.rules.rule3'), trigger: 'blur' }],
    message: [{ required: true, message: i18n.t('views.contactUs.rules.rule4'), trigger: 'blur' }],
}

export const defaultLoginRules = {
    username: [{ required: true, message: i18n.t('views.login.rules.rule1'), trigger: 'blur' }],
    password: [{ required: true, message: i18n.t('views.login.rules.rule2'), trigger: 'blur' }],
}

export const defaultRegisterRules = {
    username: [{ required: true, message: i18n.t('views.register.rules.rule1'), trigger: 'blur' }, { validator: validateUsernameLength, trigger: 'blur' }],
    email: [{ required: true, message: i18n.t('views.register.rules.rule2'), trigger: 'blur' }, { validator: validateEmail, trigger: 'blur' }, { validator: validateEmailLength, trigger: 'blur' }],
    password: [{ required: true, message: i18n.t('views.register.rules.rule3'), trigger: 'blur' }, { validator: validatePasswordLength, trigger: 'blur' }],
    confPassword: [{ required: true, message: i18n.t('views.register.rules.rule4'), trigger: 'blur' }, { validator: validateConfPasswordLength, trigger: 'blur' }],
}


export const defaultContactUsData = {
    username: "",
    email: "",
    subject: "",
    message: "",
}

export const defaultLoginData = {
    username: "",
    password: "",
}

export const defaultRegisterData = {
    username: "",
    email: "",
    password: "",
    confPassword: "",
}
