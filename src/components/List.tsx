import React from 'react';

interface IProps{ // interface use to define  variable type .
    people:{
      name: string,
      age: number,
      url: string,
      notes?: string
    }[]
  }
  
const List :React.FC<IProps>=({people}) => {// defining  functional componnt with props  interface and we can stract value from props easily like react we do 
    const renderList=()=>{
        return people.map(person=>(
            <li className="list-group-item" style={{ borderBottom: '1px solid #e1e1e1',display: 'flex',gap:'30px',justifyContent:'space-between',alignItems: 'center'}}>
                <div className="list-header">
                    <img className=" list-img" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" style={{width:'40px',height:'40px'}}/>
                </div>
                <h2>{person.name}</h2>
                <p>{person.age}</p>
                <p className="list-note">{person.notes}</p>
            </li>
        ))
    }
  return <div >
      <div className="row mt-5">
          <div className="col-md-6 offset-md-3">
              <h2 className="alert text-center alert-success">People List</h2>
            <ul className="list-group list-group-flush">
                {renderList()}
            </ul>
          </div>
      </div>
  </div>;
};

export default List;
