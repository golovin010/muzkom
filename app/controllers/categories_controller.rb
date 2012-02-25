class CategoriesController < ShopController

  before_filter :latest_products

  def show
    @order_by = order_by
    @subcategory = Subcategory.find params[:id]
    if order_by == "price"
      @products = Product.by_subcategory(@subcategory).order_by_price.page(params[:page])
    else
      @products = Product.by_subcategory(@subcategory).order(:"#{@order_by}").page(params[:page])
    end
    @current_category = @subcategory
    @brands = Product.by_subcategory(@subcategory).includes(:brand).collect{|product| product.brand}.uniq
    @brands.sort!{|a, b| a.name.downcase <=> b.name.downcase} 
  end
  
end
