import * as BusinessApiUtil from '../util/business_api_util'

export const RECEIVE_ALL_BUSINESSES = "RECEIVE_ALL_BUSINESSES"
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";

const receiveBusinesses = (businesses) => ({
  type: RECEIVE_ALL_BUSINESSES,
  businesses
});

const receiveBusiness = (payload) => {
  return({
    type: RECEIVE_BUSINESS,
    payload
  })};


export const fetchBusinesses = () => dispatch => (
  BusinessApiUtil.fetchBusinesses()
  .then(businesses => dispatch(receiveBusinesses(businesses)))
);

export const fetchBusiness = (id) => dispatch => (
  BusinessApiUtil.fetchBusiness(id)
  .then(business => dispatch(receiveBusiness(business)))
);

export const searchBusinesses = (search) => dispatch => (
  BusinessApiUti.searchBusinesses(search)
  .then(businesses => dispatch(foundBusinesses(businesses)))
)