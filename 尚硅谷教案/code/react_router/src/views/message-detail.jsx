import React from 'react'

const messageDetails = [
  {id: 1, title: 'Message001', content: '我爱你, 中国'},
  {id: 3, title: 'Message003', content: '我爱你, 老婆'},
  {id: 6, title: 'Message006', content: '我爱你, 孩子'},
]

export default function MessageDetail(props) {

  const id = props.match.params.id
  const md = messageDetails.find(md => md.id===id*1)

  return (
    <ul>
      <li>ID: {md.id}</li>
      <li>TITLE: {md.title}</li>
      <li>CONTENT: {md.content}</li>
    </ul>
  )
}