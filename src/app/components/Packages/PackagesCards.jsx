import CustomButton from "../Button";
import style from "./style.module.css";



export const PackagesCardItem = (props) => {
  return (
    <div className={style.card}>
      <div className={style.header}>
        <div className={style.nonbtn}>
         {props.free &&<span className={style.free}>{props.free} month free</span>}
         
          <span className={style.available}>One-time plans available</span>
        </div>
        <h3 className={style.planName}>{props.planName}</h3>
        <p className={style.offer}>{props.price}/month after offer period</p>
        <p className={style.account}>{props.numberAccount} account</p>
      </div>

      <div className={style.content}>
        <ul>
          {
            props.features && props.features.map((features)=><li>
              <p>{features}</p>
              </li>
            )
           
          }
          
        </ul>
        <br />
        <CustomButton className={style.button} onClick ={()=>{}}>View Plans</CustomButton>
      </div>
      <div className={style.footer}>
        <a href="#/">Terms and conditions apply.</a> 
        1 month free not available for users who
        have already tried Premium.
      </div>
    </div>
  );
};
