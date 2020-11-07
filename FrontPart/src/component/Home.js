import React from "react";

function Home() {
    return (

        <>
        <div style={{margin:'auto'}}><br/><br/><br/><br/>
             <h1 class="display-5"><b><big>SEAT BOOKING APP </big></b></h1> <br/><br/><br/> 
                <div class="d-flex justify-content-center mt-2">
                 
                    <a href="/login">
                    <div class="d-inline-flex m-2 w-15">
                    <h5>
                    <i class="fas fa-sign-in-alt m-2 fa-2x" />
                    <br/>
                            Login 
                    </h5>
                    </div>
                    </a>

                    <a href="/signup">
                    <div class="d-inline-flex m-2 w-15">
                    <h5>
                    <i class="fas fa-user-plus m-2 fa-2x " />
                    <br/>
                            Sign Up
                    </h5>
                    </div>
                    </a>

               </div>

               
        </div>
        </>

    );
}

export default Home;