import { Card, Input, Button, message, Form } from "antd";
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { ShoppingList } from "../../models";


const CreateShoppingList = () => {
    const [name, setName,] = useState('');
    const [store, setStore,] = useState('');
    const [date, setDate,] = useState('');
    const [shoppinglist, setShoppingList] = useState();


    const onFinish = async () => {
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

    };

    const createNewShoppingList = async () => {
        const newList = DataStore.save(new ShoppingList({
            name,
            store,
            date
        }));
        setShoppingList(newList);
        message.success('New List Created');
    };

    return (
        <Card title={'Enter new List Details'} style={styles.page}>
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item label={'Name'} required >
                    <Input 
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </Form.Item>                
                
                <Form.Item label={'Store'} required >
                    <Input 
                    placeholder="Enter Store Name"
                    value={store}
                    onChange={(e) => setStore(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label={'Date'} required >
                    <Input 
                    placeholder="Enter Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={createNewShoppingList}>Submit</Button>
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

export default CreateShoppingList;