import { useState } from 'react';

const Form = ({ className, loadingState }) => {

    const [loading, setLoading] = loadingState;

    const [input, setInput] = useState({
        firstname: '', 
        lastname: '',
        bdayDate: {
            day: '',
            month: '', 
            year: '',
        },
    });

    const clearForm = () => {
        setInput({
            firstname: '', 
            lastname: '',
            bdayDate: {
                day: '',
                month: '', 
                year: '',
            },
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await createNewBday();
        await clearForm();
    };
    
    const createNewBday = async () => {
        setLoading('true');
        await fetch('http://localhost:3003/bdays/create-one', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(input)
        });
        setLoading('false');

    }

    return (
        <form className={`${className ? className : ''} form`}  onSubmit={ handleSubmit }>
            <div className="form__input input">
                <label className="input__label">Firstname</label>
                <input className="input__field" type="text" required placehoder="" value={ input.firstname } onChange={ (event) => setInput({ ...input, firstname: event.target.value })} />
            </div>
            <div className="form__input">
                <label className="input__label">Lastname</label>
                <input className="input__field" type="text" required placehoder="" value={ input.lastname } onChange={ (event) => setInput({ ...input, lastname: event.target.value })} />
            </div>
            <div className="form__input">
                <label className="input__label">Birthdate</label>
                <span className="input__container">
                    <input className="input__field input__field--center" type="number" required min="0" max="31" placehoder="" value={ input.bdayDate.day } onChange={ (event) => setInput({ ...input, bdayDate: { ...input.bdayDate, day: event.target.value} })} />
                    <input className="input__field input__field--center" type="number" required min="0" max="12" placehoder="" value={ input.bdayDate.month } onChange={ (event) => setInput({ ...input, bdayDate: { ...input.bdayDate, month: event.target.value} })} />
                    <input className="input__field input__field--center" type="number" required min="1900" max="2025"placehoder="" value={ input.bdayDate.year } onChange={ (event) => setInput({ ...input, bdayDate: { ...input.bdayDate, year: event.target.value} })} />
                </span>
            </div>
            <input className="form__button" type="submit" value="Submit" />
        </form>
    );
};

export default Form;