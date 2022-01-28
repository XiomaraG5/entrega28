import React from 'react';
import { Botones, ButtonContainer, CategoriasContainer, Circulo, CssJContainer, HomeContainer, ImgBttn, ImgCategory, Text, TitleContainer } from '../styles/HomeStyles';


const Home = () => {
  return(
      <HomeContainer>
          <TitleContainer>
              <h3>Practica tus conocimientos en la categoria que prefieras</h3>
          </TitleContainer>

          <CategoriasContainer>
              <Circulo>
              <ImgCategory src='https://res.cloudinary.com/dfp8qduho/image/upload/v1643390360/worshop/Ellipse_9_gqjldn.png' alt='HTML' />
               </Circulo>
               
                                
              

              <CssJContainer>
                  <Circulo>
                      <ImgCategory src='https://res.cloudinary.com/dfp8qduho/image/upload/v1643390360/worshop/css_wop8nc.png' alt='CSS' />                      
                  </Circulo>
                  
                      
                  

                  <Circulo>
                    <ImgCategory src='https://res.cloudinary.com/dfp8qduho/image/upload/v1643390360/worshop/js_gymhex.png' alt='CSS' />                    
                  </Circulo>
                  
                      
                  
             </CssJContainer>
          </CategoriasContainer>


          <ButtonContainer>
            <Botones><ImgBttn src='https://res.cloudinary.com/dfp8qduho/image/upload/v1643389042/worshop/home_bk2c3h.png' /></Botones>
            <Botones><ImgBttn src='https://res.cloudinary.com/dfp8qduho/image/upload/v1643389042/worshop/stadist_bw5izs.png' /></Botones>
            <Botones><ImgBttn src='https://res.cloudinary.com/dfp8qduho/image/upload/v1643389042/worshop/profile_y7umrz.png' /></Botones>
          </ButtonContainer>
      </HomeContainer>
  );
};

export default Home;