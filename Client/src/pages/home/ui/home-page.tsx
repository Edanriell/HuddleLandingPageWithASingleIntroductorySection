import { FC } from "react";

import { MainLayout } from "@widgets/layouts/main/ui";

import { Home } from "./styles";

export const HomePage: FC = () => {
	return (
		<MainLayout>
			<Home>
				<h1>HomePage</h1>
			</Home>
		</MainLayout>
	);
};
