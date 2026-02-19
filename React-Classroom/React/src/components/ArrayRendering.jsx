// import React from 'react'

// const ArrayRendering = () => {

//     const numbers = [1, 2, 3, 4]
//     const names = ["Pramod", "mukesh", "Vikas"]

//     // const listItems = numbers.map((num) => {
//     //     return <li key={num}>{num}</li>
//     // })

//     const listItems = names.map((num) => {
//         return <li key={num}>{num}</li>
//     })

//   return (
//     <div>
//         {listItems}
//     </div>
//   )
// }

// export default ArrayRendering

import React from 'react'

const ArrayRendering = () => {

  const users = [
    {id: 101, name: "Pramod"},
    {id: 102, name: "Mukesh"},
    {id: 103, name: "Vikash"},
    {id: 104, name: "Mohit"},
    {id: 105, name: "Kundan"},
  ]

  return (
    <div>
      {users.map((u) => {
        return <div key={u.id}>{u.name}</div>
      })}
    </div>
  )
}

export default ArrayRendering
