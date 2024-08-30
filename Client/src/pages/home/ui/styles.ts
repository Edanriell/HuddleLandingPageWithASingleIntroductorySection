import styled from "styled-components";

export const HomePageWrapper = styled.main`
	padding-left: 40rem;
	padding-right: 40rem;
	position: relative;
	z-index: 2;
	display: block;
	flex: 1 1 auto;

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

	@media (width >= 1440px) {
		flex-direction: row;
		column-gap: 97rem;
	}
`;

export const IllustrationsWrapper = styled.div`
	position: relative;
	margin-top: 32rem;
	margin-bottom: 92rem;
	z-index: 2;

	@media (width >= 1440px) {
		margin-top: 40rem;
		margin-bottom: 69rem;
	}
`;

export const DesktopInterfaceIllustration = styled.img`
	position: relative;
	width: 279rem;
	height: 174rem;
	z-index: 2;

	@media (width >= 1440px) {
		width: auto;
		height: auto;
	}
`;

export const MobileInterfaceIllustration = styled.img`
	position: absolute;
	bottom: -35rem;
	right: -14rem;
	width: 93rem;
	height: 148rem;
	z-index: 2;

	@media (width >= 1440px) {
		width: auto;
		height: auto;
		bottom: -80rem;
		right: -37rem;
	}
`;

export const HomeContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 620rem;

	@media (width >= 1440px) {
		align-items: flex-start;
		align-self: flex-start;
		margin-top: 72rem;
	}
`;

export const HomeTitle = styled.h1`
	font-family: var(--font-family), sans-serif;
	font-weight: 600;
	font-size: 24rem;
	line-height: 150%;
	text-align: center;
	color: var(--white);
	margin-bottom: 16rem;

	@media (width >= 1440px) {
		font-family: var(--font-family), sans-serif;
		font-size: 40rem;
		margin-bottom: 24rem;
		text-align: left;
	}
`;

export const HomeText = styled.p`
	font-family: var(--second-family), sans-serif;
	font-weight: 400;
	font-size: 16rem;
	line-height: 150%;
	text-align: center;
	color: var(--white);
	margin-bottom: 24rem;

	@media (width >= 1440px) {
		font-size: 18rem;
		text-align: left;
		max-width: 490rem;
	}
`;
