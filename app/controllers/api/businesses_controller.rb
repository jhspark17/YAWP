class Api::BusinessesController < ApplicationController

  def index
    @businesses = Business.all
    # @reviews = Review.all
    render :index
  end

  def create
    @business = Business.new(business_params)

    if @business.save
      render :show
    else
      render json: @business.errors.full_messages, status: 422
    end
  end
  #api_util have function that send ajax call to your backend
  #method get
  #data {search_params: []}

#api/business/search_bidy/id

  def search
   @businesses = Business.where("business_name LIKE ?", "%" + params[:q] + "%")
    if @businesses.length === 0 
      @businesses = Business.all
    end
  #  @reviews = execute("SELECT * FROM reviews JOIN businesses on business.id = review.business_id WHERE business_name LIKE #{params[:q]}")
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


  private

  def business_params
    params.require(:business).permit(:business, :address_1, :address_2, :city, :state, :zip_code, :latitude, :rating, :business_info, :phone_number, :website, :longitude, :category_id)
  end

  def execute(sql)
  # open connection to Postgres
  connection = PG::Connection.open(dbname: 'YAWP_development')
  # execute query
  query_result = connection.exec(sql).values
  # close connection to Postgres
  connection.close

  # return result of query
  query_result
end
end

