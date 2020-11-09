import React from 'react';
import LoginForm from '../../molecules/LoginForm'
import styled from 'styled-components';

const LoginCard: React.FC = () => {
    return (
        <>
            <Card>
                <LoginForm />
            </Card>

        </>
    );
}

export default LoginCard;


const Card = styled.div`
 background-color: #fff;
`