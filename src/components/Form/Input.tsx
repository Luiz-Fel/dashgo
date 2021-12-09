import { FormLabel, FormControl, Input as ChakraInput, InputProps as ChakraInputProps  } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
    name: string,
    label?: string,
}


export function Input({ name, label, ...rest } : InputProps) {
    return(
        <FormControl>

            <FormLabel htmlFor={name}>{label} </FormLabel>
            <ChakraInput 
            name={name}
            id={name} 
            focusBorderColor="pink.500"
            bgColor="gray.900"
            _hover={{bgColor:"gray.900"}}
            variant="filled"
            size="lg"
            {...rest}
            />
          </FormControl>
    )}