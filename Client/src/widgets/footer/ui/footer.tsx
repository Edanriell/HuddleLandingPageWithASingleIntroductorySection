import { FC } from "react";

import { SocialLinksList } from "@shared/ui/social-links/ui";

import { StyledFooter } from "./styles";

export const Footer: FC = () => {
	return (
		<StyledFooter>
			<SocialLinksList />
		</StyledFooter>
	);
};
