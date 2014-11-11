class CategoriesController < ApplicationController

#   Prefix Verb   URI Pattern             Controller#Action
#     root GET    /                       items#serve_html
# items GET    /items(.:format)     items#index
#          POST   /items(.:format)     items#create
#  item GET    /items/:id(.:format) items#show
#          PATCH  /items/:id(.:format) items#update
#          PUT    /items/:id(.:format) items#update
#          DELETE /items/:id(.:format) items#destroy

	respond_to :json

	def index
		user = User.find(session[:user_id])
		categories = user.categories
		respond_with categories
	end

	def create
		user = User.find(session[:user_id])
		category = Category.create(name: params[:name], user_id: session[:user_id])
		categories = user.categories
		respond_to do |format|
			format.json { render :json => categories }
		end
	end

	def destroy
		category = Category.find(params[:id])
		category.destroy
		respond_with category
	end

	# def update
	# 	category = Item.find(params[:id])
	# 	category.update(name: params[:name])
	# 	respond_with category
	# end

	def get
		items = Item.where(category_id: params[:category_id])
		respond_to do |format|
			format.json { render :json => items }
		end
	end

	# def id
	# 	item = Item.find_by(name: params[:name])
	# 	item_id = item.id
	# 	respond_to do |format|
	# 		format.json { render :json => item_id }
	# 	end
	# end

	private

	# def item_params
	# 	params.require(:item).permit(:name, :description, :date, :quantity)
	# end

end