import React from 'react';
import styled from 'styled-components'
import Img from './GetImg'

const AddNewItem = styled.div`
    text-align : center;
    margin:30px 0;

    img {
        cursor:pointer;
    }
`

export default (props)=>{
    return <AddNewItem>
				<Img name = "add-row.svg" 
						onClick={props.addNewItem}
						title="upload items"
						alt = "upload items"
				/>
            </AddNewItem>;
};