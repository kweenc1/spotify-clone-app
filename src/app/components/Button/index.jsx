import { combineClasses } from "../../../utils/format";


const CustomButton = (props) => {
    const classNames ={
        primary: 'btnblack',
        outline: 'btnoutline',
        secondary: 'btn-secondary'
    }
    const className = classNames[props.type] || classNames.primary
    const classes = combineClasses(className, props.className)
    return(
        
       props.onClick ? <button onClick={props.onClick} className={classes}>{props.children}</button>
            :
        <a href="#/button" className={classes}>{props.children}</a>
    )
}

export default CustomButton;