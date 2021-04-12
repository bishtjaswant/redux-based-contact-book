import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { AddTOContact, GetContact, GetUpdateContact } from './redux/contactAction';
import { useHistory, useParams } from 'react-router-dom';
import uniqid from 'uniqid';

const AddContact = (props) => {
    // const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const { id } = useParams();
    const dispatch = useDispatch();
    const contact = useSelector(state => state.contacts.contact);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');





    useEffect(() => {
        if (contact != null) {

            setName(contact['name']);
            setEmail(contact['email']);
            setPhone(contact['phone']);
        }
    
        dispatch(GetContact(id));

        // return () => {}
    }, [contact]);

 
 
 
    const onUpdateSubmit = (e) => {
        e.preventDefault();


        let update_data= Object.assign(contact,{name,email,phone});;
        console.log(update_data);

        dispatch( GetUpdateContact(update_data) );

        //redirectinhg to home
       history.push("/");
    }






    return (
        <div className="card shadow-lg border-0">
            <div className=" card-header">
                <h1 className='text-capitalize'>update contact</h1>
            </div>

            <div className=" card-body">
                <form onSubmit={onUpdateSubmit}>

                    <div className="form-group">
                        <label htmlFor="Name">Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} name='name' className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name='email' className="form-control" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone number</label>
                        <input type="number"
                         value={phone} onChange={(e) => setPhone(e.target.value)} name='phone' className="form-control" />


                    </div>

                    <button type="submit" className="btn btn-outline-primary text-capitalize">update</button>
                </form>
            </div>
        </div>
    );
};

export default AddContact;