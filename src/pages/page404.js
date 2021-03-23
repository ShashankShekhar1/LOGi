import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Codewithlogi
			</title>
			<meta name={"description"} content={"we are a website, app & Instagram page with trust of 150+ active visiters and 700+ Followers. We post content\nrelated to programming, Digital Marketig & many more."} />
			<meta property={"og:title"} content={"codwithlogi"} />
			<meta property={"og:description"} content={"we are a website, app & Instagram page with trust of 150+ active visiters and 700+ Followers. We post content\nrelated to programming, Digital Marketig & many more."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/603b7c75465b2a001e0eb1b3/images/adf.PNG?v=2021-03-04T04:40:52.554Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/603b7c75465b2a001e0eb1b3/images/adf.PNG?v=2021-03-04T04:40:52.554Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/603b7c75465b2a001e0eb1b3/images/adf.PNG?v=2021-03-04T04:40:52.554Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/603b7c75465b2a001e0eb1b3/images/adf.PNG?v=2021-03-04T04:40:52.554Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/603b7c75465b2a001e0eb1b3/images/adf.PNG?v=2021-03-04T04:40:52.554Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/603b7c75465b2a001e0eb1b3/images/adf.PNG?v=2021-03-04T04:40:52.554Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/603b7c75465b2a001e0eb1b3/images/adf.PNG?v=2021-03-04T04:40:52.554Z"} />
			<meta name={"msapplication-TileColor"} content={"#fa0505"} />
		</Helmet>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});