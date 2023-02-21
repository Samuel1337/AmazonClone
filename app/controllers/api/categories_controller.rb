class Api::CategoriesController < ApplicationController

    def index   
        @products = Product.where(category: params[:category])
        render :index
    end

end
