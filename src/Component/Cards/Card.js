import React from 'react';

import '../styles/style.css'


function Card({name, email, id} ) {

    return (

        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img  alt='Robots' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>
                    {name} 
                </h2>
                <p>
                  <a className='Hyp' href = {`mailto: ${email}`} > 
                      Email Me 
                  </a> 
                </p>
            </div>
        </div>

    );

}




export default Card;