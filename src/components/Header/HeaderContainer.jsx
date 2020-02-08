import React from 'react';
import { connect } from 'react-redux';
import { usersAPI } from '../../api/api';
import { setAuthUserData } from '../../redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends React.Component {

  componentDidMount() {
    debugger
    usersAPI.getAuthLogin().then(Response => { //axios отдельной функцией
      if(Response.data.resultCode === 0) {
        let data = Response.data.data;
        this.props.setAuthUserData(data);
      }
    });
  }

  render () {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);

