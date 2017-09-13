// import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components'; 

const StyledButton = styled.button`
    background: #E6343B;
    border: 0; 
    padding: 1em; 
    text-transform: uppercase; 
    width: 100%;
    
    &:hover, &:focus {
        background: yellow; 
        color: red; 
        outline: 0; 
        transition: background-color 2s ease-out; 
    }
    
`; 

export default StyledButton; 