import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

interface AIErrorLog {
  err: Error;
  vm: any;
  info: string;
  url: string;
}

export interface AIErrorLogState {
  logs: AIErrorLog[];
}

@Module({ dynamic: true, store, name: 'errorLog' })
class ErrorLog extends VuexModule implements AIErrorLogState {
  public logs: AIErrorLog[] = []

  @Mutation
  private ADD_ERROR_LOG(log: AIErrorLog) {
    this.logs.push(log)
  }

  @Mutation
  private CLEAR_ERROR_LOG() {
    this.logs.splice(0)
  }

  @Action
  public AddErrorLog(log: AIErrorLog) {
    this.ADD_ERROR_LOG(log)
  }

  @Action
  public ClearErrorLog() {
    this.CLEAR_ERROR_LOG()
  }
}

export const ErrorLogModule = getModule(ErrorLog)
