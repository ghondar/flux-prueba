import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/AppConstants'

export default {
  recibirLista: function(){
    AppDispatcher.handleAction({
      actionType: AppConstants.AGREGAR_DATOS, 
      loading: true
    })
    let json = {
      actionType: AppConstants.AGREGAR_DATOS
    }
    fetch('https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json')
      .then((response) => {
        return response.json()
      })
      .then((val) => {
        json.data = val.movies
        AppDispatcher.handleAction(json)
      })
      .catch((err) => {
        json.error = true
        AppDispatcher.handleAction(json)
      })
  }
}