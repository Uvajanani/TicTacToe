import styles from './TicTacToe.module.css' 
import circle from '../Assets/circle.png'
import cross from '../Assets/cross.png'
import { useRef, useState } from 'react'

let data=["","","","","","","","",""]
export default function TicTacToe() {
    let[count,setCount]=useState(0);
    let[lock,setLock]=useState(false)
    let titleRef=useRef(null)
    let box1=useRef(null)
    let box2=useRef(null)
    let box3=useRef(null)
    let box4=useRef(null)
    let box5=useRef(null)
    let box6=useRef(null)
    let box7=useRef(null)
    let box8=useRef(null)
    let box9=useRef(null)
    let box_array=[box1,box2,box3,box4,box5,box6,box7,box8,box9]
    const toggle=(e,num)=>{
        if(lock) return 0;
        if(count%2===0)
        {
            e.target.innerHTML=`<img src='${cross}'>`
            data[num]="x"
            setCount(++count)
        }
        else
        {
            e.target.innerHTML=`<img src='${circle}'>`
            data[num]="o"
            setCount(++count)
        }
        checkWin()
    }

    const checkWin = () => {
        if(data[0]===data[1] && data[1]===data[2] && data[2]!=="")
        {
            won(data[2])
        }
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!=="")
        {
            won(data[5])
        }
        else if(data[6]===data[7] && data[7]===data[8] && data[8]!=="")
        {
            won(data[8])
        }
        else if(data[0]===data[3] && data[3]===data[6] && data[6]!=="")
        {
            won(data[6])
        }
        else if(data[1]===data[4] && data[4]===data[7] && data[7]!=="")
        {
            won(data[7])
        }
        else if(data[2]===data[5] && data[5]===data[8] && data[8]!=="")
        {
            won(data[8])
        }
        else if(data[0]===data[4] && data[4]===data[8] && data[8]!=="")
        {
            won(data[8])
        }
        else if(data[2]===data[4] && data[4]===data[6] && data[6]!=="")
        {
            won(data[6])
        }
    }

    const won = (winner) => {
        setLock(true);
        if(winner==="x") 
        {
            titleRef.current.innerHTML=`Congratulations: <img src='${cross}'> Wins`
        }
        else
        {
            titleRef.current.innerHTML=`Congratulations: <img src='${circle}'> Wins`
        }
    }

    const rset = () => {
        setLock(false)
        data=["","","","","","","","",""]
        titleRef.current.innerHTML=`Tic Tac Toe Game In <span>React</span>`
        box_array.map((e)=>{
            e.current.innerHTML=""
            console.log(data)
        })
    }

    return (
    <div className={styles.container}>
        <h1 className={styles.title} ref={titleRef}>Tic Tac Toe Game In <span> React</span></h1>
        <div className={styles.board}>
            <div className={styles.row1}>
                <div onClick={(e)=>{toggle(e,0)}} className={styles.boxes} ref={box1}></div>
                <div onClick={(e)=>{toggle(e,1)}} className={styles.boxes} ref={box2}></div>
                <div onClick={(e)=>{toggle(e,2)}} className={styles.boxes} ref={box3}></div>
            </div>
            <div className={styles.row2}>
                <div onClick={(e)=>{toggle(e,3)}} className={styles.boxes} ref={box4}></div>
                <div onClick={(e)=>{toggle(e,4)}} className={styles.boxes} ref={box5}></div>
                <div onClick={(e)=>{toggle(e,5)}} className={styles.boxes} ref={box6}></div>
            </div>
            <div className={styles.row3}>
                <div onClick={(e)=>{toggle(e,6)}} className={styles.boxes} ref={box7}></div>
                <div onClick={(e)=>{toggle(e,7)}} className={styles.boxes} ref={box8}></div>
                <div onClick={(e)=>{toggle(e,8)}} className={styles.boxes} ref={box9}></div>
            </div>
        </div>
        <button onClick={()=>{rset()}} className={styles.reset}>Reset</button>
    </div>
    )
}