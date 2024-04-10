
import {React,useState} from 'react';
import Item from './Item';

export default function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  const [sortBy, setSortBy] = useState('input')

  let sortedItems

  if (sortBy === 'input') sortedItems = items

  if (sortBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description))

  if (sortBy === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed))

  return (
      
    <div className="list">
      
          <ul className="no-scroll">
            {sortedItems.map((item) => (
              <Item
                item={item}
                key={item.id}
                onDeleteItem={onDeleteItem}
                onToggleItem={onToggleItem}
              />
            ))}
          </ul>
     
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sorts by input order</option>
            <option value="packed">Sorts by packed status</option>
            <option value="description">Sorts by description</option>
          </select>
          <button onClick={onClearList}>Clear list</button>
        </div>
      </div>
    
  )
}
