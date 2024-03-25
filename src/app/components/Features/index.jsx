import { features } from "./data";
import style from "./style.module.css";

export const Features = () => {
  return (
    <section className={style.features}>
      <h2 className={style.title}>The Power Of Premium</h2>

      <div className={style.list}>
        {features.map((feature) => (
          <div className={style.items}>
            <img src={feature.image} alt="Icon" />
            <div>
              <h5
              className={style.title}>{feature.title}</h5>
              <p className={style.description}>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
