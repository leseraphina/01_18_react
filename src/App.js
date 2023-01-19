import ProductList from './component/ProductList';
import './App.css';
import mockupData from './data.json'
import { useState } from 'react';

function App() {
 const [order,setOrder] = useState('date');
 const [items, setItems] = useState(mockupData);

//  함수
// const sortItems = items.sort(function(){});
const sortItems = items.sort( (a,b) => b[order] - a[order] );
const NewClick = () => setOrder('date');
const BestClick = () => setOrder('rating');
// delect 함수
const DelectItem = (id) =>{
const nextItem =  items.filter((item) => item.id !== id);
setItems(nextItem)
}
  return (
    <div id="wrap">
      <div className="btn">
          <button type="button" onClick={NewClick}>최신순</button>
          <button type="button" onClick={BestClick}>베스트순</button>
      </div>
      <ProductList items={sortItems} onDelete={DelectItem}/>
    </div>
  );
}

export default App;
