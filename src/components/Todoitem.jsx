import { MdDeleteOutline } from "react-icons/md"
function Todoitem({todoDate,todoName,onDlt}){
  return (<div class="container">
  
  <div className="row kg-row">
    <div className="col-6">{todoDate}</div>
    <div className="col-4">{todoName}</div>
    <div className   ="col-2"><button type="button" className="btn btn-danger kg-button" onClick={()=>onDlt(todoName)}><MdDeleteOutline /></button></div>
  </div>
  </div> ); 
}
export default Todoitem;