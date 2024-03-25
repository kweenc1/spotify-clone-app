export const HeaderNavigation = () => {
    return(  <ul>
        <li> <a href='#/Premium'>Premium</a>
        </li>
        <li><a href='#/Support'>Support</a>
        </li>
        <li><a href='#/Download'>Download</a>
        </li>
        <li>|</li>
        <li  className='active'><a href='#/SignUp'>Sign Up</a>
        </li>
        <li className='active'><a href='#/Login' >Login</a>
        </li>
    </ul>)
}