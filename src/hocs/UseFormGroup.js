import React from "react";
import { Form } from "react-bootstrap";

function useFormGroup() {
  return function ourFormGroup(
    value,
    setValue,
    label = "",
    placeHolder = "",
    type = "text",
    hint = "",
    customClass = "",
    customInputStyle = {}
  ) {
    return (
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{label}</Form.Label>
        <Form.Control
          value={value}
          type={type}
          placeholder={placeHolder}
          onChange={(e) => setValue(e.target.value)}
          className={`form-control ${customClass}`}
          style={customInputStyle}
        />
        {hint.length > 0 && (
          <Form.Text className="text-muted">{hint}</Form.Text>
        )}
      </Form.Group>
    );
  };
}

export default useFormGroup;