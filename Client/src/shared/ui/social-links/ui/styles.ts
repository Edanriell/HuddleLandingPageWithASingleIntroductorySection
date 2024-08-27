import styled from "styled-components";

export const SocialLinks = styled.ul`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	column-gap: 10.5rem;

	@media (width >= 1440px) {
		column-gap: 16rem;
	}
`;

export const SocialLinkWrapper = styled.li`
	position: relative;
`;

export const SocialLink = styled.a`
	position: relative;
	box-sizing: border-box;
	display: block;
	width: 27.5rem;
	height: 28rem;
	border-radius: 100%;
	background-color: rgba(0, 0, 0, 0);
	border: 1rem solid #ffffff;
	color: #ffffff;
	z-index: 1;

	@media (width >= 1440px) {
		width: 40rem;
		height: 40rem;
	}
`;
