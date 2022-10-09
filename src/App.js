import { useReducer, useState } from 'react';

const initialValue = {
  username: '',
  email: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'username':
      return { ...state, username: action.paylaod };
    case 'email':
      return { ...state, email: action.payload };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <input
        type="text"
        value={state.username}
        onChange={(event) =>
          dispatch({ type: 'username', paylaod: event.target.value })
        }
      />
      <input
        type="email"
        value={state.username}
        onChange={(event) =>
          dispatch({ type: 'email', paylaod: event.target.value })
        }
      />
    </div>
  );
}

export default App;
