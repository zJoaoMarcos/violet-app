import { Heading, Image } from "native-base";

import logoImg from "../../assets/logo.png";

export function Logo() {
  return (
    <>
      <Image source={logoImg} alt="Logo da Violet" />
      <Heading color="purple.700" size="xl" mt="10">
        Violet
      </Heading>
    </>
  );
}
