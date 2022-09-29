import React, { useEffect, useState } from 'react';
import ExerciseData from '../ExerciseData/ExerciseData';
import proPic from '../Assests/pro-pic.jpg';
import { FiMapPin } from 'react-icons/fi';

const Home = () => {
    const [exercise, setExercise] = useState([]);
    const [timeCount, setTimeCount] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercise(data))
    }, []);
    // console.log(exercise)
    console.log(timeCount);
    const add = (allData) => {
        console.log(timeCount);
        const count = [...timeCount, allData.time];
        setTimeCount(count)

    }
    let sum = timeCount.reduce(function (a, b) {
        return a + b;
    }, 0);
    console.log(sum)
    return (
        <div className='home__main'>
            <div className="row g-0">
                <div className="col-md-9 col-sm-12 home__main__left">
                    <div className="home__content_container container w-75 d-flex align-items-center">
                        <div className="home__content__main">
                            <h1 className='home__content__heading'>Ultra Fitness Club</h1>
                            <p className='home__content__heading__sub'>Select today's exercise</p>
                            <div className="row g-3">
                                {
                                    exercise.map(data => <ExerciseData key={data.id} allData={data} add={add}></ExerciseData>)
                                }

                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-md-3 col-sm-12 p-5">
                    <div className="profile">
                        <div className="profile__content d-flex">
                            <img className='pro__pic' src={proPic} alt="" />
                            <div className="profile__content__detail">
                                <p className='profile__name'>John Doe</p>
                                <div className="profile__detail d-flex">
                                    <FiMapPin></FiMapPin>
                                    <span className='address'>Sydney, Australia</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;