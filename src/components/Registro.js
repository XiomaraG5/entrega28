import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Body, Contenedor, Img, H1, Button, Input, P } from '../styles/InicioStyles';

export default class Registro extends Component {
  render() {
    return <div>
      <Body>
         <Contenedor>
           <Img src='https://res.cloudinary.com/dfp8qduho/image/upload/v1643377834/worshop/Color_Purple_Container_Yes_nrvkmv.png' alt="imagen"/>
           <H1>Registrar cuenta</H1>

           <P>Correo electronico</P>

           <Input type="text" placeholder="Ingrese su Nombe"></Input>

           <P>Correo electronico</P>

           <Input type="text" placeholder="Ingrese su correo electronico"></Input>

           <P>Contraseña</P>

           <Input type="password" placeholder="Ingrese su contraseña"></Input>
           <br></br>

         <Button>Registrar cuenta</Button>

           <P>¿ya tienes una cuenta?  <NavLink href="/Inicio">Log In</NavLink></P>
        </Contenedor>
      </Body>
    </div>;
  }
}





// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { Body, Contenedor, Img, H1, Button, Input, P } from '../styles/InicioStyles';

// export const Registro = () => {
//   return (
//     <div>
//       <Body>
//         <Contenedor>
//           <Img src='https://res.cloudinary.com/dfp8qduho/image/upload/v1643377834/worshop/Color_Purple_Container_Yes_nrvkmv.png' alt="imagen"/>
//           <H1>Registrar cuenta</H1>

//           <P>Correo electronico</P>

//           <Input type="text" placeholder="Ingrese su Nombe"></Input>

//           <P>Correo electronico</P>

//           <Input type="text" placeholder="Ingrese su correo electronico"></Input>

//           <P>Contraseña</P>

//           <Input type="password" placeholder="Ingrese su contraseña"></Input>
//           <br></br>

//           <Button>Registrar cuenta</Button>

//           <P>¿ya tienes una cuenta?  <NavLink href="/Inicio">Log In</NavLink></P>
//         </Contenedor>
//       </Body>

//   </div>
//   );
// };
