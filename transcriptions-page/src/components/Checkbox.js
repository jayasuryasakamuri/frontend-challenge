import React from 'react';
import styled from 'styled-components'

const CheckMark = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: transparent;
    border: 2px solid #859eff;
    
    &::after {
        content: "";
        position: absolute;
        display: none;
        left: 4px;
        top: 0;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`

const CheckboxContainer = styled.label`
    display: block;
    position: relative;
    height: 16px;
    width: 16px;
    cursor: pointer;
    margin-top : 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    input{
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    &:hover input~ ${CheckMark} {
        background-color: #F6F7F8;
    }

    input:checked~ ${CheckMark}{
        background-color: #859eff;
    }

    input:checked~${CheckMark}:after {
        display: block;
    }
`

export default ()=>{
    return (
        <CheckboxContainer title = "Select Item">
            <input type="checkbox"/>
            <CheckMark></CheckMark>
        </CheckboxContainer>
    )
};  