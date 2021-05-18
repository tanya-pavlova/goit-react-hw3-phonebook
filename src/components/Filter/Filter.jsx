import styles from './Filter.module.css'

const Filter = ({ filter, onFilterHandleChange }) => {
    const onHandleChange = event => {
        onFilterHandleChange(event.target.value);
    };
    return (
        <div className={styles.container} >
            <label className={styles.label}>
                Find contacts by name
            <input
                    type="text"
                    name="filter"
                    value={filter}
                    className={styles.input}
                    onChange={onHandleChange}
                />
            </label>
        </div>
    );
};

export default Filter;