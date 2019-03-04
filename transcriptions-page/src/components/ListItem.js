import React,{useRef} from 'react';
import styled from 'styled-components'
import Checkbox from './Checkbox'
import Img from './GetImg'

const ItemBody = styled.div`
    display : flex;
    flex-direction:column;
    flex-grow : 1; 
    padding : 0 10px;

    >div{
        max-height : 400px;
        width : 100%;
        overflow : hidden;
        overflow-y: auto;
        font-size : 1rem;
        padding: 4px;
        line-height: 1.2rem;
        word-break: break-all;
    }

    >div:focus{
        outline: none;
    }
`

const ListItem = styled.li`
    width : 100%;
    padding : 1.5rem 1.25rem;
    display:flex;
    
    &:not(:last-child){
        border-bottom : 1px solid #EAEDEF;
    }

    >div:not(${ItemBody}) {
        flex : 0 0 2rem;
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

    const handlePaste = (e) =>{
        e.preventDefault();
        const text = e.clipboardData.getData('text/plain');
        document.execCommand('insertHTML', false, text);
    }

    const disableNewlines = event => {
        const keyCode = event.keyCode || event.which
    
        if (keyCode === 13) {
            event.returnValue = false
            if (event.preventDefault) event.preventDefault()
        }
    }

    return (
        <ListItem>
            <div>
                <Checkbox />
            </div>
            <div>
                <Img name = "person.svg" 
                        title="person"
                        alt = "person"
                />
            </div>
            <ItemBody>
                <ItemTitle ref={titleRef} contentEditable={true} 
                    onBlur={()=>props.changeItemValue(id,'voice',titleRef)} 
                    onPaste={handlePaste}
                    onKeyPress={disableNewlines}
                    suppressContentEditableWarning={true}>
                    {voice}
                </ItemTitle>
                <ItemContent ref={contentRef} contentEditable={true}
                    onBlur={()=>props.changeItemValue(id,'text',contentRef)}
                    onPaste={handlePaste}
                    onKeyPress={disableNewlines}
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