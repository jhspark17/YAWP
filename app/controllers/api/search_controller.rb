class Api::SearchController < ApplicationController
  def find_businesses
    query = params[:query][:query]
    query
  end
  
end