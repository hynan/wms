import * as types from "./mutations_types"

export default {
  [types.SET_SLIDE_FLAG](state){
    state.slideFlag = !state.slideFlag;
  },
  [types.SET_RECEIVING_INFO](state,val){
    state.receivingInfo = val;
  },
  [types.SET_SELECT_LIST](state,val){
    state.selectList = val;
  },
  [types.SET_PUT_IN_STORAGE_INFO](state,val){
    state.putInStorageInfo = val;
  },
  [types.SET_USER](state,useModel){
    state.user = useModel;
  },
  [types.SET_Enum_List](state,val){
    state.enumList = val;
  },
  [types.SET_DO_AJAX_SUCCESS](state,val){
    state.doAjaxSuccess = val;
  },
  [types.SET_INVENTORY_INFO](state,val){
    state.inventoryInfo = val;
  },
  [types.SET_PUT_OUT_STORAGE](state,val){
    state.putOutStorageInfo = val;
  },
  [types.SET_ROLE_INFO](state,val){
    state.roleInfo = val;
  },
    [types.SET_DISPLAY_ITEMS](state,val){
        state.displayItems = val;
    },
}