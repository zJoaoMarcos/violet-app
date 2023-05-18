import { Heading, Image, VStack } from "native-base";

import logoImg from "../../assets/logo.png";

interface LogoProps {
  imageSize?: "sm" | "md" | "lg" | "xl" | "2xl";
  textSize?: "sm" | "md" | "lg" | "xl" | "2xl";
}

export function Logo({ imageSize = "md", textSize = "md" }: LogoProps) {
  return (
    <VStack
      w="full"
      alignItems="center"
      p="2"
      space={imageSize === "2xl" ? 0 : 6}
    >
      <Image
        source={logoImg}
        alt="Logo da Violet"
        size={imageSize}
        resizeMode="contain"
        w="200"
      />
      <Heading color="purple.700" size={textSize}>
        Violet
      </Heading>
    </VStack>
  );
}
