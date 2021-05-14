import React from 'react';
import Input from "../../atoms/input"
import Button from '../../atoms/Button'
import styled from 'styled-components'
import  GoogleLoginButton from '../../../containers/GoogleLoginButton'

interface LoginFormProps {
    btnName: string
}


const LoginForm: React.FC<LoginFormProps> = ({btnName}) => {
    return (
        <>
            <Form>
                <Input placeholder="EMAIL" type="email" />
                <Input placeholder="SENHA" type="password" />
                <Button type="submit">{btnName}</Button>
                <GoogleLoginButton/>
            </Form>

        </>
    );
}

export default LoginForm;


const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`