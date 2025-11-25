import { useState , createContext , useContext, useCallback } from "react"
import Cookies from "js-cookie";

const AuthContext = createContext()

const useAuth = () => {

    const AuthProvider = ({ children }) => {

        const [ user , setUser ] = useState( () => {
            const savedAuth = Cookies.get('auth')
            return savedAuth ? JSON.parse(savedAuth) : { email : '' , token : '' , organizations : '' , isAdmin : false }
        })

        const saveUser = async (data) => {
            
            Cookies.set('auth' , JSON.stringify(data), {expires: 1/24} )
            setUser(data)
        }

        const logIn = async ( user ) => {

            try{

                const response = await fetch("http://localhost:3000/api/user/login", {
                    method: 'POST', // Specify the method
                    headers: {
                        'Content-Type': 'application/json' 
                    },
                    body: JSON.stringify( { email : user.email , password : user.password } )
                })
                            
                if (!response.ok)
                    throw new Error('Network response was not ok ' + response.statusText)
                  
                const data = await response.json()     

                saveUser({ email : data.email , token : data.token , organizations : data.organizations , isAdmin : data.admin })
            }
            catch(err){
                console.log(err)
                return false
            }

            return true

        }

        const signUp = async ( user ) => {

            try{
                
                const response = await fetch("http://localhost:5029/Register", {
                    method: 'POST', // Specify the method
                    headers: {
                        'Content-Type': 'application/json' 
                    },
                    body: JSON.stringify( { name : user.name, email : user.email , password : user.password } )
                })
                        
                if (!response.ok)
                    throw new Error('Network response was not ok ' + response.statusText);
                  
                const data = await response.json()
                
                const email = data.user.email
                const token = { data }

                saveUser({ email : email , token : token , isAdmin : false })
            }
            catch(err){
                console.log(err)
                return false
            }

            return true

        }

        const logout = () => {
            Cookies.remove('auth')
            setUser( { email : '' , token : '' , isAdmin : false} )
        }
        
        return (
            <AuthContext.Provider value={{user , logIn , signUp , logout }}>
                {children}
            </AuthContext.Provider>
        )        

    }

    const userState = useCallback( () => useContext(AuthContext) , [AuthContext])

    return { AuthProvider , userState }

}

export default useAuth