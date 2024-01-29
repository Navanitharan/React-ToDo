/* eslint-disable react/prop-types */

function Head({Name,Desc,setName,setDesc,add,edit,save}) {

    return(
        <>
    <h3 className='text-center'>My todo</h3>

    <div className="input m-4">
  <div className="todoName mb-3">
    <input
      className='form-control '
      type="text"
      placeholder="Todo Name"
      onChange={(e) => { setName(e.target.value) }}
      value={Name}
      required
    />
  </div>
  <div className="todoName mb-3">
    <input
      className='form-control'
      type="text"
      placeholder="Todo Description"
      onChange={(e) => { setDesc(e.target.value) }}
      value={Desc}
      required
    />
  </div>
  <div className="todoName mb-3">
    {(!edit) ? 
      <input
        className='form-control'
        type='submit'
        value="AddToDo"
        onClick={() => add(Name, Desc)}
      /> :
      <input
        className='form-control'
        type='submit'
        value="Save"
        onClick={() => save(Name, Desc)}
      />
    }
  </div>
</div>

    </>
    )
}
export default Head