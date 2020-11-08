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

               
        </div>
        </>

    );
}

export default Home;