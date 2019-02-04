import React, { Component } from 'react'
import TodoList from './TodoList'

export class Todo extends Component {
      state = {
          items:[],
          text: ""
      }

      handleTextChange(event) {
        this.setState({
          text: event.target.value
        });
      }
      handleAddItem(event) {
        event.preventDefault();
        
        var newItem = {
          id: Date.now(),
          text: this.state.text,
          done: false
        };
        
        this.setState((prevState) => ({
          items: prevState.items.concat(newItem),
          text: ""
        }));
      }
      markItemCompleted = (itemId) => {
        var updatedItems = this.state.items.map(item => {
          if (itemId === item.id)
            item.done = !item.done;
          
          return item;
        });
        
        // State Updates are Merged
        this.setState({
          items: [].concat(updatedItems)
        });
      }
      handleDeleteItem = (itemId) => {
        const updatedItems = this.state.items.filter(item => {
          return item.id !== itemId;
        });
        
        this.setState({
          items: [].concat(updatedItems)
        });
      }
      handleClearItem(){
         this.setState({
             text: ''
         }) 
         this.inputBox.focus() 
      }

      render() {
        return (
          <div>
            <h3 className="apptitle">MY TO DO LIST</h3>
            <div className="row">
              <div className="col-md-3">
                <TodoList items={this.state.items} onItemCompleted={this.markItemCompleted} onDeleteItem={this.handleDeleteItem} />
              </div>
            </div>
            <form className="row">
              <div className="col-md-3">
                <input type="text" 
                        className="form-control" 
                        onChange={(event)=>this.handleTextChange(event)} 
                        value={this.state.text} 
                        ref = {element => this.inputBox = element } 
                        />
              </div>
              <div className="col-md-3">
                <button className="btn btn-primary" onClick={(event)=>this.handleAddItem(event)} disabled={!this.state.text}>{"Add #" + (this.state.items.length + 1)}</button>
              </div>
              <div className="col-md-3">
                <button className="btn btn-primary" onClick={()=>this.handleClearItem()} disabled={!this.state.text}>{"Clear"}</button>
              </div>
            </form>
          </div>
        );
      }
    }
    
export default Todo