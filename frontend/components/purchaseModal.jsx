import { FaCheck } from "react-icons/fa";

class PurchaseModal extends React.Component {
    constructor(props) {
        super(props);

        this.handleModal = this.handleModal.bind(this);
    }


    handleModal() {
        if (this.props.product === undefined) {
            return (
                <h1 className="modal-success">
                    <span style="color: green"><FaCheck/></span>
                    Added to Cart
                </h1>
            )
        } else {
            const { product } = this.props;

            return (
                <div className="modal-checkout">
                    <div className="modal-header">
                        <div className="modal-title">
                            {product.title}
                        </div>
                        <button className="modal-close-button">X</button>
                    </div>
                    <div className="modal-item">
                        <img src={product.photoUrl} alt="" />
                        <div className="modal-item-info">
                            <div className="modal-info-date">
                                Arriving May 26, 2022 - Jun 2, 2022
                            </div>
                            <div className="modal-info-free-shipping">
                                FREE Standard Shipping
                            </div>
                            <div className="modal-info-sold-by">
                                Sold by <span className="euphrates">Euphrates</span>
                            </div>
                        </div>
                    </div>
                    <div className="modal-shipping-info">
                        <div className="modal-shipping-caption">
                            Ship To 
                        </div>
                        <div className="modal-shipping-user">
                            {this.props.currentUser ? this.props.currentUser.username : "guest"}
                        </div>
                    </div>
                    <div className="modal-total-info">
                        <div className="modal-total-caption">
                            Total
                        </div>
                        <div className="modal-total-value">
                            {product.price}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="modal-checkout-button">
                            Place your order
                        </button>
                    </div>
                </div>
            )
        }
    }

    render() {

        return (
            <div className="modal-shade">
                <div></div>
                <div className="modal-container">
                    {this.handleModal()}
                </div>
            </div>
        )
    }
}

export default PurchaseModal;