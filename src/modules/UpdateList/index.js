import { Card, Input, Button, message, Form, Popconfirm } from "antd";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DataStore } from 'aws-amplify';
import { ShoppingList } from '../../models';


const Update = () => {

    const { id } = useParams();

    const [shoppinglist, setShoppingList] = useState();
    const [name, setName,] = useState('');
    const [store, setStore,] = useState(0);
    const [date, setDate,] = useState(0);

    

    useEffect(() => {
        if (!id) {
            return;
        }
        DataStore.query(ShoppingList, id).then(setShoppingList);

    }, [id]);

    useEffect(() => {
        if (!shoppinglist) {
            return;
        }
        setName(shoppinglist.name);
        setStore(shoppinglist.price);
        setDate(shoppinglist.date);
    }, [shoppinglist]);

    const deleteData = async () => {
        DataStore.delete(ShoppingList, id).then(setShoppingList);
        message.success('Shopping list has been deleted.');
    };


    const updateDetails = async () => {
        if (!name){
            message.error('Name required!');
            return;
        }
        if (!store){
            message.error('Store required!');
            return;
        }
        if (!date){
            message.error('Date required!');
            return;
        }

        const updateShoppingList = await DataStore.save(
            ShoppingList.copyOf(shoppinglist, (updated) => {
                    updated.name = name;
                    updated.store = store;
                    updated.date = date;
                })
            );
            setShoppingList(updateShoppingList);
            message.success('Shopping list updated!');
        };

    

    return (
        <Card title={`Update Shopping List`} style={styles.page}>
            <Form layout="vertical">
                <Form.Item label={'Name'} required >
                    <Input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </Form.Item>                
                <Form.Item label={'Store'} required >
                    <Input 
                    value={store}
                    onChange={(e) => setStore(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label={'Date'} required >
                    <Input 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={updateDetails}>Update</Button>
                </Form.Item>
                <Form.Item>
                <Popconfirm
                    placement="topLeft"
                    title={'Are you sure you want to delete this shopping list?'}
                    onConfirm={deleteData}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button type="primary" danger htmlType="submit">Delete</Button>
                </Popconfirm>
                </Form.Item>
            </Form>
        </Card>
    );
};

const styles = {
    page: {
        margin: 20,
    },
}


export default Update;