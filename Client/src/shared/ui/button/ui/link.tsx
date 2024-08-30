import "./link.less";

import { FC, ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";

type LinkProps = {
	children: ReactNode;
	href: string;
	target?: "_parent" | "_blank" | "_self" | "_top";
} & MotionProps;

export const Link: FC<LinkProps> = ({ children, href, target }) => {
	return (
		<motion.a className="link" href={href} target={target}>
			{children}
		</motion.a>
	);
};
