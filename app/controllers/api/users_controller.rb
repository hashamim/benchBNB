class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render json: {text: "Signed Up!"}.to_json
        else
            render json: {error: @user.errors.full_messages}.to_json, status: 420
        end
    end

    def user_params
        params.require(:user).permit(:username, :password)
    end

end