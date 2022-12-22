import { useState, useRef } from "react";
import { FormElement, FormInput, FormButton } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim()) {
      addNewTask(newTaskContent);
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
