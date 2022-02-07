import React, { useState } from 'react';
import {IState as Props} from '../App'



interface IProps{
    people:Props["people"]
    setPeople:React.Dispatch<React.SetStateAction<Props["people"]>>
}


const AddToList:React.FC<IProps> = ({people,setPeople}) => {
    const [input,setInput]=useState({
        name:"",
        age:"",
        url:"",
        notes:"",
    })
    const handleChange = (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>):void => {
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }
    const handleClick=():void=>{
        setPeople([
            ...people,
            {
                name:input.name,
                age:parseInt(input.age),
                url:input.url,
                notes:input.notes
            }
        ]);
    }
  return( <div className="mt-5 col-md-6 offset-md-3">
      <div className="text-left">
        <div className="form-group">
            <input name="name" type="text" onChange={e=>handleChange(e)}  value={input.name} className="form-control" placeholder="Name"/>
        </div> 
        <div className="form-group">
            <input name="age" type="number" className="form-control" onChange={e=>handleChange(e)}  value={input.age} placeholder="Age"/>
        </div> 
        <div className="form-group">
            <input name="url" type="text" className="form-control" placeholder="Url" onChange={e=>handleChange(e)}  value={input.url} /> 
        </div> 
        <div className="form-group">
            <textarea name="notes" className="form-control" placeholder="Note " onChange={e=>handleChange(e)}  value={input.notes} />
        </div> 
        <button className="btn btn-primary" onClick={e=>handleClick()}>Submit</button>
    </div>
  </div>);
};

export default AddToList;
