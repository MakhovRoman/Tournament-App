import {Input} from "@components/shared/input";
import {LoginFields} from "@/constants";
import {Controller, useForm} from "react-hook-form";

type LoginFormFields = {
    [LoginFields.EMAIL]: string;
    [LoginFields.PASSWORD]: string;
}

export const LoginForm = () => {
    const {
        control,
        handleSubmit,
        setValue,
        formState: {
            errors ,
        },
    } = useForm<LoginFormFields>({
        mode: "onChange",
        defaultValues: {
            [LoginFields.EMAIL]: "",
            [LoginFields.PASSWORD]: "",
        }
    });

    const submitHandler = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)}>
            <Controller
                control={control}
                name={LoginFields.EMAIL as any}
                render={({field}) => (
                    <Input
                        type={field.name}
                        value={field.value}
                        onChange={(e) => {
                            setValue(LoginFields.EMAIL, e.target.value),
                            field.onChange(e)
                        }}
                    />
                )}
             />
            <button type="submit">Submit</button>
        </form>
    )
}
