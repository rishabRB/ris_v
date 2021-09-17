import React from 'react'
import styled from 'styled-components';
import backgroundvideo from '../../vendors/video/video.mp4';


const MainContainer=styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height:800px;
position: relative;
z-index:1;


:before{
    content:'';
    position:absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
    background:linear-gradient(
    180deg,
    rgba(0,0,0,0.2) 0%,
    rgba(0,0,0,0.6) 100%)
    ,linear-gradient(180deg, rgba(0,0,0,0.2) 0% ,transparent 100%);
    z-index:2;
}
`;

const MainBg=styled.div`
position: absolute;
top:0;
bottom:0;
left: 0;
right: 0;
height: 100%;
width: 100%;
overflow: hidden;

`;


const VideoBG=styled.video`
height: 100%;
width: 100%;
-o-object-fit:cover;
object-fit: cover;

`;

const MainContent=styled.div`
z-index: 3;
max-width:1200px;
position: absolute;
padding: 8px 24px;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const MainH1=styled.h1`
font-size:48px;
text-align:center; 
color:#fff;
font-style: italic;

@media screen and (max-width:760px){
    font-size:32px;
    }

@media screen and (max-width:480px){
    font-size:32px;
} 
`;


// const ImageConatiner=styled.div`
//  margin: 20px;
//  margin-bottom: 350px;
//  `;

// const MainPic=styled.img`
//  width: 170px;
//  height: 170px;
//  border-radius:85px;
//  `;

 const MainP=styled.p`
 margin-top: 24px;
 color:#fff;
 font-size: 24px;
 text-align:center;
 max-width: 600px;
 font-style:italic;


 @media screen and (max-width:760px){
    font-size:24px;
 }

 @media screen and (max-width:468px){
    font-size:18px;
 }

 `;

const MainSection = () => {
    return (
      <MainContainer>
          <MainBg>
              <VideoBG autoPlay loop muted src={backgroundvideo} type="video/mp4" />
          </MainBg>
          <MainContent>
            <MainH1>Hi,I'm Rishab </MainH1>
                  <MainP>React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications
                  </MainP>
              </MainContent>
      </MainContainer>
    )
}

export default MainSection
