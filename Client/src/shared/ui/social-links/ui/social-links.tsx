import "./social-links.less";

import { FC, Fragment } from "react";
import { motion } from "framer-motion";

import { Icon } from "@shared/ui/icon/ui";

import { SocialLinks, SocialLinkWrapper } from "./styles";

type SocialLinksListProps = {
	classes?: string;
};

const socialLinksAnimationVariants = {
	hover: {
		scale: 1.15,
		color: "#ff52c1",
		borderColor: "#ff52c1"
	},
	tap: {
		scale: 0.85,
		color: "#ff52c1",
		borderColor: "#ff52c1"
	}
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
							<motion.a
								variants={socialLinksAnimationVariants}
								whileHover="hover"
								whileTap="tap"
								className="social-link"
								href={href}
								target="_blank"
							>
								<span className="visually-hidden">{name}</span>
								<Icon />
							</motion.a>
						</SocialLinkWrapper>
					);
				})}
			</Fragment>
		);
	};

	return <SocialLinks className={classes}>{renderSocialLinks()}</SocialLinks>;
};
