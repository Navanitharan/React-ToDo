/* eslint-disable react/prop-types */

function Head({Name,Desc,setName,setDesc,add,edit,save}) {

    return(
        <>
    <h3 className='text-center'>My todo</h3>

    <div className="input d-flex justify-content-around m-4">
        <div className="todoName col-3">
            <input className='form-control' type="text" onChange={(e)=>{setName(e.target.value)}} value={Name}/>
        </div>
        <div className="todoName col-3">
            <input className='form-control' type="text" onChange={(e)=>{setDesc(e.target.value)}} value={Desc}/>
        </div>
        <div className="todoName col-3">
            {(!edit) ? <button className='form-control' type='submit' onClick={()=>add(Name,Desc)}>AddToDo</button>:
            <button className='form-control' type='submit' onClick={()=>save(Name,Desc)}>Save</button>}
        </div>
    </div>
    </>
    )
}
export default Head