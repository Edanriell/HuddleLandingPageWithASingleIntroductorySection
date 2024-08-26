import { FC } from "react";

import { Logotype } from "@shared/ui/logotype/ui";

import { HeaderBar } from "./styles";

export const Header: FC = () => {
	return (
		<HeaderBar>
			<Logotype />
		</HeaderBar>
	);
};
