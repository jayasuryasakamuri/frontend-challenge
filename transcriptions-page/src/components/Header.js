import React from 'react';
import styled from 'styled-components'
import Container from './Container'
import Img from './GetImg'

const Header = styled.header`
	height: 69px;
	display: flex;
	align-items: center;
	font-size: 18px;
	font-weight: 500;
	color: #414C5E;
	background: #FFFFFF;
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24);
	z-index: 100;

	img{
		margin-left:20px;
		cursor : pointer;
	}


	img:first-child{
		margin-left:auto;
	}
`

export default (props)=>{
	return (
		<Header>
			<Container>
				Transcriptions
				<Img name = "upload.svg" 
					onClick={props.uploadItems}
					title="Upload Items"
					alt = "Upload Items"
				/>
				<Img name = "fetch-transcriptions.svg" 
					onClick={props.fetchItems}
					title="Fetch Items"
					alt = "Fetch Items"
				/>
			</Container>
		</Header>
	)
}

