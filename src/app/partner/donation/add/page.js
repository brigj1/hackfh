'use client'

import { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { useForm } from "@/app/hooks/useForm";
import { useStyles } from "@/app/hooks/useStyles";
import Table from 'react-bootstrap/Table';

export function DonationEventAdd() {
  const { tableShow, tableData } = useStyles();

  const initialState = {
    createdAt: '',
    deliveryDate: '',
    status: 'pending',
    notes: '',
    partnerID: 1,
    DonationItem: [],
  };

  const { formData, handleChange, reset, editFormValues } = useForm(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('formData for addDonationEvent: ', formData);

    const configObj = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    };

    (async function () {
      const response = await fetch('${process.env.NEXT_PUBLIC_VERCEL_URL}/partner/donation/add', configObj);
      const donationEvent = await response.json();
      console.log("addPartner Response", donationEvent)
      return donationEvent;
    })();
  }

  return (
    <>
      <h1 className="mb-8 text-3xl font-bold">Choose a Donation Date</h1>

      <form onSubmit={handleSubmit}>
        <Table responsive striped bordered hover size="sm" style={tableShow}>
          <thead >
          </thead>
          <tbody style={tableData} >
            <tr>
              <td>
                <label for="deliveryDate">Donation Date:</label>
              </td>
              <td>
                <input
                  key="30"
                  type="datetime-local"
                  id="deliveryDate"
                  name="deliveryDate"
                  onChange={handleChange}
                  value={formData.deliveryDate}
                  min="2023-06-07T00:00"
                  max="2028-06-14T00:00"
                //   value="2018-06-12T19:30"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="donationEventNotes">Notes</label>
              </td>
              <td>
                <input
                  key="40"
                  type="text"
                  id="donationEventNotes"
                  name="notes"
                  onChange={handleChange}
                  value={formData.notes}
                />
              </td>
            </tr>
          </tbody>
        </Table>
        <input key="200" type='submit' value='Submit' />
      </form>
    </>
  )
}


export function DonationItemAdd() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      // fetch('/items');
      const response = await fetch('${process.env.NEXT_PUBLIC_VERCEL_URL}/partner/item/list/api');
      const fetchedItems = await response.json();
      setItems(fetchedItems);
    }

    fetchItems();
  }, []);

  const { tableShow, tableData } = useStyles();

  const initialState = {
    createdAt: new Date(),
    additionalImages: '',
    quantity: 1,
    retailPrice: 0,

    // get id via elsewhere on this form
    donationEventId: 1,

    itemId: '',
  };

  const { formData, handleChange, reset, editFormValues } = useForm(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('formData for addDonationItem: ', formData);

    const configObj = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    };

    (async function () {
      const response = await fetch('${process.env.NEXT_PUBLIC_VERCEL_URL}/partner/donation/add/api', configObj);
      const donationItem = await response.json();
      console.log("addDonationItem Response", donationItem)
      return donationItem;
    })();
  }

  return (
    <>
      <h1 className="mb-8 text-3xl font-bold">Choose a Donation Date</h1>
      <form onSubmit={handleSubmit}>
        <Table responsive striped bordered hover size="sm" style={tableShow}>
          <thead >
          </thead>
          <tbody style={tableData} >
            <tr>
              <td>
                <label htmlFor="theItemId">Item Id</label>
              </td>
              <td>
                <input
                  key="30"
                  type="text"
                  id="theItemId"
                  name="itemId"
                  onChange={handleChange}
                  value={formData.itemId}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="additionalImages">Additional Images</label>
              </td>
              <td>
                <input
                  key="40"
                  type="text"
                  id="additionalImages"
                  name="additionalImages"
                  onChange={handleChange}
                  value={formData.additionalImages}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="donationItemQuantity">quantity</label>
              </td>
              <td>
                <NumericFormat displayType="input"
                  key="50"
                  type="text"
                  id="donationItemQuantity"
                  name="quantity"
                  onChange={handleChange}
                  value={formData.quantity}
                  decimalScale={0}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="retailPrice">Retail Price</label>
              </td>
              <td>
                &nbsp;$
                <NumericFormat displayType="input"
                  key="60"
                  type="text"
                  id="retailPrice"
                  name="retailPrice"
                  onChange={handleChange}
                  value={formData.retailPrice}
                  decimalScale={2}
                />
              </td>
            </tr>
          </tbody>
        </Table>
        <input key="200" type='submit' value='Submit' />
      </form>
    </>
  )
}


export default function Page() {
  return (
    <h1 className="mb-8 text-3xl font-bold">Add Donation</h1>
  )
}