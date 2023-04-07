import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    counter: 0,
    posts: []
  };


componentDidMount() {
  this.loadPosts();
}

loadPosts = async () => {
  const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');

  const [posts] = await Promise.all([postsResponse]);

  const postsJason = await posts.json();

  this.setState({ posts: postsJason });
}



render () {
  const { posts, counter } = this.state;

  return (
    <div className='App'>
      <p>{counter}</p>
      {posts.map(post =>(
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
}
export default App;
