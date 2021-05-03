import React, { useState, useContext } from 'react'
import { PlayerContext } from '../contexts/PlayerContext'
import styled from 'styled-components'

const checkboxData = [
  {
    name: 'Buy a House',
    img:
      'https://cdn5.vectorstock.com/i/1000x1000/33/89/pixel-house-with-fence-and-garden-vector-10273389.jpg',
    price: '250,000',
    label: 'house',
    checked: false,
  },
  {
    name: 'Buy a Car',
    img:
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2f6d8426253581.563537ab0f34f.jpg',
    price: '24,999',
    label: 'house',
    checked: false,
  },
  {
    name: 'Buy for Fun',
    img:
      'https://previews.123rf.com/images/saphatthachat/saphatthachat1903/saphatthachat190300115/124294868-vector-pixel-art-fantasy-gift-box-isolated-cartoon.jpg',
    price: '600,000',
    label: 'fun',
    checked: false,
  },
  {
    name: 'Start a Business',
    img:
      'https://images.cdn2.stockunlimited.net/preview1300/pixel-art-business-agreement_2009884.jpg',
    price: '600,000',
    label: 'fun',
    checked: false,
  },
  {
    name: 'Save for Retirement',
    img:
      'https://image.shutterstock.com/image-vector/vector-8-bit-pixel-art-260nw-534940771.jpg',
    price: '600,000',
    label: 'retirement',
    checked: false,
  },
  {
    name: 'Save for Kids',
    img:
      'https://image.shutterstock.com/shutterstock/photos/1171388173/display_1500/stock-vector-vector-pixel-art-cry-baby-isolated-cartoon-1171388173.jpg',
    price: '600,000',
    label: 'kids',
    checked: false,
  },
  {
    name: 'Save for Vacation',
    img:
      'https://previews.123rf.com/images/pdreams/pdreams1305/pdreams130500011/19606915-family-road-trip-summer-vacation-holidays-pixel-art-retro-clipart.jpg',
    price: '600,000',
    label: 'vacation',
    checked: false,
  },
  {
    name: 'Save for Education',
    img:
      'https://previews.123rf.com/images/saphatthachat/saphatthachat1803/saphatthachat180300162/98031934-vector-pixel-art-book-open-isolated-cartoon.jpg',
    price: '600,000',
    label: 'education',
    checked: false,
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
const Checkbox = ({ name, price, checked, onChange }) => {
  return (
    <input
      type="checkbox"
      name={name}
      price={price}
      checked={checked}
      onChange={onChange}
    />
  )
}

function GoalCards() {
  const { dispatch } = useContext(PlayerContext)
  const [checkedItems, setCheckedItems] = useState({})

  const handleChange = (e) => {
    // set checked items for UI change
    setCheckedItems({
      ...checkedItems,
      [e.target.name]: e.target.checked,
    })

    // create an object to hold each goal data
    const goal = {
      name: e.target.attributes.name.value,
      price: e.target.attributes.price.value,
      checked: true,
    }

    // send the goal data to the global state
    dispatch({
      type: 'ADD_GOAL',
      payload: goal,
    })
  }

  return (
    <>
      {checkboxData.map(({ name, price, img, checked, label }, index) => (
        <Card
          key={index}
          tabindex={index}
          label={label}
          checked={checked}
          style={
            checkedItems[name]
              ? { boxShadow: 'var(--bevel-active)', opacity: '.4' }
              : null
          }
        >
          <Checkbox
            name={name}
            price={price}
            checked={checkedItems[name]}
            onChange={handleChange}
          />
          <img
            src={img}
            style={{ height: '100px', objectFit: 'cover' }}
            alt={name}
          />
          <span className="title">{name}</span>
          <hr />
          <span className="price">${price}</span>
        </Card>
      ))}
    </>
  )
}

export default GoalCards
