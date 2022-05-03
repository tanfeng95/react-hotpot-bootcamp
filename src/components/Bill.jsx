import React from 'react';
import axios from 'axios';

export default function Bill({ setNewBill, billName, setBillName }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (billName) {
      const data = {
        name: billName,
      };
      console.log(data);
      axios
        .post('/createBill', data)
        .then((response) => {
          console.log(response.data.bill.id);
          const { id } = response.data.bill;
          setNewBill(response.data.bill);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log('nothing entered');
    }
  };

  return (
    <div>
      <h2>create bill</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="bill-name" value={billName} onChange={(event) => { setBillName(event.target.value); }} />
        <button type="submit"> submit</button>
      </form>

    </div>
  );
}
