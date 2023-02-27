import React from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store';
import { up } from './counterSlice';

// const reducer = (state, action) => {
//   if (action.type == 'up') {
//     return { ...state, value: state.value + action.step };
//   }
//   return state;
// };
// const initailState = { value: 0 };
// const store = createStore(reducer, initailState);

const Counter = () => {
  const count = useSelector((state) => {
    return state.counter.value;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          // dispatch({ type: 'counterSlice/up', step: 2 });
          dispatch(up(2));
        }}
      >
        +
      </button>{' '}
      {count}
    </div>
  );
};
export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  );
}
