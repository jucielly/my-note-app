import React from 'react';
import GoogleLoginButton from '../../components/atoms/GoogleLoginButton'
import styled from 'styled-components';

const GoogleLogin: React.FC = () => {
    return (
        <GoogleLoginButton><i className="fab fa-google"/>Google</GoogleLoginButton>
    );
}

export default GoogleLogin

