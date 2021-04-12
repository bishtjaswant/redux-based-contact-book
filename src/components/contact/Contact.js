import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactItem from './ContactItem';
import  './contact.scss';
import { ClearAllContacts, SellectAllContacts , DeleteAllContact} from './redux/contactAction';






const Contact = () => {
    
    const [selectAll, setSelectAll] = useState(false);
    const dispatch= useDispatch();
    const contacts = useSelector(state => state.contacts.contacts);
    const selectedContact = useSelector(state => state.contacts.selectedContact);
   
    useEffect(()=>{
        if (selectAll) {
            dispatch( SellectAllContacts( contacts.map(contact=> contact.id ) )  );
        }else{
            dispatch( ClearAllContacts() );
        }
    },[selectAll]);


    return (
        <>
            <h1 className="danger">Contact list</h1>
          
          
            {
                    selectedContact.length >0 ? (
                        <button onClick={
                            ()=>dispatch(  DeleteAllContact()  ) } className="btn my-3 btn-outline-warning">Delete All</button>
                    ): null
                }
                      
          <table className="table shadow">      
                <thead className='bg-danger text-white'>
                    <tr>
                        <th scope="col">
                            <div className=" custom-checkbox custom-control">
                                <input
                                onClick={()=>setSelectAll(!selectAll)}
                                  type="checkbox" className=' custom-control-input' id="selectAll" />
                                <label htmlFor="selectAll" className='custom-control-label'></label>
                            </div>
                        </th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>

                   {

                       contacts.map((  contact  ) => (
                             <ContactItem key={contact.id} selectAll={selectAll} contact={contact} />
                       ) )
                   }


                </tbody>
            </table>
        </>
    );
};

export default Contact;