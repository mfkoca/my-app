import React from "react";

export default function Todos ({ toDoItems })
{
    const renderTodos = () => {
        const todos = toDoItems.map((item) => {
            return <li>{item}</li>;
        });
        return( 
        <>
         <ul>{todos}</ul>
        </>
        );
    };
    return <> {renderTodos()}</>;
}