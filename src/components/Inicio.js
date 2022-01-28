
import React, { Component } from 'react';

export default class Inicio extends Component {

  render() {
    return 
      <Body>
        <Contenedor>
          <Img></Img>
          <H1>Iniciar Sesion</H1>
          <Button>Continuar con Google</Button>
          <Input type="text" placeholder="Ingrese su correo electronico"></Input>
          <P>¿Se te olvido tu contraseña?</P>
          <P>¿Aun no tienes una cuenta?<A>Inscribirse</A></P>
        </Contenedor>
        <Button>Normal</Button>
        <Button primary>Primary</Button>
      </Body>
  }
}

