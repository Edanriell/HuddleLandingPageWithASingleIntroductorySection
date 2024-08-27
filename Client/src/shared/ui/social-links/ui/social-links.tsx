import { FC, Fragment } from "react";

import { Icon } from "@shared/ui/icon/ui";

import { SocialLink, SocialLinks, SocialLinkWrapper } from "./styles";

type SocialLinksListProps = {
	classes?: string;
};

export const SocialLinksList: FC<SocialLinksListProps> = ({ classes }) => {
	const socialLinks = [
		{
			href: "#",
			name: "Facebook profile",
			Icon: () => <Icon type="facebook" />
		},
		{
			href: "#",
			name: "Twitter profile",
			Icon: () => <Icon type="twitter" />
		},
		{
			href: "#",
			name: "Instagram profile",
			Icon: () => <Icon type="instagram" />
		}
	];

	const renderSocialLinks = () => {
		return (
			<Fragment>
				{socialLinks.map(({ href, name, Icon }, index) => {
					return (
						<SocialLinkWrapper key={index + "-" + name}>
							<SocialLink href={href} target="_blank">
								<span className="visually-hidden">{name}</span>
								<Icon />
							</SocialLink>
						</SocialLinkWrapper>
					);
				})}
			</Fragment>
		);
	};

	return <SocialLinks className={classes}>{renderSocialLinks()}</SocialLinks>;
};
