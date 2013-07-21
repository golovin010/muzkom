# -*- encoding : utf-8 -*-
class CategoriesController < ShopController

  include ActionView::Helpers::NumberHelper
  include ApplicationHelper

  before_filter :latest_products

  def show
    @order_by = order_by
    @subcategory = Subcategory.visible.find params[:id]
    if order_by == "price"
      # @products = Product.by_subcategory(@subcategory).includes(:status).order_by_price.page(params[:page])
      @products = Product.by_subcategory(@subcategory).includes(:status).order_by_price
      @products = sort_price_withfix(@products)
      @products.sort_by!{|p| p.sale_price}
      @products = revert_price( @products )
      @products = Kaminari.paginate_array(@products).page(params[:page]).per(10)
      # @products.order_by_sale_price.page(params[:page])
      # @products.each { |p| puts p.price  }
      # sleep(10)
      # @products.each { |p| puts p.price  }
      # sleep(10)
      # @products = @products.page(params[:page]).order_by_sale_price
    else
      @products = Product.by_subcategory(@subcategory).includes(:status).order(:"#{@order_by}").page(params[:page])
    end

    @current_category = @subcategory
    @brands = Product.by_subcategory(@subcategory).includes(:brand).collect{|product| product.brand}.uniq
    @brands.sort!{|a, b| a.name.downcase <=> b.name.downcase}
    @banners_left = Placement.find(3).banners.order(:position)
    @banners_right = Placement.find(4).banners.order(:position)
  end

end
