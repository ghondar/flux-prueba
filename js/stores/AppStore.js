import AppDispatcher from '../dispatcher/AppDispatcher'
import {EventEmitter} from 'events'
import AppConstants from '../constants/AppConstants'
import _ from 'lodash'

let _movies = [{
  id: 1332,
  title: 'Esperando.....'
}]

function loadData(data){
  _movies = data
}

let AppStore = _.extend({}, EventEmitter.prototype, {
  getData: function(){
    return _movies
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
      loadData(action.data)
      break
    default:
      return true
  }
  AppStore.emitChange()
  return true
})

export default AppStore