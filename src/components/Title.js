import React from 'react';
import styled from 'styled-components';

const Title = ({ className, text }) => (
    <h1 className={className}>{ text }</h1>
)

const StyledTitle = styled(Title)`
    color: #B8161F;
    font: 70px; 
    text-align: center; 
`; 

export default StyledTitle;