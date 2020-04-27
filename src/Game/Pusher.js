import React from 'react'
import styled from 'styled-components'
import Chat from './Chat/Chat'


const SideBar = styled.div`
width: 20vw;
height: 100vh;
background-color: red;
position: absolute;
right: 0;
`
const ButtonHolder = styled.div`
background: black;
width: 80%;
height: 30%;
position: absolute;
left: 10%;
top: 10%;
`

const Right = styled.div`
position: relative;
left: 64%;
top: 8%;
border-color: transparent purple;
border-style: solid;
border-width:  40px 0px 40px 80px;
height: 0px;
width: 0px;
`

const Left = styled.div`
position: relative;
left: 12%;
top: 37%;
border-color: transparent purple;
border-style: solid;
border-width:  40px 80px 40px 0px;
height: 0px;
width: 0px;
`
const Up = styled.div`
position: relative;
left: 38%;
top: -45%;
border-color: purple transparent;
border-style: solid;
border-width: 0px 40px 70px 40px;
height: 0px;
width: 0px;
`

const Down = styled.div`
position: relative;
left: 38%;
top: -16%;
border-color: purple transparent;
border-style: solid;
border-width: 70px 40px 0px 40px;
height: 0px;
width: 0px;
`

export default function Pusher(props) {
    const moveLeft = () => {
        props.setLeft(props.left - 10)
    }

    const moveRight = () => {
        props.setLeft(props.left + 10)
    }

    const moveUp = () => {
        props.setTop(props.top - 10) 
    }

    const moveDown = () => {
        props.setTop(props.top + 10) 
    }

    const handleEvent = e => {
        console.log(e)
    }

    return (
        <SideBar onKeyDown={()=> {handleEvent()}}>
            <ButtonHolder>
                <Left onClick={() => moveLeft()}></Left>
                <Right onClick={() => moveRight()}>  </Right>
                <Up onClick={() => moveUp() }>  </Up>
                <Down onClick={() => moveDown()}></Down>
            </ButtonHolder>
            {/* <Chat /> */}
        </SideBar>
    )
}