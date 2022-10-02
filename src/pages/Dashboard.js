
       import React from "react"; 
       import { NavLink } from 'react-router-dom';
       import styled from "styled-components";
       import Sidebar from "components/Sidebar";
    
      import "../components/br.css"

   

       

export default function Dashboard() {  
       
   

    return (   
        <>
        <Sidebar />  

        <div className="bg-white py-5">  

        <div class="max-w-7xl ml-7 mb-5 heropattern py-11 px-3 mr-7  grid grid-cols-12 ">
              <div class="col-span-12 mt-0.4   md:col-span-12 object-fill lg:col-span-6">

              {/* <img width={700} src={welcomeone} alt="welcome" /> */}
                
              <FlexColumn>
                <FlexRow>
                  <Text10>Welcome Back</Text10>
                  <Text20>🚀</Text20>
                </FlexRow>
                <Text30>Dean Name <br className="responsivemodal"></br> </Text30>
              </FlexColumn>  


              </div>

              <div class="col-span-12 pb-0.5   md:col-span-12 object-fill lg:col-span-6 "> 
       

              <Paragraph>
            Develop a passion for learning. If you do, you will never cease to grow.
            – <Text40>Anthony J. D’Angelo</Text40>  
          </Paragraph>

              </div>
              </div>

              
          
                <div class="flex flex-wrap gap-x-2 ml-6">
  <div class="w-full flex justify-center sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
  <RectangleRootRootop>
      <FlexColumnop>
        <Levelop>Lecturers</Levelop>
        <Element1op>24</Element1op>
      </FlexColumnop>
      <Image1op src={`https://file.rendit.io/n/s0thGrZ5M9N6SmKyCP0E.svg`} />
    </RectangleRootRootop>
    </div>

  <div class="w-full flex justify-center sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 ">
  <RectangleRootRootop>
      <FlexColumnop>
        <Levelop>100 Level</Levelop>
        <Element1op>202</Element1op>
      </FlexColumnop>
      <Image1op src={`https://file.rendit.io/n/CXMunalQCSIZ2lH14TgK.svg`} />
    </RectangleRootRootop>
    </div>

  <div class="w-full flex justify-center sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 ">
  <RectangleRootRootop>
      <FlexColumnop>
        <Levelop>200 Level</Levelop>
        <Element1op>321</Element1op>
      </FlexColumnop>
      <Image1op src={`https://file.rendit.io/n/fPIRTJZKK9GJOY6zv72j.svg`} />
    </RectangleRootRootop>
    </div>
  <div class="w-full flex justify-center sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 ">
  <RectangleRootRootop>
      <FlexColumnop>
        <Levelop>300 Level</Levelop>
        <Element1op>134</Element1op>
      </FlexColumnop>
      <Image1op src={`https://file.rendit.io/n/pBJYuprRVMcwairWFDwN.svg`} />
    </RectangleRootRootop>
    </div>
  <div class="w-full flex justify-center sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 ">
  <RectangleRootRootop>
      <FlexColumnop>
        <Levelop>400 Level</Levelop>
        <Element1op>239</Element1op>
      </FlexColumnop>
      <Image1op src={`https://file.rendit.io/n/tfD20vrnAt1nx37DOTRC.svg`} />
    </RectangleRootRootop>
    </div> 

    <div class="w-full flex justify-center sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 ">
  <RectangleRootRootop>
      <FlexColumnop>
        <Levelop>500 Level</Levelop>
        <Element1op>221</Element1op>
      </FlexColumnop>
      <Image1op src={`https://file.rendit.io/n/gTDjZXuWrardoNPLyRuv.svg`} />
    </RectangleRootRootop>
    </div>

</div>
              
        
           
           <h1 className="text-left mx-7 text-indigo-900 font-black text-lg">Student Quick Access</h1>     

           <div className="mx-7 my-4 ">
            <div className="container  mx-auto mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="flex justify-center text-6xl border-2   p-6 bg-gray-100   ">  

                    <NavLink to="/course-reg-stats"> 
                    <WhiteFlexColumnRoot1>
                    <Image1 src={`https://file.rendit.io/n/1Ujdjkt4YPmR6GQvVrij.svg`} />
                      <Text3>Registration Statistics</Text3>  
                    </WhiteFlexColumnRoot1> 
                    </NavLink>    
                  
                    </div> 



                  
  <div className="flex  justify-center text-6xl border-2 bg-gray-100 p-6 ">
                        
              <NavLink to="/activate"> 
                        <WhiteFlexColumnRoot1> 
                       <Image2 src={`https://file.rendit.io/n/lSOlIje9gQ9HgyOk0mjy.svg`} />
                        <Text2>Activate/Deactivate</Text2>
                        </WhiteFlexColumnRoot1>   
                        </NavLink>       
                        
       
                        </div>
                  
                            

                    <div className="flex justify-center text-6xl border-2 bg-gray-100   p-6 ">

                    <NavLink to="/unblock"> 
                    <WhiteFlexColumnRoot1>
                        <Image2 src={`https://file.rendit.io/n/qMCkGp8Dcf7LYxtebaXw.svg`} />
                        <Text2>Block/Unblock Student</Text2>
                        </WhiteFlexColumnRoot1>
                        </NavLink>    
                     

                    </div> 

                    <div className="flex justify-center text-6xl border-2 -300 bg-gray-100  p-6 ">
                    
                    <NavLink to="/result-upload-summary"> 
                            <WhiteFlexColumnRoot1>
                       <Image2 src={`https://file.rendit.io/n/H1T6k29twq2ye01JbhYi.svg`}/>
                       <Text2>Result Statistics</Text2> 
                         </WhiteFlexColumnRoot1>  
                         </NavLink> 
                            </div>

                </div>
                  </div> 

                  <h1 className="text-left  mb-3  text-indigo-900 font-black text-lg">Lecturer Quick Access</h1>
                   
                   <div className="container mx-auto mb-4"> 
                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                       
                            
                                 
                                
                           <div className="flex justify-center text-6xl border-2  bg-gray-100 p-6 ">
                           <NavLink to="/create-account"> 
                           <WhiteFlexColumnRoot1>
                            <Image2 src={`https://file.rendit.io/n/bBgdwvuBNYK2RO3UM0OI.svg`} />
                            <Text2>Create Account</Text2>
                            </WhiteFlexColumnRoot1>   
                            </NavLink>
                           </div>
                         



                           <div className="flex justify-center text-6xl border-2  bg-gray-100 p-6 ">
                          
                           <NavLink to="/register-student"> 
                           <WhiteFlexColumnRoot1>
                            <Image2 src={`https://file.rendit.io/n/5tWY56uqSBbFAO6jLaEl.svg`} />
                            <Text2>Result Upload</Text2>
                            </WhiteFlexColumnRoot1>   
                            </NavLink>
                         
                               </div>
       
       
                           <div className="flex justify-center text-6xl border-2  bg-gray-100 p-6 "> 
                           <NavLink to="/lecturer-list"> 
                           <WhiteFlexColumnRoot1>
                            <Image2  src={`https://file.rendit.io/n/QkJnTlHMjbjQpEHdGlYb.svg`} />
                            <Text2>Lecturer's List</Text2>
                            </WhiteFlexColumnRoot1>   
                            </NavLink>
                           </div>

                           <div className="flex  justify-center text-6xl border-2 bg-gray-100 p-6 ">
                        
                           
                           <NavLink to="/lecturer-activate"> 
                        <WhiteFlexColumnRoot1> 
                       <Image2 src={`https://file.rendit.io/n/lSOlIje9gQ9HgyOk0mjy.svg`} />
                        <Text2>Activate/Deactivate</Text2>
                        </WhiteFlexColumnRoot1>
                        </NavLink>      
                        
       
                        </div> 
                            
                       </div>
                         </div>
                         </div>  

                         <div>

                         </div>
                         </div> 
                  
        </>
    );
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


const Image1 = styled.img`
 
width: 64.52px;
height: 46.95px;
`;


const WhiteFlexColumnRoot1 = styled.div`

  border-style: solid;
  height: 170px;
  color: #fafafa; 
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 26.78px;
  align-items: center;
  border-radius: 6px;
  padding: 34px 96.78px 34px 97px;

  margin-left: 10px;  
  margin-right: 10px;  
`;
const Image2 = styled.img`

width: 55.22px;
height: 55.22px;
`;
const Text2 = styled.div`
white-space: nowrap;
display: inline-block;
text-align: left;
font-size: 18px;
font-family: Roboto;
line-height: 27.09px;
color: #2d0353; 
`;
const Text3 = styled.div`
white-space: nowrap;
display: inline-block;
text-align: left;
font-size: 18px;
font-family: Roboto;
line-height: 27.09px;
color: #df8909;
`;




const FlexColumn = styled.div`
  align-self: stretch;
  width: 318px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  justify-content: center;
  align-items: center;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 6px;
  min-width: 318px;
  align-items: center;
`;
const Text10 = styled.div`
  mix-blend-mode: normal;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #ffffff;
`;
const Text20 = styled.div`
  mix-blend-mode: normal;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
`;
const Text30 = styled.div`
  mix-blend-mode: normal;
  font-size: 32px;
  font-family: Product Sans Black;
  line-height: 34.92px;
  color: #ffffff;

  @media ${devices.mobileL} { 
    margin-right: 100px; 
  } 
`;
const Paragraph = styled.div`
  mix-blend-mode: normal;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #ffffff;
  margin: 3px 0px 0px 0px;
  white-space: pre-wrap;
  
`;
const Text40 = styled.div`
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #f2994a;
  display: contents;
`;



const RectangleRootRootop = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: rgba(7, 72, 94, 0.1);
  border-radius: 10px;
  padding: 12px 16px 11px 21px;
`;
const FlexColumnop = styled.div`
  width: 95px;
  height: 71px;
  gap: 3px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: stretch;
  align-items: flex-start;
`;
const Levelop = styled.div`
  color: #505050;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  white-space: nowrap;
`;
const Element1op = styled.div`
  width: 95px;
  height: 39px;
  align-self: stretch;
  color: #505050;
  font-size: 30px;
  font-family: Roboto;
  line-height: 45.15px;
`;
const Image1op = styled.img`
  width: 36px;
  height: 36px;
`;




// const FlexColumna = styled.div`
//   align-self: stretch;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;
//   gap: 13px;
//   flex-grow: 1;
//   align-items: center;
//   width: ${(props) => props.width};
// `;
// const Text1a = styled.div`
//   font-size: 18px;
//   font-family: Roboto;
//   line-height: 27.09px;
//   color: #505050;
// `;
// const Text2a = styled.div`
//   font-size: 36px;
//   font-family: Roboto;
//   line-height: 54.18px;
//   color: #505050;
//   align-self: flex-start;
// `;

// const NeonCarrotFlexRowa = styled.div`
//   width: 239px;
//   background-color: rgba(242, 153, 74, 0.1);
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-end;
//   gap: 31px;
//   align-items: flex-start;
//   border-radius: 10px;
//   padding: 18px 15px 17px 15px;
// `;
// const NeonCarrotFlexRowb = styled.div`
//   width: 239px;
//   background-color: #e9f4ee;
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-end;
//   gap: 31px;
//   align-items: flex-start;
//   border-radius: 10px;
//   padding: 18px 15px 17px 15px;
// `;
// const NeonCarrotFlexRowc = styled.div`
//   width: 239px;
//   background-color: rgba(108, 99, 255, 0.2);
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-end;
//   gap: 31px;
//   align-items: flex-start;
//   border-radius: 10px;
//   padding: 18px 15px 17px 15px;
// `;


// const Image1a = styled.img`
//   width: 50px;
//   height: 50px;
// `;






































