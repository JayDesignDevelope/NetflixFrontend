import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';
import { Spinner as LoadingSpinner } from '../../loading/styles/loading';

export const Container = styled.div`
	display: flex;
	height: 83vh;
	background: linear-gradient(to top, rgb(0 0 0 / 90%) 0, rgb(0 0 0 / 20%) 60%, rgb(0 0 0 / 90%) 100%),
		url('/images/misc/Home_Banner.jpg');
	background-size: cover;
	background-position: 50% 50%;
`;
export const Inner = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.31) 0%, rgba(213, 8, 19, 0.0434) 93.23%, rgba(229, 9, 20, 0) 100%);
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  filter: drop-shadow(0px 50px 100px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(20px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
	max-width: 20rem;
  margin: auto;
	padding: 3.5rem 4.5rem 5.5rem;
	color: #ffff;
	//border-radius: 0.25rem;
`;
export const Title = styled.h1`
	font-size: 2rem;
	margin: 0 0 1.5rem;
`;
export const FormGroup = styled.form`
	display: flex;
	flex-flow: row wrap;
`;
export const Input = styled.input`
	width: 100%;
//(180deg, rgba(255, 0, 0, 0.66) 21.67%, rgba(255, 0, 0, 0) 156.38%);
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 31.0311px 31.0311px rgba(69, 42, 124, 0.15);
  backdrop-filter: blur(10.3437px);
  color: #3D3D3D;	
  padding: 1rem;
  letter-spacing: -0.422023px;
	margin: 0.5rem 0;
	border-radius: 0.25rem;
	outline: none;
	border: none;

  font-style: normal;
  font-weight: 300;
  font-size: 17.5843px;
	border-bottom: 2px solid #333;
	transition: border-bottom 0.25s ease-out;

	&.has-error {
		border-bottom: 2px solid #e87c03;
	}
`;
export const Button = styled.button`
	width: 100%;
	background: linear-gradient(180deg, rgba(255, 0, 0, 0.66) 21.67%, rgba(255, 0, 0, 0) 156.38%);
	color: #fff;
  filter: drop-shadow(0px 31.0311px 31.0311px rgba(69, 42, 124, 0.15));
  backdrop-filter: blur(10.3437px);
	font-weight: 800;
	font-size: 1rem;
	margin-top: 1.5rem;
	padding: 1rem 0.25rem;
	border: none;
	cursor: pointer;
	border-radius: 0.25rem;
	transition: all 0.1s ease-in;

	&:hover {
		background-color: #9c151c;
	}

	&:disabled {
		background-color: #4e2022;
		color: #969696;
		cursor: default;
	}
`;
export const Spinner = styled(LoadingSpinner)`
	background: none;
	width: 2rem;
	height: 0;
	margin-top: -0.15rem;
	:after {
		width: 1.5rem;
		height: 1.5rem;
    filter: contrast(0) brightness(1.75);
		margin-top: 0;
		margin-left: 0;
	}
`;
export const Text = styled.p`
	color: #737373;
	font-size: 1.1rem;
  padding: 3rem 0 0 0;
`;
export const TextSmall = styled.p`
	font-size: 0.8rem;
	color: #8c8c8c;
`;
export const Link = styled(RouterLink)`
	color: #fff;
	text-decoration: none;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`;
export const Error = styled.p`
	margin: 0 0.25rem 0.5rem;
	font-size: 0.85rem;
	color: #e87c03;

	&.boxed {
		background-color: #e87c03;
		color: #fff;
		border-radius: 0.25rem;
		padding: 0.5rem;
	}
`;
