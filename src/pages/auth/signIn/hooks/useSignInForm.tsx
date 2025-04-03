import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema } from "../schema/SignInSchema";
import { useForm } from "react-hook-form";

// hooks/useSignInForm.ts
export const useSignInForm = () => {
    
    type SignInFormData = {
        email?: string;
        password?: string;
    };
    
    const { control, handleSubmit, formState: { errors }, setValue, register } = useForm<SignInFormData>({
        resolver: zodResolver(SignInSchema),
        mode: 'onSubmit',
    });

    const onSubmit = (data: SignInFormData) => {
        console.log(data);
    };

    return { control, handleSubmit, errors, onSubmit, setValue, register };
};