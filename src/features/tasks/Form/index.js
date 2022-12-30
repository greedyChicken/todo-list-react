import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { FormElement, FormInput, FormButton } from "./styled";
import { addTask } from "../tasksSlice";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const focusInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim()) {
      dispatch(
        addTask({
          content: newTaskContent,
          done: false,
          id: nanoid(),
        })
      );

      setNewTaskContent("");
    }
  };

  return (
    <FormElement onSubmit={onFormSubmit}>
      <FormInput
        ref={inputRef}
        type="text"
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => {
          setNewTaskContent(target.value);
        }}
      />
      <FormButton onClick={focusInput}>Dodaj zadanie</FormButton>
    </FormElement>
  );
};

export default Form;
