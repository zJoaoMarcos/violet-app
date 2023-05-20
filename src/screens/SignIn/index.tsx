import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Button,
  Center,
  FormControl,
  HStack,
  Text,
  VStack,
  View,
} from "native-base";
import React from "react";
import { Input } from "../../components/Form/Input";
import { Logo } from "../../components/Logo";

export function SignIn() {
  const navigation = useNavigation();

  function openSignUp() {
    navigation.navigate("SignUp");
  }

  return (
    <Center height="full">
      <View
        position="absolute"
        bg="purple.500"
        h="500px"
        w="520px"
        top="-200px"
        borderRadius="full"
      />
      <VStack w="full" p="8">
        <Box w="full" alignItems="center">
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
    </Center>
  );
}
