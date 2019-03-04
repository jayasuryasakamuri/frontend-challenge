import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	*, :after, :before {
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
    }
    
	@import url('https://fonts.googleapis.com/css?family=Montserrat:500,600');
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');
    
	body{
        background: #F6F7F8;
        font-family: 'Montserrat', sans-serif;
        padding:0;
        margin:0;
    }
    
    ::-webkit-scrollbar {
        width: 7px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #ddd;
    }
`

export default GlobalStyles;