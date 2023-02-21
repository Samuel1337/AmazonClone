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
        category = query.split('=').last
        query = query.split('&').first

        category = "" if (category === "all")

        @products = Product.where(
            'category ILIKE ? AND title ILIKE ?',
            "%#{category}%",
            "%#{query}%"
            )
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

