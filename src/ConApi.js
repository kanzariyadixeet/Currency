import { createContext, useState } from "react";


const Context = createContext()


const ContextApi = ({ children }) => {

    const [details, setdetails] = useState("")
    return (
        <Context.Provider value={{ details, setdetails }}>
            {children}
        </Context.Provider>
    )

}

export default ContextApi;
export { Context }