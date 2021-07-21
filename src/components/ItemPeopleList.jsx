import React, { useState } from 'react';
import ItemPeople from './ItemPeople.jsx';

const ItemPeopleList = ({ peopleList, itemList }) => (
  itemList.map((item, index) => (
    //  every item needs to have a separate <ItemPeople /> component because separate states
    // (e.g., paylist) need to be maintained for each item
    <ItemPeople key={index} item={item} peopleList={peopleList} />
  ))
);

export default ItemPeopleList;
