import { Card, Input, Button, message, Form } from "antd";
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { ShoppingListItem } from "../../models";


const CreateMenuItem = () => {
    const [name, setName,] = useState('');
    const [price, setPrice,] = useState('');
    const [quanity, setQuanity,] = useState('');
    const [shoppinglistitem, setShoppingListItem] = useState();


    const onFinish = async () => {
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

    };

    const createNewItem = async () => {
        const newItem = DataStore.save(new ShoppingListItem({
            name,
            price: parseFloat(price),
            quanity: parseInt(quanity)
        }));
        setShoppingListItem(newItem);
        message.success('New Item Created');
    };

    return (
        <Card title={'Enter new item'} style={styles.page}>
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item label={'Name'} required >
                    <Input 
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </Form.Item>                
                
                <Form.Item label={'Price'} required >
                    <Input 
                    placeholder="Enter Item Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label={'Quanity'} required >
                    <Input 
                    placeholder="Enter Quanity"
                    value={quanity}
                    onChange={(e) => setQuanity(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={createNewItem}>Submit</Button>
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

export default CreateMenuItem;