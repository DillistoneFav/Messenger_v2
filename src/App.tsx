import MainColumn from './Main/View';
import ChatColumn from './Chat/View';

import './App.css';

function App() {
    return (
        <div className="App flex">
            <MainColumn/>
            <ChatColumn/>
        </div>
    );
}

export default App;
