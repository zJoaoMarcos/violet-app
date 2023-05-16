import {
  Box,
  Button,
  Center,
  FormControl,
  HStack,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { Input } from "../../components/Form/Input";
import { Logo } from "../../components/Logo";

export function SignIn() {
  return (
    <Center height="full">
      <VStack w="full" p="8">
        <Box w="full" alignItems="center">
          <Logo />

          <FormControl>
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
          </FormControl>

          <Button colorScheme="purple" mt="8" w="full">
            <Text fontWeight="bold" color="white" fontSize="lg">
              Entrar
            </Text>
          </Button>

          <HStack mt="5" justifyContent="center">
            <Text>
              Não possui conta?{" "}
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
