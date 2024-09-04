import { FieldArray, useFormik, useFormikContext } from 'formik';
import InputText from '../Input/InputText';
import TextAreaInput from '../Input/TextAreaInput';
import SelectBox from '../Input/SelectBox';
import Button from '../Button'
import { MdOutlineDeleteForever } from "react-icons/md";
import React from 'react'

const FormArray = ({ formFields, className }) => {
    const formik = useFormikContext()
    return (
        <>
            <div className="">

                {formFields.map((field) => (
                    <FieldArray name={field.name}>
                        {({ push, remove, form }) => {
                            const { values, errors, touched } = form;
                            const fieldArray = values[field.name];

                            return (
                                <div className={className}>
                                    <label style={{ fontWeight: 'bold' }}>{field.labelTitle}</label>
                                    {fieldArray.map((item, index) => {
                                        console.log('items', item)
                                        const { name, type, options, defaultValue, placeholder } = field;
                                        const value = formik.values[name];
                                        const onChange = formik.handleChange;
                                        const onBlur = formik.handleBlur;
                                        const error = formik.touched[name] && Boolean(formik.errors[name]);
                                        const helperText = formik.touched[name] && formik.errors[name];

                                        if (type === "dropdown") {
                                            return (
                                                <SelectBox
                                                    key={name}
                                                    
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

                                        {
                                            fieldArray.length > 1 && (
                                                <Button
                                                    onClick={() => remove(index)}
                                                    color="btn-error"
                                                    icon={<MdOutlineDeleteForever />}
                                                >

                                                </Button>
                                            )
                                        }
                                    })}
                                    <Button
                                        onClick={() => push(field.name)}
                                        color="btn-info"
                                    >
                                        Add more
                                    </Button>

                                </div>
                            );
                        }}
                    </FieldArray >
                ))}
            </div>
        </>

    );
}

export default FormArray



