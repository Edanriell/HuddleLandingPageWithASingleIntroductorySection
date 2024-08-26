import { FC } from "react";

export const Logotype: FC = () => {
	return (
		<picture>
			<source
				type="image/webp"
				media="(min-width: 1440px)"
				srcSet="/images/raster/logotype-desktop@1x.webp 1x, /images/raster/logotype-desktop@2x.webp 2x"
			/>
			<source
				type="image/webp"
				media="(min-width: 375px)"
				srcSet="/images/raster/logotype-mobile@1x.webp 1x, /images/raster/logotype-mobile@2x.webp 2x"
			/>
			<source
				type="image/png"
				media="(min-width: 1440px)"
				srcSet="/images/raster/logotype-desktop@1x.png 1x, /images/raster/logotype-desktop@2x.png 2x"
			/>
			<source
				type="image/png"
				media="(min-width: 375px)"
				srcSet="/images/raster/logotype-mobile@1x.png 1x, /images/raster/logotype-mobile@2x.png 2x"
			/>
			<img
				src="/images/raster/logotype-mobile@1x.png"
				srcSet="/images/raster/logotype-mobile@2x.png"
				alt="Huddle company logotype"
			/>
		</picture>
	);
};
