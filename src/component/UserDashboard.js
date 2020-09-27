import React from "react";

function UserDashboard() {
    return (

        <>
        <button class='btn btn-warning m-2 float-right'> Log out </button>
        <div style={{margin:'auto'}}><br/><br/><br/><br/>
             <h1 class="display-5"><b><big>USER DASHBOARD </big></b></h1> <br/><br/><br/> 
                <div class="d-flex justify-content-center mt-2">
                    <div class="d-inline-flex m-2 w-15">
                    <h5>
                    <a href="/bookings"><i class="fas fa-history m-2 fa-2x " /></a>
                    <br/>
                            Booking History
                    </h5>
                    </div>


                    <div class="d-inline-flex m-2 w-15">
                    <h5>
                    <a href="/searchseat"><i class="fas fa-search m-2 fa-2x" /></a>
                    <br/>
                            Search Seat
                    </h5>
                    </div>

                    <div class="d-inline-flex m-2 w-15">
                    <h5>
                    <a href="/userseatbooking"><i class="fas fa-plus-square m-2 fa-2x " /></a>
                    <br/>
                            Book Seats
                    </h5>
                    </div>


                    <div class="d-inline-flex m-2 w-15">
                    <h5>
                    <a href="/#"><i class="fas fa-user-circle m-2 fa-2x" /></a>
                    <br/>
                            My Profile
                    </h5>
                    </div>

                    <div class="d-inline-flex m-2 w-15">
                    <h5>
                    <a href="/bookings"><i class="fas fa-tasks m-2 fa-2x " /></a>
                    <br/>
                            Manage Bookings
                    </h5>
                    </div>


                    <div class="d-inline-flex m-2 w-15">
                    <h5>
                    <a href="#"><i class="fas fa-unlock-alt m-2 fa-2x" /></a>
                    <br/>
                            Change Password
                    </h5>
                    </div>
               </div>

               
        </div>
        </>

    );
}

export default UserDashboard;