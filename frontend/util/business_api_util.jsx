export const fetchBusiness = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/businesses/${id}`,
  })
);

export const createBusiness = (business) => (
  $.ajax({
    method: "POST",
    url: `/api/businesses`,
    data: {business}
  })
);

export const fetchBusinesses = () => (
  $.ajax({
    method: "GET",
    url: `/api/businesses`
  })
);

export const searchBusinesses = (search) => {
 return ($.ajax({
    method: "Get",
    url: `/api/search?q=${search}`
  }))
};





