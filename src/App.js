import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import useToggle from './useToggle';
import Cat from './Cat';
import Counter from './Counter';

function App() {
  const [isNameVisible, setIsNameVisible] = useToggle();
  const [isTextVisible, setIsTextVisible] = useToggle();
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <button type="button" onClick={() => setIsNameVisible((prev) => !prev)}>
          {isNameVisible ? 'Hide Name' : 'Show Name'}
        </button>
        {isNameVisible && <h1>Hidden Name</h1>}
        <hr />
        <button type="button" onClick={() => setIsTextVisible((prev) => !prev)}>
          {isTextVisible ? 'Hide Text' : 'Show Text'}
        </button>
        {isTextVisible && <h1>Hidden Text</h1>}
        <hr />
        <Cat />
        <hr />
        <Counter count={1} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
