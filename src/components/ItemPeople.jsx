import React, { useState } from 'react';
import axios from 'axios';

export default function ItemPerson(
  { item, peopleList, setPeopleList },
) {
  const [selectedPerson, setSelectedPerson] = useState();
  const [payList, setPayList] = useState([]);

  const handleSelectChange = (event) => {
    console.log(peopleList);
    setSelectedPerson(event.target.value);
  };

  const AddPerson = () => {
    // const updatePayList = [...payList, selectedPerson];

    // const prevPerPersonCost = (updatePayList.length === 1)
    //   ? 0 : Number(item.price) / (updatePayList.length - 1);
    // const updatePersonCost = Number(item.price) / updatePayList.length;
    // console.log(`previous cost per person ${prevPerPersonCost}`);

    // const updatedPeopleList = [...peopleList];
    // updatedPeopleList.forEach((person) => {
    //   if (updatePayList.includes(person.name)) {
    //     if (payList.includes(person.name)) {
    //       person.amount -= prevPerPersonCost;
    //     }
    //     person.amount += updatePersonCost;
    //   }
    // });
    console.log(peopleList);
    const updatedPayList = [...payList, selectedPerson];
    // Calculate new per person cost for this item based on updated pay list
    const prevPerPersonCost = updatedPayList.length === 1
      ? 0 : Number(item.price) / (updatedPayList.length - 1);
    const updatedPerPersonCost = Number(item.price) / updatedPayList.length;
    console.log(`updated per person cost ${updatedPerPersonCost}`);
    console.log(`previus person cost ${prevPerPersonCost}`);
    console.log(peopleList);
    // Create new people list to trigger re-render when we update people list in parent component
    const updatedPeopleList = [...peopleList];

    console.log(`updated list ${updatedPeopleList}`);
    console.log(updatedPeopleList);

    // Update each person's amount based on updated per person cost
    updatedPeopleList.forEach((person) => {
      console.log(person);
      if (updatedPayList.includes(person.name)) {
        // If person was already on pay list, subtract previous per person cost
        console.log(`before${person}`);
        console.log(person);
        if (payList.includes(person.name)) {
          console.log('yes included in payList ');
          console.log(`previous amount per person ${prevPerPersonCost}`);
          person.amount -= prevPerPersonCost;
        }
        console.log(`after${person}`);
        console.log(person);
        console.log('yes included in updatedPayList ');
        // Add the updated per person cost to the person's total amount due
        person.amount += updatedPerPersonCost;
        console.log(`updatedPerPersonCost ${updatedPerPersonCost}`);
      }
    });

    setPeopleList(updatedPeopleList);
    setPayList(updatedPayList);
  };

  return (
    <div>
      <div className="item-people=details">
        <h3>item name</h3>
        <h3>
          {' '}
          {item.item}
        </h3>
        <h3> item price</h3>
        <h3>
          {'$ '}
          {item.price}
        </h3>
      </div>
      <div className="item-people-select">
        <select onChange={handleSelectChange}>

          <option>select a person </option>
          { peopleList.map((person) => (
            <option>
              {person.name}
            </option>
          ))}
        </select>
      </div>
      <div className="add-person-button">
        <button type="submit" onClick={AddPerson}> Add Person</button>
      </div>
      <div className="item-result">
        <ul>
          {payList.map((person) => {
            <li>{person}</li>;
          })}
        </ul>
      </div>
      <div className="cost-per-person">

        {payList.length > 0 && (
          <>
            <h3>cost per person</h3>
            <h3>{item.price / payList.length}</h3>
          </>
        )}
      </div>
    </div>
  );
}
