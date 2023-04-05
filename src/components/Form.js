import React from 'react';
import JSONSchemaForm from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';

export const Form = (props) => {
    return (<JSONSchemaForm 
    validator={validator}
    {...props} />);
}