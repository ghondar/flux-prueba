import AppDispatcher from '../dispatcher/AppDispatcher'
import {EventEmitter} from 'events'
import AppConstants from '../constants/AppConstants'
import _ from 'lodash'

let _movies = [],
    _loading = false

function loadData(data){
  _movies = data
}

let AppStore = _.extend({}, EventEmitter.prototype, {
  getData: function(){
    return _movies
  },
  getLoading: function(){
    return _loading
  },
  emitChange: function(){
    this.emit('change')
  },
  addChangeListener: function(callback){
    this.on('change', callback)
  },
  removeChangeListener: function(callback){
    this.removeListener('change', callback)
  }
})

AppDispatcher.register(function(payload){
  let action = payload.action
  let text
  switch(action.actionType){
    case AppConstants.AGREGAR_DATOS:
      if(action.loading)
        _loading = true
      else{
        _loading = false
        loadData(action.data)
      }
      debugger
      break
    default:
      return true
  }
  AppStore.emitChange()
  return true
})

export default AppStore