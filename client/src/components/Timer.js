import { React, useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'

function Timer({ start, end}) {

    const [days, setDays] = useState()
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

let interval;

const startTimer = () => {
    const endTime = new Date(end)
    const startTime = new Date (start)

   if(startTime <= Date.now()) {
    interval = setInterval(() => {
        const remainingTime = endTime - Date.now()

        const days = Math.floor(remainingTime / (24 * 60 * 60 * 1000))
        const hours = Math.floor(remainingTime % (24 * 60 * 60 * 1000)/(1000*60*60))
        const minutes = Math.floor(remainingTime % (60 * 60 * 1000)/(1000*60))
        const seconds = Math.floor(remainingTime % (60 * 1000)/(1000))

        if (remainingTime < 0) {
            clearInterval(interval.current);
        }
        else {
            setDays(days)
            setHours(hours)
            setMinutes(minutes)
            setSeconds(seconds)
            }
         })
     }
    }

useEffect (() => {
    startTimer();
});

    return (
    <h6>Remaining Time: {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds</h6>
    )

}

export default Timer