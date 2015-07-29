import React from 'react'
import AppActions from '../actions/AppActions'

export default class Boton extends React.Component{
  render(){
    return (
      <button onClick={AppActions.recibirLista.bind(this)}>Listar</button>
    )
  }
}