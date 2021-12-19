import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
height:40px;
display:flex;
justify-content:center;
align-items:center;
`


const Line=styled.div`
color:#fff;
font-weight:600;

`

const Footer = () => {
    return (
        <Container>
            <Line>Made with ❤️ by RISHAB BIBHUTY</Line>
        </Container>
    )
}

export default Footer
