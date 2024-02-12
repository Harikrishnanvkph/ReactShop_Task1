import Card from "./Card.jsx";

// Creating an array of cost values that will be passed as prop to create Card component
var cardStrings = [
    "$40.00 - $80.00", 
    "$18.00",
    "$25.00",
    "$40.00",
    "$25.00",
    "$120.00 - $280.00",
    "$18.00",
    "$40.00"
];

function CardShow(props) {
  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {
                //Mapping each element of cardStrings array value to create 
                //Card component with array element value
                //Also passing props count and updateCount to each Card Component
                cardStrings.map((it,index)=>(
                    <Card key={index} costString={it} count={props.count} updateCount={props.updateCount} />
                ))
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default CardShow
