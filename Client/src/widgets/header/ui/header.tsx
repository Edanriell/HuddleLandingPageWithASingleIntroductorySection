import { FC } from "react";

import { Logotype } from "@shared/ui/logotype/ui";

import { StyledHeader } from "./styles";

export const Header: FC = () => {
	return (
		<StyledHeader>
			<Logotype />
		</StyledHeader>
	);
};
