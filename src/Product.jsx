import "./Product.css";
import Price from "./Price";
function Product({title , idx}) {
   let oldPrice = ["12,495","11,900","1,599","599"];
   let newPrice = ["8,999","9,199","899","278"];
   let description = [["8,000 DPT","5 Programmable buttons"], ["intuitive surface","designed for iPad Pro"], ["designed for iPad Pro","intuitive surface"], ["wireless","optical orientations"]];

    return (
        <div className="Product" >
            <h3><p>{title}</p></h3>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
    );
}

export default Product;