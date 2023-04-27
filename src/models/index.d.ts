import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerShoppingListItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ShoppingListItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly price?: number | null;
  readonly quanity?: number | null;
  readonly shoppinglistID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyShoppingListItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ShoppingListItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly price?: number | null;
  readonly quanity?: number | null;
  readonly shoppinglistID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ShoppingListItem = LazyLoading extends LazyLoadingDisabled ? EagerShoppingListItem : LazyShoppingListItem

export declare const ShoppingListItem: (new (init: ModelInit<ShoppingListItem>) => ShoppingListItem) & {
  copyOf(source: ShoppingListItem, mutator: (draft: MutableModel<ShoppingListItem>) => MutableModel<ShoppingListItem> | void): ShoppingListItem;
}

type EagerShoppingList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ShoppingList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly store?: string | null;
  readonly total?: number | null;
  readonly date?: string | null;
  readonly ShoppingListItems?: (ShoppingListItem | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyShoppingList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ShoppingList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly store?: string | null;
  readonly total?: number | null;
  readonly date?: string | null;
  readonly ShoppingListItems: AsyncCollection<ShoppingListItem>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ShoppingList = LazyLoading extends LazyLoadingDisabled ? EagerShoppingList : LazyShoppingList

export declare const ShoppingList: (new (init: ModelInit<ShoppingList>) => ShoppingList) & {
  copyOf(source: ShoppingList, mutator: (draft: MutableModel<ShoppingList>) => MutableModel<ShoppingList> | void): ShoppingList;
}