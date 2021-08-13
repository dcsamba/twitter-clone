import './App.css';
import Sidebar from './components/sidebar/Sidebar.component'
import Feeds from './components/feeds/Feeds.component'
import Widgets from './components/widgets/Widgets.component'

function App() {
  return (
    <div className="app">

      {/* Sidebar */}
      <Sidebar />


      {/* Feeds */}
      <Feeds />


      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default App;
