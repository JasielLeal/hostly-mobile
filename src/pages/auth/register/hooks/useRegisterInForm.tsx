import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "../schemas/RegisterSchema";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const useRegisterInForm = () => {

    type RegisterFormData = z.infer<typeof RegisterSchema>;

    const { control, handleSubmit, formState: { errors }, setValue, register, watch  } = useForm<RegisterFormData>({
        resolver: zodResolver(RegisterSchema),
        mode: 'onSubmit',
    });

    const onSubmit = (data: RegisterFormData) => {
        console.log(data);
    };

    return { control, handleSubmit, errors, onSubmit, setValue, register, watch };
}