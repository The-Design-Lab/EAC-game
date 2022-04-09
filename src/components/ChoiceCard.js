import React, { useState, useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";
import INVESTMENTS_VEHICLES from "../data/Investments";
import car from "../img/goals/car-image.png";
import education from "../img/goals/education-image.png";
import fun from "../img/goals/fun-image.png";
import house from "../img/goals/house-image.png";
import kids from "../img/goals/kids-image.png";
import retirement from "../img/goals/retirement-image.png";
import biz from "../img/goals/start-business-image.png";
import vacation from "../img/goals/vacation-image.png";
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
    src: "goals/house-image.png",
  },
  {
    name: "Buy a Car",
    img: car,
    price: 28000,
    label: "house",
    checked: false,
    tag: "Car",
    src: "goals/vacation-image.png",
  },
  {
    name: "Buy for Fun",
    img: fun,
    price: 10000,
    label: "fun",
    checked: false,
    tag: "Fun",
    src: "goals/fun-image.png",
  },
  {
    name: "Start a Business",
    img: biz,
    price: 600000,
    label: "fun",
    checked: false,
    tag: "Biz",
    src: "goals/start-business-image.png",
  },
  {
    name: "Save for Retirement",
    img: retirement,
    price: 600000,
    label: "retirement",
    checked: false,
    tag: "Retire",
    src: "goals/retirement-image.png",
  },
  {
    name: "Save for Kids",
    img: kids,
    price: 600000,
    label: "kids",
    checked: false,
    tag: "Kids",
    src: "goals/kids-image.png",
  },
  {
    name: "Save for Vacation",
    img: vacation,
    price: 2016,
    label: "vacation",
    checked: false,
    tag: "Trip",
    src: "goals/vacation-image.png",
  },
  {
    name: "Save for Education",
    img: education,
    price: 48432,
    label: "education",
    checked: false,
    tag: "Education",
    src: "goals/education-image.png",
  },
];

let cost = 0;

function GoalCards({ setGoalSelected, setTotalCost }) {
  const { dispatch } = useContext(PlayerContext);
  const [checkedItems, setCheckedItems] = useState({});

  const addAmount = (e) => {
    let data = JSON.parse(e.target.value);
    if (e.target.checked === false) {
      cost = cost - parseInt(data.price);
      setTotalCost(cost);
    } else {
      cost = cost + parseInt(data.price);
      setTotalCost(cost);
    }
  };

  const handleChange = (e) => {
    let data = JSON.parse(e.target.value);
    if (e.target.checked === true) {
      // set checked items for UI change
      setCheckedItems({
        ...checkedItems,
        [e.target.name]: e.target.checked,
      });

      // create an object to hold each goal data
      const goal = {
        name: data.name,
        price: parseInt(data.price),
        tag: data.tag,
        checked: true,
        src: data.src,
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
        name: data.name,
        price: parseInt(data.price),
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
          <img id={"goal-page__img"} src={goal.img} alt="" />
        </div>
        <div className="content">
          <div id="wrapper">
            <div className="goal-card-text">{goal.name}</div>
            <div className="goal-card-text">{formatter.format(goal.price)}</div>
            <input
              type="checkbox"
              id="check"
              name="goal"
              onChange={handleChange}
              value={JSON.stringify({
                name: goal.name,
                price: goal.price,
                tag: goal.tag,
                src: goal.src,
              })}
              onClick={addAmount}
            />
            <label htmlFor="goal" />
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
          height: "31vh",
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
