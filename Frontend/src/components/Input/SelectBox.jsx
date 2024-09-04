
import React, { useState, useEffect } from 'react'
import InformationCircleIcon from '@heroicons/react/24/outline/InformationCircleIcon'
import ErrorText from "../Typography/ErrorText"
import { useFormikContext } from 'formik'


function SelectBox(props) {

    const { labelTitle, labelDescription, name, value, defaultValue, containerStyle, placeholder, labelStyle, options, error, helperText, onBlur } = props
    const formik = useFormikContext()

    const errorStyle = error ? "select-error" : ""

    return (
        <div className={`inline-block ${containerStyle}`}>
            <label className={`label  ${labelStyle}`}>
                <div className="label-text">{labelTitle}
                    {labelDescription && <div className="tooltip tooltip-right" data-tip={labelDescription}><InformationCircleIcon className='w-4 h-4' /></div>}
                </div>
            </label>

            <select
                className={`select select-bordered w-full ${errorStyle} `}
                value={value}
                name={name}
                defaultValue={defaultValue}
                placeholder={placeholder}
                onChange={(e) => { formik.setFieldValue(`${name}`, e.target.value) }}
                onBlur={onBlur}
            >
                <option value="">{placeholder}</option>
                {
                    options.map((o, k) => {
                        return <option value={o.value} key={k}>{o.name}</option>
                    })
                }
            </select>
            {error && <ErrorText styleClass="text-sm px-2">{helperText}</ErrorText>}
        </div>
    )
}

export default SelectBox
