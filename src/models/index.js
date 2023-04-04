// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ShoppingList, ShoppingListItem, ShoppingListItemShoppingList } = initSchema(schema);

export {
  ShoppingList,
  ShoppingListItem,
  ShoppingListItemShoppingList
};