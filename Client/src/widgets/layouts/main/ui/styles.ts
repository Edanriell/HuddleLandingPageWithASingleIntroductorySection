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

export const RectangleMobileW42 = styled.img`
	position: absolute;
	width: 42rem;
	height: 42rem;
	top: 270rem;
	left: 48rem;
	z-index: 1;

	@media (width >= 1440px) {
		display: none;
	}
`;

export const RectangleMobileW28 = styled.img`
	position: absolute;
	width: 28rem;
	height: 28rem;
	top: 181rem;
	right: 28rem;
	z-index: 1;

	@media (width >= 1440px) {
		display: none;
	}
`;

export const RectangleMobileW18 = styled.img`
	position: absolute;
	width: 18rem;
	height: 18rem;
	top: 332rem;
	left: 152rem;
	z-index: 1;

	@media (width >= 1440px) {
		display: none;
	}
`;

export const RectangleMobileW17 = styled.img`
	position: absolute;
	width: 17rem;
	height: 17rem;
	top: 335rem;
	right: 38rem;
	z-index: 1;

	@media (width >= 1440px) {
		display: none;
	}
`;

export const RectangleMobileW9 = styled.img`
	position: absolute;
	width: 9rem;
	height: 9rem;
	top: 360rem;
	left: 116rem;
	z-index: 1;

	@media (width >= 1440px) {
		display: none;
	}
`;

export const RectangleDesktopW56 = styled.img`
	position: absolute;
	width: 56rem;
	height: 56rem;
	z-index: 1;
	top: 64rem;
	right: 120.8rem;
	display: none;

	@media (width >= 1440px) {
		display: block;
	}
`;

export const RectangleDesktopW32 = styled.img`
	position: absolute;
	width: 32rem;
	height: 32rem;
	z-index: 1;
	top: 41rem;
	right: 482.75rem;
	display: none;

	@media (width >= 1440px) {
		display: block;
	}
`;

export const RectangleDesktopW322 = styled.img`
	position: absolute;
	width: 32rem;
	height: 32rem;
	z-index: 1;
	top: 164rem;
	right: 713.75rem;
	display: none;

	@media (width >= 1440px) {
		display: block;
	}
`;

export const RectangleDesktopW17 = styled.img`
	position: absolute;
	width: 17rem;
	height: 17rem;
	z-index: 1;
	top: 594rem;
	right: 190.96rem;
	display: none;

	@media (width >= 1440px) {
		display: block;
	}
`;

export const RectangleDesktopW38 = styled.img`
	position: absolute;
	width: 38rem;
	height: 38rem;
	z-index: 1;
	top: 682rem;
	right: 305.26rem;
	display: none;

	@media (width >= 1440px) {
		display: block;
	}
`;

export const CircleDesktopW98 = styled.img`
	position: absolute;
	width: 98rem;
	height: 98rem;
	z-index: 1;
	top: 514rem;
	right: 687rem;
	display: none;

	@media (width >= 1440px) {
		display: block;
	}
`;

export const CrossDesktopW53 = styled.img`
	position: absolute;
	width: 53rem;
	height: 53rem;
	z-index: 1;
	top: 707rem;
	left: 59rem;
	display: none;

	@media (width >= 1440px) {
		display: block;
	}
`;
