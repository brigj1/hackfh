'use client'

import { NumericFormat } from 'react-number-format';
import { useForm } from "@/app/hooks/useForm";
import { useStyles } from "@/app/hooks/useStyles";
import Table from 'react-bootstrap/Table';

export default function ItemAdd() {
  const { tableShow, tableData } = useStyles();

  const initialState = {
    name: '',
    description: 'Interlocking couch, brownish red',
    images: '',
    msrp: 0,
    upc: '12345',
    url: 'https://cityfurniture.com',
    partnerId: 1,
  };

  const { formData, handleChange, reset, editFormValues } = useForm(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('formData for addItem: ', formData);

    const configObj = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( formData )
    };

    (async function () {
      const response = await fetch('${process.env.NEXT_PUBLIC_VERCEL_URL}/partner/item/add/api', configObj);
      const item = await response.json();
      console.log("addItem Response", item)
      return item;
    })();
  }

  return (
    <>
        <h1>Add Item</h1>
        <p>This is our item intake form</p>

    <form onSubmit={handleSubmit}>
    <Table responsive striped bordered hover size="sm" style={tableShow}>
      <thead >
      </thead>
      <tbody style={tableData} >
        <tr>
          <td>
            <label htmlFor="itemName">Item Name</label>
          </td>
          <td>
            <input
              key="30"
              type="text"
              id="itemName"
              name="name"
              onChange={handleChange}
              value={formData.itemName}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="itemDescription">Description</label>
          </td>
          <td>
            <input
              key="40"
              type="text"
              id="itemDescription"
              name="description"
              onChange={handleChange}
              value={formData.description}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="itemImages">Images</label>
          </td>
          <td>
            <input
              key="50"
              type="text"
              id="itemImages"
              name="images"
              onChange={handleChange}
              value={formData.images}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="msrp">MSRP</label>
          </td>
          <td>
            <NumericFormat displayType="input"
              key="60"
              type="text"
              id="msrp"
              name="msrp"
              onChange={handleChange}
              value={formData.msrp}
              decimalScale={2}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="itemUPC">UPC</label>
          </td>
          <td>
            <input
              key="70"
              type="text"
              id="itemUPC"
              name="upc"
              onChange={handleChange}
              value={formData.upc}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="itemUrl">URL</label>
          </td>
          <td>
            <input
              key="80"
              type="text"
              id="itemUrl"
              name="url"
              onChange={handleChange}
              value={formData.url}
            />
          </td>
        </tr>
        <tr>
          <td>
            Partner ID
          </td>
          <td>
            1
          </td>
        </tr>
      </tbody>
    </Table>
                <input key="200" type='submit' value='Submit' />
            </form>
    </>
  )
}