import React from 'react'
import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS,animateScroll as scroll} from 'react-scroll';
import resume from "../../vendors/resume/rishab bibhuty's Resume.pdf"
import {FaBars} from 'react-icons/fa';






const Nav=styled.nav`
width:100%;
padding-left:200px;
background:#000;
height: 80px;
margin-top:-80px;
box-sizing:border-box;
display: flex;
justify-content: center;
align-items: center;
font-size:1rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width:960px){
    transition: 0.8s all ease;
    padding-left: 100px;
}

@media screen and (max-width:760px){
    transition: 0.8s all ease;
    padding-left:20px;
}

`;


const NavbarContainer=styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index:1;
width: 100%;
padding:0 160px;
box-sizing: border-box;


`;


const NavLogo=styled(LinkR)`
color:#fff;
justify-self:flex-start;
cursor: pointer;
font-size: 1.3rem;
display: flex;
align-items: center;
margin-left:-154px;
font-weight: bold;
text-decoration: none;
`;


const MobileIcon=styled.div`
 display: none;

@media screen and (max-width:760px){
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%,60%);
  font-size:1.8rem;
  cursor: pointer;
  color: #fff;
}
`

const NavMenu=styled.ul`
display: flex;
align-items:center;
list-style: none;
text-align:center;
margin-right :-22px ;
margin-top: 70px;


@media screen and (max-width:760px){
    display:none;
}

`;

const NavItem=styled.li`
height: 100px;
width: 100%;

`;

const NavLinks=styled(LinkS)`
color:#fff;
display: flex;
align-items: center;
text-decoration: none;
padding:0 1rem;
height: 40px;
cursor: pointer;


&.active{
    border-bottom:3px solid #01bf71
}

`;


const NavBtn=styled.div`
display: flex;
align-items: center ;
justify-content: center;
text-transform: uppercase;
font-weight: 600;



@media screen and (max-width:768px){
   display:none;
}

`;

const NavBtnLink=styled.a`

  
  border-radius: 50px;
  background: #01bf71;
  padding: 8px 18px;
  font-size:16px;
  text-decoration: none;
  color:#010601;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
 


 
  &:hover{
      transition:all 0.2s ease-in-out;
      background: #fff;
      color: #010606;
  }
`;


const NavBar = ({toggle}) => {

const toggleHome=()=>{
    scroll.scrollToTop();
}

  return (
      <>
       <Nav>
        <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>Ris_v</NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars/>
            </MobileIcon>
             <NavMenu>
                <NavItem>
                     <NavLinks to='Project'
                     spy={true}
                     exact='true'
                     offset={-80}
                     smooth={true}
                     duration={500} >
                     Project</NavLinks>
                 </NavItem>
                 <NavItem>
                     <NavLinks to='certificate'
                     spy={true}
                     exact='true'
                     offset={-80}
                     smooth={true}
                     duration={500}>
                      Certificates</NavLinks>
                 </NavItem>
                 <NavItem>
                     <NavLinks to='about'
                     spy={true}
                     exact='true'
                     offset={-80}
                     smooth={true}
                     duration={500}
                      >About</NavLinks>
                 </NavItem>
                 <NavItem>
                     <NavLinks to='contact'
                     spy={true}
                     exact='true'
                     offset={-80}
                     smooth={true}
                     duration={500} 
                     >
                     Contact</NavLinks>
                 </NavItem>
               </NavMenu>
               
                 <NavBtn>
                     <NavBtnLink href={resume}>Resume</NavBtnLink>
                 </NavBtn>

          </NavbarContainer>
       </Nav>
       </>
    )
}

export default NavBar
