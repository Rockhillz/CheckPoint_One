import products from "../../mockdata/products"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ImgUrl from "./ImgUrl";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
console.log(products)



const ProductCard = () => {
    return (
        <div className="flex flex-wrap mx-5">
          {products.map((product, index) => (
            <Card className="" key={index} style={{ width: '18rem', margin: '10px' }}>
              <ImgUrl >{product.imageUrl}</ImgUrl>
              <Card.Body>
                <Name >{product.name}</Name>
                <Price>${product.price}</Price>
                <Description>{product.description}</Description>
                {/* <Button variant="primary">Buy</Button> */}
              </Card.Body>
            </Card>
          ))}
        </div>
      );
};

export default ProductCard