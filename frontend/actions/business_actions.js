import * as BusinessApiUtil from '../util/business_api_util'

export const RECEIVE_ALL_BUSINESSES = "RECEIVE_ALL_BUSINESSES"
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
export const RECEIVE_SPECIFIC_BUSINESSES = "RECEIVE_SPECIFIC_BUSINESSES"

const receiveBusinesses = (payload) => ({
  type: RECEIVE_ALL_BUSINESSES,
  payload
});

const receiveBusiness = (payload) => {
  return({
    type: RECEIVE_BUSINESS,
    payload
  })};

  const receiveSpecificBusinesses = (payload) => {

    return ({
      type: RECEIVE_SPECIFIC_BUSINESSES,
      payload
    })
  }


export const fetchBusinesses = () => dispatch => (
  BusinessApiUtil.fetchBusinesses()
  .then(businesses => dispatch(receiveBusinesses(businesses)))
);

export const fetchBusiness = (id) => dispatch => (
  BusinessApiUtil.fetchBusiness(id)
  .then(business => dispatch(receiveBusiness(business)))
);

export const searchBusinesses = (search) => dispatch => (
  BusinessApiUtil.searchBusinesses(search)
  .then(businesses => dispatch(receiveSpecificBusinesses(businesses)))
)