// ChipInput.tsx
import React, { useState, useEffect, KeyboardEvent } from 'react';
import { ListGroup, Badge, Button, Form } from 'react-bootstrap';
import './ChipInput.css';

interface Chip {
  id: number;
  label: string;
}

const ChipInput: React.FC = () => {
  const [chips, setChips] = useState<Chip[]>([]);
  const [filteredItems, setFilteredItems] = useState<{ label: string; mail: string }[]>([]);
  const [searchInput, setSearchInput] = useState<string>('');

  const items = [
    { label: 'Nick Giannopoulos', mail: 'nick@example.com' },
    { label: 'John Doe', mail: 'john@example.com' },
    { label: 'Jane Smith', mail: 'jane@example.com' },
    { label: 'Alice Johnson', mail: 'alice@example.com' },
    { label: 'Bob Williams', mail: 'bob@example.com' },
    { label: 'Eva Davis', mail: 'eva@example.com' },
    { label: 'Samuel Brown', mail: 'samuel@example.com' },
    { label: 'Olivia White', mail: 'olivia@example.com' },
    { label: 'Daniel Lee', mail: 'daniel@example.com' },
    { label: 'Sophia Taylor', mail: 'sophia@example.com' },
    // Add more items as needed
  ];

  useEffect(() => {
    setFilteredItems(
      items.filter(
        (item) =>
          !chips.some((chip) => chip.label === item.label) &&
          item.label.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [chips, items, searchInput]);

  const handleItemClick = (item: { label: string; mail: string }) => {
    setChips([...chips, { id: Date.now(), label: item.label }]);
    setFilteredItems(filteredItems.filter((filteredItem) => filteredItem.label !== item.label));
  };

  const handleChipRemove = (id: number) => {
    const removedChip = chips.find((chip) => chip.id === id);
    if (removedChip) {
      setFilteredItems([...filteredItems, { label: removedChip.label, mail: '' }]);
      setChips(chips.filter((chip) => chip.id !== id));
    }
  };

  // Dynamically construct the placeholder based on selected chips
  const placeholder =
    chips.length > 0
      ? `Selected Users: ${chips.map((chip) => chip.label).join(', ')}`
      : 'Add new users...';

  return (
    <div className="chip-input">
      <h1>Pick Users</h1>

     
      <Form style={{ backgroundColor: '#f2f2f2', padding: '10px' }}>
  <Form.Control
    type="text"
    placeholder="Search users..."
    value={searchInput}
    onChange={(e) => setSearchInput(e.target.value)}
    style={{ fontSize: '16px' }}
  />
  <ListGroup className="chips-container">
    {chips.map((chip) => (
      <ListGroup.Item key={chip.id} className="chip">
        {chip.label}
        <Button variant="light" onClick={() => handleChipRemove(chip.id)}>
          X
        </Button>
      </ListGroup.Item>
    ))}
  </ListGroup>
</Form>



      <ul className="item-list list-group">
        {filteredItems.map((item) => (
          <li
            key={item.label}
            className="list-group-item d-flex justify-content-between align-items-center"
            onClick={() => handleItemClick(item)}
          >
            {item.label}
            <Badge className="rounded-pill" bg="primary">
              {item.mail}
            </Badge>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChipInput;
