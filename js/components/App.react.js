import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import AppActions from '../actions/AppActions'
import AppStore from '../stores/AppStore'
import Lista from './Lista.react'
import Boton from './Boton.react'

injectTapEventPlugin()

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
      <div>
        <Boton />
        <Lista lista={this.state.lista} loading={this.state.loading}/>
      </div>
    )
  }
  _onChange(){
    this.setState(getStates())
  }
}