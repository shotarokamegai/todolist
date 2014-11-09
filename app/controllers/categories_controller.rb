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
		categories = Category.all
		respond_with categories
	end

	def create
		category = Category.create(name: params[:name])
		respond_with category
	end

	def destroy
		category = Category.find(params[:id])
		category.destroy
		respond_with category
	end

	def update
		category = Item.find(params[:id])
		category.update(name: params[:name])
		respond_with category
	end

	private

	# def item_params
	# 	params.require(:item).permit(:name, :description, :date, :quantity)
	# end

end