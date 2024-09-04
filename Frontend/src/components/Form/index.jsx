import React from 'react';
import InputText from '../Input/InputText';
import TextAreaInput from '../Input/TextAreaInput';
import SelectBox from '../Input/SelectBox';
import { useFormikContext } from 'formik';

const Form = ({ formFields, className }) => {
    const formik = useFormikContext();

    return (
        <div className={className}> 
            {formFields.map((field) => {
                const { name, labelTitle, labelStyle, type, options, defaultValue, placeholder } = field;
                const value = formik.values[name];
                const onChange = formik.handleChange;
                const onBlur = formik.handleBlur;
                const error = formik.touched[name] && Boolean(formik.errors[name]);
                const helperText = formik.touched[name] && formik.errors[name];

                if (type === "dropdown") {
                    return (
                        <SelectBox
                            key={name}
                            labelTitle={labelTitle}
                            labelStyle={labelStyle}
                            name={name}
                            value={value}
                            options={options}
                            defaultValue={defaultValue}
                            placeholder={placeholder}
                            onChange={onChange}
                            error={error}
                            helperText={helperText}
                            onBlur={onBlur}

                        />
                    );
                } else if (type === "textarea") {
                    return (
                        <TextAreaInput
                            key={name}
                            labelTitle={labelTitle}
                            labelStyle={labelStyle}
                            name={name}
                            value={value}
                            defaultValue={defaultValue}
                            placeholder={placeholder}
                            onChange={onChange}
                            error={error}
                            helperText={helperText}
                            onBlur={onBlur}
                        />
                    );
                } else if (type === "file") {
                    return (
                        <InputText
                            key={name}
                            labelTitle={labelTitle}
                            labelStyle={labelStyle}
                            name={name}
                            type={type}
                            placeholder={placeholder}
                            onChange={onChange}
                            error={error}
                            helperText={helperText}
                            onBlur={onBlur}
                        />
                    );

                } else {
                    return (
                        <InputText
                            key={name}
                            labelTitle={labelTitle}
                            labelStyle={labelStyle}
                            name={name}
                            value={value}
                            type={type}
                            defaultValue={defaultValue}
                            placeholder={placeholder}
                            onChange={onChange}
                            error={error}
                            helperText={helperText}
                            onBlur={onBlur}
                        />
                    );
                }
            })}
        </div>
    );
};

export default Form;
