import React from 'react'
import {RaisedButton, Styles} from 'material-ui'
import AppActions from '../actions/AppActions'

let ThemeManager = new Styles.ThemeManager()

class Boton extends React.Component{

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }

  render(){
    return (
      <RaisedButton label="Listar" onClick={AppActions.recibirLista.bind(this)} secondary={true} style={{marginLeft: 20}} />
    )
  }
}

Boton.childContextTypes = {
  muiTheme: React.PropTypes.object
}

export default Boton