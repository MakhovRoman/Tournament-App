import {Input} from "@components/shared/input";
import {LoginFields} from "@/constants";
import {Controller, useForm} from "react-hook-form";

import styles from './LoginForm.module.scss';
import { setPlaceholder } from "../helpers";
import { Button } from "../shared/button";
import { ButtonVariants } from "../shared/button";

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
            errors,
        },
    } = useForm<LoginFormFields>({
        mode: "onChange",
        defaultValues: {
            [LoginFields.EMAIL]: "",
            [LoginFields.PASSWORD]: "",
        }
    });

    const submitHandler = (data: LoginFormFields) => {
        console.log(data);
    }

    return (
        <form
            onSubmit={handleSubmit(submitHandler)}
            className={styles.form}
        >
            <Controller
                control={control}
                name={LoginFields.EMAIL as any}
                render={({field}) => (
                    <Input
                        type={field.name}
                        inputMode='email'
                        labelText={LoginFields.EMAIL}
                        placeholder={setPlaceholder(field.name)}
                        onChange={(e) => {
                            setValue(LoginFields.EMAIL, e.target.value),
                            field.onChange(e)
                        }}
                    />
                )}
            />
            <Controller
                control={control}
                name={LoginFields.PASSWORD as any}
                render={({field}) => (
                    <Input
                        type={field.name}
                        placeholder={setPlaceholder(field.name)}
                        labelText={LoginFields.PASSWORD}
                        onChange={(e) => {
                            setValue(LoginFields.PASSWORD, e.target.value),
                            field.onChange(e)
                        }}
                    />
                )}
            />
            <Button
                className={styles.form__button}
                variant={ButtonVariants.PRIMARY}
            >
                Submit
            </Button>
        </form>
    )
}
