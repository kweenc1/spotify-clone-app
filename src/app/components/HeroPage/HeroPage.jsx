// import './HeroPage.css';
import styleHero from './HeroPage.module.css'
import '../../App.css'
import CustomButton from '../Button';

export const HeroPage = () => {
    return(
       <main className={styleHero.heropage}>
         <h1 className={styleHero.heroheading}>Get Premium free for 1 month</h1>
         <h4 className={styleHero.herosubheading}>Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</h4>
         
         <div className={styleHero['btngroup']}>
         
         <CustomButton onClick={()=>{}}>
         GET STARTED
         </CustomButton>

         <CustomButton onClick={()=>{}} type="outline">
            SEE OTHER PLANS
         </CustomButton>
        
         
         </div>
       
         {/* <div className={styleHero.btn}>
         <button className={styleHero.btnblack}>GET STARTED</button>
         
         <button className={styleHero.btnoutline}>SEE OTHER PLANS</button>
         </div> */}
        <br />
         <p className={styleHero.conditions}><a href="#/Conditions" className={styleHero.link}>Terms and conditions apply.</a> 1 month free not available for users who have already tried Premium.</p>
       </main>

    )
        
    }
// import Button from '../Button';