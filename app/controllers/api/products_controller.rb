class Api::ProductsController < ApplicationController

    def show
        @product = Product.find(params[:id])
        render :show
    end

    def index
        @products = Product.all
        render :index
    end

    def search
        query = params[:query]
        @products = Listing.where('title ILIKE ? OR description ILIKE ? ', "%#{query}%", "%#{query}%") 
        if @products.length > 0
            render :index
        else
            render json: ["No results found for '#{query}'"], status: 404
        end
    end

    private

    def product_params
        params
        .require(:product)
        .permit(
            :title,
            :price,
            :description,
            :rating,
            :filename,
            :specialty,
            :category
        )
    end
end

