import { FC, Fragment, ReactNode } from "react";

import { Header } from "@widgets/header/ui";
import { Footer } from "@widgets/footer/ui";

import { StripeLeftMobile, StripeRightMobile } from "@widgets/layouts/main/ui/styles.ts";

type MainLayoutProps = {
	children: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	return (
		<Fragment>
			<StripeRightMobile src="/images/vector/figures/stripe-right-mobile.svg" alt="" />
			<StripeLeftMobile src="/images/vector/figures/stripe-left-mobile.svg" alt="" />
			<Header />
			{children}
			<Footer />
		</Fragment>
	);
};
