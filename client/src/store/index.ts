import Vue from 'vue'
import Vuex from 'vuex'

import { AIAppState } from './modules/app'
import { AIUserState } from './modules/user'
import { AITagsViewState } from './modules/tags-view'
import { AIErrorLogState } from './modules/error-log'
import { AIPermissionState } from './modules/permission'
import { AISettingsState } from './modules/settings'

Vue.use(Vuex)

export interface AIRootState {
  app: AIAppState;
  user: AIUserState;
  tagsView: AITagsViewState;
  errorLog: AIErrorLogState;
  permission: AIPermissionState;
  settings: AISettingsState;
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<AIRootState>({})
