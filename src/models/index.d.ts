import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerShoppingList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ShoppingList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly total?: number | null;
  readonly store?: string | null;
  readonly date?: string | null;
  readonly name?: string | null;
  readonly shoppinglistitems?: (ShoppingListItemShoppingList | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyShoppingList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ShoppingList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly total?: number | null;
  readonly store?: string | null;
  readonly date?: string | null;
  readonly name?: string | null;
  readonly shoppinglistitems: AsyncCollection<ShoppingListItemShoppingList>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ShoppingList = LazyLoading extends LazyLoadingDisabled ? EagerShoppingList : LazyShoppingList

export declare const ShoppingList: (new (init: ModelInit<ShoppingList>) => ShoppingList) & {
  copyOf(source: ShoppingList, mutator: (draft: MutableModel<ShoppingList>) => MutableModel<ShoppingList> | void): ShoppingList;
}

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
  readonly ShoppingLists?: (ShoppingListItemShoppingList | null)[] | null;
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
  readonly ShoppingLists: AsyncCollection<ShoppingListItemShoppingList>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ShoppingListItem = LazyLoading extends LazyLoadingDisabled ? EagerShoppingListItem : LazyShoppingListItem

export declare const ShoppingListItem: (new (init: ModelInit<ShoppingListItem>) => ShoppingListItem) & {
  copyOf(source: ShoppingListItem, mutator: (draft: MutableModel<ShoppingListItem>) => MutableModel<ShoppingListItem> | void): ShoppingListItem;
}

type EagerShoppingListItemShoppingList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ShoppingListItemShoppingList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly shoppingListId?: string | null;
  readonly shoppingListItemId?: string | null;
  readonly shoppingList: ShoppingList;
  readonly shoppingListItem: ShoppingListItem;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyShoppingListItemShoppingList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ShoppingListItemShoppingList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly shoppingListId?: string | null;
  readonly shoppingListItemId?: string | null;
  readonly shoppingList: AsyncItem<ShoppingList>;
  readonly shoppingListItem: AsyncItem<ShoppingListItem>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ShoppingListItemShoppingList = LazyLoading extends LazyLoadingDisabled ? EagerShoppingListItemShoppingList : LazyShoppingListItemShoppingList

export declare const ShoppingListItemShoppingList: (new (init: ModelInit<ShoppingListItemShoppingList>) => ShoppingListItemShoppingList) & {
  copyOf(source: ShoppingListItemShoppingList, mutator: (draft: MutableModel<ShoppingListItemShoppingList>) => MutableModel<ShoppingListItemShoppingList> | void): ShoppingListItemShoppingList;
}