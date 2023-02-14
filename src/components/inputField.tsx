import React, {useRef} from 'react';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null)

    return (  
        <form className='input' onSubmit={(e) => { 
            handleAdd(e)
            inputRef.current?.blur();    
        }
        }>
            <input ref={inputRef} type="text" value={todo} placeholder='Enter a task' onChange={(e) => setTodo(e.target.value)} className='input__box' />
            <button className='input__submit' type='submit'>Go</button>
        </form>
    );
}
 
export default InputField;