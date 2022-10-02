import React from 'react'

import { useRef, useState} from 'react'
import styled from "styled-components";  
import Sidebar from './Sidebar';

const LecturerAccount = () => {
  const [submit, setSubmit] = useState(false);
    const focusDiv = useRef();

    
    if(focusDiv.current) {
      focusDiv.current.focus(); 
    }
   return (
    <>

{ submit && (
        <ModalBackground onClick={() => setSubmit(false)}>
            <ModalBody onClick={(e) => e.stopPropagation()}>
                
            <WhiteFlexColumnRoot> 
      <FlexColumn>
        <Image2 src={`https://file.rendit.io/n/7I3yZRjpHsAGEb48rZcx.svg`} />
        <Text1>Successful</Text1> 
        <Paragraphw>
        Lecturer Account <br className="responsivemodal"></br>has been created successfully{" "}
        </Paragraphw>
        <RoyalPurpleText onClick={() => setSubmit(false)}>Ok</RoyalPurpleText>
      </FlexColumn>
    </WhiteFlexColumnRoot>

    
            </ModalBody>
        </ModalBackground>
      )}

    <Sidebar />

    <div className="grid grid-cols-5 py-4 mb-16 mx-4 resultcolor ">
       <div className=" col-span-4"> 
       <FlexColumnRoot>
      <Paragraph> Create an <br className="responsivemodal"></br>Account</Paragraph> 
     </FlexColumnRoot>
        
       </div>
       <div className="">   
       <ImageRoot src={`https://file.rendit.io/n/xXk6GOsNUFE1sPugE3u8.png`}  /> 
       </div>  
     
    </div> 


    <div>
       <RootRootaw>
             
             <div className='md:pt-7 md:mx-auto bg-gray-100 pl-5 lg:pl-0  mx-auto lg:mx-14 lg:mb-5 pt-8 lg:pt-4'>
             <FlexColumnaw>
                 
                            
                 <FlexColumn1aw>
                 <form>  
                  <Text4aw htmlFor="form">Staff ID</Text4aw>
                  
                  <div className="mb-3" >      
                  <input ref={focusDiv} className='formacc'  type="text" id="staffid"/>  
                  </div>
                
           

                <div className='flex lg:gap-10 flex-col md:flex-col lg:flex-row'>

                    <div className="flex-col">
                 <Text4aw htmlFor="studentname"> First Name</Text4aw>
                  <FlexColumn2aw margin={`0px 0px 10px 0px`}> 
                  <div className='pr-14 md:pr-0 lg:pr-0'>      
                  <input ref={focusDiv} className='form'  type="text" id="newpassword"/>  
                  </div>
                  </FlexColumn2aw> 
                  </div> 

                 <div className='flex-col'>
                  <Text4aw htmlFor="form">Last Name</Text4aw>
                  <FlexColumn2aw margin={`0px 0px 10px 0px`}> 
                  <div className='pr-14 md:pr-0 lg:pr-0'>      
                  <input ref={focusDiv} className='form'   type="text" id="newpassword"/>  
                  </div>
                  </FlexColumn2aw>   
                  </div>
                  </div>

                  <Text4aw htmlFor="form">Email</Text4aw>
                  
                  <div className="mb-3" >      
                  <input ref={focusDiv} className='formacc'  type="text" id="staffid"/>  
                  </div>

                  <div className='flex lg:gap-10 flex-col md:flex-col lg:flex-row'>

                    <div className="flex-col">
                 <Text4aw htmlFor="form"> Phone no</Text4aw>
                  <FlexColumn2aw margin={`0px 0px 10px 0px`}> 
                  <div className='pr-14 md:pr-0 lg:pr-0'>      
                  <input ref={focusDiv} className='form'  type="text" id="newpassword"/>  
                  </div>
                  </FlexColumn2aw> 
                  </div> 

                 <div className='flex-col'>
                  <Text4aw htmlFor="form">Password</Text4aw>
                  <FlexColumn2aw margin={`0px 0px 10px 0px`}> 
                  <div className='pr-14 md:pr-0 lg:pr-0'>      
                  <input ref={focusDiv} className='form'   type="text" id="newpassword"/>  
                  </div>
                  </FlexColumn2aw>   
                  </div>
                  </div>

                  <div className='flex lg:gap-10 flex-col md:flex-col lg:flex-row'>

                        <div className="flex-col">
                        <Text4aw htmlFor="studentname"> Role</Text4aw>
                        <FlexColumn2aw margin={`0px 0px 10px 0px`}> 
                     
                                <div className="boxaccount ">
                        <select >
                            <option selected>Lecturer </option> 
                            <option>Lecturer</option>
                            <option>Lecturer</option>
                            <option>Lecturer</option>
                            <option>Lecturer</option>
                        </select> 

                        </div>
                        </FlexColumn2aw> 
                        </div> 

                        <div className='flex-col'>
                        <Text4aw htmlFor="form">Department</Text4aw>
                        <FlexColumn2aw margin={`0px 0px 10px 0px`}> 
                        <div className="boxaccount "> 
                        <select> 
                            <option selected>Computer Science</option> 
                            <option>Computer Science</option>
                            <option>Computer Science</option>
                            <option>Computer Science</option>
                            <option>Computer Science</option>
                        </select> 

                        </div>
                        </FlexColumn2aw>   
                        </div>
                        </div>
                  

 
                        <div className='flex lg:justify-center '>
               <button className='purplebtn' >Create account </button> 
                       </div>
                 </form> 
                
                 </FlexColumn1aw> 
                 <div>
            
              </div>
             </FlexColumnaw>
 
             </div>  

            </RootRootaw>  


    </div>
    </>
    )

}

const sizes = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
  };
  export const devices = {
    mobileS: `(min-width: ${sizes.mobileS})`,
    mobileM: `(min-width: ${sizes.mobileM})`,
    mobileL: `(max-width: ${sizes.mobileL})`,
    tablet: `(max-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    laptopL: `(min-width: ${sizes.laptopL})`,
    desktop: `(min-width: ${sizes.desktop})`,
  };


  const FlexColumnRoot = styled.div`
    
flex-direction: column;
gap: 15px;

`;


const Paragraph = styled.div`
font-size: 36px;
font-family: Product Sans Medium;
line-height: 34.92px;
color: #2d0353;
text-align: left;
padding-left: 91px;
font-weight: bold;

@media ${devices.mobileL} { 
  
  padding-left: 33px;
} 
`; 

const ImageRoot = styled.img`
width: 89px;
height: 89px;
`;
  

const RootRootaw = styled.div`


  
  display: flex;
  flex-direction: column;


  @media ${devices.tablet} { 
    margin-top:5px;
    margin-right:2px; 
    margin-left:8px;
   }  

  @media ${devices.mobileL} { 
    margin-top:5px;
    margin:auto;
    overflow: hidden;
    margin-left:12px;
   }  

`;

const Text4aw = styled.label`
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  color: #505050;
  align-self: flex-start;

 

`;







const FlexColumnaw = styled.div`
 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 

  @media ${devices.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
 
  
  }    


  @media ${devices.mobileL} { 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding-left:8px;  
   
  }  

`;
const FlexColumn1aw = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 5px 0px;

  @media ${devices.tablet} { 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;

  } 

  @media ${devices.mobileL} { 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    

  } 
`; 
const FlexColumn2aw = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center; 
  align-items: center;
  margin: ${(props) => props.margin};
`;



const ModalBackground = styled.div`
     position:fixed;
     z-index: 1;
     left: 0;
     top: 0;
     width: 100%;
     height: 100%;
     overflow: auto;
     background-color: rgba(0,0,0,0.5);
`

const ModalBody = styled.div`
     background-color: white;
     margin: 10% auto;
     padding: 20px; 
     width: 50%;
     @media ${devices.tablet} {
        width: 90%;   
      } 

      @media ${devices.mobileL} { 
        width: 100%;
      } 

`



const WhiteFlexColumnRoot = styled.div`
  height: 390px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 0px 40px 0px 43px;
`;
const FlexColumn = styled.div`
  height: 273px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

 ]

`;
const Image2 = styled.img`
  width: 112px;
  height: 112px;
  margin: 0px 0px 12px 0px;
`;
const Text1 = styled.div`
  font-size: 18px;
  font-family: Product Sans Medium;
  line-height: 17.46px;
  color: #219653;
  margin: 0px 0px 13px 0px;
`;
const Paragraphw = styled.div`
  text-align: center;
  width: 313px;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #505050;
  margin: 0px 0px 32px 0px;
  white-space: pre-wrap;

  @media ${devices.mobileL} { 
    margin-left:10px; 
    margin-right:10px;
  } 

`;
const RoyalPurpleText = styled.div`
  display: flex;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #ffffff;
  width: 170px;
  height: 45px;
  background-color: #2d0353;
  flex-direction: row;
  justify-content: center;
  border-radius: 6px;
  padding: 13px 0px 11px 0px;
  cursor: pointer;
`;


export default LecturerAccount





