import { useState, useEffect } from "react";
import { Card, Table, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { DataStore } from "aws-amplify";
import {ShoppingList} from '../../models';
import { Link } from "react-router-dom";


const Lists = () => {

    const [shoppinglist, setShoppingList] = useState();
    


    useEffect(() => {
        DataStore.query(ShoppingList).then(setShoppingList);
    },[]);

    //console.log(shoppinglist);

    /*useEffect(()=> {
        if(!grocery?.id){
            return;
        }
        DataStore.query(List, d =>
            d.groceryID.eq(grocery.id)).then(setList);
    }, [grocery?.id]);*/

    

    const navigate = useNavigate();
    
    
    const tableColumns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',

        },
        {
            title: 'Store',
            dataIndex: 'store',
            key: 'store',

        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',

        },  
    ];

    const renderNewItemButton = () =>{
        return(
            <Link to={'create'}>
                <Button type='primary'>Create new shopping list</Button>
            </Link>
        );
    };
    
    return (
        <Card title = 'Shopping Lists' style={styles.page} extra={renderNewItemButton()} >
            <Table
            dataSource={shoppinglist}
            columns={tableColumns}
            rowKey= 'id'
            onRow={(list) => ({
                onClick: () => navigate(`list/${list.id}`)
            })}
            />
        </Card>
    );
};
const styles = {
    page:{
        margin: 20,
    },
}
export default Lists;