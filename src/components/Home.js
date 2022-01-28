import React from 'react';
import { CategoriasContainer, CssJContainer, Text, TitleContainer } from '../styles/HomeStyles';


const Home = () => {
  return(
      <div>
          <TitleContainer>
              <h3>Practica tus conocimientos en la categoria que prefieras</h3>
          </TitleContainer>

          <CategoriasContainer>
              <div>
              <img src='https://res.cloudinary.com/dfp8qduho/image/upload/v1643377834/worshop/Ellipse_9_xs1gib.png' alt='HTML' />
              <Text>HTML</Text>                  
              </div>

              <CssJContainer>
                  <div>
                      <img src='https://res.cloudinary.com/dfp8qduho/image/upload/v1643377834/worshop/css_ve8iym.png' alt='CSS' />
                      <Text>CSS</Text>
                  </div>

                  <div>
                      <img src='https://res.cloudinary.com/dfp8qduho/image/upload/v1643377835/worshop/js_azalbz.png' alt='CSS' />
                      <Text>JS</Text>
                  </div>
             </CssJContainer>
          </CategoriasContainer>


          <div>
            <button><img src='https://res.cloudinary.com/dfp8qduho/image/upload/v1643377835/worshop/home_dzvtz7.png' /></button>
            <button><img src='https://res.cloudinary.com/dfp8qduho/image/upload/v1643377835/worshop/stadist_borcfw.png' /></button>
            <button><img src='https://res.cloudinary.com/dfp8qduho/image/upload/v1643377835/worshop/profile_amkdle.png' /></button>
          </div>
      </div>
  );
};

export default Home;