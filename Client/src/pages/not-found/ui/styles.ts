import styled from "styled-components";

export const NotFoundPageWrapper = styled.main`
	padding-left: 40rem;
	padding-right: 40rem;
	position: relative;
	z-index: 2;
	min-height: 100%;

	@media (width >= 1440px) {
		padding-left: 80rem;
		padding-right: 80rem;
	}
`;

export const NotFound = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
`;

export const NotFoundTitle = styled.h1`
	font-family: var(--font-family), sans-serif;
	font-weight: 600;
	font-size: 48rem;
	line-height: 150%;
	text-align: center;
	color: var(--white);
	margin-bottom: 16rem;

	@media (width >= 1440px) {
		font-family: var(--font-family), sans-serif;
		font-size: 64rem;
		margin-bottom: 24rem;
		text-align: left;
	}
`;

export const NotFoundText = styled.p`
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
