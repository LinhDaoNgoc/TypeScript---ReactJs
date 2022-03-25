import React from 'react'

type ShowInfoProps = {
    name: string,
    age: number
}

const ShowInfo = ({name}: ShowInfoProps) => {

  return (
    <div>Xin chào {name}</div>
  )
}

export default ShowInfo