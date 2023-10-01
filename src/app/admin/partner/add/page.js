'use client'

import { useForm } from "@/app/hooks/useForm";
import { useStyles } from "@/app/hooks/useStyles";
import Table from 'react-bootstrap/Table';

export default function PartnerAdd() {
  const { tableShow, tableData } = useStyles();

  const initialState = {
    companyName: '',
    contactName: 'Joe',
    contactEmail: 'joe@example.com',
    contactPhone: '954-555-1212',
    address1: '123 Main St.',
    address2: '#20',
    city: 'Sunrise',
    state: 'FL',
    zip: '33321',
    country: 'US',
  };

  const { formData, handleChange, reset, editFormValues } = useForm(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('formData for addPartner: ', formData);

    const configObj = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    };

    (async function () {
      const response = await fetch('${process.env.VERCEL_URL}/admin/partner/add/api', configObj);
      const partner = await response.json();
      console.log("addPartner Response", partner)
      return partner;
    })();
  }

  return (
    <>
      <h1 className="mb-8 text-3xl font-bold">Add a new Partner</h1>

      <form onSubmit={handleSubmit}>
        <Table responsive striped bordered hover size="sm" style={tableShow}>
          <thead >
          </thead>
          <tbody style={tableData} >
            <tr>
              <td>
                <label htmlFor="companyName">Company Name</label>
              </td>
              <td>
                <input
                  key="30"
                  type="text"
                  id="companyName"
                  name="companyName"
                  onChange={handleChange}
                  value={formData.companyName}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="contactName">Contact Name</label>
              </td>
              <td>
                <input
                  key="40"
                  type="text"
                  id="contactName"
                  name="contactName"
                  onChange={handleChange}
                  value={formData.contactName}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="contactEmail">Contact Email</label>
              </td>
              <td>
                <input
                  key="50"
                  type="text"
                  id="contactEmail"
                  name="contactEmail"
                  onChange={handleChange}
                  value={formData.contactEmail}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="contactPhone">Contact Phone</label>
              </td>
              <td>
                <input
                  key="60"
                  type="text"
                  id="contactPhone"
                  name="contactPhone"
                  onChange={handleChange}
                  value={formData.contactPhone}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="address1">Address 1</label>
              </td>
              <td>
                <input
                  key="70"
                  type="text"
                  id="address1"
                  name="address1"
                  onChange={handleChange}
                  value={formData.address1}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="address2">Address 2</label>
              </td>
              <td>
                <input
                  key="80"
                  type="text"
                  id="address2"
                  name="address2"
                  onChange={handleChange}
                  value={formData.address2}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="city">City</label>
              </td>
              <td>
                <input
                  key="90"
                  type="text"
                  id="city"
                  name="city"
                  onChange={handleChange}
                  value={formData.city}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="state">State</label>
              </td>
              <td>
                <input
                  key="100"
                  type="text"
                  id="state"
                  name="state"
                  onChange={handleChange}
                  value={formData.state}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="zip">Zip</label>
              </td>
              <td>
                <input
                  key="110"
                  type="text"
                  id="zip"
                  name="zip"
                  onChange={handleChange}
                  value={formData.zip}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="country">Country</label>
              </td>
              <td>
                <input
                  key="120"
                  type="text"
                  id="country"
                  name="country"
                  onChange={handleChange}
                  value={formData.country}
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