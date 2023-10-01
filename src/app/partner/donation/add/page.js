'use client'

import { useForm } from "../../hooks/useForm";
import { useStyles } from "../../hooks/useStyles";
import Table from 'react-bootstrap/Table';

export function DonationEventAdd() {
  const { tableShow, tableData } = useStyles();

  function Component() {
    const [datetime, setDatetime] = useState(() => getInputDatetime()) // getInputDatetime does the formatting of the current date.
  
    return <input type='datetime-local' value={datetime} onChange={(e) => setDatetime(e.target.value)}/>
  }

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

    console.log('formData for addPartner: ', formData);

    const configObj = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    };

    (async function () {
      const response = await fetch('http://localhost:3000/admin/partner/add/api', configObj);
      const partner = await response.json();
      console.log("addPartner Response", partner)
      return partner;
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


export default function Page() {
  return (
    <h1 className="mb-8 text-3xl font-bold">Add Donation</h1>
  )
}