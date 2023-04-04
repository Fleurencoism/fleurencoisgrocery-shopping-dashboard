import{Route, Routes} from "react-router-dom";
import CreateMenuItem from "../../modules/CreateMenuItem";
import DeatailedOrder from "../../modules/DetailedOrder";
import Orders from "../../modules/Order";
import GroceryMenu from "../../modules/Menu";
import CreateShoppingList from "../../modules/Create List";
import Update from "../../modules/UpdateList";

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Orders/>}/>
            <Route path="order/:id" element={<DeatailedOrder/>}/>
            <Route path="list/:id" element={<Update/>}/>
            <Route path="grocery/create" element={<CreateMenuItem/>}/>
            <Route path="/create" element={<CreateShoppingList/>}/>
            <Route path="grocery" element={<GroceryMenu/>}/>
        </Routes>
    );

};
export default AppRoutes;