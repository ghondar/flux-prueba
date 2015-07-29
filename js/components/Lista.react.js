import React from 'react'
import AppActions from '../actions/AppActions'

export default class Lista extends React.Component{

  render(){
    if(this.props.loading)
      return (
        <h1>Cargando...</h1>
      )
    return (
      <div>
        <ul>
          {this.props.lista.map((document) => {
            return (
              <li key={document.id}>{document.title}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}