import React from 'react'

export default function About(props) {
    // const [darkMode, setDarkMode] = useState({
    //     color: 'white',
    //     backgroundColor: 'black'
    // })

    // const [btnText, setBtnText] = useState('Enable Light Mode');


    // const toggleStyle = () => {
    //     if (darkMode.color === 'white') {
    //         setDarkMode({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             border: '1px solid white'
    //         })
    //         setBtnText('Enable Dark Mode')
    //     }
    //     else {
    //         setDarkMode({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtnText('Enable Light Mode')
    //     }
    // }
    return (

        <div className={`container bg-${props.mode} navbar-${props.mode} bg-opacity-10`} >
            <h2 className='my-2 mx-2'>About Us</h2>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='container'>
                {/* <button type="button" className="btn btn-dark"  ></button> */}
                {/* <div className="form-check form-switch form-dark">
                    <input className="form-check-input form-dark" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleStyle} />
                    <p className='my-2 mb-5'>{btnText}</p>
                </div>
            </div> */} 
        </div>
    )
}
