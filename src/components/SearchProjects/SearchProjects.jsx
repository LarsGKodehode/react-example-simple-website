// Libraries
import {
    useEffect,
    useState
} from 'react';

// CSS
import styles from "./layout.module.css";

/**
 * Handles changes in the search bar
 */
function handleChange(event, callback) {
    callback(() => event.target.value);
};

/**
 * A search bar for filtering the project list
 */
function SearchProjects(props) {
    const { updateFilter } = props;
    
    const [ searchTerm, setSearchString ] = useState("");

    useEffect(
        () => updateFilter(searchTerm)
        , [searchTerm, updateFilter]
    );

    return (
        <input
            className={styles.searchBar}
            type="text"
            placeholder="Filter by project name"
            value={searchTerm}
            onChange={(event) => handleChange(event, setSearchString)}
        />
    );
};


export default SearchProjects;