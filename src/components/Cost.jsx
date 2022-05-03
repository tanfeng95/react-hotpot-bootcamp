import axios from 'axios';
import React, { useState } from 'react';

export default function Cost({ peopleList, itemList }) {
  const [showAmount, setShowAmount] = useState(false);

  let totalCost = 0;
  itemList.forEach((item) => {
    totalCost += Number(item.price);
  });

  const CalculateTotalPerPerson = () => {
    console.log(peopleList);
    axios
      .post('/mealCost', { peopleList })
      .then((response) => {
        console.log(response.data);
      })
      .catch((ex) => {
        console.log(ex);
      });
    return (
      <div>
        {peopleList.map((person) => (
          <h4>
            {person.name}
            {' '}
            $
            {person.amount}
          </h4>
        ))}
      </div>
    );
  };

  return (
    <div>
      <h3>
        total cost  : $
        {totalCost}
      </h3>
      <div>
        <button type="submit" onClick={() => setShowAmount(true)}> calulate cost per person and save bill</button>
      </div>
      {showAmount && (
        <CalculateTotalPerPerson />
      )}

    </div>
  );
}
