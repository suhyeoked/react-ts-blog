import { useState } from 'react'
import './App.css'
import Modal from './component/Modal';


function App() {
  let [blogtitle , setBlogTitle] = useState<string[]>(["강남 우동 맛집" , "은행동 맛집","노원동 라멘 맛집"])
  let [like, setLike] = useState<number[]>(new Array(blogtitle.length).fill(0));
  let [modal , setModal] = useState<boolean>(false);
  let [modalTitle , setModalTitle] = useState<number>(0);
  let [inputTitle , setInputTitle] = useState<string>("");

  return (
    <div className="App">
        <div className="black-nav">
          <h4>블로그</h4>
        </div>
        <button onClick={
            ()=>{
              let copy:string[] = [...blogtitle]
              copy[0] = "강북 우동 맛집"
              setBlogTitle(copy)
            }
          }>클릭시 강북 우동 맛집으로 바뀜</button>
          <button onClick={
            ()=>{
              let copy:string[] = [...blogtitle]
              copy.sort()
              setBlogTitle(copy)
            }
          }>
            클릭시 가나다순 정렬
          </button>
          {
            blogtitle.map(function(a : any , i : number){
              return(
                <div className="list">
                  <ul className="blogTitle">
                <li><h4 onClick={
                  ()=>{
                    setModal(!modal)
                    setModalTitle(i)
                  }
                }>{blogtitle[i]}
                </h4>
                <button onClick={()=>{
                    let copy = [...blogtitle]
                    copy.shift();
                    setBlogTitle(copy)
                }}>
                  삭제
                </button>
                </li>
                <li><span className="likeClick" onClick={
                  // span태그를 밖으로 꺼내지 않고 {e.stopPropagation(); } 이걸 사용해도 괜찮음
                  // 이유는 상위 html로 퍼지는 이벤트버블리을 막는 함수이기 때문
                    ()=>{
                      if(!like) return;
                      let copy = [...like]
                      copy[i] += 1;
                      setLike(copy)
                    }
                  }> 👍</span>
                  </li>
                  <li>
                    <span className="like">
                  {
                    like[i]
                  }
                  </span>
                  </li>
                  </ul>
                <p>2월 17일 발행</p>
            </div>
              )
            })
          }
          <div>
          <input onChange={(e)=>
            {
              setInputTitle(e.target.value)
              console.log(inputTitle)
              // 하나를 입력하면 공백 먼저 입력이 되는 걸 볼 수 있는데
              // 이유는 리액트는 비동기 방식이기 때문임
              // 그래서 setInputTitle(e.target.value)이게 완료되기 전에
              // console.log(inputTitle)이게 먼저 실행됨
            }
          } type="text" />
          <button onClick={
            ()=>{
              let copy = [...blogtitle]
              copy.unshift(inputTitle)
              setBlogTitle(copy)
              console.log("클릭됨")
            }
          }>
            입력
          </button>
          </div>
          
        {
          modal == true ? <Modal blogtitle = {blogtitle} setBlogTitle = {setBlogTitle} modalTitle = {modalTitle}/> : null
        }

    </div>
  )
}



export default App