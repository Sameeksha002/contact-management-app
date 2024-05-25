import React from "react";
import ContactList from "../components/ContactList";

const ContactsPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4 text-center">Contacts</h1>
      <ContactList />
    </div>
  );
};

export default ContactsPage;
