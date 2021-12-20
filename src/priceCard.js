import React from "react";

export default function PriceCard(props){
    return(
        <div class="col-lg-4 mb-5 mb-lg-0">
        <div class="bg-white p-5 rounded-lg shadow">
          <h1 class="h6 text-uppercase font-weight-bold mb-4">{props.data.type}</h1>
          <h2 class="h1 font-weight-bold">{props.data.price}<span class="text-small font-weight-normal ml-2">/ {props.data.subscription}</span></h2>

          <div class="custom-separator my-4 mx-auto bg-primary"></div>

          <ul class="list-unstyled my-5 text-small text-left">
              {
                  props.data.contentDetails.map((content)=>{
return(<li class={content.isEnabled ? 'mb-3' : 'mb-3 text-muted'}>
<i class="fa fa-check mr-2 text-primary"></i> {content.detail}</li>)
                  })
              }
            {/* <li class="mb-3">
              <i class="fa fa-check mr-2 text-primary"></i> Lorem ipsum dolor sit amet</li>
            <li class="mb-3">
              <i class="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis</li>
            <li class="mb-3">
              <i class="fa fa-check mr-2 text-primary"></i> At vero eos et accusamus</li>
            <li class="mb-3 text-muted">
              <i class="fa fa-times mr-2"></i>
              <del>Nam libero tempore</del>
            </li>
            <li class="mb-3 text-muted">
              <i class="fa fa-times mr-2"></i>
              <del>Sed ut perspiciatis</del>
            </li>
            <li class="mb-3 text-muted">
              <i class="fa fa-times mr-2"></i>
              <del>Sed ut perspiciatis</del>
            </li> */}
          </ul>
          <a href="#" class="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</a>
        </div>
        </div>
    );
        
    
}