class Api::SessionsController < ApplicationController

    def show
    end
    
    def create 
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            login(@user)
            render json: {id: @user.id, username: @user.username}
        else
            render json: ["Invalid credentials"], status: 422
        end
    end
    
    def destroy
        @user = User.find_by(session_token: session[:session_token])
        if @user
            logout!
            render json: {}
        else
            render json: ["There is no current_user to logout"], status: 404
        end
    end
end
