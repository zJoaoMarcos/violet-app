import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  HStack,
  Image,
  Text,
  VStack,
} from "native-base";
import React, { useState } from "react";

import BackgroundImg from "../../assets/background-signIn.png";
import { Input } from "../../components/Form/Input";
import { Logo } from "../../components/Logo";

export function SignIn() {
  const navigation = useNavigation();

  const [rememberMe, setRememberMe] = useState(true);

  console.log(rememberMe);

  function openSignUp() {
    navigation.navigate("SignUp");
  }

  return (
    <VStack flex={1} bg="white" background="#FCFC">
      <Image
        w="full"
        h="full"
        source={BackgroundImg}
        alt="background image"
        resizeMode="stretch"
        position="absolute"
        top={0}
        left={0}
      />

      <VStack w="full" p="8">
        <Box w="full" alignItems="center" mt="20">
          <Logo imageSize="2xl" textSize="xl" />

          <FormControl>
            <VStack space={4}>
              <Input
                name="email"
                type="text"
                label="E-mail"
                placeholder="Ex: jhon.doe@example.com"
              />

              <Input
                name="password"
                type="password"
                label="Senha"
                placeholder="********"
              />
            </VStack>

            <Checkbox
              value="lembrar de mim"
              mt="4"
              accessibilityLabel="Checkbox para lembrar de mim"
              colorScheme="purple"
              color="gray.700"
              isChecked={rememberMe}
              onChange={(e) => setRememberMe(e)}
            >
              Lembrar de mim
            </Checkbox>
          </FormControl>

          <Button colorScheme="purple" mt="8" w="full" borderRadius={6}>
            <Text fontWeight="bold" color="white" fontSize="lg">
              Entrar
            </Text>
          </Button>

          <HStack mt="5" justifyContent="center" space={2}>
            <Text>Não possui conta?</Text>
            <Text onPress={openSignUp} color="purple.500" fontWeight="semibold">
              Cadastre-se
            </Text>
          </HStack>
        </Box>
      </VStack>
    </VStack>
  );
}
