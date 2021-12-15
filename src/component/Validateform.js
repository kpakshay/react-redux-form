
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from './Contact';

const Valform=()=>{
    const submit = values => {
        // console.log(values)
        console.log("Name : "+ values.firstName + values.firstName)
        console.log("Email : "+ values.email)
        console.log("Points : "+ values.point)
        console.log("Comments : "+ values.comments)
    }

        return(
        <>
            <ContactForm onSubmit={submit}/>
        </>
    )
}
export default Valform;