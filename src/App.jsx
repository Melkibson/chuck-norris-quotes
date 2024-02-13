import Header from './components/Header'
import chuck from './assets/images/chuck.png'
import styled from 'styled-components'
import {Wrapper} from './components/Wrapper'
import { GlobalStyle } from './GlobalStyle'
import Button from './components/Button'
import Quote from './components/Quote'
import { useState } from 'react'

const Main = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(
    45deg,
    #ff9a9e 0%,
    #fad0c4 99%,
    #fad0c4 100%
  );

  @media (min-width: 1200px) {
    height: 100vh;
  }
`;

function App() {
  const [quote, setQuote] = useState('Chuck Norris can divide by zero.')

  const handleQuote = () => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => response.json())
    .then((data) => setQuote(data.value))
    .catch((error) => console.log('Something went wrong with the quote', error))
  }


  return (
    <>
      <GlobalStyle />
      <Main>
        <Wrapper>
          <Button label="Get a new quote" onClick={handleQuote} />
          <Quote quote={quote} />
          <Header
            label="Chuck Norris Quotes"
            image={chuck}
            alt="Chuck Norris riding a unicorn blasting his guns"
            story="Chuck Norris is a legend who defies the very laws of physics. 
        In his realm, he roundhouse kicks through the fabric of reality, 
        where not even gravity can hold him down. He is a force beyond nature, capable of achieving the impossible. 
        In his world, he chases the horizon, catches it, and laughs in the face of the unattainable. 
        He is the only one who won a staring contest against the sun, and he did it with his eyes closed."
          />
        </Wrapper>
      </Main>
    </>
  );
}

export default App
