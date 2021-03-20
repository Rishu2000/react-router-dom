import React from 'react'

function FormControl({
    Label,
    LabelClassName,
    Type,
    InputClassName,
    ID,
    Value,
    OnChange,
    Placeholder,
    SmallText,
    SmallTextClassName
    }) {
    return (
        <div className="mb-3 form-group">
            <label  
                htmlFor={ID} 
                className={"form-label"+(LabelClassName?" "+LabelClassName:"")}>
            {Label}
            </label>
            <input 
                type={Type} 
                className={"form-control"+(InputClassName?" "+InputClassName:"")} 
                id={ID} 
                aria-describedby={ID+"Help"}
                value={Value} 
                onChange={OnChange} 
                placeholder={Placeholder} 
                autoComplete="off" />
            {SmallText && 
                <small 
                    id={ID+"Help"} 
                    className={"form-text"+(SmallTextClassName?" "+SmallTextClassName:"")}>
                        {SmallText}
                </small>
            }
        </div>
    )
}

export default FormControl
