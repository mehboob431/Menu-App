import { useFormikContext } from "formik"
import { useState } from "react"
import ErrorText from "../Typography/ErrorText"


function InputText({ labelTitle, labelStyle, name, value, type, containerStyle, defaultValue, placeholder, onChange, error, helperText, onBlur }) {
    const formik = useFormikContext()
    const selectFile = (e) => {
        if (e.target.files) {
            formik.setFieldValue(`${name}`, e.target.files[0])
        }
    }

    const errorStyle = error ? "input-error" : ""

    return (
        <div className={`form-control w-full ${containerStyle}`}>
            <label className="label">
                <span className={"label-text text-base-content " + labelStyle}>{labelTitle}</span>
            </label>
            <input
                name={name}
                type={type || "text"}
                value={value}
                defaultValue={defaultValue}
                placeholder={placeholder}
                onChange={type === 'file' ? selectFile : onChange}
                webkitdirectory 
                className={`input  input-bordered w-full ${errorStyle} `}
                onBlur={onBlur}
            />
            {error && <ErrorText styleClass="text-sm px-2">{helperText}</ErrorText>}
        </div>
    )
}


export default InputText