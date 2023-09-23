import { useNavigation } from "@react-navigation/native";
import {
  Center,
  HStack,
  ScrollView,
  Text,
  Pressable,
} from "native-base";
import React from "react";

import { Logo } from "../../components/Logo";
import { BackgroundSignIn } from "../../components/Backgrounds/BackgroundSignIn";
import { FormSignIn } from "../../components/Forms/FormSignIn";

export function SignIn() {
  const navigation = useNavigation();


  function openSignUp() {
    navigation.navigate("SignUp");
  }

  return (
    <ScrollView bg="#FCFCFC">
      <BackgroundSignIn>
        <Center p="8" mt="12">
          <Logo imageSize="2xl" textSize="xl" />

          <FormSignIn />

          <HStack mt="5" justifyContent="center" space={2}>
            <Text>Não possui conta?</Text>

            <Pressable>
              <Text
                onPress={openSignUp}
                color="purple.500"
                fontWeight="semibold"
              >
                Cadastre-se
              </Text>
            </Pressable>
          </HStack>
        </Center>
      </BackgroundSignIn>
    </ScrollView>
  );
}
