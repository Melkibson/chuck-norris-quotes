import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../CommonStyle";
const QuoteButton = styled.button`
  background-color: ${colors.salmon};
  border: none;
  border-radius: 5px;
  padding: 1em 2em;
  margin-top: 1em;
  font-family: "Akkurat";
  font-size: 1rem;
  color: ${colors.black};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${colors.salmonHover};
  }
`;
export default function Button({ label, onClick }) {
  return <QuoteButton onClick={onClick}>{label}</QuoteButton>;
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
