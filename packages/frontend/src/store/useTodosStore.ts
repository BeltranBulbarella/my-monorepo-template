import {create} from "zustand";

interface Todo {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
}

interface TodosStore {
    todos: Todo[];
    getTodos: () => Promise<Todo[]>;
    todosFetched: boolean;
}


const useTodosStore = create<TodosStore>((set) => ({
    todos: [],
    getTodos: async () => {
        const response = await fetch('http://localhost:4000/todo/1');
        const data = await response.json();
        console.log(data);
        set({ todos: data });
        return data;
    },
    todosFetched: false,
}));

export default useTodosStore;
