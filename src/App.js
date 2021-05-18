import { Component } from 'react';
import styles from './App.module.css';
import { v4 as uuidv4 } from 'uuid';
import Contacts from './components/Contacts';
import Form from './components/Form';
import Filter from './components/Filter';


class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }


  addContact = contact => {
    if (
      this.state.contacts.some(
        item => item.name.toLowerCase() === contact.name.toLowerCase(),
      )
    ) {
      alert(`${contact.name} is already exist!! Try one more time, please!`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...contact, id: uuidv4() }],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  filteredContacts() {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
  }
  onFilterHandleChange = filter => {
    this.setState({ filter });
  };
  render() {
    const visibleContacts = this.filteredContacts();
    const { filter } = this.state;
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Phonebook</h1>
        <Form addContact={this.addContact} />
        <h2 className={styles.title}>Contacts</h2>
        <Filter
          filter={filter}
          onFilterHandleChange={this.onFilterHandleChange}
        />

        <Contacts
          contact={visibleContacts}
          ondeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
export default App;