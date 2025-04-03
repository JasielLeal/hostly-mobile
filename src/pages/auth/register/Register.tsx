import { StatusBar } from "expo-status-bar";
import { Image, Text, TouchableOpacity, View } from "react-native";

import Input from "../../../components/input";
import { useRegisterInForm } from "./hooks/useRegisterInForm";
import Button from "../../../components/button";

import RadioButton from "../../../components/radioButton";
import { openTermsOfService } from "./services/OpenTermsOfService";

export default function Register() {

    const { handleSubmit, register, setValue, watch } = useRegisterInForm();

    type RegisterFormData = {
        name: string;
        email: string;
        password?: string;
        isAccepted: boolean;
    };

    async function onLogin(data: RegisterFormData) {
        console.log(data)
    }
    const isAccepted = watch("isAccepted");

    return (
        <>
            <>
                <View className='bg-primary pt-40 px-7 pb-16'>
                    <Image source={require("../../../../assets/logo.png")} width={5} className='w-[100px] h-[37px]' />
                    <Text className='text-textWhite text-2xl font-semibold mt-5'>
                        por favor complete os
                        campos para criar a conta
                        na hostly
                    </Text>
                    <StatusBar style="light" />
                </View>
                <View className='px-7 bg-white  rounded-t-3xl -mt-10 pt-10'>
                    <Text className='text-textBlack font-semibold text-2xl mt-10'>
                        Registrar-se
                    </Text>

                    <Text className='text-sm text-textBlack font-medium mt-5 mb-1'>
                        Nome
                    </Text>
                    <Input
                        onChangeText={(text) => setValue("name", text)}
                        {...register("name")}
                    />

                    <Text className='text-sm text-textBlack font-medium mt-5 mb-1'>
                        E-mail
                    </Text>
                    <Input
                        onChangeText={(text) => setValue("email", text)}
                        {...register("email")}

                    />

                    <Text className='text-sm text-textBlack font-medium mt-5 mb-1'>
                        Senha
                    </Text>
                    <Input
                        secureTextEntry={true}
                        onChangeText={(text) => setValue("password", text)}
                        {...register("password")}
                    />

                    <View className="mt-5 flex flex-row items-center">
                        <RadioButton selected={isAccepted} onPress={() => setValue("isAccepted", !isAccepted)}  />
                        <Text className="text-textBlack text-xs ml-2">
                            Concordo com os
                        </Text>
                        <TouchableOpacity onPress={openTermsOfService}>
                            <Text className="text-primary font-semibold text-xs"> Termos de uso </Text>
                        </TouchableOpacity>
                        <Text className="text-textBlack text-xs">
                            e de
                        </Text>
                        <TouchableOpacity onPress={openTermsOfService}>
                            <Text className="text-primary font-semibold text-xs"> Privacidade </Text>
                        </TouchableOpacity>
                    </View>


                    <View className='mt-7'>
                        <Button label='Criar conta' variant='primary' onPress={handleSubmit(onLogin)} />
                    </View>
                </View>
            </>
        </>
    )
}