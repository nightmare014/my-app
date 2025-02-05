import React from "react";
import ReactDOM from 'react-dom/client';
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";
import ItemStatusFilter from "./components/item-status-filter";


const App = () => {
    const todoData = [
        { label: 'Drink Coffee', important: false },
        { label: 'Implement React Application', important: true },
        { label: 'Make notes from your stud', important: false },
        { label: 'Do not drink alchohol', important: false },
    ];
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos =  {todoData} />
            <ItemStatusFilter />

        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>);