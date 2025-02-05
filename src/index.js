import React from "react";
import ReactDOM from 'react-dom/client';

const TodoList = () => {
    const items = ['Install React', 'Study Reac', 'Use React', 'Build React App'];
    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
            <li>{items[2]}</li>
            <li>{items[3]}</li>
        </ul>
    );
};

const AppHeader = () =>{
    return <h1>My Todo List</h1>;
};

const SearchPanel = () => {

    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '20px'
    };

 
    return <input
        style = {searchStyle}
        placeholder= {searchText}
        disabled={true} />;
}

const App = () => {

    const value = '<script>alert ("")</script>';

    return (
        <div>
            {/*{ isLoggedIn ? null : loginBox }*/}
            { value }
            <AppHeader />
            <SearchPanel />
            <TodoList/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
