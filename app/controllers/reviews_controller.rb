class ReviewsController < ApplicationController
  def index 
  end

  def create
    @review = Review.new(review_params)
    
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find_by(params[:review][:user_id], params[:review][:business_id])
    if @review.update_attributes(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find_by(params[:review][:id])

    if @review
      @review.destroy
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def show
  end

  private

  def review_params
    params.require(:review).permit(:body, :rating, :user_id, :business_id)
  end
end
