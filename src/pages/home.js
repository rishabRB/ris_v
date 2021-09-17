import React,{useState} from 'react'
import MainSection from '../components/MainSection/MainSection';
import InfoSection from '../components/InfoSection/info';
import NavBar from '../components/NavBar/NavBar'
import SideBar from '../components/SideBar/sidebar';
import  { homeObjOne,homeObjTwo } from '../components/InfoSection/data';
import CustomSection from '../components/CustomSection/customSection';
import Contact from '../components/Contact/Contact';
import About from '../components/About/About';
import Aboutdata from '../components/About/data'; 
import ProjectData from '../components/CustomSection/ProjectData'
import CertificateData from '../components/CustomSection/certificateData';

const Home = () => {

   

    const [isOpen,setIsOpen]=useState(false);
    const [isProject,setIsProject]=useState(false);
    const [isCertificate,setIsCertificate]=useState(false);
   

    const toggle=()=>setIsOpen(!isOpen);
    const toggleProject=()=>setIsProject(!isProject);
    const toggleCertificate=()=>setIsCertificate(!isCertificate);

        
    


return (
    
     <>
        <NavBar toggle={toggle} />
        <SideBar isOpen={isOpen} toggle={toggle} />         
        <MainSection />
        <InfoSection {...homeObjOne} toggle={toggleProject}/>
        <InfoSection {...homeObjTwo} toggle={toggleCertificate}/>
        <CustomSection name="Projects" toggle={toggleProject} isShow={isProject} Data={ProjectData}/>
        <CustomSection name="certificate" toggle={toggleCertificate} isShow={isCertificate} Data={CertificateData}/>
        <About {...Aboutdata} />
        <Contact />
     </>
    )
}

export default Home 