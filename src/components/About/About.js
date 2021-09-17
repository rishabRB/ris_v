import React from 'react'
import styled from 'styled-components';
import {FaReact,FaLinux, FaNodeJs,FaJava} from 'react-icons/fa';
import {SiJavascript,SiMongodb } from 'react-icons/si';



const AboutSectionWrapper=styled.div`
background:#010606 ;
padding-top:300px;
background-position: center;
background-repeat: no-repeat;
background-size: cover;



@media screen and (max-width:760px){

padding:100px 0;
}`;




const Wrapper=styled.div`
width: 100%;
height:668px;
padding: 20px;
margin-left:auto ;
margin-right: auto;
display: flex;
justify-content:center;
align-items: center;
flex-direction: row-reverse;

@media screen and (max-width:760px){
    flex-direction:column;
}

`

const ImageSection=styled.div`
margin-bottom: 15px;
padding: 0 15px;
max-width:555px;
height: 100%;
margin-right:20px;

@media screen and (max-width:760px){
    
    max-width:450px;
    height: 100%;
    margin-bottom: 140px;
    
    }

`

const Image=styled.img`
width:100%;
margin: 0 0 10px 0;
padding-right: 0;



`


const AboutSection=styled.div`
padding: 0 15px;
max-width:440px;
height: 100%;
margin-left: 10px;
justify-content: center;
align-items: center;
margin-bottom: 15px;
margin-left:50px;

`


const AboutParagaphWrappe=styled.div`
color:#fff;
max-width:540px;
padding-top:0;
padding-bottom:60px;




`
const HeadingWrapper=styled.div`
width:540px;
font-size:${({size})=>(size ? size : '14px')};
margin:10px;


@media screen and (max-width:760px){
    font-size: 12px;
}

`

const Heading=styled.h1`
color:#01BF71;
text-transform:uppercase ;
`;

const AboutWrapper=styled.p`
justify-content: center;
max-width: 420px;
align-items: center;
line-height: 25px;
font-size:20px;
font-style: italic;

@media screen and (max-width:760px){
    font-size: 15px;
}

`;



const IconWrapperSection=styled.div`
max-width:300px;
color:#fff;
display: flex;
flex-direction: row;
margin: 30px;
font-size:30px;
justify-content:space-between;

@media screen and (max-width:760px)
{
    font-size:25px
}

`;





const About=({heading,about,image})=>{
    return (
     <>
     <AboutSectionWrapper id="about">
         <Wrapper>        
         <AboutSection>
             <AboutParagaphWrappe>
                 <HeadingWrapper size={'14px'}>
                     <Heading >
                         {heading}
                     </Heading>
                 </HeadingWrapper>
                 <AboutWrapper>
                     {about}
                 </AboutWrapper>
             </AboutParagaphWrappe>
             
             <IconWrapperSection>
                     <FaReact />
                     <SiJavascript />
                      <FaLinux />
                     <SiMongodb/>
                     <FaNodeJs/>
                     <FaJava/>
                   
              </IconWrapperSection>
            </AboutSection>
         <ImageSection>
         <Image src={image} />
         </ImageSection>
         </Wrapper>
     </AboutSectionWrapper>
     </>
    )
}

export default About