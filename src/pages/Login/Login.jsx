import  { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import "./Login.css"
import 'react-phone-number-input/style.css'

export const Login = () => {
    const [value, setValue] = useState()

    return(
        <div id="HomeCont">
            <div>
                <p>please enter your phone number to get started</p>
            </div>
            <div>
                <div>
                <PhoneInput
                    international
                    defaultCountry="US"
                    value={value}
                    onChange={setValue}/>
                </div>
            </div>
            <div className='space'></div>
            <div>
                <div>
                    <div><button>+</button></div>
                    <div><button>Continue</button></div>
                </div>
            </div>
        </div>
    )
}