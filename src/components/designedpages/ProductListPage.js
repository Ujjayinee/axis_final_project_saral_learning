import { Container } from "@mui/system";
import { useState, useEffect } from "react";
import axios from "axios";

import "./ProductListPage.css";
function ProductListPage(){

    const [productData, setProductData]=useState([]);
   
    
    
    useEffect(()=>{
        axios.get("http://localhost:9100/products").then((response)=>{
            // console.log(response);
            setProductData(response.data);
            console.log("data",productData);

            for(var i=0; i<response.data.length; i++){

            }
            
            
        })
    },[])


    return(
        <div>
            <Container>
            <div id="carouselExampleCaptions" class="carousel slide">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..."></img>
                  <div class="carousel-caption d-none d-md-block">
                    <h2>Credit Card</h2>
                    <p>Credit cards are a convenient way to make immediate payments for any expense, in a cashless manner.</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="https://www.axisbank.com/images/default-source/progress-with-us_new/digital-savings-account.jpg" class="d-block w-100" alt="..."></img>
                  <div class="carousel-caption d-none d-md-block">
                    <h2>Digital Savings Account</h2>
                    <p>A digital savings account is paperless, fast and secure way for opening an account on a digital platform</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="https://www.bajajfinservmarkets.in/discover/wp-content/uploads/2021/10/Education-Loan.png" class="d-block w-100" alt="..."></img>
                  <div class="carousel-caption d-none d-md-block">
                    <h2>Educational Loan</h2>
                    <p>Axis Bank brings you Education Loans for studies both in India and abroad.</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="https://www.finnable.com/wp-content/uploads/2022/01/Instant-car-loan.jpg" class="d-block w-100" alt="..."></img>
                  <div class="carousel-caption d-none d-md-block">
                    <h2>Car Loan</h2>
                    <p>Car Loan aims to ensures that you drive around the city in your own vehicle</p>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
                                                        <br/>
                            <br/><br/><br/><br/>
                            </Container>

                            <Container><br/><center><h1>Product List</h1></center><hr/></Container><br/>
            {
                productData.map((prod)=>{
                    console.log("prod:",prod.productName);
                    return(
                        <div>
                            <Container>
                            <div class="card shadow-lg bg-body">
                                <h5 class="card-header bg-dark text-light">{prod.productName}</h5>
                                    <div class="card-body bg-danger text-light bg-gradient">
                                    <div class="image"><img src= {prod.imageUrl}/></div>
                                        <h5 class="card-title">Product Type: {prod.productType}</h5>
                                        <p class="card-text">Product Content: {prod.description}</p>
                                        
                                        <a href="#" class="btn btn-danger bg-dark text-light">View project </a>
                                    </div>
                            </div><br/></Container>
                        </div>
                        
                    )
                })
            }

            <Container>
            
            </Container>

                        </div>
                        
                    )
                
            
        
    
}
export default ProductListPage;