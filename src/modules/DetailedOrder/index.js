import { Card, Descriptions, Divider, List, Button,Table, Popconfirm, message } from 'antd';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState, } from 'react';
import { DataStore } from 'aws-amplify';
import { ShoppingList, ShoppingListItem } from '../../models';



const DetailedOrder = () => {

    const { id } = useParams();
    const [shoppinglist, setShoppingList] = useState({});
    const [shoppinglisitems, setShoppinglistitems] = useState([]);
    const [shoppinglistitem, setShoppingListItem] = useState([]);


    useEffect(() => {
        DataStore.query(ShoppingListItem).then(setShoppingListItem);
    }, []);

    const navigate = useNavigate();

    useEffect (() => {
        if (!id) {
            return;
        }
        DataStore.query(ShoppingList, id).then(setShoppingList);
    }, [id]);

    
    useEffect (() => {
        if (!shoppinglist) {
            return;
        }
        DataStore.query(ShoppingListItem, (od) =>
            od.shoppinglistID.eq(shoppinglist.id)).then(setShoppinglistitems);
    }, [shoppinglist]);

    console.log(shoppinglist.id)


    /*if (!shoppinglist) {
        return <Spin size = 'large'/>
    }*/

    const renderNewItemButton = () =>{
        return(
            <Link to={'updatelist'}>
                <Button type='primary'>Update Shopping List</Button>
            </Link>
        );
    };

    console.log(shoppinglisitems)

    
    const tableColumns = [
        
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (price) => `$${price?.toFixed(2)}`

            
        },
        {
            title: 'Quanity',
            dataIndex: 'quanity',
            key: 'quanity',
            
        },
        {
            title: 'Add Item',
            key: 'action',
            render: (_, item)=>(
                <Popconfirm
                placement="topLeft"
                title={'Are you sure you want to delete this item?'}
                onConfirm={()=>AddItem(item)}
                okText="Yes"
                cancelText="No"
            >
                <Button type="primary">Add Item</Button>
            </Popconfirm>
                

               
                
                
                ),
            
        },
    ];
    

    const AddItem = async (item) => {
        //console.log(shoppinglistitem)
        console.log(item.id)
        const result = await DataStore.query(ShoppingListItem,item.id);
        console.log(result)
        console.log(shoppinglist.id)
        const addItem = await DataStore.save(
            ShoppingListItem.copyOf(result, (updated) => {
                updated.shoppinglistID = shoppinglist.id;
               
            })
        );
        setShoppingListItem(addItem);
        message.success('Item added to the list');
        navigate('/');

    };
    return (
        <Card title = {`Shopping List ${id}`} style = {styles.page} extra={renderNewItemButton()}>
            <Descriptions bordered column = {{lg: 1, md: 1, sm: 1}}>
                <Descriptions.Item label = 'Store'>{shoppinglist?.store}</Descriptions.Item>
                <Descriptions.Item label = 'Name'>{shoppinglist?.name}</Descriptions.Item>
                <Descriptions.Item label = 'Date'>{shoppinglist?.date}</Descriptions.Item>
            </Descriptions>
            <Divider />
            <List
                dataSource = {shoppinglisitems}
                renderItem = {(listItem) => (
                    <List.Item>
                        <div style = {styles.listItem}>{listItem?.name} x{listItem?.quantity}</div>
                       <div>${listItem?.price}</div>
                    </List.Item>
                )}
            >
            </List>
            <Divider />
                <div style = {styles.totalContainer}>
                    <h2>Total:</h2>
                    <h2 style = {styles.totalPrice}>${shoppinglist.total && shoppinglist.total.toFixed(2)}</h2>
                </div>
            <Divider /> 
            <Divider orientation="left">Here's items to add the shopping list</Divider>
            <Divider/>
            <Table 
                dataSource={shoppinglistitem}
                columns={tableColumns}
            />
            <Divider />

        </Card>
    );
};

const styles = {
    page:{
        margin: 20,
    },
    Item:{
        fontWeight:'bold',
    },
    totalContainer:{
        flexDirection: 'row',
        display: 'flex',
    },
    totalPrice:{
        marginLeft: 'auto',
    },
    buttonsContainer:{
        display:'flex',
        paddingBottom: 30,

    },
    button:{
        marginRight: 5,
        marginLeft: 5,
    },
}
export default DetailedOrder;