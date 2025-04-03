import { createStackNavigator } from "@react-navigation/stack";
import { SingIn } from "../pages/auth/signIn/SignIn";
import Register from "../pages/auth/register/Register";

export function AuthRoutes() {

    const AuthStack = createStackNavigator();

    return (

        <>
            <AuthStack.Navigator id={undefined} screenOptions={{ headerShown: false, animation: "fade" }}>
                <AuthStack.Screen name="SignIn" component={SingIn} />
                <AuthStack.Screen name="SignUp" component={Register} />
            </AuthStack.Navigator>
        </>
    )
}