import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import Footer from './Footer'
import {saveTodo} from '../lib/service'


export default class TodoApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentTodo:'',
      todos: []
    }
    this.handleNewTodoChange = this.handleNewTodoChange.bind(this)
    this.handleTodoSubmit = this.handleTodoSubmit.bind(this)
  }

  handleNewTodoChange (evt) {
    this.setState({currentTodo: evt.target.value})
  }

  handleTodoSubmit (evt) {
    evt.preventDefault()
    const newTodo = {new: this.state.currentTodo, isComplete: false}
    saveTodo(newTodo)
      .then(({data}) => this.setState ({
        todos: this.state.todos.concat(data)
      }))
    
  }
  render () {
    return (
      <Router>
        <div>
          <header className="header">
            <h1>todos</h1>
            <TodoForm 
            currentTodo = {this.state.currentTodo}
            handleTodoSubmit={this.handleTodoSubmit}
            handleNewTodoChange ={this.handleNewTodoChange}/>
          </header>
          <section className="main">
            <TodoList todos={this.state.todos} />
          </section>
          <Footer />
        </div>
      </Router>
    )
  }
}
