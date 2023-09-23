import { ImageBackground } from "react-native";

import BackgroundImg from "../../assets/background-signUp.png";

interface BackgroundSingUpProps {
  children: React.ReactNode;
}

export function BackgroundSignUp(props: BackgroundSingUpProps) {
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
