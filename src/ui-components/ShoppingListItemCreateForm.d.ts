/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ShoppingListItemCreateFormInputValues = {
    name?: string;
    price?: number;
    quanity?: number;
    shoppinglistID?: string;
};
export declare type ShoppingListItemCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    quanity?: ValidationFunction<number>;
    shoppinglistID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShoppingListItemCreateFormOverridesProps = {
    ShoppingListItemCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    quanity?: PrimitiveOverrideProps<TextFieldProps>;
    shoppinglistID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ShoppingListItemCreateFormProps = React.PropsWithChildren<{
    overrides?: ShoppingListItemCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ShoppingListItemCreateFormInputValues) => ShoppingListItemCreateFormInputValues;
    onSuccess?: (fields: ShoppingListItemCreateFormInputValues) => void;
    onError?: (fields: ShoppingListItemCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ShoppingListItemCreateFormInputValues) => ShoppingListItemCreateFormInputValues;
    onValidate?: ShoppingListItemCreateFormValidationValues;
} & React.CSSProperties>;
export default function ShoppingListItemCreateForm(props: ShoppingListItemCreateFormProps): React.ReactElement;
