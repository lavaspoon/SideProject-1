import './App.css';
import React, { useState } from 'react'

function App() {
    let [title,changeTitle] = useState(["무빙", "오펜하이머", "드림"]);
    let [likes, changeLikes] = useState(0);
    function modifyTitle() {
        var newArray = [...title];
        newArray[0] = "수정중";
        changeTitle(newArray);
    }
    return (
        <div className="App">
            <div className="black-nav">
                <div>Hello World</div>
            </div>
            <Modal></Modal>
            <div className="list">
                <h3> { title[0] } <span onClick= { ()=>{ changeLikes( likes + 1 ) } } >👍</span> { likes } </h3>
                <p>2월 17일 발행</p> <button onClick={ modifyTitle }>수정</button>
                <hr/>
            </div>
            <div className="list">
                <h3> { title[1] } </h3>
                <p>2월 18일 발행</p>
                <hr/>
            </div>
            <div className="list">
                <h3> { title[2] } </h3>
                <p>2월 19일 발행</p>
                <hr/>
            </div>
        </div>
    );
}

function Modal() {
    return (
        <div className="modal">
            <h2>제목</h2>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}

export default App;