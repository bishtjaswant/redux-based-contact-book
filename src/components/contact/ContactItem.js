import React from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GetRemoveContact } from './redux/contactAction';


const ContactItem = ({ contact, selectAll }) => {

     const dispatch= useDispatch();




    return (
        <>
            <tr>
                <td>
                    <div className=" custom-checkbox custom-control">
                        <input checked={selectAll} type="checkbox" className=' custom-control-input' id="" />
                        <label htmlFor="" className='custom-control-label'></label>
                    </div>
                </td>
                <td scope="row">
                    <Avatar className="mr-3" size={35} round={true} name={contact.name} />
                    {contact.name} </td>
                <td scope="row"> {contact.phone} </td>
                <td scope="row"> {contact.email} </td>
                <td className='action'>
                    <Link to={`/contact/edit/${contact.id}`} className='text-warning'><i class="material-icons i" >mode_edit</i>  </Link>
                    <span
                      onClick={()=> dispatch(  GetRemoveContact( contact.id  ) )  } className='text-danger'><i class="material-icons i" >delete_forever</i>  </span>
                </td>
            </tr>
        </>
    );
};

export default ContactItem;