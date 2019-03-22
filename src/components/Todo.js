import React, { Component } from 'react'
import TodoList from './TodoList'
import LodashComp from './Lodash/LodashComp'
import Hook from './hooks/hooks'

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
        
        const newItem = {
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
        const updatedItems = this.state.items.map(item => {
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
          <div className="appmain">
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
                        data-test="input-box"
                        />
              </div>
              <div className="col-md-3">
                <button className="btn btn-primary" 
                    onClick={(event)=>this.handleAddItem(event)} 
                    disabled={!this.state.text}
                    data-test="btn-add"
                    >
                    {"Add #" + (this.state.items.length + 1)}   
                </button>
              </div>
              <div className="col-md-3">
                <button className="btn btn-primary" 
                    onClick={()=>this.handleClearItem()} 
                    disabled={!this.state.text}
                    data-test="btn-clear"
                    >
                {"Clear"}
                </button>
              </div>
            </form>
            <br/>
            <br/>
            <LodashComp/>
            <br/>
            <Hook/>
          </div>
        );
      }
    }
    
export default Todo
