import { createContext,useContext,useState,useEffect } from "react";
import { Auth,DataStore } from "aws-amplify";
import { ShoppingList } from "../models";

const GroceryContext = createContext();

const GroceryContextProvider = ({children}) => {

    const [user, setUser]= useState();
    const [grocery, setGrocery] = useState();
    const sub = user?.attributes?.sub;
    useEffect(()=>{
        Auth.currentAuthenticatedUser({bypassCache: true}).then(setUser);
    },[]);

   // console.log(user);
   // console.log(sub);

   useEffect(() => {
    if (!sub){
        return;
    }
    /*DataStore.query(ShoppingList, (r) => r.adminSub.eq(sub)).then(
        (grocerys) => setGrocery(grocerys[0])
    );*/
}, [sub]);

   console.log(grocery);
    return(
        <GroceryContext.Provider value={{sub,grocery,setGrocery}}>
            {children}
        </GroceryContext.Provider>
    );
};

export default GroceryContextProvider;
export const useGroceryContext = () => useContext(GroceryContext);