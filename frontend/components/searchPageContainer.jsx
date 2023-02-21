import { connect } from "react-redux"
import SearchPage from "./searchPage"

const mSTP = (state) => ({
    products: Object.values(state.entities.products),
    error: state.errors.search
})

export default connect(mSTP)(SearchPage);