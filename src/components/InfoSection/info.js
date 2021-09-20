import React from 'react'
import { Button } from '../Buttons/button'
import styled from 'styled-components'

const InfoContianer=styled.div`
color:#fff;
height:860px;
width:100%;
padding: 30px;
background:${({lightBg})=>(lightBg ? '#010606' : '#f9f9f9')};
padding-bottom: 50px;
box-sizing:border-box;

@media screen and (max-width:760px){

padding:100px 0;
}
`;


const InfoWrapper=styled.div`
display:grid;
z-index:1;
margin-right:auto;
margin-left:auto;
padding:0 24px;
justify-content: center;

`;

const InfoRow=styled.div`
display:grid;
grid-auto-columns: minmax(auto,1fr);
align-items: center;
grid-template: center;
grid-template-areas: ${({imgStart})=>(imgStart ? `'col1 col2'`:`'col2 col1'`)};
 

@media screen and (max-width :760px){
    grid-template-areas:${({imgStart})=>(imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
   }

`;


const Columb1=styled.div`
margin-bottom:15px;
padding:0 15px;
grid-area:col1;
`
const Columb2=styled.div`
margin-bottom:15px;
padding:0 15px;
grid-area:col2; 
`

const TextWrap=styled.div`
max-width:540px;
padding-top:0;
padding-bottom:60px;

`;

const TopLine=styled.h1`
color:#01bf71;
font-size: 16x;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform:uppercase;
margin-bottom:14px;

@media screen and (max-width:760px){
    font-size:12px;
}

`;

const Heading=styled.h1`
margin-bottom:24px;
font-size:30px;
line-height:1.1;
font-weight:600;
color:${({lightText})=>(lightText ? '#fff' : '#010606')};


@media screen and (max-width:760px){
    font-size:28pxpx;
}
`;

const Subtile=styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color:${({darkText})=>(darkText ? '#010606' : '#fff')};

@media screen and (max-width:760px){
    font-size:15px;
}

`;

const BtnWrap=styled.div`
display:flex;
justify-content: flex-start;

`;

const ImgWrap=styled.div`
max-width:555px;
height:100%;
margin-right: 20px;

@media screen and (max-width:760px){
    max-width: 450px;
    height: 100%;
    margin-bottom: 140px;
}
`;

const Img=styled.img`
width:100%;
margin:0 0 10px 0;
padding-right: 0;
`;



const InfoSection = ({toggle,lightBg,width,lightText,id,darkText,primary,dark,image,imgStart,topLine,subtile,heading,buttonLable}) => {
    return (
       <>
       <InfoContianer lightBg={lightBg} id={id}>
           <InfoWrapper>
               <InfoRow imgStart={imgStart}>
                   <Columb1>
                   <TextWrap>
                     <TopLine>{topLine}</TopLine>
                     <Heading lightText={lightText}>{heading}</Heading>
                     <Subtile darkText={darkText}>{subtile}</Subtile>
                     </TextWrap>
                   <BtnWrap>
                       <Button to='home'
                       width={width}
                       onClick={toggle}
                       smooth={true}
                       dark={dark ? 1 : 0}
                       primary={primary ? 1 : 0 }
                       offset={-88}
                       exact="true"
                       spy={true}>{buttonLable}</Button>
                   </BtnWrap>
                   </Columb1>
                   <Columb2>
                   <ImgWrap>
                    <Img src={image} />
                   </ImgWrap>
                   </Columb2>
              </InfoRow>
           </InfoWrapper>
       </InfoContianer>
       </>
    )
}

export default InfoSection







