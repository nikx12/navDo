import React, { Component } from "react";
import AddButton from "./addButton";
import AddToDo from "./addToDo";
class ToDoAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      new_todo: false
    };
  }
  saveToDoData = todo => {
    this.addNewToDo((show = false));
    console.log(
      "Task is: " +
        todo.title +
        " " +
        (todo.completed ? "completed!" : "not completed!")
    );
    this.props.addTodo(todo);
  };

  addNewToDo = show => {
    this.setState({
      new_todo: show
    });
  };
  render() {
    const { new_todo } = this.state;
    const { todos, show_new_todo, screen, deleteTodo, updateTodo } = this.props;

    let listItm = [];
    if (todos.length > 0) {
      listItm = todos.map((todo, index) => (
        <ToDoItem
          key={index}
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ));
    }
    return (
      <Container>
        {/* <Text style={{color: 'blue'}}>Hi This is Home Screen</Text>  */}
        <Header>
          <Body>
            <Title>To Do App</Title>
          </Body>
        </Header>
        <Content>
          {listItm}
          {new_todo && (
            <NewToDo onPress={this.saveToDoData} onCancel={this.addNewToDo} />
          )}
        </Content>
        <AddButton onAddNewToDo={this.addNewToDo} />
      </Container>
    );
  }
}
function mapStateToProps(state) {
  return {
    todos: state.todo_reducer.todos
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addTodo: todo => dispatch(addTodo(todo)),
    deleteTodo: todo => dispatch(deleteTodo(todo)),
    updateTodo: todo => dispatch(updateTodo(todo))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoAll);
