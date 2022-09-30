import React from 'react';

const ExerciseData = ({ allData, add }) => {
    const { id, img, name, description, age, time } = allData;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card p-1" >

                <div className="card-body">
                    <img src={img} className="card-img" alt="" />
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description.slice(0, 75)}[...]</p>
                    <p className='age'>For Age : {age}</p>
                    <p className='time__require'>Time required : {time}s</p>
                    <button onClick={()=> add(allData)} className='card__button'>Add to list</button>
                </div>
            </div>
        </div>
    );
};

export default ExerciseData;