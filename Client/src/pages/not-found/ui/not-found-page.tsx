import { FC } from "react";

import { Link } from "@shared/ui/link/ui";

import { NotFound, NotFoundPageWrapper, NotFoundText, NotFoundTitle } from "./styles";

export const NotFoundPage: FC = () => {
	return (
		<NotFoundPageWrapper>
			<NotFound>
				<NotFoundTitle>404</NotFoundTitle>
				<NotFoundText>Sorry, the page you are looking for does not exist.</NotFoundText>
				<Link href="/">Go Back to Home</Link>
			</NotFound>
		</NotFoundPageWrapper>
	);
};
