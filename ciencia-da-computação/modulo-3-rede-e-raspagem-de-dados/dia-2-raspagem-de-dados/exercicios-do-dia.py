from parsel import Selector
import requests


response = requests.get("http://books.toscrape.com/catalogue/the-grand-design_405/index.html")
selector = Selector(response.text)

title = selector.css(".product_main > h1::text").get()
#content_inner > article > div.row > div.col-sm-6.product_main > h1

price = selector.css(".product_main > .price_color::text").re_first(r"\d*\.\d{2}")
#content_inner > article > div.row > div.col-sm-6.product_main > p.price_color
# otherPrice = selector.css("p::text").re_first(r"\d*\.\d{2}")

description = selector.css("#product_description ~ p::text").get()

image = "http://books.toscrape.com/catalogue/" + selector.css("#product_gallery img::attr(src)").get()

#product_gallery > div > div > div > img


print(title, price, description, image, sep=",")


# titles = selector.css(".product_pod h3 a::attr(title)").getall()
# prices = selector.css(".product_price .price_color::text").getall()

# for product in selector.css(".product_pod"):
#     title = product.css("h3 a::attr(title)").get()
#     price = product.css(".price_color::text").get()
#     print(title, price)