import React from 'react'

interface ModalProps {
  blogtitle : string[]
  setBlogTitle: React.Dispatch<React.SetStateAction<string[]>>;
  modalTitle : number
}

function Modal(props:ModalProps) {

  return (
    <div>
      <button onClick={
                ()=>{
                  let copy = [...props.blogtitle]
                  copy[props.modalTitle] = "수유 우동 맛집"
                  props.setBlogTitle(copy)
                }
              }>
                클릭시 수유 우동 맛집으로 바뀜
      </button>
      <div className="modal">
            <h4>{props.blogtitle[props.modalTitle]}</h4>
            <p>날짜</p>
            <p>상세 내용</p>
      </div>
    </div>
  )
}

export default Modal
