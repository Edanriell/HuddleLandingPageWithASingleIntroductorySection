import "./link.less";

import { FC, ReactNode, useState } from "react";
import { motion, MotionProps } from "framer-motion";

type LinkProps = {
	children: ReactNode;
	href: string;
	target?: "_parent" | "_blank" | "_self" | "_top";
} & MotionProps;

const decorativeCircleAnimationVariants = {
	displayed: {
		opacity: 1,
		scale: 102,
		x: "-50%",
		y: "-50%"
	},
	hidden: {
		opacity: 0,
		scale: 1,
		x: "-50%",
		y: "-50%"
	}
};

const linkAnimationVariants = {
	hover: {
		scale: 1.1,
		color: "#ffffff"
	},
	tap: { scale: 0.95, color: "#ffffff" }
};

export const Link: FC<LinkProps> = ({ children, href, target }) => {
	const [isLinkHovered, setIsLinkHovered] = useState<boolean>(false);

	const handleLinkMouseEnter = () => {
		setIsLinkHovered(true);
	};

	const handleLinkMouseLeave = () => {
		setIsLinkHovered(false);
	};

	return (
		<motion.a
			variants={linkAnimationVariants}
			whileHover="hover"
			whileTap="tap"
			onMouseEnter={handleLinkMouseEnter}
			onMouseLeave={handleLinkMouseLeave}
			className="link"
			href={href}
			target={target}
		>
			<div className="link__content">{children}</div>
			<motion.svg
				animate={isLinkHovered ? "displayed" : "hidden"}
				variants={decorativeCircleAnimationVariants}
				className="link__decorative-circle"
				viewBox="0 0 100 100"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="50" cy="50" r="1" />
			</motion.svg>
		</motion.a>
	);
};
