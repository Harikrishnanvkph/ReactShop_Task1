import {useState} from 'react'

function Card(props){
    //implement stateVariable and stateFunction - which will be shared to all components
    //to constantly keep update on latest value of Card state
    let [button,setButtonState] = useState(false);

    return <>
    <div className="col mb-5">
        <div className="card h-100">
            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
            <div className="card-body p-4">
                <div className="text-center">
                    <h5 className="fw-bolder">Fancy Product</h5>
                    {/*updating InnerHTML value of div element*/}
                    {props.costString}
                </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#"
                    onClick={()=>{
                        //Toggling button boolean to opposite value
                        setButtonState(!button)

                        //updating App.jsx stateVariable count 
                        //via App.jsx stateFunction updateCount
                        props.updateCount(button ? props.count - 1 : props.count + 1)
                    }}
                    style={
                        /*updating button background color as per count value */
                        button == true ? 
                        {
                            color : "white",
                            backgroundColor : "black"
                        } : 
                        {
                            color : "black",
                            backgroundColor : "white"
                        }
                    }
                >
                    {
                        //updating button innerHTML upon boolean value
                        !button ? "Add to cart" : "Remove from Cart"
                    }
                </a></div>
            </div>
        </div>
    </div>
    </>
}

export default Card