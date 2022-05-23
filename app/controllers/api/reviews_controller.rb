class Api::ReviewsController < ApplicationController

    def create
        @review = Review.new(review_params)
        @product = @review.product

        puts @review

        if @review.save
            render "api/products/show"
        else 
            render json: @review.errors.full_messages, status: 422
        end 
    end

    def update
        @review = review.find_by(id: params[:id])
        @product = @review.product
        if @review.update(review_params)
            render "api/products/show"
        else 
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = review.find_by(id: params[:id])
        if @review.destroy
            render "api/products/show"
       end
    end

    private

    def review_params
        params.require(:review).permit(:rating, :title, :body, :user_id, :product_id)
    end
end
