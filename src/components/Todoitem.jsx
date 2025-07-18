function Todoitem({todoDate,todoName,onDelete}){
  return (<div class="container">
  
  <div className="row kg-row">
    <div className="col-6">{todoDate}</div>
    <div className="col-4">{todoName}</div>
    <div className   ="col-2"><button type="button" className="btn btn-danger kg-button" onClick={()=>onDelete(todoName)}>delete</button></div>
  </div>
  </div> ); 
}
export default Todoitem;