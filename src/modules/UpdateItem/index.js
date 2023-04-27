import { Card, Input, Button, message, Form, Popconfirm } from "antd";
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DataStore } from 'aws-amplify';
import { ShoppingListItem } from '../../models';


const UpdateItem = () => {

    const { id } = useParams();

    const [shoppingListItem, setShoppingListItem] = useState();
    const [name, setName,] = useState('');
    const [price, setPrice,] = useState(0);
    const [quanity, setQuanity,] = useState(0);

    const navigate = useNavigate(); 

    useEffect(() => {
        if (!id) {
            return;
        }
        DataStore.query(ShoppingListItem, id).then(setShoppingListItem);

    }, [id]);

    useEffect(() => {
        if (!shoppingListItem) {
            return;
        }
        setName(shoppingListItem.name);
        setPrice(shoppingListItem.price);
        setQuanity(shoppingListItem.quanity);
    }, [shoppingListItem]);

    const deleteData = async () => {
        DataStore.delete(ShoppingListItem, id).then(setShoppingListItem);
        message.success('Item has been deleted.');
        navigate('/grocery');
    };


    const updateDetails = async () => {
        if (!name){
            message.error('Name required!');
            return;
        }
        if (!price){
            message.error('Price required!');
            return;
        }
        if (!quanity){
            message.error('Quanity required!');
            return;
        }

        const updateshoppingListItem = await DataStore.save(
            ShoppingListItem.copyOf(shoppingListItem, (updated) => {
                    updated.name = name;
                    updated.price = parseFloat(price);
                    updated.quanity = parseInt(quanity);
                })
            );
            setShoppingListItem(updateshoppingListItem);
            message.success('Item updated!');
            navigate('/grocery');
        };

    

    return (
        <Card title={`Update item`} style={styles.page}>
            <Form layout="vertical">
                <Form.Item label={'Name'} required >
                    <Input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </Form.Item>                
                <Form.Item label={'Price'} required >
                    <Input 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label={'Quanity'} required >
                    <Input 
                    value={quanity}
                    onChange={(e) => setQuanity(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={updateDetails}>Update</Button>
                </Form.Item>
                <Form.Item>
                <Popconfirm
                    placement="topLeft"
                    title={'Are you sure you want to delete this item?'}
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


export default UpdateItem;