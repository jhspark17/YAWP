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


  private

  def business_params
    params.require(:business).permit(:business, :address_1, :address_2, :city, :state, :zip_code, :latitude, :rating, :business_info, :phone_number, :website, :longitude, :category_id)
  end

end

