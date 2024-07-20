// import React, { Children } from "react";
// import UserContext from "./UserContext";

// const UserContextProvider = ({Children}) => {
//     const [user, SetUser] = React.useState(null)

//     return (
//         <UserContext.Provider value= {{user, SetUser}}>
//             {Children}
//         </UserContext.Provider>
//     )
// }
 
// export default UserContextProvider
import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider