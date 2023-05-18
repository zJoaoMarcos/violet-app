import { FormControl, IInputProps, Input as NativeInput } from "native-base";

interface InputProps extends IInputProps {
  name: string;
  label?: string;
}

export function Input({ label, name, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormControl.Label pl="1">{label}:</FormControl.Label>}
      <NativeInput
        id={name}
        {...rest}
        colorScheme="purple"
        borderColor="purple.400"
        borderRadius={8}
        _focus={{ borderColor: "purple.600", backgroundColor: "purple.100" }}
        size="2xl"
        fontSize="lg"
      />
    </FormControl>
  );
}
