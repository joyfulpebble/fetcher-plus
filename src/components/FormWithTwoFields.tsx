import { Formik, Field, Form } from "formik";
import Input from './UI/Input/Input';

import classes from "../styles/modules/FormWithTwoFields.module.scss";

import { FormWithToFieldsProps } from '../types/elements';
import { DynamicObjectKeysI } from "../types/simple_models";

function FormWithToFields({
    firstInitValueName, 
    firstInitValue,
    firstInfoText, 
    firstRef, 
    secondInitValueName, 
    secondInitValue,
    secondInfoText,
    secondRef,
    onSubmitFuncton, 
    formId,
  }: FormWithToFieldsProps) {
  const initValues: DynamicObjectKeysI = {};
    initValues[firstInitValueName] = firstInitValue;
    initValues[secondInitValueName] = secondInitValue;

  return (
    <Formik
        initialValues={initValues}
        onSubmit={(values: object) => {
          onSubmitFuncton(values);
      }}>
      <Form id={formId} className={classes.FormWrapper}>
        <label>
          <span className={classes.marginRight}>{firstInfoText}</span>
          <Field name={firstInitValueName} type="text" innerRef={firstRef} as={Input} placeholder={firstInfoText} />
        </label>
        <label>
          <span className={classes.marginRight}>{secondInfoText}</span>
          <Field name={secondInitValueName} type="text" innerRef={secondRef} as={Input} placeholder={secondInfoText}/>
        </label>
      </Form>
    </Formik>
  )
}

export default FormWithToFields;