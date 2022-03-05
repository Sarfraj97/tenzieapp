import React from "react"

export default function Timer(props) {        
    let {timer, setTimer, tenzies} = props;

    React.useEffect(() => {
      if (timer >= 0 && tenzies === false)      
      {setTimeout(() => setTimer(timer + 1), 1000);}
    }, [timer]);
    let counter = 0
    if (timer >= 60){
        let minutes = parseInt(timer/60)        
        let seconds = parseInt(timer%60)
        minutes = minutes < 10 ? `0${minutes}` : `${minutes}`
        seconds = seconds < 10 ? `0${seconds}` : `${seconds}`
        counter = `${minutes}:${seconds}`
    }
    else{
    counter = timer < 10 ? `00:0${timer}` : `${timer < 60 ? `00:${timer}` : `${timer}`}`
    }
    return(
        <div>
            <h3 className="title">{counter}</h3>
        </div>
    )
}