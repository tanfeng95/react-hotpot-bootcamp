import React, { useState } from 'react';
import axios from 'axios';

export default function Inputs({
  itemList, setItemList, peopleList, setPeopleList,
}) {
  const [item, setItem] = useState('');
  const [price, setPrice] = useState(0);
  const [person, setPerson] = useState('');

  const handleItemSubmit = (event) => {
    if (item && price) {
      const itemObj = { item, price };
      console.log(itemObj);
      const items = [...itemList, itemObj];
      console.log(items);
      setItemList(items);
      setItem('');
      setPrice('');
    } else {
      console.log('nothing entered');
    }
  };
  const handlePersonSubmit = (event) => {
    try {
      if (person) {
        const data = { name: person, amount: 0 };
        axios
          .post('/person', data)
          .then((result) => {
            console.log(result);
            const { data } = result;
            console.log(data);
            const { person } = result.data;
            person.amount = 0;
            setPeopleList([...peopleList, person]);
          });

        setPerson('');
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div className="main-form">
      <div className="item-input">
        <div>
          <h3>item input</h3>
          <label htmlFor="Item">
            Item :
            <input type="text" id="item" value={item} onChange={(event) => setItem(event.target.value)} />
          </label>
        </div>
        <div>
          <h3>price input</h3>
          <label htmlFor="Price">
            Price :
            <input name="Price" type="text" id="item" value={price} onChange={(event) => setPrice(event.target.value)} />
          </label>
        </div>
        <button type="submit" onClick={handleItemSubmit}>submit item</button>
      </div>
      <div className="person-input">
        <h3>person input</h3>
        <label htmlFor="item">
          Person :
          {' '}
          <input type="text" id="Person" value={person} onChange={(event) => setPerson(event.target.value)} />
        </label>
        <button type="submit" onClick={handlePersonSubmit}>submit person</button>
      </div>

    </div>
  );
}
