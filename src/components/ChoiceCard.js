import React, { useState } from 'react'
import styled from 'styled-components'

const checkboxes = [
  {
    name: 'Buy a Car',
    img:
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2f6d8426253581.563537ab0f34f.jpg',
    price: '24,999',
    label: 'car',
  },
  {
    name: 'Buy a House',
    img:
      'https://cdn.dribbble.com/users/3567453/screenshots/9391580/media/77af2d5b11c3a2729fb5df183aab29dc.png?compress=1&resize=400x300',
    price: '600,000',
    label: 'house',
  },
  {
    name: 'Buy for Fun',
    img:
      'https://previews.123rf.com/images/saphatthachat/saphatthachat1903/saphatthachat190300115/124294868-vector-pixel-art-fantasy-gift-box-isolated-cartoon.jpg',
    price: '600,000',
    label: 'fun',
  },
  {
    name: 'Start a Business',
    img:
      'https://images.cdn2.stockunlimited.net/preview1300/pixel-art-business-agreement_2009884.jpg',
    price: '600,000',
    label: 'fun',
  },
  {
    name: 'Save for Retirement',
    img:
      'https://image.shutterstock.com/image-vector/vector-8-bit-pixel-art-260nw-534940771.jpg',
    price: '600,000',
    label: 'retirement',
  },
  {
    name: 'Save for Kids',
    img:
      'https://image.shutterstock.com/shutterstock/photos/1171388173/display_1500/stock-vector-vector-pixel-art-cry-baby-isolated-cartoon-1171388173.jpg',
    price: '600,000',
    label: 'kids',
  },
  {
    name: 'Save for Vacation',
    img:
      'https://previews.123rf.com/images/pdreams/pdreams1305/pdreams130500011/19606915-family-road-trip-summer-vacation-holidays-pixel-art-retro-clipart.jpg',
    price: '600,000',
    label: 'vacation',
  },
  {
    name: 'Save for Education',
    img:
      'https://previews.123rf.com/images/saphatthachat/saphatthachat1803/saphatthachat180300162/98031934-vector-pixel-art-book-open-isolated-cartoon.jpg',
    price: '600,000',
    label: 'education',
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
    font-size: 22px;
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
          key={index}
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
            style={{ height: '100px', objectFit: 'cover' }}
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
