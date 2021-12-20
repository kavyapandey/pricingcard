import logo from './logo.svg';
import './App.css';
import PriceCard from './priceCard';

function App() {
  const cartData =[{
type : "BASIC",
price :"$199",
subscription : "month",
contentDetails :[
  {
    detail: "Lorem ipsum dolor sit amet",
    isEnabled : true
  },
  {
    detail: "Lorem ipsum dolor sit amet",
    isEnabled : true
  },
  {
    detail: "Lorem ipsum dolor sit amet",
    isEnabled : true
  },
  {
    detail: "Lorem ipsum dolor sit amet",
    isEnabled : false
  },
  {
    detail: "Lorem ipsum dolor sit amet",
    isEnabled : false
  },
  {
    detail: "Lorem ipsum dolor sit amet",
    isEnabled : false
  }
]



  },{
    type : "PRO",
price :"$399",
subscription : "month",
contentDetails :[
  {
    detail: "Lorem ipsum dolor sit amet",
    isEnabled : true
  },
  {
    detail: "Lorem ipsum dolor sit amet",
    isEnabled : true
  },
  {
    detail: "Lorem ipsum dolor sit amet",
    isEnabled : true
  },
  {
    detail: "Lorem ipsum dolor sit amet",
    isEnabled : false
  },
  {
    detail: "Lorem ipsum dolor sit amet",
    isEnabled : false
  },
  {
    detail: "Lorem ipsum dolor sit amet",
    isEnabled : false
  }
]


  },{
    type : "ENTERPRISE",
price :"$899",
subscription : "month",
contentDetails :[
  {
    detail: "Lorem ipsum dolor sit amet",
    isEnabled : true
  },
  {
    detail: "Lorem ipsum dolor sit amet",
    isEnabled : true
  },
  {
    detail: "Lorem ipsum dolor sit amet",
    isEnabled : true
  },
  {
    detail: "Lorem ipsum dolor sit amet",
    isEnabled : false
  },
  {
    detail: "Lorem ipsum dolor sit amet",
    isEnabled : false
  },
  {
    detail: "Lorem ipsum dolor sit amet",
    isEnabled : false
  }
]


  }];
  return (
    <section>
    <div class="container py-5">
    <div class="row text-center align-items-end">
      {
        cartData.map((Carddata)=>{
 return <PriceCard data={Carddata}></PriceCard>
        })
      }
    </div>
      </div>
      </section>
  );
}

export default App;
