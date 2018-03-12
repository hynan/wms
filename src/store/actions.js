import * as types from './mutations_types'
import Vue from 'vue'

export const getEnumList = ({commit}) => {
  return new Promise((resolve,reject)=>{
      Vue.http.get('/ys-web-wms/common/enumList').then(function(res){
      if(res.data.state==200){
        commit(types.SET_Enum_List,res.data.data);
        resolve();
      }
    });
  });
};
export const getSelectList = ({commit}) => {
  return new Promise((resolve,reject)=>{
      Vue.http.get('/ys-web-wms/common/getSelectList').then(function(res){
      if(res.data.state==200){
        commit(types.SET_SELECT_LIST,res.data.data);
        resolve();
      }
    });
  });
};
export const getDisplayItems = ({commit}) => {
    return new Promise((resolve,reject)=>{
        Vue.http.get('/ys-web-wms/field/getFields').then(function(res){
            if(res.data.state==200){
                commit(types.SET_DISPLAY_ITEMS,res.data.data);
                resolve();
            }
        });
    });
};

