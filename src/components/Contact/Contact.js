import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';
import image from '../../vendors/image/contact.svg'

const ContactSectionWrapper=styled.div`
 width: 100%;
 height: 700px;
 box-sizing: border-box;
 padding:40px;
 padding-top:200px;

@media screen and (max-width:468px){
  padding-top: 50px;
}

`;

const Wrapper=styled.div`
width: 100%;
height: 100%;
padding: 20px;
margin-left: auto;
margin-right:auto;
display: flex;
box-sizing: border-box;
flex-direction:row;
align-items: center;

@media screen and (max-width:760px){
  flex-direction: column;
}

`

const InfoSectionWrapper=styled.div`
 width:100%;
 height: 100%;
 padding: 0 100px;
 color:#fff;

@media screen and (max-width:1400px){
  padding: 0 20px;
}

`

const SecondWrapper=styled.div`
width: 100%;
box-sizing:border-box;
margin-left:200px;

@media screen and (max-width:760px){
  margin-left:0;
}

@media screen and (max-width:960px){
  margin-left:0;
}

`

const EmailBtnWrapper=styled.div`
width: 100%;
display:flex;
box-sizing: border-box;
margin:20px 0;
flex-direction: row;

@media screen and (max-width:760px){
  margin-left:0;
}

 `

const HeadingWrapper=styled.div`
   width: 100%;
   margin: 5px;
`;

const Heading=styled.h1`
 font-size:22px;
  color: #01BF71;
  font-weight: 500px;
  text-transform: uppercase;
`;


const BtnWrapper=styled.div`
   width: 100%;
   margin: 5px;
   box-sizing: border-box;
`;

const Button=styled.a`
  text-decoration: none;
  background:#01BF71;
  color: #111;
  font-weight:600;
  font-size: 14px;
  padding: 5px 10px;
  text-transform: uppercase;
  border-radius: 40px;
`;

const EmailWrapper=styled.div`
width:200px;
padding:2px 10px;
border: 2px solid #1b7;
border-radius: 40px;
`

const IconSectionWrapper=styled.div`
 width: 100%;
 box-sizing:border-box;
 `;




const IconSection=styled.div`
 box-sizing: border-box;
 margin-top: 20px;
 font-size:40px;

 @media screen and (max-width:468px){
   font-size: 30px;
 }
`;

const ImageWrapper=styled.div`
width:100%;
height: 100%;

@media screen and (max-width:760px){
    
    max-width:540px;
    height: 100%;
    margin-bottom: 140px;
    
    }
`;


const Image=styled.img`
   width:100%;
   margin-top:-100px;
   height: 100%;

  @media screen and (max-width:900px){
    margin-top:-30px;
    margin-left :0 ;
  }
  
  @media screen and (max-width:760px){
    margin-top:50px;
    margin-left :0 ;
  }
  
  `;



const Contact=({})=>{
    return (
     <>
 <ContactSectionWrapper id="contact">
   <Wrapper>
       <InfoSectionWrapper>
     <SecondWrapper>    
       <HeadingWrapper>
           <Heading>Contact me</Heading>
         </HeadingWrapper>
         <EmailBtnWrapper> 
         <EmailWrapper>
         bibhuty82@gmail.com
         </EmailWrapper> 
         <BtnWrapper>
           <Button>SendEMail</Button>
         </BtnWrapper>
     </EmailBtnWrapper>
     <IconSectionWrapper>
       <HeadingWrapper>
           <Heading>Get In Touch</Heading>
         </HeadingWrapper>
       <IconSection>
        <FaGithub style={{margin:'0 10px'}}/>
        <FaInstagram style={{margin:'0 10px'}}/>
        <FaLinkedin style={{margin:'0 10px'}}/>
        <FaTwitter style={{margin:'0 10px'}}/>
       </IconSection>
       </IconSectionWrapper>
      </SecondWrapper>       
    </InfoSectionWrapper>
       <InfoSectionWrapper>
         <ImageWrapper>
           <Image src={image} />
        </ImageWrapper>  
       </InfoSectionWrapper>
       </Wrapper>
 </ContactSectionWrapper>
     </>
    )
}

export default Contact