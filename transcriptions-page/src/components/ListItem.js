import React,{useRef} from 'react';
import styled from 'styled-components'
import Checkbox from './Checkbox'
import Img from './GetImg'


const ListItem = styled.li`
    width : 100%;
    padding : 1.5rem 1.25rem;
    display:flex;
    
    &:not(:last-child){
        border-bottom : 1px solid #EAEDEF;
    }

    >div {
        flex-basis : 2rem;
    }

    img{
        margin-left : 16px;
    }

    >div:last-child img{
        display:none;
        cursor : pointer;
    }
    
    &:hover{
        >div:last-child img{
        display:initial;
    }
    }
`

const ItemBody = styled.div`
    display : flex;
    flex-direction:column;
    flex-grow : 1; 
    padding : 0 10px;
    
    >div{
        font-size : 1rem;
        padding: 4px;
        line-height: 1.2rem;
    }

    >div:focus{
        outline: none;
    }
`

const ItemTitle = styled.div`
    color: #566074;
    font-weight : 600;
`

const ItemContent = styled.div`
    color: #778195;
	font-family: 'Open Sans', sans-serif;
`

export default (props)=>{
    const {id,voice,text} = props.item;
    const titleRef = useRef(null); 
    const contentRef = useRef(null); 

    return (
        <ListItem>
            <Checkbox />
            <div>
                <Img name = "person.svg" 
                        title="person"
                        alt = "person"
                />
            </div>
            <ItemBody>
                <ItemTitle ref={titleRef} contentEditable={true} 
                    onBlur={()=>props.changeItemValue(id,'voice',titleRef)}                    
                    suppressContentEditableWarning={true}>
                    {voice}
                </ItemTitle>
                <ItemContent ref={contentRef} contentEditable={true}
                    onBlur={()=>props.changeItemValue(id,'text',contentRef)}
                    suppressContentEditableWarning={true}>
                    {text}
                </ItemContent>
            </ItemBody>
            <div>
                <Img onClick={()=>props.deleteItem(id)} name= "delete.svg" 
                        title="Delete Item"
                        alt = "Delete Item"
                />
            </div>
        </ListItem>
    )
}