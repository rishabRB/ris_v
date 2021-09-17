import styled from 'styled-components';



const  Button=styled.a`

display: flex;
text-decoration: none;
justify-content: center;
align-items:center;
width:${({width})=>(width ? width : "120px")};
height: 30px;
border-radius: 19px;
color:${({dark})=>(dark ? '#010606': '#fff')};
background:${({primary}) => (primary ? '#01BF71' : '#010606')};
font-size:${({fontBig})=>(fontBig ? fontBig : '14px')};
font-weight: 600;
outline:none;
border:none;
cursor:pointer;
transition: all 0.2 ease-in-out;
text-transform: uppercase;



&:hover{
    transition: all 0.2 ease-in-out;
    background:${({primary}) => (primary ? '#fff' : '#01BF71')};
}

`;

export default Button