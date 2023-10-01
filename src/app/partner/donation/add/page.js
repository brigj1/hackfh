'use client'

import { server } from '@/app/config/index';
import { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { useForm } from "@/app/hooks/useForm";
import { useStyles } from "@/app/hooks/useStyles";
import Table from 'react-bootstrap/Table';


export default function Page() {
  const [donationItems, setDonationItems] = useState([]);
  const [deliveryDate, setDeliveryDate] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {

      const response = await fetch(`${server}/partner/item/list/api`);
      const fetchedItems = await response.json();
      setItems(fetchedItems);
    }

    fetchItems();
  }, []);

  function handleDeliveryDate(e) {
    setDeliveryDate(e.target.value)
  }

  const initialState = {
    donationItemId: '',
    donationItemQty: '',
  }
  const { formData, handleChange, reset, editFormValues } = useForm(initialState);

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData);
    setDonationItems([...donationItems, { id: formData.donationItemId, qty: formData.donationItemQty }])
  }

  function submitDonation() {
    const configObj = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        deliveryDate: deliveryDate,
        items: donationItems
      })
    };

    console.log(configObj.body);

    (async function () {
      const response = await fetch(`${server}/partner/donation/add/api`, configObj);
      const donationEvent = await response.json();
      console.log("addDonationEvent Response", donationEvent)
      return donationEvent;
    })();
  }
  return (
    <section className='w-1/3 mx-auto'>
      <h1 className="mb-8 text-3xl font-bold">Add Donation</h1>
      <label htmlFor="deliveryDate">
        Donation Event Id
        <input type="date" name="deliveryDate" onChange={handleDeliveryDate} />
      </label>
      <form onSubmit={handleSubmit} className='flex gap-4'>
        {/* add repeating input fields for each item */}
        <select name="donationItemId" defaultValue="0" onChange={handleChange} >
          <option value="0" key="empty" disabled>Select an item</option>
          {items.map((item) => (
            <option value={item.id} key={item.id}>{item.name}</option>
          ))}
        </select>
        <input type="text" name="donationItemQty" onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>
      <section >
        {donationItems.map((donationItem, index) => (
          <div className='flex gap-2' key={index}>
            <p>{items.find(item => item.id == donationItem.id).name}</p>
            <p>{donationItem.qty}</p>
          </div>
        ))}
      </section>
      <button onClick={submitDonation}>Submit Donation</button>
    </section>
  )
}