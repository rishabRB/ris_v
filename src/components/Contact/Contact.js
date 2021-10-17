import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import styled from 'styled-components';
import image from '../../vendors/image/constact1.svg'

const ContactSectionWrapper=styled.div`
 width: 100%;
 height:750px;
 background:url(${(image)});
 background-repeat:repeat-x;
 background-position: bottom;
 background-size: auto;
 

@media screen and (max-width:468px){
  background-size:500%;
}

`;

const Wrapper=styled.div`
width: 100%;
height: 100%;
box-sizing: border-box;
padding:150px;

`

const InfoSectionWrapper=styled.div`
 width:100%;
 height: 100%;
 display: flex;
 flex-direction:column;
 justify-content:start;
 text-align: center;
 color:#fff;


`



const EmailBtnWrapper=styled.div`
width: 100%;
height: 100px;
display:flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
margin:20px 0;
flex-direction: column;



@media screen and (max-width:760px){
  margin-left:0;
}

 `

const HeadingWrapper=styled.div`
   width: 100%;
   margin: 5px;

   @media screen and (max-width:468px){
     width:150px;
     margin:2px -30px;
     justify-content: center;
     text-align: center;
   }

`;

const Heading=styled.h1`
 font-size:22px;
  color: #01BF71;
  font-weight: 500px;
  font-style:italic;
  text-transform: uppercase;

@media screen and (max-width:468px){
  font-size:18px;
  
}

`;


const BtnWrapper=styled.div`
   box-sizing: border-box;
   margin: 20px;
   width: 200px;
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
width:150px;
height:22px;
padding:2px 20px;
border: 2px solid #1b7;
border-radius: 40px;
`

const IconSectionWrapper=styled.div`
 width: 100%;
 `;




const IconSection=styled.div`
 box-sizing: border-box;
 width:100%;
 font-size:40px;
 display: flex;
 justify-content: center;
 flex-direction: row;

 @media screen and (max-width:468px){
   font-size:40px;
   width:150px;
   margin-left:-30px;
 }

`;

const Link=styled.a`
 
  font-size:40px;
  color:#fff;
  margin: 8px;
  &:hover{
    font-size:50px
  }
`


const Contact=()=>{
    return (
     <>
 <ContactSectionWrapper id="contact">
   <Wrapper>
       <InfoSectionWrapper>
        <HeadingWrapper>
           <Heading>Contact me</Heading>
         </HeadingWrapper>
         <EmailBtnWrapper> 
         <EmailWrapper>
         bibhuty82@gmail.com
         </EmailWrapper> 
         <BtnWrapper>
           <Button href="mailto:bibhuty82@gmail.com" >Send EMail</Button>
         </BtnWrapper>
     </EmailBtnWrapper>
     <IconSectionWrapper>
       <HeadingWrapper>
           <Heading>Get In Touch</Heading>
         </HeadingWrapper>
       <IconSection>
       <Link href='https://github.com/rishabRB'> 
          <FaGithub style={{margin:'0 5px'}}/>  
          </Link> 
          <Link href="https://www.linkedin.com/in/rishab-bibhuty-ab1051193/">
          <FaLinkedin style={{margin:'0 5px'}} /> 
          </Link>
          <Link href="https://www.instagram.com/im_risv/">
          <FaInstagram style={{margin:'0 5px'}}/> 
          </Link>
          <Link href="https://twitter.com/risv92757663">
          <FaTwitter style={{margin:'0 5px'}} />  
          </Link>
          <Link href="https://leetcode.com/ris_V/">
          <SiLeetcode style={{margin:'0 5px'}} />  
          </Link>
       </IconSection>
       </IconSectionWrapper>      
    </InfoSectionWrapper>
   </Wrapper>
 </ContactSectionWrapper>
     </>
    )
}

export default Contact




