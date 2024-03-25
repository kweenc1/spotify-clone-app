import CustomButton from "../Button"
import style from './style.module.css'

export const DiscountFlag = () => {
    return (
        <div className={style.discount}>
            <p>Special discount for eligible students in university</p>
            <CustomButton type="outline" className='btn-invert'>LEARN MORE</CustomButton>
        </div>
    )
}