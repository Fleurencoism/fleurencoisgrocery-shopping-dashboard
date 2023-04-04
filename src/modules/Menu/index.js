import { useState, useEffect } from 'react';
import { Card, Table, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { DataStore } from 'aws-amplify';
import { ShoppingListItem } from '../../models';
import { Link } from 'react-router-dom';




const GroceryMenu = () => {

    const [shoppinglistitem, setShoppingListItem] = useState([]);

    useEffect(() => {
        DataStore.query(ShoppingListItem).then(setShoppingListItem);
    }, []);

    const navigate = useNavigate();

    const tableColumns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            
            
        },
        {
            title: 'Quanity',
            dataIndex: 'quanity',
            key: 'quanity',
            
        },
    ];
    const renderNewItemButton = () =>{
        return(
            <Link to={'create'}>
                <Button type='primary'>Add New Item</Button>
            </Link>
        );
    };


    return (
        <Card title='Menu' style={styles.page} extra={renderNewItemButton()}>
            <Table 
                dataSource={shoppinglistitem}
                columns={tableColumns}
                rowKey='id'
                onRow={(item) => ({
                    onClick: () => navigate(`list/${item.id}`)
                })}
            />
        </Card>
    );
};

const styles = {
    page: {
        margin: 20,
    },
}

export default GroceryMenu;