import React, { InputHTMLAttributes, useEffect, useRef, useState } from "react";

import { IconType } from "react-icons/lib";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

import { Container, Label, InputElement } from "./styles";
import { useField } from "@unform/core";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  icon: IconType;
}

const Input: React.FC<Props> = ({ name, label, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const [isShow, setIsShow] = useState(false);

  function handleChange() {
    setIsShow(!isShow);
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value: string) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container className="form">
      <Icon
        size={32}
        color="#EBF8FF"
        style={{
          position: "absolute",
          backgroundColor: error ? "#E53E3E" : "#111111",
          borderTopLeftRadius: 6,
          borderBottomLeftRadius: 6,
          height: "100%",
          width: 38,
        }}
      />
      <InputElement
        isErrored={!!error}
        required
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
        type={
          rest.type === "password" ? (isShow ? "text" : "password") : rest.type
        }
      />
      <Label>{label}</Label>

      {rest.type === "password" &&
        (isShow ? (
          <AiOutlineEyeInvisible
            onClick={handleChange}
            color="#111111"
            size={32}
            style={{
              position: "absolute",
              right: 3,
              height: "100%",
              cursor: "pointer",
            }}
          />
        ) : (
          <AiOutlineEye
            onClick={handleChange}
            color="#111111"
            size={32}
            style={{
              position: "absolute",
              right: 3,
              height: "100%",
              cursor: "pointer",
            }}
          />
        ))}
    </Container>
  );
};

export default Input;
