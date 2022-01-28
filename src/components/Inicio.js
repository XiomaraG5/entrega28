import React from 'react';
import { Body, Contenedor, Img, H1, Button, Input, P, A  } from '../styles/InicioStyles';

const Inicio = () => {
  return (
    <div>
      <Body>
        <Contenedor>
          <Img src='https://res.cloudinary.com/dfp8qduho/image/upload/v1643377834/worshop/Color_Purple_Container_Yes_nrvkmv.png' alt="imagen"/>
          <H1>Iniciar Sesion</H1>
          <Button>Continuar con Google</Button>
          <Input type="text" placeholder="Ingrese su correo electronico"></Input>
          <P>¿Se te olvido tu contraseña?</P>
          <P>¿Aun no tienes una cuenta?  <A href="">Inscribirse</A></P>
        </Contenedor>
      </Body>

  </div>
  );
};

export default Inicio;

