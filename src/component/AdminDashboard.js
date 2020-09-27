import React from "react";

function AdminDashboard() {
    return (

        <>
        <button class='btn btn-warning m-2 float-right'> Log out </button>
        <div style={{margin:'auto'}}><br/><br/><br/><br/>
             <h1 class="display-5"><b><big>ADMIN DASHBOARD </big></b></h1> <br/><br/><br/> 
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
                            Seach Seat
                    </h5>
                    </div>

                    <div class="d-inline-flex m-2 w-15">
                    <h5>
                    <a href="/add"><i class="fas fa-plus-square m-2 fa-2x " /></a>
                    <br/>
                            Add Seat
                    </h5>
                    </div>


                    <div class="d-inline-flex m-2 w-15">
                    <h5>
                    <a href="/delete"><i class="fas fa-trash-alt m-2 fa-2x" /></a>
                    <br/>
                            Delete Seat
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
                    <i class="fas fa-unlock-alt m-2 fa-2x" />
                    <br/>
                            Change Password
                    </h5>
                    </div>
               </div>

               
        </div>
        </>

    );
}

export default AdminDashboard;