import "./singleProduct.scss";
import { Card, Col, Image, Button } from "react-bootstrap";
import { useCart} from "../../hooks/useCart";


function SingleProduct({name,price,img}) {

  const {addToCart,cart}=useCart();

  const handleAddToCart=()=>{
    addToCart({name,price,img,counter:1});
  }

  return (
    <div className="center">
          <Col className="col-11">
            <Card className="center py-4">
              <Image
                className="mb-3"
                style={{height:"100px"}}
                width={"40%"}
                src={img}
              />
              <p align="center">
                {name}
              </p>
              <p>
                $ {price}
              </p>
              <div className="d-flex gap-3">
                <Button onClick={handleAddToCart} className="w-100 add-to-cart">Add to Cart</Button>
              </div>
            </Card>
          </Col>
    </div>
  )
}

export default SingleProduct