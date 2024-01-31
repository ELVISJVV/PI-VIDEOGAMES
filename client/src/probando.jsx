import React from 'react';
import { createRoot } from 'react-dom/client';

class ContactForm extends React.Component {

    constructor(props) {
        super(props); {
            this.state = {
                age: 0
            }
        }
    }

     onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // Fill in appropriate state properties



    render() {
        return <div>
            {/* render contact form input fields here */}

            <input name="firstName" />
            <input name="age"  placeholder='edad' onChange={this.onChange}/>
            {this.state.age >= 14 && <input type="email" name="email" />}

        </div>
    }

}

export default ContactForm;