import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/AppConstants'

export default {
  recibirLista: function(){
    fetch('https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json')
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        AppDispatcher.handleAction({
          actionType: AppConstants.AGREGAR_DATOS,
          data: json.movies
        })
      })
  }
}