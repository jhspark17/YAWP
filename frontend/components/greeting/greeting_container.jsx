import {connect} from 'react-redux'
import Home from './home';
import { fetchBusinesses, searchBusinesses } from '../../actions/business_actions';

const mapStateToProps = state => {
  let businesses = Object.values(state.entities.businesses)
  return({
  currentUser: state.session.currentUser,
  businesses
  })
}

const mapDispatchToProps = dispatch => ({
  fetchBusinesses: () => dispatch(fetchBusinesses()),
  searchBusinesses: (search) => dispatch(searchBusinesses(search))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
