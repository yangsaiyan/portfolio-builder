import type { RootState } from "../../redux/store";
import {
  StyledContainer,
  StyledContentContainer,
  StyledDescription,
  StyledExternalLinkImage,
  StyledExternalLink,
  StyledExternalLinksContainer,
  StyledImage,
  StyledName,
  StyledTextContainer,
} from "./style";
import DonaldTrump from "/elon.png";
import Facebook from "/icons/facebook.svg";
import XIcon from "/icons/xIcon.svg";
import Instagram from "/icons/instagram.svg";
import Spotify from "/icons/spotify.svg";
import Youtube from "/icons/youtube.svg";
import Tiktok from "/icons/tiktok.svg";
import Twitch from "/icons/twitch.svg";
import Discord from "/icons/discord.svg";
import Telegram from "/icons/telegram.svg";
import Github from "/icons/github.svg";
import Linkedin from "/icons/linkedin.svg";
import Email from "/icons/email.svg";

type User = RootState["user"];

interface HeroSectionViewProps {
  user: User;
}

export default function HeroSectionView(props: HeroSectionViewProps) {
  const { user } = props;

  const getSocialIcon = (key: string) => {
    if (key === "" || key === undefined) return;

    if (key.toLowerCase().includes("facebook")) {
      return Facebook;
    } else if (key.toLowerCase().includes("x.com")) {
      return XIcon;
    } else if (key.toLowerCase().includes("instagram")) {
      return Instagram;
    } else if (key.toLowerCase().includes("spotify")) {
      return Spotify;
    } else if (key.toLowerCase().includes("youtube")) {
      return Youtube;
    } else if (key.toLowerCase().includes("tiktok")) {
      return Tiktok;
    } else if (key.toLowerCase().includes("twitch")) {
      return Twitch;
    } else if (key.toLowerCase().includes("discord")) {
      return Discord;
    } else if (key.toLowerCase().includes("telegram")) {
      return Telegram;
    } else if (key.toLowerCase().includes("github")) {
      return Github;
    } else if (key.toLowerCase().includes("linkedin")) {
      return Linkedin;
    } else {
      return;
    }
  };

  const socialLinks = (): React.ReactNode => {
    const socialMedias = user.user.profile.social;
    const filteredSocialMedias = Object.entries(socialMedias).filter(
      ([_, value]) => value !== "" && value !== undefined
    );

    return filteredSocialMedias.map(([key, value]) => (
      <StyledExternalLink
        key={key}
        href={value}
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledExternalLinkImage src={getSocialIcon(value)} alt={key} />
      </StyledExternalLink>
    ));
  };

  return (
    <StyledContainer>
      <StyledContentContainer>
        <StyledTextContainer>
          <StyledName>{user.user.profile.name}</StyledName>
          <StyledDescription>{user.user.profile.summary}</StyledDescription>
        </StyledTextContainer>
        <StyledExternalLinksContainer>
          <StyledExternalLink
            href={`mailto:${user.user.profile.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledExternalLinkImage src={Email} alt={"email-icon"} />
          </StyledExternalLink>
          {socialLinks()}
        </StyledExternalLinksContainer>
        <StyledImage src={DonaldTrump} alt="user-profile-image" />
      </StyledContentContainer>
    </StyledContainer>
  );
}
