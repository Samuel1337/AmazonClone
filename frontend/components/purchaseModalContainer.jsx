import { connect } from "react-redux"
import PurchaseModal from "./purchaseModal"

const mSTP = (state, { match }) => ({
    product: state.entities.products[match.params.productId],
    currentUser: state.entities.users[state.session.id]
})

export default connect(mSTP,_)(PurchaseModal);