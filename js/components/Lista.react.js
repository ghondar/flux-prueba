import React from 'react'
import AppActions from '../actions/AppActions'
import AppStore from '../stores/AppStore'

export default class Lista extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      lista : AppStore.getData(),
      loading: AppStore.getLoading()
    }
  }

  componentDidMount(){
    AppActions.recibirLista()
    AppStore.addChangeListener(this._onChange.bind(this))
  }

  componentWillUnmount(){
    AppStore.removeChangeListener(this._onChange.bind(this))
  }

  render(){
    if(this.state.loading)
      return (
        <h1>Cargando...</h1>
      )
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
    this.setState({
      lista: AppStore.getData(),
      loading: AppStore.getLoading()
    })
  }
}