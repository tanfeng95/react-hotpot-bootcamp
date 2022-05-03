import React, { useState } from 'react';

import Bill from './components/Bill.jsx';
import Inputs from './components/Inputs.jsx';
import ItemPeopleList from './components/ItemPeopleList.jsx';
import Cost from './components/Cost.jsx';

export default function App() {
  const [billName, setBillName] = useState('');
  const [newBill, setNewBill] = useState();
  const [itemList, setItemList] = useState([]);
  const [peopleList, setPeopleList] = useState([]);
  return (
    <div>
      {!newBill ? (<Bill setNewBill={setNewBill} billName={billName} setBillName={setBillName} />)

        : (
          <>
            <Inputs
              itemList={itemList}
              setItemList={setItemList}
              peopleList={peopleList}
              setPeopleList={setPeopleList}
            />
            {itemList.length > 0 && (
            <>
              <div className="item-list-container">
                {console.log(itemList)}
                {console.log(peopleList)}
                <ItemPeopleList
                  itemList={itemList}
                  peopleList={peopleList}
                  setPeopleList={setPeopleList}
                />
              </div>

            </>
            )}
            <div className="cost-container">
              <Cost peopleList={peopleList} itemList={itemList} />
            </div>
          </>

        )}

    </div>
  );
}
