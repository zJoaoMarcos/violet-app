import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Center,
  HStack,
  ScrollView,
  Pressable,
  Text,
  VStack,
} from "native-base";
import React from "react";

import { Logo } from "../../components/Logo";
import { BackgroundSignUp } from "../../components/Backgrounds/BackgroundSignUp";
import { FormSignUp } from "../../components/Forms/FormSignUp";

export function SignUp() {
  const navigation = useNavigation();

  function openSignIn() {
    navigation.navigate("SignIn");
  }

  return (
    <ScrollView pt="2" flex={1} bg="#FCFCFC" top={-10}>
      <BackgroundSignUp>
        <Center height="full">
          <VStack w="full" p="8">
            <Box w="full" alignItems="center">
              <Logo imageSize="xl" textSize="lg" />

              <FormSignUp />

              <HStack mt="5" justifyContent="center" space={2}>
                <Text>Já possui uma conta?</Text>

                <Pressable>
                  <Text
                    onPress={openSignIn}
                    color="purple.500"
                    fontWeight="semibold"
                  >
                    Registrar-se
                  </Text>
                </Pressable>
              </HStack>
            </Box>
          </VStack>
        </Center>
      </BackgroundSignUp>
    </ScrollView>
  );
}
