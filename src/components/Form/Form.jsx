import { Component } from 'react';
import styles from './Form.module.css'

class Form extends Component {
    state = {
        name: '',
        number: '',
    };

    onHandleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    onHandleSubmit = event => {
        event.preventDefault();
        this.props.addContact(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        const { name, number } = this.state;
        return (
            <form className={styles.form} onSubmit={this.onHandleSubmit} >
                <label className={styles.label}>
                    Name
          <input
                        type="text"
                        name="name"
                        value={name}
                        className={styles.input}
                        onChange={this.onHandleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                    />
                </label>
                <label className={styles.label}>
                    Number
          <input
                        type="tel"
                        name="number"
                        value={number}
                        className={styles.input}
                        onChange={this.onHandleChange}
                        pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                        title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                        required
                    />
                </label>
                <button className={styles.addbutton} type="submit">
                    Add contact
        </button>
            </form>
        );
    }
}
export default Form;