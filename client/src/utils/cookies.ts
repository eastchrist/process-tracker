
import Cookies from 'js-cookie'
//import Cookies from 'vue-cookie'
//import Vue from 'vue'

// App
const sidebarStatusKey = 'sidebar_status'
export const getSidebarStatus = () => Cookies.get(sidebarStatusKey)
export const setSidebarStatus = (sidebarStatus: string) => Cookies.set(sidebarStatusKey, sidebarStatus)

const languageKey = 'language'
export const getLanguage = () => Cookies.get(languageKey)
export const setLanguage = (language: string) => Cookies.set(languageKey, language)

const sizeKey = 'size'
export const getSize = () => Cookies.get(sizeKey)
export const setSize = (size: string) => Cookies.set(sizeKey, size)

// User
const tokenKey = 'ProcessControl_admin_access_token'
export const getToken = () => Cookies.get(tokenKey)
export const setToken = (token: any) => Cookies.set(tokenKey, token, { expires: 7 })
export const removeToken = () => Cookies.remove(tokenKey)
