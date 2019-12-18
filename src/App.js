import React from 'react';

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image: "https://cdn.crowdpic.net/detail-thumb/thumb_d_CDC14868821FF3F20C77BC8BC15E6355.jpg"
  },
  {
    name: "Kimbap",
    image: "https://ww.namu.la/s/33c9509d550db600898d73c2583211037408f060b2d4f8748fb39d34c8159a2e9867520fb83885e0dbe2ab3884f98c12ed4d9892ea11f54802ab291517037881cc409def91d0ed6e900b4df9c51a4f8a33d63beb7f6270c17e10d2db3918fab9"
  },
  {
    name: "raw beef",
    image: "https://s3.ap-northeast-2.amazonaws.com/meesig/v3/prod/image/item/main/734/8470d678db014c9fbadf9d3f3479282820190128154136"
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (<Food name={dish.name} picture={dish.image} />))}
    </div>
  );
}

export default App;
