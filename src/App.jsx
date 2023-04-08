import React from 'react'
import { PrincipalContainer, RiscoFundo, RiscoFundo2, ImageLogo, Container, Telas, Textos, T1, T2, T3, T4, T5, X } from './style'
import RiscoOne from './assets/Path 2.png'
import RiscoTwo from './assets/Path 2 Copy.png'
import Logo from './assets/logo.png'
import Tela from './assets/Group 41.png'
import Tr1 from './assets/Rectangle Copy 2.png'
import Tr2 from './assets/Rectangle Copy 2 copy.png'
import Tr3 from './assets/Rectangle.png'
import Tr4 from './assets/Rectangle 2.png'
import Tr5 from './assets/Rectangle3.png'
import ImageX from './assets/Combined Shape.png'


function App() {

  return (
    <PrincipalContainer>
      <ImageLogo><img src={Logo} alt="" /></ImageLogo>
      <RiscoFundo2><img src={RiscoOne} /></RiscoFundo2>
      <RiscoFundo><img src={RiscoTwo} /></RiscoFundo>
      <T1> <img src={Tr1} alt="" /> </T1>
      <T2> <img src={Tr2} alt="" /> </T2>
      <T3> <img src={Tr3} alt="" /> </T3>
      <T4> <img src={Tr4} alt="" /> </T4>
      <T5> <img src={Tr5} alt="" /> </T5>
      <X> <img src={ImageX} alt="" /> </X>

      <Container>
        <Telas><img src={Tela} alt="" /></Telas>
        <Textos>
          <h1>Build the Community <br /> Your fans Will Love</h1>
          <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. </p>
          <button>Register</button>
        </Textos>
      </Container>
    </PrincipalContainer>
  )
}

export default App
