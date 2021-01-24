import React, { FC } from 'react';
import { RecoilRoot } from 'recoil'
import { TodoList } from './components/TodoList';

const App: FC = () => (
  <RecoilRoot>
    <TodoList />
  </RecoilRoot>
)

export default App;
