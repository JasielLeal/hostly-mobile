import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';
import Input from '../../../components/input';
import Button from '../../../components/button';
import { useSignInForm } from './hooks/useSignInForm';

export function SingIn() {

    type SignInFormData = {
        email: string;
        password?: string;
    };

    const { handleSubmit, register, setValue } = useSignInForm();

    async function onLogin(data: SignInFormData) {
        console.log(data)

    }

    return (
        <>
            <View className='bg-primary pt-40 px-7 pb-16'>
                <Image source={require("../../../../assets/logo.png")} width={5} className='w-[100px] h-[37px]' />
                <Text className='text-textWhite text-2xl font-semibold mt-5'>
                    Gerencie sua pousada
                    com facilidade e foco no que
                    importa.
                </Text>
                <StatusBar style="light" />
            </View>
            <View className='px-7 bg-white  rounded-t-3xl -mt-10 pt-10'>
                <Text className='text-textBlack font-semibold text-2xl mt-10'>
                    Realizar login
                </Text>

                <Text className='text-sm text-textBlack font-medium mt-5 mb-1'>
                    E-mail
                </Text>
                <Input
                    keyboardType='email-address'
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

                <View className='mt-7'>
                    <Button label='Entrar' variant='primary' onPress={handleSubmit(onLogin)} />
                </View>

                <Text className='font-medium text-textBlack text-right my-5 text-sm'>
                    Esqueceu a senha?
                </Text>

                <View>
                    <Text className='text-center mt-5 text-sm'>
                        Não tem uma conta?{' '}
                        <Text className='text-primary font-semibold'>
                            Cadastre-se
                        </Text>
                    </Text>
                </View>

            </View>
        </>
    )
}