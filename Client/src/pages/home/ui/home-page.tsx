import { FC } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const HomePage: FC = () => {
	return <h1>Home Page</h1>;
};

export const Route = createFileRoute("/home/ui/home-page")({
	component: HomePage
});
