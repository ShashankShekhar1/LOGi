import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Strong, Em } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Section, Override, SocialMedia } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
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
		<Section background="#f40909">
			<Section background="#f90505">
				<Box
					display="flex"
					padding="12px 0"
					justify-content="space-between"
					align-items="center"
					flex-direction="row"
					md-flex-direction="column"
				>
					<Text
						margin="0"
						md-margin="0px 0 20px 0"
						text-align="left"
						font="--lead"
						color="#fdf9f9"
					>
						Logicodes
					</Text>
				</Box>
			</Section>
			<Text
				margin="0px 0 24px 0"
				text-align="center"
				font="--headline2"
				md-font="--headline3"
				color="#fcf8f8"
				text-decoration-line="underline"
				text-shadow="8px 4px 0 #be7f7f"
				background="#f40909"
				box-shadow="6px 0 0 0 transparent"
				hover-transition="--transformInOut"
				hover-transform="scaleX(-1)"
				text-overflow="ellipsis"
				hyphens="auto"
				white-space="nowrap"
				text-indent="4"
				overflow-wrap="break-word"
				word-break="break-word"
				position="sticky"
				bottom="6px"
				left="6px"
				top="6px"
				right="6px"
				mix-blend-mode="screen"
				cursor="crosshair"
				opacity="6"
			>
				#welcome
			</Text>
			<Section
				text-align="center"
				background-color="--primary"
				color="--light"
				padding="100px 0"
				sm-padding="40px 0"
				background="#f40909"
			>
				<Text
					as="h5"
					font="--lead"
					margin="10px 0 0 0"
					text-transform="uppercase"
					letter-spacing="5px"
				>
					Second to none
				</Text>
				<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
					About us
				</Text>
				<Text as="p" font="--lead" margin="40px 0 20px 0">
					<Em
						data-q-widget-type="PRIMITIVE"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						<Strong
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							we are a website, app & Instagram page with trust of 150+ active visiters and 700+ Followers. We post content
							<br />
							related to programming, Digital Marketig & many more.
						</Strong>
					</Em>
				</Text>
			</Section>
			<Section
				text-align="center"
				background-color="--primary"
				color="--light"
				padding="100px 0"
				sm-padding="40px 0"
				background="#f40909"
			>
				<Text
					as="h5"
					font="--lead"
					margin="10px 0 0 0"
					text-transform="uppercase"
					letter-spacing="5px"
				/>
				<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
					About me
				</Text>
				<Text as="p" font="--lead" margin="40px 0 20px 0">
					<Em
						data-q-widget-type="PRIMITIVE"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						My name is Shashank .I'm
					</Em>
					<Em
						data-q-widget-type="PRIMITIVE"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						{" "}a{" "}
					</Em>
					<Strong
						data-q-widget-type="PRIMITIVE"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						<Em
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							beginner
						</Em>
					</Strong>
					<Em
						data-q-widget-type="PRIMITIVE"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						{" "}
					</Em>
					<Strong
						data-q-widget-type="PRIMITIVE"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						<Em
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							web
						</Em>
					</Strong>
					<Em
						data-q-widget-type="PRIMITIVE"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						{" "}
					</Em>
					<Strong
						data-q-widget-type="PRIMITIVE"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						<Em
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							developer
						</Em>
					</Strong>
					<Em
						data-q-widget-type="PRIMITIVE"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						{" "}I've started web development in early
					</Em>
					<Strong
						data-q-widget-type="PRIMITIVE"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						<Em
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							{" "}2020
						</Em>
					</Strong>
					<br />
					<Em
						data-q-widget-type="PRIMITIVE"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						and its
					</Em>
					<Strong
						data-q-widget-type="PRIMITIVE"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						<Em
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							{" "}2021
						</Em>
					</Strong>
					<Em
						data-q-widget-type="PRIMITIVE"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						{" "}now. I've experience with
					</Em>
					<Strong
						data-q-widget-type="PRIMITIVE"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						<Em
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							{" "}Google sites, wix.com, weebly, Quarkly.io
						</Em>
					</Strong>
					<Em
						data-q-widget-type="PRIMITIVE"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						, and a few more.
						<br />
						Thanks a lot for visiting my portfolio keep visiting and dont forget to follow me on instagram and subscribe my channel on youtube.
					</Em>
				</Text>
			</Section>
		</Section>
		<Section padding="60px 0" sm-padding="40px 0">
			<SocialMedia youtube="https://www.youtube.com/channel/UCF6K90MKr1vylwnOaoAc7pQ" instagram="https://www.instagram.com/the.knowledgeshow/" background="#ffffff">
				<Override
					slot="link"
					border-radius="50%"
					color="#ff0000"
					margin="0 8px"
					background="--color-light"
					hover-background="--color-greyD1"
				/>
			</SocialMedia>
		</Section>
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