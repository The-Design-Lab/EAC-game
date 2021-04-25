import React, { useState } from 'react'
import styled from 'styled-components'

const checkboxes = [
  {
    name: 'Buy a Car',
    img:
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2f6d8426253581.563537ab0f34f.jpg',
    price: '24,999',
    key: 'checkBox1',
    label: 'Check Box 1',
  },
  {
    name: 'Buy a House',
    img:
      'https://cdn.dribbble.com/users/3567453/screenshots/9391580/media/77af2d5b11c3a2729fb5df183aab29dc.png?compress=1&resize=400x300',
    price: '600,000',
    key: 'checkBox2',
    label: 'Check Box 2',
  },
]

const Card = styled.label`
  box-shadow: var(--bevel-default);
  padding: 20px;
  width: 250px;
  outline: 2px none;
  cursor: pointer;

  &:active {
    opacity: 0.6;
    box-shadow: var(--bevel-active);
    background: var(--color-primary-light);
  }

  //FIXME: Focus attribute is not working
  &:focus {
    outline: 2px dotted var(--color-secondary);
  }

  .title {
    text-align: center;
    display: block;
    padding-top: 10px;
    font-size: 24px;
  }

  .price {
    display: block;
    text-align: center;
  }

  hr {
    margin: 10px 0;
  }
`
const Checkbox = ({ type = 'checkbox', name, checked = false, onChange }) => {
  // console.log(`Checkbox: ${name} | ${checked}`)
  return <input type={type} name={name} checked={checked} onChange={onChange} />
}

function GoalCards() {
  const [checkedItems, setCheckedItems] = useState({})

  const handleChange = (e) => {
    setCheckedItems({
      ...checkedItems,
      [e.target.name]: e.target.checked,
    })
  }
	console.log('checkedItems: ', checkedItems)

  return (
    <>
      {checkboxes.map((item, index) => (
        <Card
          key={item.key}
          tabindex={index}
          label={item.name}
          style={
            checkedItems[item.name]
              ? { boxShadow: 'var(--bevel-active)', opacity: '.4' }
              : null
          }
        >
          <Checkbox
            name={item.name}
            checked={checkedItems[item.name]}
            onChange={handleChange}
          />
          <img
            src={item.img}
            style={{ height: '140px', objectFit: 'cover' }}
            alt=""
          />
          <span className="title">{item.name}</span>
          <hr />
          <span className="price">${item.price}</span>
        </Card>
      ))}
    </>
  )
}

export default GoalCards
