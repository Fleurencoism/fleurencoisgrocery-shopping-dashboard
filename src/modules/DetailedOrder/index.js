/*import { Card, Descriptions, Divider, List, Button, Tag, Spin } from 'antd';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DataStore } from 'aws-amplify';
import { ShoppingList } from '../../models';



const DetailedOrder = () => {

    const { id } = useParams();
    const [shoppinglist, setShoppingList] = useState({});
    const [customer, setCustomer] = useState(null);
    const [orderDishes, setShoppingListDishes] = useState([]);
    const [finalOrderDishes, setFinalOrderDishes] = useState([]);

    useEffect (() => {
        if (!id) {
            return;
        }
        DataStore.query(ShoppingList, id).then(setShoppingList);
    }, [id]);

    useEffect (() => {
        if (!shoppinglist?.userID) {
            return;
        }
        DataStore.query(ShoppingList,shoppinglist.userID).then(setCustomer);
    }, [shoppinglist?.userID]);

    

    useEffect (() => {
        if (!orderDishes) {
            return;
        }
        // Query all of the dishes.
        const fetchDishes = async () => {
            const dishes = await DataStore.query(ShoppingList);
            // Assign the dishes to the order dishes where the order ids are the same.
            setFinalOrderDishes(
                orderDishes.map(orderDish => ({
                    ...orderDish,
                    Dish: dishes.find(d => d.id === orderDish.orderDishDishId),
                }))
            );
        };
        fetchDishes();
    }, [orderDishes]);



    if (!shoppinglist) {
        return <Spin size = 'large'/>
    }

    return (
        <Card title = {`Shopping List ${id}`} style = {styles.page}>
            <Descriptions bordered column = {{lg: 1, md: 1, sm: 1}}>
                <Descriptions.Item label = 'Store'>{shoppinglist?.store}</Descriptions.Item>
                <Descriptions.Item label = 'Customer'>{customer?.name}</Descriptions.Item>
                <Descriptions.Item label = 'Customer Address'>{customer?.address}</Descriptions.Item>
            </Descriptions>
            <Divider />
            <List
                dataSource = {finalOrderDishes}
                renderItem = {(dishItem) => (
                    <List.Item>
                        <div style = {styles.dishItem}>{dishItem?.Dish?.name} x{dishItem?.quantity}</div>
                        <div>${dishItem?.Dish?.price.toFixed(2)}</div>
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
            <div style = {styles.buttonsContainer}>
                    <Button
                        block
                        danger
                        type = 'primary'
                        size = 'large'
                        style = {styles.button}
                        onClick={declineOrder}
                    >
                        Decline Order
                    </Button>
                    <Button
                        block
                        type = 'primary'
                        size = 'large'
                        style = {styles.button}
                        onClick = {acceptOrder}
                    >
                        Accept Order
                    </Button>
                    <Button
                        block
                        type = 'default'
                        size = 'large'
                        style = {styles.button}
                        onClick = {foodIsDone}
                    >
                        Food is Done
                    </Button>
            </div>
        </Card>
    );
};

const styles = {
    page:{
        margin: 20,
    },
    dishItem:{
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
export default DetailedOrder;*/