import React from 'react'



function Modal(props : any) {
  return (
    <>
      <div className="modal">
        <h4>
          {props.ModalProps[0]}
        </h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{
          let change = [...props.ModalProps]
          change[0] = "여자 코트 추천"
          props.ModalProps(change)
        }
        }>
          글 수정
        </button>
      </div>
    </>
  )
}

export default Modal
