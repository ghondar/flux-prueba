import React from 'react'
import {CircularProgress, Card, CardHeader, Styles} from 'material-ui'
import AppActions from '../actions/AppActions'

let ThemeManager = new Styles.ThemeManager()

class Lista extends React.Component{

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }

  render(){
    if(this.props.loading)
      return (
        <div>
          <CircularProgress mode="indeterminate" />
        </div>
      )
    return (
      <div className="cards" style={{margin: 20}}>
        {this.props.lista.map((document) => {
          return (
            <Card key={document.id}>
              <CardHeader
                title={document.title}
                avatar={document.posters.original}
              />
            </Card>
          )
        })}
      </div>
    )
  }
}

Lista.childContextTypes = {
  muiTheme: React.PropTypes.object
}

export default Lista