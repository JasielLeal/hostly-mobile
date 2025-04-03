import { Linking } from "react-native";

export const openTermsOfService = async () => {
    const url = "https://meusite.com";
    const supported = await Linking.canOpenURL(url);

    if (supported) {
        await Linking.openURL(url);
    } else {
        console.log("Não foi possível abrir o link");
    }
};