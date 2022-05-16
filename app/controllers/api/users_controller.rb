class Api::UsersController < ApplicationController

    def new 
        @user = User.new
        render :show
    end

    def create
        @user = User.new(user_params)
        if @user && @user.save
            login(@user)
            render :show
        else
            render json: ["User already exists"], status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password)
    end

end
