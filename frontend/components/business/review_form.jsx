import React from 'react';
import NavBarShowContainer from '../NavBar/navbar_show_container';
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';
import {Link} from 'react-router-dom'

class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: this.props.review,
      user_id: this.props.currentUser,
      business_id: this.props.businessId,
      rating: 4,
    }

    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount(){
    this.props.fetchBusiness(this.props.businessId)
  }

  onSubmit(e){
    e.preventDefault();
    this.props.action(this.state)
      .then(() => this.props.history.push(`/businesses/${businessId}`))
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  showPageLink(){
    return `/businesses/${businessId}`
  }

  render() {
    if (this.props.business === undefined) {
      return null;
    }
    console.log(this.props.currentUser)
    return(
      <>
        <NavBarShowContainer />
        <div>
          <Link to={`/businesses/${this.props.businessId}`} > { this.props.business.businessName }</Link>
          <form onSubmit={this.onSubmit}>
            <textarea name="" id="" cols="800" rows="10" placeholder="IM FUCKED" onChange={this.update("body")}>
            
            </textarea>
            <input type="submit" value={this.props.formType}/>
          </form>
        </div>
      </>
    )
  }
}

export default ReviewForm;