import styled from "styled-components";

export const StyledHeader = styled.header`
	position: relative;
	padding-left: 40rem;
	padding-right: 40rem;
	margin-top: 38rem;
	margin-bottom: 38rem;
	z-index: 2;

	@media (width >= 1440px) {
		padding-left: 80rem;
		padding-right: 80rem;
		margin-top: 64rem;
		margin-bottom: 64rem;
	}
`;
