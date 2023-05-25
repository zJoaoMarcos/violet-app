import {
  Box,
  Button,
  FormControl,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "native-base";

import * as Icon from "phosphor-react-native";
import BackgroundImg from "../../assets/background-registerPlant.png";
import { Input } from "../../components/Form/Input";

export function RegisterPlant() {
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
          <HStack space={4} w="full">
            <Icon.FlowerLotus color="#A25DC7" size="44px" />

            <VStack>
              <Heading>Olá Jonas !</Heading>
              <Text fontWeight="semibold">
                Preencha o formulário para cadastrar a sua{" "}
                <Text color="green.700">plantinha</Text> !
              </Text>
            </VStack>
          </HStack>

          <FormControl>
            <VStack>
              <Input name="name" label="Nome" />
              <Input name="name" label="Espécie" />
              <Input name="age" label="Idade" />
              <Input name="board_id" label="Identificador da planta" />
            </VStack>
          </FormControl>

          <Button colorScheme="purple" mt="8" w="full" borderRadius={6}>
            <Text fontWeight="bold" color="white" fontSize="lg">
              Cadastrar
            </Text>
          </Button>
        </Box>
      </VStack>
    </VStack>
  );
}
