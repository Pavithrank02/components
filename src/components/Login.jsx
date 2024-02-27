import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

const GoogleAuthComponent = () => {
  const responseGoogle = (response) => {
    console.log(response);
    // Here you can handle the Google sign-in response, like getting user data, sending it to backend, etc.
  }

  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle} // You can handle failure cases as well
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default GoogleAuthComponent;
