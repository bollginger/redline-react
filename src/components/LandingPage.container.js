import LandingPage from '/LandingPage.component';
import { connect } from 'react-redux';

const initialState = {
    // display: '0',
    // history: []
}

const mapStateToProps = (state = initialState) => {
    return {
        // history: state.history,
        // display: state.display
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    // updateDisplay: display => dispatch(updateDisplay(display)),
    // clearDisplay: () => dispatch(clearDisplay()),
    // addCalculation: calc => dispatch(addCalculation(calc)),
    // clearCalculations: () => dispatch(clearCalculations())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (LandingPage);