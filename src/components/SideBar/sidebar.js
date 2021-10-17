import React from 'react'
import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll';
import resume from "../../vendors/resume/rishab bibhuty's Resume.pdf"

const SideBarContainer=styled.aside` 


//aside is sidebar tag 
display:none;

@media screen and (max-width:760px){
position: fixed;
z-index:999; 
width:100%;
height:100%;
background: #0d0d0d;
display: grid;
align-items: center;
transition:0.3s ease-in-out;
opacity: ${({isOpen})=>(isOpen ? '100%' : '0')};        
top:${({isOpen})=>(isOpen ? '0' : '-100%')};
}
`;

const Wrapper=styled.div`
padding:0px;
box-sizing:border-box
`

const Icon=styled.div`
 position: absolute;
 top:30px;
 right:30px;
 background:transparent;
 font-size: 2rem;
 cursor: pointer;
 /* outline:none; */
`;

const CloseIcon=styled(FaTimes)`
color:#fff;
`;

const SideBarMenu=styled.div`
display: flex;
justify-content:space-between;
text-align: center;
flex-direction: column;
padding: 100px;

display: grid;
grid-template-columns: 1fr;
grid-template-rows:repeat(6,80px);
text-align: center;

@media screen and (max-width:480px){
    grid-template-rows:repeat(6,60px) ;
}



`;


const SideBarWrapper=styled.div`
color:#fff;
`
const SideBarLink=styled(LinkS)`
 display: flex;
 align-items: center;
 justify-content: center;
 font-size:1.5rem;
 text-decoration:none;
 list-style: none;
 transition: 0ms.2s ease-in-out;
 color: #fff;
 cursor: pointer;
 /* margin:30px; */

 &:hover{
     color:#01bf71;
     transition: 0ms.2s ease-in-out;
 }
`;

const SideBarBtn=styled.div`
display: flex;
justify-content: center;
`;

const SidebarBtnLink=styled.a`
 border-radius: 50px;
 color: #111;
 background: #01bf71;
 text-decoration: none;
 font-size: 16px;
 padding: 12px 30px;
 font-weight: 600;
 border:none;
 outline:none;
 cursor: pointer;
 transition: all 0.2 ease-in-out;

  &:hover{
      transition: all 0.2 ease-in-out;
      background-color:#fff;
      color:#010606;
  }

`



const SideBar=({isOpen,toggle})=>{
    return (
      
        <SideBarContainer isOpen={isOpen} onClick={toggle}>  
          <Wrapper>       
            <Icon >
                <CloseIcon />
            </Icon>                                   
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to='about'
                     onClick={toggle} 
                     spy={true}
                     exact='true'
                     offset={-80}
                     smooth={true}
                     duration={500}
                    >About</SideBarLink>
                    <SideBarLink to='Project'
                     onClick={toggle}
                     spy={true}
                     exact='true'
                     offset={-80}
                     smooth={true}
                     duration={500}
                    >Projects</SideBarLink>
                    <SideBarLink to='certificate'
                     onClick={toggle}
                     spy={true}
                     exact='true'
                     offset={-80}
                     smooth={true}
                     duration={500}
                    >Certificates</SideBarLink>
                    <SideBarLink to='contact'
                     onClick={toggle}
                     spy={true}
                     exact='true'
                     offset={-80}
                     smooth={true}
                     duration={500}
                    >Contact</SideBarLink>
                </SideBarMenu>
                <SideBarBtn>
                    <SidebarBtnLink href={resume}>RESUME</SidebarBtnLink>
                </SideBarBtn>
            </SideBarWrapper>
            </Wrapper>
        </SideBarContainer>
     
       
     )
}

export default SideBar
