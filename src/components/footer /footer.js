import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {FaLinkedin,FaGithub,FaTwitter,FaInstagram} from 'react-icons/fa';
import bdimage from '../../vendors/image/waveUP2.svg'



const FooterSection=styled.div`
width:100%;
height:100%;
background-color: #010606;
background-image:url(${bdimage});

@media screen and (max-width:1200px){
    background-image: radial-gradient(circle, #0a1d03, #001a0a, #00150d, #000f0c, #010606);
}

`;

const FooterWrapper=styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding:10px;
  flex-direction:column;
  align-items: center;


`;

const FooterMenu=styled.div`

width:50%;
display: flex;
flex-direction:column;
justify-content:center;
padding: 20px;

align-items: center;
line-height:20px;
`;



const HeadingWrapper=styled.div`
justify-content: center;
align-items: center;
`;


const FooterOptionWrapper=styled.div`
display: flex;
flex-direction:row;
justify-content:center;
width:100%;
height: auto;

`;


const FooterLinkWrapper=styled.div`
display: flex;
flex-direction: row;
align-items: center;
color: #fff;
font-size:2rem;

@media screen and (max-width:760px){
    font-size: 1.3rem;
}

@media screen and (max-width:468px){
    font-size: 1.2rem;
}
`;


const Heading=styled.h1`
font-size:25px;
color:#1b7;
font-weight: 600;
text-transform: uppercase;
margin-bottom:10px;
 
@media screen and (max-width:760px){
    font-size: 14px;
}

@media screen and (max-width:468px){
    font-size:11px;
    }
`;

const FooterLink=styled(Link)`
font-size:20px;
text-decoration:none;
color:#fff;
text-transform: uppercase;
font-style: italic;
font-weight: 500;
margin:15px;

&:hover{
    color:#1b7;
    font-size: 22px;
    transition: all 0.2 ease-in-out;
}

@media screen and (max-width:760px){
    font-size: 14px;
    font-weight: 400;

    &:hover{
    font-size: 12px;
    
}
}

@media screen and (max-width:468px){
    font-size:12px;
    font-weight:400;
    margin: 5px;

    &:hover{
    font-size:10px;
    margin:8px;
    
    
}

}
`;

const DevWrapper=styled.div`
width: 100%;
height: 100%;
align-items:center;
justify-content: center;

`

const Tagline=styled.h1`
font-size:12px;
color: #1b7;

@media screen and (max-width:760px){
    font-size:10px;
}

@media screen and (max-width:468px){
    font-size:8px;
}

`;


const Footer = () => {
    return (
    <>
    <FooterSection > 
        <FooterWrapper>
            <FooterMenu>
                <HeadingWrapper>
                 <Heading>get in touch</Heading>
                </HeadingWrapper>
                <FooterOptionWrapper>
                    <FooterLinkWrapper>
                    <FaGithub />    
                    <FooterLink to ="/">Github</FooterLink>
                    </FooterLinkWrapper>
                    <FooterLinkWrapper>
                    <FaLinkedin />    
                    <FooterLink to ="/">Linkedin</FooterLink>
                    </FooterLinkWrapper>
                    <FooterLinkWrapper>
                    <FaInstagram />    
                    <FooterLink to ="/">Instagram</FooterLink>
                    </FooterLinkWrapper>
                    <FooterLinkWrapper>
                    <FaTwitter />    
                    <FooterLink to ="/">Twitter</FooterLink>
                    </FooterLinkWrapper>
                   </FooterOptionWrapper>
             </FooterMenu>
             <DevWrapper>
                     <Tagline>DevelpedBy@RishabBihuty</Tagline>
            </DevWrapper>
     </FooterWrapper>
 </FooterSection>
    </>
    )
}

export default Footer

