import ErrorText from "../Typography/ErrorText"


function TextAreaInput({ labelTitle, labelStyle, type, name, value, containerStyle, defaultValue, placeholder, onChange, error, helperText, onBlur }) {

    const errorStyle = error ? "textarea-error" : ""


    return (
        <div className={`form-control w-full ${containerStyle}`}>
            <label className="label">
                <span className={"label-text text-base-content " + labelStyle}>{labelTitle}</span>
            </label>
            <textarea
                value={value}
                defaultValue={defaultValue}
                name={name}
                className={`textarea textarea-bordered w-full ${errorStyle}`}
                placeholder={placeholder || ""}
                onChange={onChange}
                onBlur={onBlur}
            >

            </textarea>
            {error && <ErrorText styleClass="text-sm px-2">{helperText}</ErrorText>}
        </div>
    )
}


export default TextAreaInput