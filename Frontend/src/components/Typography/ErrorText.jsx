function ErrorText({styleClass, children}){
    return(
        <p className={`text-error ${styleClass}`}>{children}</p>
    )
}

export default ErrorText