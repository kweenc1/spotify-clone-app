import { PackagesCardItem } from "./PackagesCards";
import { paymentMethods, PackagingList } from "./data";
import {DiscountFlag} from './discountFlag'
import style from './style.module.css'

export const Packages = () => {
  const renderPaymentMethod = (method) => {
    if (method.icon) return <img src={method.icon} alt="ICON" />;
    return null;
  };
  return (
    <section>
      <h2 className={style.title}>Pick your Premium</h2>
      <p className={style.description}>Listen without limits on your phone, speaker, and other devices.</p>

      <div className={style.flex}>
        {
        paymentMethods.map(renderPaymentMethod)
        }
      </div>
      <br />
      <br />
      <div className={style.flex}>
        {PackagingList.map((plans) => {
          return <PackagesCardItem {...plans}/>;
        })}
      </div>
      <br />
      <DiscountFlag/>
    </section>
  );
};
