import React from 'react';
import withOptions from './options/withOptions';
import Frothy from 'frothy';
import Button from 'material-ui/Button';

import firebase from 'firebase/app';
import 'firebase/auth';

const LoginScreen = props => {
  return (
    <div style={{ paddingTop: '50px', marginBottom: '50px' }}>
      
     
      <Frothy {...props} auth={firebase.auth} />
    </div>
  );
};

export default withOptions(LoginScreen);
