import { BrowserRouter , Route} from 'react-router-dom'
import Home from './components/home/home';
import Navbar from './components/navbar/navbar'
import SignIn from './components/signin/signIn'
import SignUp from './components/signup/signup'
import NewsFeed from './components/newsfeed/newsfeed'
import Setting from './components/setting/setting'
import Profile from './components/profile/profile'
import Chat from './components/chat/chat'
function App() {
  
  return (
    
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route exact path='/' component={Home} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/newsfeed' component={NewsFeed} />
          <Route path='/setting' component={Setting} />
          <Route path='/profile' component={Profile} />
          <Route path='/chat' component={Chat} />
        </div>
      </BrowserRouter>
      
  );
}

export default App;
