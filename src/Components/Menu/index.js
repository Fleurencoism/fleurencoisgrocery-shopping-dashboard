import {Menu} from "antd";
import {useNavigate} from "react-router-dom";
import { Auth } from "aws-amplify";

const GrocerMenu = () =>{

    const navigate = useNavigate();

    const menuItems = [
        {
            key: '/',
            label: 'Shopping Lists'
        }, 
        {
            key: 'grocery',
            label: 'Items'
        },
        {
            key: 'signout',
            label: 'Sign Out'
        }
    ];

    const onMenuItemClick = async (menuItem) =>{
        if(menuItem.key === 'signout'){
            await Auth.signOut();   
            window.location.reload();
        }
        else{        
            navigate(menuItem.key);
        }
    };

    return (
        <Menu items={menuItems} onClick={onMenuItemClick} />
    )

}

export default GrocerMenu;