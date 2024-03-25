import UPILogo from '../../assets/icons/UPILogo.svg'
// import UPI from '../../assets/icons/UPILogo.svg'
import paytm from '../../assets/icons/paytm.svg'
import visa from '../../assets/icons/visa.svg'
import MasterCard from '../../assets/icons/MasterCard.svg'
import amex from '../../assets/icons/amex.svg'
import dinersClub from '../../assets/icons/dinersClub.svg'

export const paymentMethods = [
    {
        icon: UPILogo,
    },
    {
        icon: paytm,
    },
    {
        icon: visa,
    },
    {
        icon: MasterCard,
    },
    {
        icon: amex,
    },
    {
        icon: dinersClub
    }
   
]

export const PackagingList = [{
    free: null,
    planName: 'Mini',
    price: 'From ₹7/day',
    numberAccount: 1,
    features: [
        'Ad-free music listening',
        'Group Session',
        'Download 30 songs on 1 mobile device'
    ]
},{
    free: 1,
    planName: 'Individual',
    price: '₹119',
    numberAccount: 1,
    features: [
        'Ad-free music listening',
        'Group Session',
        'Download 10k songs/device on 5 devices'
    ]
},{
    free: 1,
    planName: 'Duo',
    price: '₹149',
    numberAccount: 2,
    features: [
        'For couples who live together',
        'Ad-free music listening',
        'Group Session',
        'Download 10k songs/device on 5 devices per account'
    ]
},{
    free: 1,
    planName: 'Family',
    price: '₹179',
    numberAccount: 6,
    features: [
        'For family who live together',
        'Block explicit music',
        'Ad-free music listening',
        'Group Session',
        'Download 10k songs/device on 6 devices'
    ]
}]

