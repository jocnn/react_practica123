import React from 'react';
import ContactComponent from './contactComponent';
import { Contact } from '../models/contact';

const ContactListComponent = () => {

  const defaultContact = new Contact('un nombre', 'un apellido', 'algun_email@email.com', 'true');

  return (
    <div>
      <div>Contactos:</div>
      <ContactComponent contacts={defaultContact} />      
    </div>
  );
};

export default ContactListComponent;