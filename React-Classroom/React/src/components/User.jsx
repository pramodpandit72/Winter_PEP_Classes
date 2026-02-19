// import React from 'react'

// const User = (props) => {
//   return (
//     <div>
//         <h2>Name: {props.name}, Age: {props.age}</h2>
//     </div>
//   )
// }

// export default User

import React from 'react'

const User = ({name, age}) => { // Destructuring Props
  return (
    <div>
        <h2>Name: {name}, Age: {age}</h2>
    </div>
  )
}

export default User