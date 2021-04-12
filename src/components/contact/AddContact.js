import React from 'react';
import { useForm } from "react-hook-form";
import {  useDispatch } from 'react-redux';
import { AddTOContact } from './redux/contactAction';
import { useHistory } from 'react-router-dom';
import uniqid from 'uniqid';

const AddContact = (props) => {         
    const { register, handleSubmit, formState:{ errors } } = useForm();
     const history=useHistory();
    const dispatch= useDispatch()

    const onSubmit = (data) => {
        console.log(data);
        dispatch( AddTOContact({
            id: uniqid(),
            name:data.name,
            email:data.email,
            phone:data.phone,
        }) );
          

        //redirectinhg to home
        history.push("/")
    }



    return (
        <div className="card shadow-lg border-0">
            <div className=" card-header">
                <h1 className='text-capitalize'>add new contact</h1>
            </div>

            <div className=" card-body">
            <form  onSubmit={handleSubmit( onSubmit ) }>
            
                <div className="form-group">
                        <label htmlFor="Name">Name</label>
                        <input type="text"   name='name' className="form-control"  {...register("name", { required: true, minLength: 2 } )}  />

                        {errors.name?.type=='required' && <span className='text-danger'>This field is required</span>}
                        {errors.name?.type=='minLength' && <span className='text-danger'>This field  should be contains more  than five character</span>}
      
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" name='email'   className="form-control"  {...register("email",  { required: true , pattern: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/  } )  }    aria-describedby="emailHelp" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        {errors.email?.type=='required' && <span className='text-danger'>Email address required</span>}
                        {errors.email?.type=='pattern' && <span className='text-danger'>Email address not valid </span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone number</label>
                        <input type="number" defaultValue='jm' name='phone'  className="form-control" 
                        {...register("phone", { required: true,pattern: /^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/ }  )  }   />
                        {errors.phone?.type=='required' && <span className='text-danger'>Enter your phone number </span>}
                        {errors.phone?.type=='pattern' && <span className='text-danger'>Phone number invalid</span>}

                    </div>
                  
                    <button type="submit" className="btn btn-danger">Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddContact;