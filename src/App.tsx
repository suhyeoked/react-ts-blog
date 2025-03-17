import {useEffect, useState} from 'react';
import Modal from './component/Modal';
import './App.css'
// import './reset.css'
function App() {
    let [title, setTitle] = useState<string[]>(
        ["남자 코트추천", "강남우동 맛집", "React 독학", "노원 우동 맛집"]
    );
    // useState를 사용하는 이유 변수명 내용을 변경하면 html코드도 바꿔줘야 하는데 useState를 사용하면 자동 재렌더링이 됨
    let [good, setGood] = useState<number[]>([]);
    //setGood은 state변경 함수
    let [modal, setModal] = useState<boolean>(false);
    useEffect(()=>{
        setGood(new Array(title.length).fill(0))
    } , [title])
    return (
        <div className = "App" > <button onClick = {
            () => {
                let copy1:string[] = [...title]
                copy1.sort();
                setTitle(copy1);
            }
        } > 가나다순정렬</button> <button onClick = {
            () => {
                let copy = [...title];
                copy[0] = "여자 코트 추천";
                setTitle(copy);
            }
        } > 버튼</button> < div className = "black-nav" > <h4> 블로그임</h4></div> {/* <div className="list">
        <h4>
        {title[0]}
        <span onClick={()=>setGood(good + 1
              //useState는 = 사용안하는걸 권장
              //ex)good = good + 1
              //해도 되긴하는데 html에서는 변경이 안됨
        )}>
        👍
        </span>
        {good}
        </h4>
        <p>
          2월 17일 발행
        </p>
      </div>

      <div className="list">
        <h4 onClick={
          ()=> {setModal(!modal)}
          //클릭하기 전 State값은 false지만
          //클릭을 하면 false의 반대인 true로 변함
          //밑에 삼항연산자로 명시적 표현
        }>
        {title[2]}
        </h4>
        <p>
          2월 17일 발행
        </p>
      </div> */
        } 
        {
            title.map(function(a: string ,i : number){
                return(
                    <div className="list">
                        <h4 onClick={
          ()=> {setModal(!modal)}}>
                            {title[i]}
                            <span onClick={()=>{
                                let copygood: number[] = [...good]
                                copygood[i] = copygood[i] + 1
                                setGood(copygood)
                                console.log(setGood(copygood))
                            }}>👍</span> {good[i]}
                        </h4>
                        <p>
                            2월 18일 발행
                        </p>
                    </div>
                )
            })
        }
        {
            modal == true
                ? <Modal ModalProps = {title}/>
                : null
        }</div>
    )
}

export default App