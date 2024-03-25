import SpotifyWhiteLogo from "../../assets/images/sportifywhitelogo.png";
import SpotifyBlackLogo from "../../assets/images/spotifyblacklogo.png";
import styleLogo from "./style.module.css";

export function Logo(props) {
  const myImage = props.useWhite ? SpotifyWhiteLogo : SpotifyBlackLogo;
  return (
    <a href="#/dashboard" className={styleLogo.logo}>
      <img src={myImage} alt="Logo" />
    </a>
  );
}
