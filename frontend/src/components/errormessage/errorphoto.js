import React from 'react';
import ErrorLogo from './undraw_server_down_s4lk.svg';

const ErrorPhoto = () => {
  return (
    <div>
      <img
        src={ErrorLogo}
        alt='Error...'
        style={{
          height: '300px',
          width: '300px',

          margin: 'auto',
        }}
      ></img>
    </div>
  );
};

export default ErrorPhoto;
