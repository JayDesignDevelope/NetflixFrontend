import styled from 'styled-components/macro';

export const Container = styled.div`color: #fff;`;

export const Inner = styled.div`
	max-width: 50rem;
	margin: 4rem auto 5rem;
	@media (max-width: 600px) {
		margin: 2.5rem auto 4.5rem;
	}
`;

export const Title = styled.p`
	font-weight: 500;
	font-size: 1.15rem;
	text-align: center;
	@media (max-width: 600px) {
		font-size: 0.9rem;
	}
`;

export const Panel = styled.div`
	margin: 1rem 5rem;
	display: flex;
	justify-content: space-around;

	@media (max-width: 1000px) {
		margin: 1rem 2rem;
	}
	@media (max-width: 600px) {
		margin: 1rem;
	}
`;

export const Input = styled.input`
  color: aliceblue;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 31.0311px 31.0311px rgba(69, 42, 124, 0.15);
  backdrop-filter: blur(10.3437px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 5.17185px 0px 0px 5.17185px;
  flex-grow: 2;
  padding: 1rem;
  outline: none;
  border: none;
  @media (max-width: 600px) {
    padding: 0.5rem;
    font-size: 0.85rem;
  }
`;

export const Button = styled.button`
	flex-grow: 1;
  background: linear-gradient(180deg, rgba(255, 0, 0, 0.66) 21.67%, rgba(255, 0, 0, 0) 156.38%);
  filter: drop-shadow(0px 31.0311px 31.0311px rgba(69, 42, 124, 0.15));
  backdrop-filter: blur(10.3437px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 0px 10.3437px 10.3437px 0px;
	color: #fff;
	font-size: 1.5rem;
	padding: 1rem 0.25rem;
	display: flex;
	justify-content: space-evenly;
	place-items: center;
	border: none;
	cursor: pointer;
	transition: all 0.1s ease-in;

	&:hover {
		background-color: #9c151c;
	}

	.MuiSvgIcon-root {
		font-size: 1.15rem;
	}

	@media (max-width: 600px) {
		font-size: 0.85rem;
		.MuiSvgIcon-root {
			font-size: 0.65rem;
		}
	}
`;
