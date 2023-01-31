import React from 'react'

function Footer() {
    function Copyright(){
        return(
            <>
                <div className="copyright">
                    © 2020 Online Shopping Services. Made by Talha Khan. All Rights Reserved.
                </div>
            </>
        )
    }
  return (
    <>
        <div className="footer">
            <div className="mobile">
                <h3>Mobile Phones & Tablets</h3>
                <li>Mobile Phones</li>
                <li>Tablets & eBook Readers</li>
                <li>Smart Watches</li>
                <li>Headsets & Earphones</li>
                <li>Mobile Accessories</li>
                <li>Tablet Accessories</li>
                <li>Prepaid Scratch Cards</li>
            </div>
            <div className="camera">
                <h3>Cameras</h3>
                <li>Digital Cameras</li>
                <li>DSLR Cameras</li>
                <li>DSLM Camera</li>
                <li>Camera Gimbal Stabilizer</li>
                <li>Sports and Action Cameras</li>
                <li>Camera Drones</li>
                <li>Used Cameras</li>
            </div>
            <div className="tv">
                <h3>TV & Video</h3>
                <li>QLED TV</li>
                <li>Led Tv</li>
                <li>Home Audio & Video</li>
                <li>TV Accessories</li>
                <li>Projectors</li>
                <li>Home Theatre</li>
                <li>Speakers</li>
            </div>
            <div className="computer">
                <h3>Computers & Laptops</h3>
                <li>Laptop</li>
                <li>Desktops & Monitors</li>
                <li>Computer Components</li>
                <li>Laptop Accessories</li>
                <li>Computer Accessories</li>
                <li>Printers & Accessories</li>
                <li>Software</li>
            </div>
            <div className="appliance">
                <h3>Home Appliances</h3>
                <li>Large Appliances</li>
                <li>Hardware & Tools</li>
                <li>Small Appliances</li>
                <li>Clinical Products</li>
                <li>Personal Care</li>
                <li>Telephones Video Phones Door Phones</li>
                <li>Lighting,Sockets & Switches</li>
            </div>
        </div>
       <Copyright/> 
    </>
  )
}

export default Footer