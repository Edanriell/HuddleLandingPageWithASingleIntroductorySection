import styled from "styled-components";

export const FacebookIcon = styled.svg`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: inherit;
	z-index: 2;
	pointer-events: none;
	user-select: none;
	width: 7rem;
	height: 14rem;

	@media (width >= 1440px) {
		width: 9rem;
		height: 19rem;
	}
`;

export const TwitterIcon = styled.svg`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: inherit;
	z-index: 2;
	pointer-events: none;
	user-select: none;
	width: 12rem;
	height: 12rem;

	@media (width >= 1440px) {
		width: 18rem;
		height: 18rem;
	}
`;

export const InstagramIcon = styled.svg`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: inherit;
	z-index: 2;
	pointer-events: none;
	user-select: none;
	width: 13rem;
	height: 13rem;

	@media (width >= 1440px) {
		width: 18rem;
		height: 18rem;
	}
`;
