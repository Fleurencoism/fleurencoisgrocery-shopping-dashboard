/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { ShoppingListItem } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ShoppingListItemUpdateForm(props) {
  const {
    id: idProp,
    shoppingListItem,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    price: "",
    quanity: "",
    shoppinglistID: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [price, setPrice] = React.useState(initialValues.price);
  const [quanity, setQuanity] = React.useState(initialValues.quanity);
  const [shoppinglistID, setShoppinglistID] = React.useState(
    initialValues.shoppinglistID
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = shoppingListItemRecord
      ? { ...initialValues, ...shoppingListItemRecord }
      : initialValues;
    setName(cleanValues.name);
    setPrice(cleanValues.price);
    setQuanity(cleanValues.quanity);
    setShoppinglistID(cleanValues.shoppinglistID);
    setErrors({});
  };
  const [shoppingListItemRecord, setShoppingListItemRecord] =
    React.useState(shoppingListItem);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(ShoppingListItem, idProp)
        : shoppingListItem;
      setShoppingListItemRecord(record);
    };
    queryData();
  }, [idProp, shoppingListItem]);
  React.useEffect(resetStateValues, [shoppingListItemRecord]);
  const validations = {
    name: [],
    price: [],
    quanity: [],
    shoppinglistID: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          price,
          quanity,
          shoppinglistID,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            ShoppingListItem.copyOf(shoppingListItemRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ShoppingListItemUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              price,
              quanity,
              shoppinglistID,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              price: value,
              quanity,
              shoppinglistID,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <TextField
        label="Quanity"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={quanity}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              price,
              quanity: value,
              shoppinglistID,
            };
            const result = onChange(modelFields);
            value = result?.quanity ?? value;
          }
          if (errors.quanity?.hasError) {
            runValidationTasks("quanity", value);
          }
          setQuanity(value);
        }}
        onBlur={() => runValidationTasks("quanity", quanity)}
        errorMessage={errors.quanity?.errorMessage}
        hasError={errors.quanity?.hasError}
        {...getOverrideProps(overrides, "quanity")}
      ></TextField>
      <TextField
        label="Shoppinglist id"
        isRequired={false}
        isReadOnly={false}
        value={shoppinglistID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              price,
              quanity,
              shoppinglistID: value,
            };
            const result = onChange(modelFields);
            value = result?.shoppinglistID ?? value;
          }
          if (errors.shoppinglistID?.hasError) {
            runValidationTasks("shoppinglistID", value);
          }
          setShoppinglistID(value);
        }}
        onBlur={() => runValidationTasks("shoppinglistID", shoppinglistID)}
        errorMessage={errors.shoppinglistID?.errorMessage}
        hasError={errors.shoppinglistID?.hasError}
        {...getOverrideProps(overrides, "shoppinglistID")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || shoppingListItem)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || shoppingListItem) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
