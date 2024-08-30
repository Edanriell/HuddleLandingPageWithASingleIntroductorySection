import { FC, ReactNode } from "react";

import { Header } from "@widgets/header/ui";
import { Footer } from "@widgets/footer/ui";

import {
	CircleDesktopW98,
	ContentWrapper,
	CrossDesktopW53,
	RectangleDesktopW17,
	RectangleDesktopW32,
	RectangleDesktopW322,
	RectangleDesktopW38,
	RectangleDesktopW56,
	RectangleMobileW17,
	RectangleMobileW18,
	RectangleMobileW28,
	RectangleMobileW42,
	RectangleMobileW9,
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
			<RectangleMobileW42 src="/images/vector/figures/rectangle.svg" alt="" />
			<RectangleMobileW28 src="/images/vector/figures/rectangle.svg" alt="" />
			<RectangleMobileW18 src="/images/vector/figures/rectangle.svg" alt="" />
			<RectangleMobileW17 src="/images/vector/figures/rectangle.svg" alt="" />
			<RectangleMobileW9 src="/images/vector/figures/rectangle.svg" alt="" />
			<RectangleDesktopW56 src="/images/vector/figures/rectangle.svg" alt="" />
			<RectangleDesktopW32 src="/images/vector/figures/rectangle.svg" alt="" />
			<RectangleDesktopW322 src="/images/vector/figures/rectangle.svg" alt="" />
			<RectangleDesktopW17 src="/images/vector/figures/rectangle.svg" alt="" />
			<RectangleDesktopW38 src="/images/vector/figures/rectangle.svg" alt="" />
			<CircleDesktopW98 src="/images/vector/figures/circle.svg" alt="" />
			<CrossDesktopW53 src="/images/vector/figures/cross.svg" alt="" />
		</ContentWrapper>
	);
};
