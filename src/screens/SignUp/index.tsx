import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Button,
  Center,
  FormControl,
  HStack,
  Image,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { Input } from "../../components/Form/Input";
import { Logo } from "../../components/Logo";

import BackgroundImg from "../../assets/background-signUp.png";

export function SignUp() {
  const navigation = useNavigation();

  function openSignIn() {
    navigation.navigate("SignIn");
  }

  function openRegisterPlant() {
    navigation.navigate("RegisterPlant");
  }

  return (
    <ScrollView pt="2" flex={1} bg="#FCFCFC" top={-10}>
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
      <Center height="full">
        <VStack w="full" p="8">
          <Box w="full" alignItems="center">
            <Logo imageSize="xl" textSize="lg" />

            <FormControl>
              <VStack space="4">
                <Input
                  name="name"
                  type="text"
                  label="Nome"
                  placeholder="Ex: Jhon"
                />

                <Input
                  name="surname"
                  type="text"
                  label="Sobrenome"
                  placeholder="Ex: Doe"
                />

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
                <Input
                  name="confirm_password"
                  type="password"
                  label="Confirme a senha"
                  placeholder="********"
                />
                <Input
                  name="password"
                  type="password"
                  label="Senha"
                  placeholder="********"
                />
              </VStack>
            </FormControl>

            <Button
              onPress={openRegisterPlant}
              colorScheme="purple"
              mt="8"
              w="full"
              borderRadius={6}
            >
              <Text fontWeight="bold" color="white" fontSize="lg">
                Entrar
              </Text>
            </Button>

            <HStack mt="5" justifyContent="center" space={2}>
              <Text>Já possui uma conta?</Text>
              <Text
                onPress={openSignIn}
                color="purple.500"
                fontWeight="semibold"
              >
                Entrar
              </Text>
            </HStack>
          </Box>
        </VStack>
      </Center>
    </ScrollView>
  );
}
