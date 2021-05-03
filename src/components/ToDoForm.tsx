import React, {useState} from 'react';

interface ToDoFormProps{ 
    onAdd(title:string): void
}

const ToDoForm:React.FC<ToDoFormProps> = (props) => {
    const [title, setTitle] = useState<string>('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(prev => event.target.value)
    }

    const keyHandler = (event:React.KeyboardEvent) => {
        
        if(event.key === "Enter") {
            props.onAdd(title);
            setTitle('');
            event.preventDefault();
        }
        
    }
    return (
        <div className="row">
            <form className="col s12">
                <div className='row'>
                    <div className="input-field col s6">
                        <input
                            onChange={changeHandler}
                            onKeyPress={keyHandler}
                            value={title} 
                            id="icon_prefix"
                            type="text"
                            className="validate"/>
                        <label htmlFor="icon_prefix">First Name</label>
                    </div>

                </div>
            </form>

        </div>
    )
}

export default ToDoForm;