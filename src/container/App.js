import React, { Component } from 'react';
import {connect} from 'react-redux';
import Main from '../components/Main';
import User from '../components/User';
import {setName} from '../action/userAction';

class App extends Component {
  changeUserName(){
      this.props.setName('Anna')
  }
  render() {
    return (
      <div className="container">
            <Main changeUserName={this.changeUserName.bind(this)}/>
            <User username={this.props.user.name}/>
      </div>
    );
  }
}

const MapStateToProps = (state) => {
    return {
        user: state.user,
        math: state.math
    };
};

const MapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name))
        }
    };
};

export default connect(MapStateToProps, MapDispatchToProps)(App);