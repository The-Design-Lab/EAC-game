import React, { useState, useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";
import INVESTMENTS_VEHICLES from "../data/Investments";
import Checkbox from "@mui/material/Checkbox";
import car from "../img/goals/car-photo-unsplash.jpg";
import education from "../img/goals/education-photo-unsplash.jpg";
import fun from "../img/goals/fun-photo-unsplash.jpg";
import house from "../img/goals/house-photo-unsplash.jpg";
// import kids from "../img/goals/kids-photo-unsplash.jpg";
import retirement from "../img/goals/retirement-photo-unsplash.jpg";
import biz from "../img/goals/start-a-biz-photo-unsplash.jpg";
import vacation from "../img/goals/vacation-photo-unsplash.jpg";
import "swiper/swiper.scss";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { formatter } from "../formatter";

const checkboxData = [
  {
    name: "Buy a House",
    img: house,
    price: 232500,
    label: "house",
    checked: false,
    tag: "House",
  },
  {
    name: "Buy a Car",
    img: car,
    price: 28000,
    label: "house",
    checked: false,
    tag: "Car",
  },
  {
    name: "Buy for Fun",
    img: fun,
    price: 10000,
    label: "fun",
    checked: false,
    tag: "Fun",
  },
  {
    name: "Start a Business",
    img: biz,
    price: 600000,
    label: "fun",
    checked: false,
    tag: "Biz",
  },
  {
    name: "Save for Retirement",
    img: retirement,
    price: 600000,
    label: "retirement",
    checked: false,
    tag: "Retire",
  },
  {
    name: "Save for Kids",
    img: retirement,
    price: 600000,
    label: "kids",
    checked: false,
    tag: "Kids",
  },
  {
    name: "Save for Vacation",
    img: vacation,
    price: 2016,
    label: "vacation",
    checked: false,
    tag: "Trip",
  },
  {
    name: "Save for Education",
    img: education,
    price: 48432,
    label: "education",
    checked: false,
    tag: "Education",
  },
];

let cost = 0;

function GoalCards({ setGoalSelected, setTotalCost }) {
  const { dispatch } = useContext(PlayerContext);
  const [checkedItems, setCheckedItems] = useState({});

  const addAmount = (e) => {
    if (e.target.checked === false) {
      cost = cost - parseInt(e.target.attributes.price.value);
      setTotalCost(cost);
    } else {
      cost = cost + parseInt(e.target.attributes.price.value);
      setTotalCost(cost);
    }
  };

  const handleChange = (e) => {
    if (e.target.checked === true) {
      // set checked items for UI change
      setCheckedItems({
        ...checkedItems,
        [e.target.name]: e.target.checked,
      });

      // create an object to hold each goal data
      const goal = {
        name: e.target.attributes.name.value,
        price: e.target.attributes.price.value,
        tag: e.target.attributes.tag.value,
        checked: true,
      };

      // send the goal data to the global state
      dispatch({
        type: "ADD_GOAL",
        payload: goal,
      });

      if (e.target.name === "Save for Retirement") {
        dispatch({
          type: `ADD_INVESTMENT`,
          payload: INVESTMENTS_VEHICLES.retirement,
        });
      }
      console.log(checkedItems);
      setGoalSelected(true);
    } else if (e.target.checked === false) {
      const goal = {
        name: e.target.attributes.name.value,
        price: e.target.attributes.price.value,
        checked: true,
      };

      // send the goal data to the global state
      dispatch({
        type: "REMOVE_GOAL",
        payload: goal,
      });

      if (e.target.name === "Save for Retirement") {
        dispatch({
          type: `REMOVE_INVESTMENT`,
          payload: INVESTMENTS_VEHICLES.retirement,
        });
      }
    }
  };

  const slides = checkboxData.map((goal) => (
    <SplideSlide>
      <div className="slides">
        <div className="content" id={"content-img"}>
          <img src={goal.img} alt="" />
        </div>
        <div className="content">
          <div id="wrapper">
            <div className="goal-card-text">{goal.name}</div>
            <div className="goal-card-text">{formatter.format(goal.price)}</div>
            <Checkbox
              color="success"
              label="Add"
              inputProps={{
                name: goal.name,
                price: goal.price,
                tag: goal.tag,
              }}
              size="large"
              onChange={handleChange}
              onClick={addAmount}
              on
            />
          </div>
        </div>
      </div>
    </SplideSlide>
  ));

  return (
    <>
      <Splide
        options={{
          perPage: 3,
          height: "30vh",
          rewind: true,
          gap: "3rem",
          padding: "3rem",
          pagination: false,
          width: "60vw",
          arrows: "slider",
        }}
        type={"loop"}
      >
        {slides}
      </Splide>
    </>
  );
}

export default GoalCards;

// <Swiper
//     spaceBetween={20}
//     slidesPerView={1}
//     loop={false}
//     autoplay={{ delay: 3000 }}
//     onSwiper={(swiper) => console.log(swiper)}
// >
//   <SwiperSlide>
//     <div className="content">
//       <div className="slider-image">
//         <img src={car} alt="" />
//       </div>
//       <div className="slider-text">
//         <div className="slider-goal-name">{checkboxData[0].name}</div>
//         <div className="slider-goal-price">{checkboxData[0].price}</div>
//         <Checkbox
//             color="success"
//             label="Add"
//             inputProps={{
//               name: checkboxData[0].name,
//               price: checkboxData[0].price,
//             }}
//             size="large"
//             onChange={handleChange}
//         />
//       </div>
//     </div>
//   </SwiperSlide>
//   <SwiperSlide>
//     <div className="content">
//       <div className="slider-image">
//         <img src={education} alt="" />
//       </div>
//       <div className="slider-text">
//         <div className="slider-goal-name">{checkboxData[1].name}</div>
//         <div className="slider-goal-price">{checkboxData[1].price}</div>
//         <Checkbox
//             color="success"
//             label="Add"
//             inputProps={{
//               name: checkboxData[1].name,
//               price: checkboxData[1].price,
//             }}
//             size="large"
//             onChange={handleChange}
//         />
//       </div>
//     </div>
//   </SwiperSlide>
//   <SwiperSlide>
//     <div className="content">
//       <div className="slider-image">
//         <img src={fun} alt="" />
//       </div>
//       <div className="slider-text">
//         <div className="slider-goal-name">{checkboxData[2].name}</div>
//         <div className="slider-goal-price">{checkboxData[2].price}</div>
//         <Checkbox
//             color="success"
//             label="Add"
//             inputProps={{
//               name: checkboxData[2].name,
//               price: checkboxData[2].price,
//             }}
//             size="large"
//             onChange={handleChange}
//         />
//       </div>
//     </div>
//   </SwiperSlide>
//   <SwiperSlide>
//     <div className="content">
//       <div className="slider-image">
//         <img src={house} alt="" />
//       </div>
//       <div className="slider-text">
//         <div className="slider-goal-name">{checkboxData[3].name}</div>
//         <div className="slider-goal-price">{checkboxData[3].price}</div>
//         <Checkbox
//             color="success"
//             label="Add"
//             inputProps={{
//               name: checkboxData[3].name,
//               price: checkboxData[3].price,
//             }}
//             size="large"
//             onChange={handleChange}
//         />
//       </div>
//     </div>
//   </SwiperSlide>
//   <SwiperSlide>
//     <div className="content">
//       <div className="slider-image">
//         <img src={car} alt="" width="50%" height="50%" />
//       </div>
//       <div className="slider-text">
//         <div className="slider-goal-name">{checkboxData[4].name}</div>
//         <div className="slider-goal-price">{checkboxData[4].price}</div>
//         <Checkbox
//             color="success"
//             label="Add"
//             inputProps={{
//               name: checkboxData[4].name,
//               price: checkboxData[4].price,
//             }}
//             size="large"
//             onChange={handleChange}
//         />
//       </div>
//     </div>
//   </SwiperSlide>
//   <SwiperSlide>
//     <div className="content">
//       <div className="slider-image">
//         <img src={retirement} alt="" />
//       </div>
//       <div className="slider-text">
//         <div className="slider-goal-name">{checkboxData[5].name}</div>
//         <div className="slider-goal-price">{checkboxData[5].price}</div>
//         <Checkbox
//             color="success"
//             label="Add"
//             inputProps={{
//               name: checkboxData[5].name,
//               price: checkboxData[5].price,
//             }}
//             size="large"
//             onChange={handleChange}
//         />
//       </div>
//     </div>
//   </SwiperSlide>
//   <SwiperSlide>
//     <div className="content">
//       <div className="slider-image">
//         <img src={biz} alt="" />
//       </div>
//       <div className="slider-text">
//         <div className="slider-goal-name">{checkboxData[6].name}</div>
//         <div className="slider-goal-price">{checkboxData[6].price}</div>
//         <Checkbox
//             color="success"
//             label="Add"
//             inputProps={{
//               name: checkboxData[6].name,
//               price: checkboxData[6].price,
//             }}
//             size="large"
//             onChange={handleChange}
//         />
//       </div>
//     </div>
//   </SwiperSlide>
//   <SwiperSlide>
//     <div className="content">
//       <div className="slider-image">
//         <img src={vacation} alt="" />
//       </div>
//       <div className="slider-text">
//         <div className="slider-goal-name">{checkboxData[7].name}</div>
//         <div className="slider-goal-price">{checkboxData[7].price}</div>
//         <Checkbox
//             color="success"
//             label="Add"
//             inputProps={{
//               name: checkboxData[7].name,
//               price: checkboxData[7].price,
//             }}
//             size="large"
//             onChange={handleChange}
//         />
//       </div>
//     </div>
//   </SwiperSlide>
// </Swiper>

// <>
//   {checkboxData.map(({ name, price, img, checked, label }, index) => (
//       <Card
//           key={index}
//           tabindex={index}
//           label={label}
//           checked={checked}
//           style={
//             checkedItems[name]
//                 ? { boxShadow: "var(--bevel-active)", opacity: ".4" }
//                 : null
//           }
//       >
//         <Checkbox
//             name={name}
//             price={price}
//             checked={checkedItems[name]}
//             onChange={handleChange}
//         />
//         <img
//             src={img}
//             style={{ height: "100px", objectFit: "cover" }}
//             alt={name}
//         />
//         <span className="title">{name}</span>
//         <hr />
//         <span className="price">${price}</span>
//       </Card>
//   ))}
// </>

// <Card
//     sx={{ maxWidth: 345, backgroundColor: "#202124" }}
//     key={index}
//     tabindex={index}
//     label={label}
//     checked={checked}
// >
//   <img src={img} alt="" style={{ height: "250px" }} />
//   <CardContent>
//     <Typography variant={"h5"} component="div" sx={{ color: "white" }}>
//       {name}
//     </Typography>
//     <Typography variant="body1" sx={{ color: "white" }}>
//       {price}
//     </Typography>
//   </CardContent>
//   <CardActions>
//     <Button size="small" sx={{ color: "green" }}>
//       <Checkbox
//           color="success"
//           label="Add"
//           inputProps={{
//             name: name,
//             price: price,
//             checked: checkedItems[name],
//           }}
//           size="large"
//           onChange={handleChange}
//       />
//     </Button>
//   </CardActions>
// </Card>
