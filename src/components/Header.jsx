import styled from 'styled-components'
import PropTypes from 'prop-types'
import { breakpoints } from '../CommonStyle'
const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${breakpoints.desktop} {
    flex-direction: row;
  }
`;
const Image = styled.img`
  width: 100%;
  max-width: 500px;
  padding-bottom: 20px;
`
const Heading = styled.h1`
  font-size: 6rem;
  font-family: 'Superfly';

`
const Story = styled.p`
  font-size: 1.2rem;
  font-family: "Akkurat-Bold";
  padding-bottom: 2em;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 700px;
`
export default function Header({label, image, alt, story }) {
  return (
    <HeaderContainer>
      <Container>
        <Heading>{label}</Heading>
        <Story>{story}</Story>
      </Container>

      <Image src={image} alt={alt} />
    </HeaderContainer>
  );
}

Header.propTypes = {
  label: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  story: PropTypes.string.isRequired
}