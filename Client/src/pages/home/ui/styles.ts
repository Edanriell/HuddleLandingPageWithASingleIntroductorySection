import styled from "styled-components";

export const HomePageWrapper = styled.main`
	padding-left: 40rem;
	padding-right: 40rem;

	@media (width >= 1440px) {
		padding-left: 80rem;
		padding-right: 80rem;
	}
`;

export const Home = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const IllustrationsWrapper = styled.div`
	position: relative;
	margin-top: 32rem;
	margin-bottom: 92rem;
`;

export const DesktopInterfaceIllustration = styled.img`
	position: relative;
	width: 279rem;
	height: 174rem;
`;

export const MobileInterfaceIllustration = styled.img`
	position: absolute;
	bottom: -35rem;
	right: -14rem;
	width: 93rem;
	height: 148rem;
`;

export const HomeTitle = styled.h1`
	font-family: var(--font-family), sans-serif;
	font-weight: 600;
	font-size: 24rem;
	line-height: 150%;
	text-align: center;
	color: var(--white);
	margin-bottom: 16rem;
`;

export const HomeText = styled.p`
	font-family: var(--second-family), sans-serif;
	font-weight: 400;
	font-size: 16rem;
	line-height: 150%;
	text-align: center;
	color: var(--white);
	margin-bottom: 24rem;
`;

export const Link = styled.a`
	border-radius: 20rem;
	box-shadow: 1rem 3rem 5rem 0 rgba(0, 0, 0, 0.27);
	background: var(--white);
	font-family: var(--font-family), sans-serif;
	font-weight: 400;
	font-size: 12rem;
	line-height: 150%;
	text-align: center;
	color: var(--swiss-plum);
	padding: 11rem 75rem 10rem 75rem;
`;

export const RectangleMobile42 = styled.img`
	position: absolute;
	width: 42rem;
	height: 42rem;
	top: 136rem;
	left: -2rem;
	z-index: 2;
`;

export const RectangleMobile28 = styled.img`
	position: absolute;
	width: 28rem;
	height: 28rem;
	top: 49rem;
	right: -20rem;
	z-index: 2;
`;

export const RectangleMobile18 = styled.img`
	position: absolute;
	width: 18rem;
	height: 18rem;
	top: 205rem;
	left: 112rem;
	z-index: 2;
`;

export const RectangleMobile17 = styled.img`
	position: absolute;
	width: 17rem;
	height: 17rem;
	top: 202rem;
	right: -12rem;
	z-index: 2;
`;

export const RectangleMobile9 = styled.img`
	position: absolute;
	width: 9rem;
	height: 9rem;
	top: 233rem;
	left: 76rem;
	z-index: 2;
`;
