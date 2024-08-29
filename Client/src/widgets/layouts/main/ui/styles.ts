import styled from "styled-components";

export const ContentWrapper = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`;

export const StripeRightMobile = styled.img`
	position: absolute;
	top: -38rem;
	right: 0;
	z-index: 1;
	width: 375rem;
	height: 314rem;

	@media (width >= 1440px) {
		display: none;
	}
`;

export const StripeLeftMobile = styled.img`
	position: absolute;
	top: 38rem;
	left: 0;
	z-index: 1;
	width: 375rem;
	height: 259rem;

	@media (width >= 1440px) {
		display: none;
	}
`;

export const StripeUpDesktop = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	display: none;

	@media (width >= 1440px) {
		display: block;
	}
`;

export const StripeDownDesktop = styled.img`
	position: absolute;
	bottom: 0;
	left: 0;
	display: none;

	@media (width >= 1440px) {
		display: block;
	}
`;
