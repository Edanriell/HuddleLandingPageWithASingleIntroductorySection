import { FC, ReactNode } from "react";

import { Header } from "@widgets/header/ui";
import { Footer } from "@widgets/footer/ui";

import {
	ContentWrapper,
	StripeDownDesktop,
	StripeLeftMobile,
	StripeRightMobile,
	StripeUpDesktop
} from "@widgets/layouts/main/ui/styles.ts";

type MainLayoutProps = {
	children: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	return (
		<ContentWrapper>
			<StripeRightMobile src="/images/vector/figures/stripe-right-mobile.svg" alt="" />
			<StripeLeftMobile src="/images/vector/figures/stripe-left-mobile.svg" alt="" />
			<StripeUpDesktop src="/images/vector/figures/stripe-up-desktop.svg" alt="" />
			<StripeDownDesktop src="/images/vector/figures/stripe-down-desktop.svg" alt="" />
			<Header />
			{children}
			<Footer />
		</ContentWrapper>
	);
};
