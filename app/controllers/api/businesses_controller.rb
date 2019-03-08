class Api::BusinessesController < ApplicationController

  def index
    @businesses = Business.all
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
    query = params[:filter][:filter];
  end

  def show
    #if params has key search_body 
     #@business = Business.find(search_body)
     # json.jubiler @builder
    #entire difreent logi 
    #else 
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
end
