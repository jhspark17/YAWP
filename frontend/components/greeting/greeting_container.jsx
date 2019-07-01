import {connect} from 'react-redux'
import Home from './home';
import { fetchBusinesses} from '../../actions/business_actions';

const mapStateToProps = state => {
  let businesses = Object.values(state.entities.businesses)
  return({
  currentUser: state.session.currentUser,
  businesses
  })
}

const mapDispatchToProps = dispatch => ({
  fetchBusinesses: () => dispatch(fetchBusinesses()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
