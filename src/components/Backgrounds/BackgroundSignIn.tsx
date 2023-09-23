import { ImageBackground } from "react-native";

import BackgroundImg from "../../assets/background-signIn.png";

interface BackgroundSignInProps {
  children: React.ReactNode;
}

export function BackgroundSignIn(props: BackgroundSignInProps) {
  return (
    <ImageBackground
      style={{ flex: 1, width: "100%", height: "100%" }}
      source={BackgroundImg}
      defaultSource={BackgroundImg}
    >
      {props.children}
    </ImageBackground>
  );
}
