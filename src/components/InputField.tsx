import React, { useRef } from 'react';
import './styles.css';

interface InputFieldProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  todo,
  setTodo,
  handleAdd,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className='input'
      onSubmit={e => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type='text'
        placeholder='Введите задачу...'
        value={todo}
        ref={inputRef}
        onChange={e => setTodo(e.target.value)}
        className='input__box'
      />
      <button type='submit' className='input_submit'>
        ➕
      </button>
    </form>
  );
};

export default InputField;
