import React from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';



function CreateArea(props) {

  const [isExpanded, setIsExpanded] = React.useState(false);

  const [note,setNote] = React.useState({title:"",content:""});

  
  function handleChange(event){
    // grab the name and value of used input
    const {name, value} = event.target;

    // updates Note according to which input area is being typed in 
    setNote(prevNote => {
      return {
        // ... "spreads" the previous values already in note
        ...prevNote,
        // [name] is needed to grab the value
        //    * instead of using a string we need the "actual value"
        [name]:value,
      };
    })
  }

  function submitNote(event){
    props.onAdd(note);
    // clears out the input after note is added to notes array!
    setNote({title:"",content:""});
    setIsExpanded(false);
    event.preventDefault();
  }

  function expand(){
    setIsExpanded(true);
  }



  return (
    <div>
      <form className="create-note">
        
        {isExpanded?<input 
          name="title" 
          onChange={handleChange} 
          placeholder="Title" 
          value={note.title}/>:null}
        <textarea 
          name="content" 
          onClick={expand} 
          onChange={handleChange} 
          placeholder="Take a note..." 
          rows={isExpanded ? 3 : 1} 
          value={note.content} />
        {/* Fab is the same as Button but a react component instead from Materials UI */}
        <Zoom in={isExpanded}>
          <Fab onClick = {submitNote} ><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
