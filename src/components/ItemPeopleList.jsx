import React, { useState } from 'react';
import axios from 'axios';

import ItemPerson from './ItemPeople.jsx';

export default function ItemPeopleList({ itemList, peopleList, setPeopleList }) {
  console.log(peopleList);
  return (itemList.map((item, index) => (
    <ItemPerson
      item={item}
      peopleList={peopleList}
      setPeopleList={setPeopleList}
    />
  )));
}

// const ItemPeopleList = ({ itemList, peopleList, setPeopleList }) => (
//   itemList.map((item, index) => (
//     <ItemPerson key={index} item={item} peopleList={peopleList} setPeopleList={setPeopleList} />
//   ))
// );

// export default ItemPeopleList;

// const ItemPeopleList = ({ itemList, peopleList, setPeopleList }) => (
//   itemList.map((item, index) => (
//     // Every item has a separate <ItemPeople /> component each item needs its
//     // own state of who should be charged for that item
//     <ItemPerson key={index} item={item} peopleList={peopleList} setPeopleList={setPeopleList} />
//   ))
// );

// export default ItemPeopleList;
