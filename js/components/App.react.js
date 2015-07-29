import React from 'react'
import AppActions from '../actions/AppActions'
import AppStore from '../stores/AppStore'
import Lista from './Lista.react'

function getStates(){
  return {
    lista: AppStore.getData(),
    loading: AppStore.getLoading()
  }
}
export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = getStates()
  }
  componentDidMount(){
    AppStore.addChangeListener(this._onChange.bind(this))
  }
  componentWillUnmount(){
    AppStore.removeChangeListener(this._onChange.bind(this))
  }
  render(){
    return (
      <Lista lista={this.state.lista} loading={this.state.loading}/>
    )
  }
  _onChange(){
    this.setState(getStates())
  }
}