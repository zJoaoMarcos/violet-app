import { Button, FormControl, Text, VStack, useToast } from "native-base";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "../../Form/Input";
import { z } from "zod";
import { backendApi } from "../../../services/backendApi";

const signUpSchema = z.object({
  name: z.string({ required_error: "O name é obrigatório." }),
  surname: z.string({ required_error: "O sobrenome é obrigatório." }),
  email: z
    .string({ required_error: "O email é obrigatório." })
    .email({ message: "email invalido." }),
  password: z.string({ required_error: "A senha é obrigatória." }),
  passwordConfirmation: z.string({
    required_error: "é necessário confirmar a senha.",
  }),
});
type SignUpFormData = z.infer<typeof signUpSchema>;

export function FormSignUp() {
  const toast = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({ resolver: zodResolver(signUpSchema) });

  /*  console.log(errors); */

  async function handleSignUp(data: SignUpFormData) {
    console.log(data);

    try {
      const response = await backendApi.post("/user", {
        ...data,
      });

      console.log(response);
    } catch (err) {
      console.log(err);
      toast.show({
        title: "Informações erradas",
        bg: "red.400",
        placement: "top",
        duration: 5000,
      });
    }
  }

  return (
    <>
      <FormControl>
        <VStack space="4">
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChange={onChange}
                errorMessage={errors.name?.message}
                name="name"
                type="text"
                label="Nome"
                placeholder="Ex: Jhon"
              />
            )}
          />

          <Controller
            control={control}
            name="surname"
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChange={onChange}
                errorMessage={errors.surname?.message}
                keyboardType="name-phone-pad"
                name="surname"
                type="text"
                label="Sobrenome"
                placeholder="Ex: Doe"
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChange={onChange}
                errorMessage={errors.email?.message}
                keyboardType="email-address"
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
                onChange={onChange}
                name="password"
                type="password"
                errorMessage={errors.password?.message}
                label="Senha"
                placeholder="********"
              />
            )}
          />

          <Controller
            control={control}
            name="passwordConfirmation"
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChange={onChange}
                errorMessage={errors.passwordConfirmation?.message}
                name="passwordConfirmation"
                type="password"
                label="Confirme a senha"
                placeholder="********"
              />
            )}
          />
        </VStack>
      </FormControl>

      <Button
        onPress={handleSubmit(handleSignUp)}
        colorScheme="purple"
        mt="8"
        w="full"
        borderRadius={6}
      >
        <Text fontWeight="bold" color="white" fontSize="lg">
          Entrar
        </Text>
      </Button>
    </>
  );
}
