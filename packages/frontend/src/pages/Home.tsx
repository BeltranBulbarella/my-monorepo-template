import React, {useEffect} from 'react';
import {Container, Typography} from '@mui/material';
import useTodosStore from "../store/useTodosStore.ts";

const Home: React.FC = () => {
    const {todos, getTodos, todosFetched} = useTodosStore();
    console.log(todos);

    useEffect(() => {
        if (!todosFetched) {
            getTodos();
        }
    }, [todosFetched]);

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Home Page
            </Typography>
            <Typography variant="body1">
                Welcome to the Home Page!
            </Typography>
            <Typography variant="body1">
                Here are your todos:
            </Typography>
            {todos.map((todo) => (
                <div id={todo.id.toString()} key={todo.id}>
                    <Typography key={todo.title} variant="body1">
                        {todo.title}
                    </Typography>
                    <Typography key={todo.content} variant="body1">
                        {todo.content}
                    </Typography>
                </div>
            ))}
        </Container>
    );
};

export default Home;
