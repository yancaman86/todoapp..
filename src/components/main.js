import React from "react";

function Main(props) {

  //const { input, setInput, addInput, inputs, deleteInput } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <div className=" ">
        <h1>Search Box</h1>
        <div>
          <input
            type="text"
            placeholder="Enter"
            onChange={(e) => props.setInput(e.target.value)}
            value={props.input}
          />
          <button className="add-button" onClick={props.addInput}>
            Submit
          </button>
        </div>
        <ul className="todo-list">
          {props.inputs.map((input) => (
            <div className="input" key={input.id}>
              <li>{input.text}</li>
              <button
                className="delete-button"
                onClick={() => {
                  props.deleteInput(input.id);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      </div>
    </form>
  );

}

export default Main;