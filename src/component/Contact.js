import React from 'react';
import {Field, reduxForm} from 'redux-form';

let ContactForm = props => {
    const {handleSubmit} = props
    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstname">First Name</label>
                    <Field name="firstName" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field name="email" component="input" type="text"></Field>
                </div>
                <div>
                <label htmlFor="points">Points</label><br/>
                
                <Field name="point" component="input" type="radio" value="1"></Field>
                <label htmlFor="point">very bad</label>
                
                <Field name="point" component="input" type="radio" value="2"></Field>
                <label htmlFor="point">bad</label>
                
                <Field name="point" component="input" type="radio" value="3"></Field>
                <label htmlFor="point">average</label>
                
                <Field name="point" component="input" type="radio" value="4"></Field>
                <label htmlFor="point">good</label>
                
                <Field name="point" component="input" type="radio" value="5"></Field>
                <label htmlFor="point">very good</label>

                <div>
                    <label htmlFor="comments">Comments</label>
                    <Field name="comments" component="textarea" ></Field>
                </div>
                    {/* <input type="radio" name="point" value="2"></input>
                    <input type="radio" name="point" value="2"></input>
                    <input type="radio" name="point" value="3"></input>
                    <input type="radio" name="point" value="4"></input>
                    <input type="radio" name="point" value="5"></input> */}
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

ContactForm = reduxForm({
    form: 'contact'
})(ContactForm)

export default ContactForm;