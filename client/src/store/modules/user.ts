import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import { login, register, logout, getDBUserInfoWithToken } from '@/api/users'
import { getToken, setToken, removeToken } from '@/utils/cookies'
import router, { resetRouter } from '@/router'
import { PermissionModule } from './permission'
import { TagsViewModule } from './tags-view'
import store from '@/store'

export interface AIUserState {
  token: string;
  username: string;
  email: string;
  idFactory: string;
  roles: string[];
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements AIUserState {
  public token = getToken() || ''
  public username = ''
  public email = ''
  public idFactory = ''
  public roles: string[] = []


  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token
  }
  @Mutation
  private SET_USERNAME(username: string) {
    this.username = username
  }
  @Mutation
  private SET_FACTORY(idFactory: string) {
    this.idFactory = idFactory
  }
  @Mutation
  private SET_ROLES(roles: string[]) {
    this.roles = roles
  }
  @Mutation
  private SET_EMAIL(email: string) {
    this.email = email
  }

  @Action
  public SetLoginToken( userInfo: any) {
    //setToken(userInfo.accessToken)
    setToken(userInfo.Token)
    this.SET_TOKEN(userInfo.accessToken)
  }
  @Action
  public async Login(userInfo: { username: string; password: string}) {
    let username = userInfo.username;
    const password = userInfo.password;
    username = username.trim()
    return await login({ username, password })
  }
  @Action
  public async Register(userInfo: { username: string; email: string; password: string; Confpassword: string}) {
    let username = userInfo.username;
    const email = userInfo.email;
    const password = userInfo.password;
    username = username.trim()
    return await register({ username, email, password })
  }
  @Action
  public ResetToken() {
    removeToken()
    this.SET_TOKEN('')
    this.SET_ROLES([])
  }
  @Action
  public async getDBUserInfo() {
    if (this.token === '') {
      throw Error('getDBUserInfo: token is undefined!')
    }
    const { data } = await getDBUserInfoWithToken( { token : this.token }  )
    if (!data) {
      throw Error('Verification failed, please Login again.')
    }
    const { roles, username, email, idFactory } = data.user
    // roles must be a non-empty array
    if (!roles || roles.length <= 0) {
      throw Error('getDBUserInfo: roles must be a non-null array!')
    }
    if (this.roles !== roles) {
      console.log("**************************Roles", roles)
    }
    this.SET_ROLES(roles)
    this.SET_USERNAME(username)
    this.SET_FACTORY(idFactory)
    this.SET_EMAIL(email)
  }
  @Action
  public async ChangeRoles(role: string) {
    // Dynamically modify permissions
    const token = role + '-token'
    this.SET_TOKEN(token)
    setToken(token)
    await this.getDBUserInfo()
    resetRouter()
    // Generate dynamic accessible routes based on roles
    PermissionModule.GenerateRoutes(this.roles)
    // Add generated routes
    router.addRoutes(PermissionModule.dynamicRoutes)
    // Reset visited views and cached views
    TagsViewModule.delAllViews()
  }

  @Action
  public async LogOut() {
    if (this.token === '') {
      throw Error('LogOut: token is undefined!')
    }
    await logout()
    removeToken()
    resetRouter()

    // Reset visited views and cached views
    TagsViewModule.delAllViews()
    this.SET_TOKEN('')
    this.SET_ROLES([])
  }
}

export const UserModule = getModule(User)
