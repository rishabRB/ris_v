import React from 'react'
import styled from 'styled-components'
import Button from '../Buttons/buttonA';



const CustomWrapper=styled.div`
    width:90%;
    height:40%;
    margin-left:8px;
    border-bottom: 1px solid #fff;
    margin-top:130px;
    display:flex;
    justify-content:space-between;
    box-sizing: border-box;
    padding-bottom:100px;
    
    
    @media screen and (max-width:468px){
        width:90%;
        height:90%;
        padding-top:-100px;
        padding-bottom: 0;
       
    }

    `;

const ImageWrapper=styled.div`
    display: flex;
    justify-content: center;
    width:100%;
    height:300px;
    margin-left:-80px;

    @media screen and (max-width:950px){
     margin-top:60px;
     margin-left:100px;
    }
    
    @media screen and (max-width:760px){
    width: 100%;
    height: 100%;
    margin-left:40;
    }

    @media screen and (max-width:468px){
    width:250px;
    height:300px;
    margin-left:60px;
    }

`;

const Image=styled.img`
width: 450px;
height:250px;
margin: 0 0 10px 0 ;
padding-right:0;
border: 3px solid #fff;

@media screen and (max-width:760px){
    width:350px;
    height:250px;
    margin-top:-80px;
}
@media screen and (max-width:950px){
    width:350px;
    height:250px;
    margin:-50px 0 0 0;

}

@media screen and (max-width:468px){
    width:325px;
    height:70%;
    margin:0px;
    opacity: 0.3;
}

`;


const NameBtnWrpper=styled.div`
display:none;

@media screen and (max-width:468px){
    display: flex;
    width: 250px;
    height: 300px;
    z-index:83;
    position: absolute;
    flex-direction: column;
    align-items: center;
    justify-content:center;




}
`;


const MobileNameWrapper=styled.div`
 
justify-content: center;
align-items: center;
margin-bottom: 20px;
`;

const MobileBtnWrapper=styled.div`

justify-content: center;
align-items: center;
`;




const NameDescrpitionWappper=styled.div`
    width:50%;
    height:50%;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
 
    @media screen and (max-width:760px){
    width:50%;
    height:50%;
    margin-left:40px;
    margin-bottom:20px;
    }
 
    `;

    const DescriptionWrapper=styled.div`
      width:100%;
      height:100%;
    `;

    const NameWrapper=styled.div`
       width:100%;
       height:100%;
    `;


const Wrapper=styled.div`
width:100%;
height:100%;
display: flex;
flex-direction: row;
justify-content: space-between;
margin-left:25px;


 @media screen and (max-width:760px)
 {
     flex-direction: column;
     margin-top: 40px;
 }

 @media screen and (max-width:468px){
     display: none;
 }

`;
    
const Name=styled.h1`
font-size: 13px;
color:#1b6;
text-transform: uppercase;
`;

const Description=styled.p`

color:#fff;
overflow-y: hidden;
font-size: 16px;
line-height:20px;

@media screen and (max-width:790px){
    font-size:12px;
    line-height: 15px;
}

`;


const BtnWrapper=styled.div`

width:50%;
height:50%;
justify-content: center;
margin:10px;


@media screen and (max-width:790px){
    width:100%;
    height:60%;
    margin: 40px;
}

`;


const Custom = ({image,description,name,bottonTitle,width,isLink}) => {
   
    return (
     <>
     <CustomWrapper>
            <ImageWrapper>
                    <Image src={image} />
                    <NameBtnWrpper>
                       <MobileNameWrapper> 
                        <Name>{name}</Name>
                        </MobileNameWrapper>
                    <MobileBtnWrapper>

                    <Button href={isLink ? isLink : "#"} 
                    width={'200px'} 
                    fontBig={'12px'}
                     primary={true}
                      dark={true}
                      >
                    {bottonTitle}</Button>  
                        
                    </MobileBtnWrapper>
                    </NameBtnWrpper>
                </ImageWrapper>
            <Wrapper>
                <NameDescrpitionWappper>
                 <NameWrapper>
                 <Name>{name}</Name>  
                 </NameWrapper>   
                  <DescriptionWrapper>
                      <Description>
                      {description}
                      </Description>
                    </DescriptionWrapper>
               </NameDescrpitionWappper>

                    <BtnWrapper>
                      <Button
                      href={isLink ? isLink : "#"} 
                      fontBig={'15px'} width={width} 
                      primary={true} 
                      dark={true}
                      >
                    {bottonTitle}</Button> 


                    </BtnWrapper>
                    </Wrapper>  
              </CustomWrapper>
   </>
    )
}

export default Custom
