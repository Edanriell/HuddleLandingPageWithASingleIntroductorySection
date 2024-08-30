import { FC } from "react";

import { MainLayout } from "@widgets/layouts/main/ui";

import { Link } from "@shared/ui/button/ui";

import {
	DesktopInterfaceIllustration,
	Home,
	HomeContent,
	HomePageWrapper,
	HomeText,
	HomeTitle,
	IllustrationsWrapper,
	MobileInterfaceIllustration
} from "./styles";

export const HomePage: FC = () => {
	return (
		<MainLayout>
			<HomePageWrapper>
				<Home>
					<IllustrationsWrapper>
						<DesktopInterfaceIllustration
							src="/images/vector/interface-large.svg"
							alt="Desktop web interface illustration"
						/>
						<MobileInterfaceIllustration
							src="/images/vector/interface-small.svg"
							alt="Mobile web interface illustration"
						/>
					</IllustrationsWrapper>
					<HomeContent>
						<HomeTitle>Build The Community Your Fans Will Love</HomeTitle>
						<HomeText>
							Huddle re-imagines the way we build communities. You have a voice, but so does your
							audience. Create connections with your users as you engage in genuine discussion.{" "}
						</HomeText>
						<Link href="#">Register</Link>
					</HomeContent>
				</Home>
			</HomePageWrapper>
		</MainLayout>
	);
};
