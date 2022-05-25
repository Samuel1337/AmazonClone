class Api::ProductsController < ApplicationController

    def show
        @product = Product.find(params[:id])
        render :show
    end

    def index
        @products = Product.all
        # if (params[:search] == nil) {
        # } else {
        #     @products = Product
        #         .where(category: params[:category])
        #         .where(title: /#{Regexp.quote(params[:search])}/)
        # }
        render :index
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

