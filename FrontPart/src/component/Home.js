import React from "react";
import bg1 from "../images/bg5.jpg"

function Home() {
    return (

        <>
        <div style={{margin:'auto', backgroundImage:"url(" + bg1 +")", backgroundRepeat:'no-repeat', backgroundSize:'100%' ,  height:'100%', width:'100%', position:'absolute'}}>
            <br/>
            <header>
             <h1 class="display-5"><b><big>
                 {/* <i id='lg' class='fas fa-cannabis'/> */}
                 <i id='lg' class='fab fa-centercode'/>
                 {/* <i id='lg' class='fas fa-angle-double-right'/> */}
                 Seat Booking App </big></b></h1>
            </header>
             <br/><br/><br/><br/><br/><br/> 
                <div class="d-flex justify-content-center mt-2">
                 
                    <a id='a' href="/login">
                    <div id = 'tile' class="d-inline-flex m-2 w-15">
                    <h5>
                    <i class="fas fa-sign-in-alt m-2 fa-2x" />
                    <br/>
                    &nbsp;&nbsp;&nbsp; Login &nbsp;&nbsp;&nbsp; 
                    </h5>
                    </div>
                    </a>

                    <a id='a' href="/signup">
                    <div id = 'tile' class="d-inline-flex m-2 w-15">
                    <h5>
                    <i class="fas fa-user-plus m-2 fa-2x " />
                    <br/>
                    &nbsp;  Sign Up &nbsp;
                    </h5>
                    </div>
                    </a>

               
               </div>
               <br/>
                
               <div class="d-flex justify-content-center mt-2">
                    
                    <div class="card mt-2 p-4 mr-2" style={{width:'300px',backgroundColor:'ivory', height:'190px'}}>    
                    <h5 class="card-title"><b>Book seats</b></h5>
                    <h5>
                    Customer can book their seat through the app which they like if preferred seat is available.
                    </h5>
                    </div>

                    <div class="card m-2 p-4" style={{width:'300px',backgroundColor:'ivory'}}>    
                    <h5 class="card-title"><b>Booking Details</b></h5>
                    <h5>
                    Customers can check their all the booking details in the my booking section
                    </h5>
                    </div>

                    <div class="card m-2 p-4" style={{width:'300px',backgroundColor:'ivory'}}>    
                    <h5 class="card-title"><b>Cancel Ticket</b></h5>
                    <h5>
                    Customers can cancel the ticket anytime before the event date and the amount will be refunded.
                    </h5>
                    </div>
                </div>
               
        </div>
        </>

    );
}

export default Home;