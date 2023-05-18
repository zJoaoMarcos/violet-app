import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Button,
  Center,
  FormControl,
  HStack,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { Input } from "../../components/Form/Input";
import { Logo } from "../../components/Logo";

export function SignUp() {
  const navigation = useNavigation();

  function openSignIn() {
    navigation.navigate("SignIn");
  }

  return (
    <ScrollView pt="2">
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

            <Button colorScheme="purple" mt="8" w="full" borderRadius={6}>
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
