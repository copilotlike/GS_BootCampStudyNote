import React, { useEffect, useState } from 'react';
import './clockBg.css';
import ClockCleanUP from './ClockCleanUp';

function ReactClock() {
    

    return (
        <div>
            <h1>시계임.</h1>
            <section>
                <div className="needle"></div>
                <div className="needle"></div>
                <div className="needle"></div>
                <br />
                <ClockCleanUP />
            </section>
        </div>
    );
}

export default ReactClock;



// window.onload = function () {

//     let dateBox = document.querySelector(".date")
//     let timeBox = document.querySelector(".time")
//     let sec = document.querySelector("section > .needle:nth-of-type(3)")
//     let minute = document.querySelector("section > .needle:nth-of-type(2)")
//     let hour = document.querySelector("section > .needle:nth-of-type(1)")
//     //console.log(sec)

//     let section = document.querySelector("section")

//     function gradHH(i, size, degree) {
//         let grad = document.createElement("div")
//         grad.className = "grad"
//         let box = document.createElement("div")
//         box.className = size
//         grad.appendChild(box)
//         grad.style.transform = `rotate(${i * degree}deg)`
//         section.appendChild(grad)
//     }

//     for (let i = 0; i < 60; i++) {
//         gradHH(i, "small", 6)
//     }


//     for (let i = 0; i < 12; i++) {
//         gradHH(i, "big", 30)
//     }


//     function dateGo() {
//         let now = new Date()
//         let ttt = `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일`
//         //console.log(ttt)
//         dateBox.innerHTML = ttt

//         timeBox.innerHTML = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`

//         sec.style.transform = `rotate(${now.getSeconds() * 6}deg)`
//         minute.style.transform = `rotate(${now.getMinutes() * 6}deg)`
//         hour.style.transform = `rotate(${(now.getHours() + now.getMinutes() / 60) * 30}deg)`
//         //console.log(((now.getHours()+now.getMinutes()/60)*30)%360)
//     }

//     let dg = setInterval(dateGo, 1000)

// }