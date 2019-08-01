[Live Demo](https://yawp-jp.herokuapp.com/?#/)

# Welcome to Yawp!!

Yawp is a clone of Yelp where users can search for different types of businesses in their area. For every restaurant on Yawp, you can find the location, price and pictures of the restaurant. 


### Technologies Used
  * Ruby on Rails
  * React & Redux
  * HTML & CSS
  * PostgreSQL for database
  
### Features
  * Gave users CRUD interactions with reviews using AJAX requests over HTTP to RESTful designed routes and controllers.
  * Implemented Ruby on Rails’ Active Storage to attach photos for both a business and user and AWS S3 Buckets for storage
  * Applied React Hook’s useEffect for lifecycle methods and useState for slices of local state in functional components.
  * Back-end search functionality where params is used to find specific businesses using a SQL query.
  * Interactive ratings system where onHover and offHover is implemented for users to select.


### Index Page
The Business Index Page where snippets of information is show on the page. Each Business on the index will have a link where users can
go to each of the businesses's show page.

<img width="1280" alt="Screen Shot 2019-05-08 at 4 40 49 PM" src="https://user-images.githubusercontent.com/42100510/57415197-1ca0e500-71b0-11e9-80b6-37ee0d422230.png">




### Login Page
Users can either login or sign up through the a forms page. If email is already taken or password parameters doesn't match, errors
will be shown.

<img width="1280" alt="Screen Shot 2019-05-08 at 4 48 03 PM" src="https://user-images.githubusercontent.com/42100510/57415459-2545eb00-71b1-11e9-9269-cc3bf255295d.png">



### Review Page
A user, when logged in, can write a review for a specific business. If a user wants to write another review, they will be redirected to an
update review page where they can modify their original review.

<img width="1277" alt="Screen Shot 2019-05-08 at 4 39 06 PM" src="https://user-images.githubusercontent.com/42100510/57415151-e6fbfc00-71af-11e9-8b42-aee2ce16dd50.png">

### Review Page with React Hooks
```

 const [rating, setRating] = useState(0);
  const [body, setBody] = useState("");

    if (!business) {
      return null
    } else if (!currentUser) {
      <Redirect to={`/businesses/${businessId}`}/>
    }


  useEffect(() => {
    if (business && formType === "Create Review") {
      currentUserReview()
    } else {
      setBody(props.review)
    }
  }, [])

  const mouseEnter = index => {
    return () => {
      starListClass(index);
      ratingTextContent(index);
    };
  }

    const mouseLeave = () => {
    return () => {
      starListClass(rating);
      ratingTextContent(rating);
    };
  }

```
### Axios API Calls
```
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

```
### Controllers for Business
```
  def create
    @business = Business.new(business_params)

    if @business.save
      render :show
    else
      render json: @business.errors.full_messages, status: 422
    end
  end


  def search
   @businesses = Business.where("LOWER(business_name) LIKE ?", "%" + params[:q] + "%")
  
    if @businesses.length === 0 
      @businesses = Business.all
    end
   render :index
  end

  def show
    @business = Business.find(params[:id])
    if @business
      render "api/businesses/show"
    else
      render json: @business.errors.full_messages, status: 422
    end
  end
  ```

### JSON format for data
```
  business ||= @business

  json.extract! business, :id, :business_name, :address_1, :address_2, :city, :state, :zip_code, :latitude, :longitude, :rating, :business_info, :phone_number, :category, :website
  json.photos   business.photos.map {|photo| url_for(photo)}

  @businesses.map do |business|
  json.businesses do
    json.set! business.id do
      json.partial! 'api/businesses/business', business: business
      json.reviews business.reviews
    end 
  end
end

  ```



