class ItemsController < ApplicationController

#   Prefix Verb   URI Pattern             Controller#Action
#     root GET    /                       items#serve_html
# items GET    /items(.:format)     items#index
#          POST   /items(.:format)     items#create
#  item GET    /items/:id(.:format) items#show
#          PATCH  /items/:id(.:format) items#update
#          PUT    /items/:id(.:format) items#update
#          DELETE /items/:id(.:format) items#destroy

	respond_to :json

	def serve_html
		respond_to do |format|
			format.html{ render :index }
		end
	end

	def index
		items = Item.all
		respond_with items
	end

	def create
		category = Category.find_by(name: params[:category])
		if category == nil
			item = Item.create({name: params[:name], quantity: params[:quantity], date: params[:date], done: params[:status], category_id: nil })
		else
			item = Item.create({name: params[:name], quantity: params[:quantity], date: params[:date], done: params[:status], category_id: category.id })
		end
		respond_with item
	end

	def destroy
		item = Item.find(params[:id])
		item.destroy
		respond_with item
	end

	def update
		item = Item.find(params[:id])
		item.update(item_params)
		respond_with item
	end

	private

	def item_params
		params.require(:item).permit(:name, :done, :category_id, :date, :quantity)
	end

end