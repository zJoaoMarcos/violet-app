import {
  Button,
  Checkbox,
  FormControl,
  VStack,
  Text,
  Pressable,
  Center,
} from "native-base";
import { Input } from "../../Form/Input";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signInFormSchema = z.object({
  email: z
    .string({ required_error: "Email obrigatório." })
    .email({ message: "Digite um e-mail valido." }),
  password: z.string({ required_error: "Digite a senha." }),
});

type SignInFormData = z.infer<typeof signInFormSchema>;

export function FormSignIn() {
  const [keepConnected, setKeepConnected] = React.useState<boolean>(true);

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
  });

  function handleSignIn(data: SignInFormData) {
    console.log(data, keepConnected);
  }

  return (
    <>
      <FormControl>
        <VStack w="full" space={4}>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                errorMessage={errors.email?.message}
                name="email"
                type="text"
                label="E-mail"
                placeholder="Ex: jhon.doe@example.com"
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                errorMessage={errors.password?.message}
                name="password"
                type="password"
                label="Senha"
                placeholder="********"
              />
            )}
          />
        </VStack>

        <Pressable mr="auto">
          <Checkbox
            value="lembrar de mim"
            mt="4"
            accessibilityLabel="Checkbox para lembrar de mim"
            colorScheme="purple"
            color="gray.700"
            isChecked={keepConnected}
            onChange={(e) => setKeepConnected(e)}
          >
            Lembrar de mim
          </Checkbox>
        </Pressable>

        <Button
          onPress={handleSubmit(handleSignIn)}
          colorScheme="purple"
          mt="8"
          w="full"
          borderRadius={6}
        >
          <Text fontWeight="bold" color="white" fontSize="lg">
            Entrar
          </Text>
        </Button>
      </FormControl>
    </>
  );
}
