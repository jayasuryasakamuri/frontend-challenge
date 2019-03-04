import React from 'react';
import styled from 'styled-components'
import Container from './Container'
import ListItem from './ListItem'

const Main = styled.main`
    margin-top: 30px;

    ${Container}{

        ul{
            background: #FFFFFF;
            border: 1px solid #EAEDEF;
            list-style : none;
            width : 100%;
            padding : 0;
            margin : 0;
            display:flex;
            flex-direction: column;
        }
    }
`
const showListItems = (props)=>{
    return props.items.map((item) => {
        return <ListItem key={item.id} 
                    changeItemValue = {props.changeItemValue}
                    deleteItem={props.deleteItem} item = {item}/>
    });
} 

const TranscriptionsList = (props) => {

    if(!props.items.length > 0){
        return null;
    }

    return (
        <Main>
            <Container>
                <ul>
                    {showListItems(props)}
                </ul>
            </Container>
        </Main>
    );
};

export default TranscriptionsList;