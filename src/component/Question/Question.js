import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='ques'>
            <p><span className='text-primary fw-bold'>Ques 1:</span> React is a JavaScript library. We can use it for creating user interfaces  in a predictable and efficient way using declarative code. To prove what we mean by declarative code. We want you to envision the following code expressed as an app. What you image could look like the screen below, with a navbar,   header,  filter and  list. Because each line of code declares what each element of the app that is.
            </p>
            <p><span className='text-primary fw-bold'>Ques 2:</span> Props and state in react  are used to control data into a component. Generally props are set by parent and passed into child components and they are fixed throughout the component. For data that is going to change we have to use state and props are immutable when states are mutable. If you want to change props you can do from parent component not from child component and then pass it into child components.
            </p>
        </div>
    );
};

export default Question;