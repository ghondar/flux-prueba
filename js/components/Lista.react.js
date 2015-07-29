import React from 'react'
import AppActions from '../actions/AppActions'
import AppStore from '../stores/AppStore'

export default class Lista extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      lista : AppStore.getData()
    }
  }

  componentDidMount(){
    debugger
    AppActions.recibirLista()
    debugger
    AppStore.addChangeListener(this._onChange.bind(this))
  }

  componentWillUnmount(){
    debugger
    AppStore.removeChangeListener(this._onChange.bind(this))
  }

  render(){
    if(this.state.lista.length === 0)
      return (
        <ul>Cargando...</ul>
      )
    else
      return (
        <ul>
          {this.state.lista.map((document) => {
            return (
              <li key={document.id}>{document.title}</li>
            )
          })}
        </ul>
      )
  }

  _onChange(){
    debugger;
    this.setState({
      lista: AppStore.getData()
    })
  }
}