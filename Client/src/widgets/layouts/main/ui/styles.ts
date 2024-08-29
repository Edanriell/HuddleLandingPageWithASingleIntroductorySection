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

export const RectangleMobile42 = styled.img`
	position: absolute;
	width: 42rem;
	height: 42rem;
	top: 270rem;
	left: 48rem;
	z-index: 1;
`;

export const RectangleMobile28 = styled.img`
	position: absolute;
	width: 28rem;
	height: 28rem;
	top: 181rem;
	right: 28rem;
	z-index: 1;
`;

export const RectangleMobile18 = styled.img`
	position: absolute;
	width: 18rem;
	height: 18rem;
	top: 332rem;
	left: 152rem;
	z-index: 1;
`;

export const RectangleMobile17 = styled.img`
	position: absolute;
	width: 17rem;
	height: 17rem;
	top: 335rem;
	right: 38rem;
	z-index: 1;
`;

export const RectangleMobile9 = styled.img`
	position: absolute;
	width: 9rem;
	height: 9rem;
	top: 360rem;
	left: 116rem;
	z-index: 1;
`;
