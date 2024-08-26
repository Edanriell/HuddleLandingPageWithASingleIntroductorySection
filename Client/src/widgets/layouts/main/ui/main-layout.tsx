import { FC, Fragment, ReactNode } from "react";

import { Header } from "@widgets/header/ui";
import { Footer } from "@widgets/footer/ui";

type MainLayoutProps = {
	children: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	return (
		<Fragment>
			<Header />
			{children}
			<Footer />
		</Fragment>
	);
};
