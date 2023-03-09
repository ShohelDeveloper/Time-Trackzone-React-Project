import { useState, useEffect } from "react"
import { addMinutes } from "date-fns/esm"

const init = {
    id: '',
    title: '',
    timezon: {
        type: '',
        offset:''
    },
    date_utc: null,
    date:null
}

const TIMEZON_OFFSET = {
    PST:-8 *60,
    EST:- 4*60,
    EDT: -5 * 60,
    BST: 1 * 60,
    MST:-7*60
   
}

const useClock = ( timezone, offset = 0 ) => {
    const [state,setState] = useState({ ...init })
    const [utc, setUTC] = useState(null)
   
    useEffect(() => {
        let d = new Date()
        const localOffset = d.getTimezoneOffset()
        d = addMinutes(d, localOffset)
        setUTC(d)

     },[]) 

    useEffect(() => {

        if (utc !== null && timezone) {
         offset = TIMEZON_OFFSET[timezone] ?? offset
            const newUtc = addMinutes(utc, offset)
            setState({
                ...state,
                date_utc: utc,
                date: newUtc
            });
        } else {

            setState({
                ...state,
                date_utc: utc,
                date: utc
            })
        }
        
    },[utc])

    return {
        clock:state
    }
    
}

export default useClock