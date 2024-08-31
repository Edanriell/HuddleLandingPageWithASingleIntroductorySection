import styled from "styled-components";

export const SocialLinks = styled.ul`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	column-gap: 10.5rem;

	@media (width >= 1440px) {
		column-gap: 16rem;
		justify-content: flex-end;
	}
`;

export const SocialLinkWrapper = styled.li`
	position: relative;
`;
