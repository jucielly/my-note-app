import React from 'react';
import Input from "../../atoms/input"
import Button from '../../atoms/Button'
import styled from 'styled-components'

const LoginForm: React.FC = () => {
    return (
        <>
            <Form>
                <Input placeholder="EMAIL" type="email" />
                <Input placeholder="SENHA" type="password" />
                <Button type="submit">Login</Button>
            </Form>

        </>
    );
}

export default LoginForm;


const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`