class SessionController < ApplicationController
	def index
		render :index
	end

	def create
		user = User.find_by(name: params[:name])
		if user && user.authenticate(params[:password])
			session[:user_id] = user.id
			redirect_to "/users/#{user.id}"
		else
			@error = true
			render :index
		end
	end

	def signup
		render :signup
	end

	def destroy
		reset_session
		redirect_to '/'
	end
end