import {
  Box,
  Button,
  Center,
  FormControl,
  HStack,
  Input,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { Logo } from "../../components/Logo";

export function SignIn() {
  return (
    <Center height="full">
      <VStack w="full" p="8">
        <Box w="full" alignItems="center">
          <Logo />

          <FormControl>
            <FormControl.Label mt="7">E-mail</FormControl.Label>
            <Input placeholder="Ex: jhon.doe@example.com" />

            <FormControl.Label mt="7">Senha</FormControl.Label>
            <Input placeholder="**********" />
          </FormControl>

          <Button colorScheme="purple" mt="8" w="full">
            <Text fontWeight="bold" color="white" fontSize="lg">
              Entrar
            </Text>
          </Button>

          <HStack mt="5" justifyContent="center">
            <Text>
              Não tem uma conta?{" "}
              <Text color="purple.500" fontWeight="semibold" underline>
                Cadastre-se
              </Text>
            </Text>
          </HStack>
        </Box>
      </VStack>
    </Center>
  );
}
