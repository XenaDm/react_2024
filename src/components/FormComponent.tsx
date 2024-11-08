import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {apiService} from "../services/api.service";
import {IFormProps} from "../models/IFormProps";
import {postValidator} from "../validators/post.validator";

const FormComponent = () => {
    const {
        handleSubmit,
        register,
        formState:{
            errors,
            isValid
    }
    } = useForm<IFormProps>({mode:"all", resolver: joiResolver(postValidator)})
    const customHandler = async (dataFromForm: IFormProps) => {
        console.log(await apiService.post.savePost(dataFromForm));
    }
    return (
        <form onSubmit={handleSubmit(customHandler)}>
            <div>
                <input type='text' placeholder={'title'} {...register('title')}/>
                {errors.title && <div>{errors.title.message}</div>}
            </div>

            <div>
                <input type='text' placeholder={'body'} {...register('body')}/>
                {errors.body && <div>{errors.body.message}</div>}
            </div>

            <div>
                <input type='text' placeholder={'userId'} {...register('userId')}/>
                {errors.userId && <div>{errors.userId.message}</div>}
            </div>
            <button disabled={!isValid}>submit</button>
        </form>
    );
};

export default FormComponent;