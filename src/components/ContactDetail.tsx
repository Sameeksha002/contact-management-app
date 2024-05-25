import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { updateContact } from "../redux/contactsSlice";
import { toast } from "react-toastify";

const ContactDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const contact = useSelector((state: RootState) =>
    state.contacts.contacts.find((contact) => contact.id === id)
  );

  const [name, setName] = useState(contact?.name || "");
  const [email, setEmail] = useState(contact?.email || "");
  const [phone, setPhone] = useState(contact?.phone || "");

  if (!contact) {
    return (
      <div className="text-center mt-10 text-red-500">Contact not found</div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateContact({ id: contact.id, name, email, phone }));
    toast.success("Contact updated successfully!");
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-10">
      <form onSubmit={handleSubmit} className="px-6 py-4">
        <h2 className="text-2xl font-bold mb-4">Edit Contact</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Phone:
          </label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="input w-full"
          />
        </div>
        <button
          type="submit"
          className="btn w-full bg-blue-500 text-white py-2 rounded"
        >
          Update Contact
        </button>
      </form>
    </div>
  );
};

export default ContactDetails;
