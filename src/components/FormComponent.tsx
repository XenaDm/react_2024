import React from 'react';
import {useForm} from "react-hook-form";


type FormProps = {
    username: string;
    password: string;
    age:number;
}
const FormComponent = () => {

    const {
        handleSubmit,
        register,
        formState: {
            errors,
            isValid
        }
    } = useForm<FormProps>({mode:'all'});

    const customHandler = (dataFromForm: FormProps) => {
        console.log(dataFromForm);
        console.log(errors);
        console.log(isValid);
    };
    return (
            <form onSubmit={handleSubmit(customHandler)}>
                <input type="text" placeholder={'username'} {...register('username', {
                    required:{value:true, message:"username is required"},
                })}/>
                <input type="text" placeholder={'password'} {...register('password')}/>
                <input type="number" placeholder={'age'} {...register('age')}/>
                <button>save</button>
            </form>
    );
};

export default FormComponent;