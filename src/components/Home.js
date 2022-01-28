import React from 'react';
import { Botones, ButtonContainer, CategoriasContainer, Circulo, CssJContainer, HomeContainer, ImgBttn, ImgCategory, Text, TitleContainer } from '../styles/HomeStyles';


const Home = () => {
  return(
      <HomeContainer>
          <TitleContainer>
              <h3>Practica tus conocimientos en la categoria que prefieras</h3>
          </TitleContainer>

          <CategoriasContainer>
              <div>
                    <Circulo>
                    <ImgCategory src='https://res.cloudinary.com/dfp8qduho/image/upload/v1643377834/worshop/Ellipse_9_xs1gib.png' alt='HTML' />
                    </Circulo>
              </div>
              <Text>HTML</Text>                  
              

              <CssJContainer>
                  <div>
                        <Circulo>
                            <ImgCategory src='https://res.cloudinary.com/dfp8qduho/image/upload/v1643377834/worshop/css_ve8iym.png' alt='CSS' />
                        </Circulo>
                      <Text>CSS</Text>
                  </div>

                  <div>
                      <Circulo>
                      <ImgCategory src='https://res.cloudinary.com/dfp8qduho/image/upload/v1643377835/worshop/js_azalbz.png' alt='JS' />
                      </Circulo>
                      <Text>JS</Text>
                  </div>
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