class Api::ReviewsController < ApplicationController

    def create
        @review = Review.create(review_params)
        if @review.save
            render "api/products/show"
        else 
            render json: @review.errors.full_messages, status: 422
        end 
    end

    def update
        @review = review.find_by(id: params[:id])
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
        review.require(:review).permit(:rating, :title, :body, :user_id, :product_id)
    end
end
