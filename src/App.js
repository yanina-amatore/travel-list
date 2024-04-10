import { useState } from 'react'
import PackingList from './components/PackingList'
import Form from './components/Form'
import Stats from './components/Stats'

export default function App() {
  const [items, setItems] = useState([])

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  function handleAddItems(item) {
    setItems((items) => [...items, item])
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    )
  }

  function handleClearList() {
    const confirmed = window.confirm('Are you sure you want to clear the list?')
    if (confirmed) setItems([])
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  )
}

function Logo() {
  return <h1 className="">Far Away</h1>
}

