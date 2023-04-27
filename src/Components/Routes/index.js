import{Route, Routes} from "react-router-dom";
import CreateMenuItem from "../../modules/CreateMenuItem";
import DeatailedOrder from "../../modules/DetailedOrder";
import Orders from "../../modules/Order";
import GroceryMenu from "../../modules/Menu";
import CreateShoppingList from "../../modules/CreateList";
import Update from "../../modules/UpdateList";
import UpdateItem from "../../modules/UpdateItem";

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Orders/>}/>
            <Route path="grocery/item/:id" element={<UpdateItem/>}/>
            <Route path="/list/:id" element={<DeatailedOrder/>}/>
            <Route path="/list/:id/updatelist" element={<Update/>}/>
            <Route path="grocery/create" element={<CreateMenuItem/>}/>
            <Route path="/create" element={<CreateShoppingList/>}/>
            <Route path="grocery" element={<GroceryMenu/>}/>
        </Routes>
    );

};
export default AppRoutes;