/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ShoppingListItem } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ShoppingListItemUpdateFormInputValues = {
    name?: string;
    price?: number;
    quanity?: number;
    shoppinglistID?: string;
};
export declare type ShoppingListItemUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    quanity?: ValidationFunction<number>;
    shoppinglistID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShoppingListItemUpdateFormOverridesProps = {
    ShoppingListItemUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    quanity?: PrimitiveOverrideProps<TextFieldProps>;
    shoppinglistID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ShoppingListItemUpdateFormProps = React.PropsWithChildren<{
    overrides?: ShoppingListItemUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    shoppingListItem?: ShoppingListItem;
    onSubmit?: (fields: ShoppingListItemUpdateFormInputValues) => ShoppingListItemUpdateFormInputValues;
    onSuccess?: (fields: ShoppingListItemUpdateFormInputValues) => void;
    onError?: (fields: ShoppingListItemUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ShoppingListItemUpdateFormInputValues) => ShoppingListItemUpdateFormInputValues;
    onValidate?: ShoppingListItemUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ShoppingListItemUpdateForm(props: ShoppingListItemUpdateFormProps): React.ReactElement;
