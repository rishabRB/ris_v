import React from 'react'
import styled from 'styled-components';
import image from '../../vendors/image/undraw_message_sent_1030.svg'
import {FaLinkedin,FaGithub,FaTwitter,FaInstagram} from 'react-icons/fa';



const ContactWrapper=styled.div`
background:#010606 ;
padding-top: 300px;
background-position: center;
background-repeat: no-repeat;
background-size: cover;




@media screen and (max-width:760px){

padding:100px 0;
}
`;


const Wrapper=styled.div`

width: 100%;
height:500px;
padding: 20px;
margin-left:auto ;
margin-right: auto;
display: flex;
justify-content:center;
align-items: center;
flex-direction: row;

@media screen and (max-width:760px){
    flex-direction:column;
}
`

const SectionWrapper=styled.div`
max-width:440px;
margin: 20px;
margin-bottom: 50px;
`

const InfoSectionWrapper=styled.div`
padding: 0 15px;
max-width:400px;
height: 100%;
margin-left: 10px;
justify-content: center;
align-items: center;
margin-bottom: 15px;
margin-left:50px;
`;


const EmailWrapper=styled.div`

  justify-content: center;
  align-items: center;
  width: 200px;


  `

const BtnWrapper=styled.div`
padding:15px 5px;
`;

const Button=styled.a`
text-decoration:none;
background:#01BF71;
color: #111;
border-radius: 20px;
padding:5px 10px;
text-transform:uppercase;
font-weight: 600;

&.hover{
  background-color: #fff;
  }

`




const ImageWrapper=styled.div`
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

`;



const HeadingWrapper=styled.div`
width: 100%;
font-size:10px;
margin:10px;



`

const Heading=styled.h1`
color:#01BF71;
text-transform:uppercase ;
`;

const EmailBtnWrapper=styled.div`
    width:540px;
    height:100%;
    display: flex;
    flex-direction: row;
   `;



const Email=styled.h1`
  border: 1px #01BF71 solid;
  padding:10px;
  border-radius: 40px;
  margin: 5px;
  font-size:15px;
  color:#fff;

`;


const SocailLinkWrapper=styled.div`

display: flex;
flex-direction: row;




`

const Link=styled.a`
 
  font-size:40px;
  color:#fff;
  margin: 8px;

  &:hover{
    font-size:50px
  }
`







const Contact = () => {
    return (
        <>
       <ContactWrapper id='get'> 
          <Wrapper >
            <InfoSectionWrapper>
            <SectionWrapper>
                <HeadingWrapper>
                     <Heading >
                         Contact Me
                     </Heading>
               </HeadingWrapper>
            <EmailBtnWrapper>
                   <EmailWrapper> 
                    <Email>bibhuty82@gmail.com</Email>
                  </EmailWrapper>
                <BtnWrapper>
                <Button href="mailto:bibhuty82@gmail.com">Send Email</Button>
                </BtnWrapper>
             </EmailBtnWrapper>
        </SectionWrapper>
        <SectionWrapper>
          <HeadingWrapper>
            <Heading>Get in touch</Heading>
          </HeadingWrapper>
          <SocailLinkWrapper>
          <Link href='https://github.com/rishabRB'> 
          <FaGithub/>  
          </Link> 
          <Link href="https://www.linkedin.com/in/rishab-bibhuty-ab1051193/">
          <FaLinkedin  /> 
          </Link>
          <Link href="https://www.instagram.com/im_risv/">
          <FaInstagram /> 
          </Link>
          <Link href="https://twitter.com/risv92757663">
          <FaTwitter/>  
          </Link>
          </SocailLinkWrapper>
        </SectionWrapper>
        </InfoSectionWrapper>
           <ImageWrapper>
                <Image src={image}/>
            </ImageWrapper>
            </Wrapper>
       </ContactWrapper>  
     </>
    )
}

export default Contact
