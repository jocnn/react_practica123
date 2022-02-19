import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact';

const ContactComponent = ({contacts}) => {

  return (
    <div>
      <h2>Nombre: {contacts.nombre}</h2>
      <h3>Descripcion: {contacts.apellido}</h3>
      <h4>Nivel: {contacts.email}</h4>
      <h4>Nivel: {contacts.conectado}</h4>
    </div>
  );
};

ContactComponent.propTypes = {
  contacts: PropTypes.instanceOf(Contact)
};

export default ContactComponent;