class Api::ReviewsController < ApplicationController

    def create
        @review = Review.new(review_params)
        @product = @review.product

        if @review.save
            render :show
        else 
            render json: @review.errors.full_messages, status: 422
        end 
    end

    def update
        puts params
        @review = Review.find_by(id: params[:id])
        @product = @review.product
        if @review
            @review.update(:title => review_params[:title])
            @review.update(:body => review_params[:body])
            @review.update(:rating => review_params[:rating])
            render :show
        else 
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        @review.destroy
    end

    private

    def review_params
        params.require(:review).permit(:rating, :title, :body, :user_id, :product_id)
    end
end
