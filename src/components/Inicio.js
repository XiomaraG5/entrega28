
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Body, Contenedor, Img, H1, Button, Input, P } from '../styles/InicioStyles';

export const Inicio = () => {
  return (

      <Body>

        <Contenedor>

          <Img src='https://res.cloudinary.com/dfp8qduho/image/upload/v1643377834/worshop/Color_Purple_Container_Yes_nrvkmv.png' alt="imagen"/>

          <H1>Iniciar Sesion</H1>

          <NavLink to={"/home"}><Button>Continuar con Google</Button> </NavLink> 
          
          <P>Correo electronico</P>

          <Input type="text" placeholder="Ingrese su correo electronico"></Input>
          <br></br>
         <NavLink href={"/home"}> <Button>Iniciar Sesion</Button></NavLink>

          <P>¿Se te olvido tu contraseña?</P>

          <P>¿Aun no tienes una cuenta?  <NavLink to={"/home"}>Inscribirse</NavLink></P>
        </Contenedor>
      </Body>
  )
};


