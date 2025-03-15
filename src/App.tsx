import { useState } from 'react';
import './App.css'
// import './reset.css'
function App() {
  
  let post : string = "강남 우동 맛집";
  let [title,setTitle] = useState<string[]>(["남자 코드 추천" , "강남우동 맛집" , "React 독학"]);
  // useState를 사용하는 이유
  // 변수명 내용을 변경하면 html코드도 바꿔줘야 하는데
  // useState를 사용하면 자동 재렌더링이 됨
  let [good , setGood] = useState<number>(0);
  function ClickGood() {
    //useState는 = 사용안하는걸 권장
    //해도 되긴하는데 html에서는 변경이 안됨
  }

  return (
    <div className="App">
      <button onClick={()=>{
          let copy = [...title];
          copy[0] = "여자 코트 추천";
          setTitle(copy);
        }}>
          버튼</button>
      <div className="black-nav">
        <h4>
          블로그임
        </h4>
      </div>
      <div className="list">
        <h4>
        {title[0]}
        <span onClick={()=>setGood(good + 1)}>
        👍
        </span>
        {good}
        </h4>
        <p>
          2월 17일 발행
        </p>
      </div>
      <div className="list">
        <h4>
          {title[1]}
        </h4>
        <p>
          2월 17일 발행
        </p>
      </div>
      <div className="list">
        <h4>
        {title[2]}
        </h4>
        <p>
          2월 17일 발행
        </p>
      </div>
    </div>
  )
}

export default App