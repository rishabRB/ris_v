import React from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa';
import Custom from './custom';







const CustomSectionWrapper=styled.div`

 position:fixed;
 z-index:999;
 width:95%;
 height:90%;
 background:#0d0d0d;
 margin:30px;
 display:grid;
 opacity: ${({isShow})=>(isShow ? '100%' : '0')};       //use this for slide down effect otherwise use conditional rendering  
 top:${({ isShow})=>(isShow ? '0' : '-100%')};
 overflow-y: scroll;
 overflow-x:none;

 @media screen and (max-width:760px){
     width: 100%;
     height: 100%;
     margin: 0;
     align-items: center;
 }
`;



const HeadingWrapper=styled.div`
 position:absolute;
 top:4rem;
 left: 1.5rem;
 background:transparent;
 font-size:0.5rem;
  
`

const Heading=styled.h1`
    color:#1b6;     
    text-transform: uppercase;
`


const Icon=styled.div`
 position: absolute;
 top:3rem;
 right: 1.5rem;
 background:transparent;
 font-size: 2rem;
 cursor: pointer;
 /* outline:none; */
`;

const CloseIcon=styled(FaTimes)`
color:#fff;
`;



const CustomSection = ({toggle,toggleviewData,isShow,name,Data}) => {
    return (
        <>
            <CustomSectionWrapper isShow={isShow} >
            <HeadingWrapper> 
            <Heading>{name}</Heading>
            </HeadingWrapper>   
             <Icon onClick={toggle} >
                <CloseIcon />
              </Icon>  

              {Data.map(project=><Custom key={project.id} toggleviewData={toggleviewData} {...project}/>)}
             
            </CustomSectionWrapper>

        </>

    )
}

export default CustomSection
