import TodoApp from "./components/TodoApp";

// Context
import FilterProvider from "./Providers/context/filter_context";
import TodoProvider from "./Providers/context/todo_context";


function App() {
  return (
    <TodoProvider>
      <FilterProvider>
        <TodoApp />
      </FilterProvider>
    </TodoProvider>
  );
}

export default App;
