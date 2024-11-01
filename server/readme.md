route name          --->   add-product      
parameter name      --->   title, description, customdesc, price, 
                       categoryid, image,mainImage,is_active,brand,discount_price,
                       status,shipping_cost,tags

required parameter  ---> title, description, price, categoryid, shipping_cost, quantity


parameter data type  ---> status-->enum(available', 'out of stock', 'discontinued'),
                          categoryid -- int
                          is_active  -- boolean 
                          price      --  int
                          discount_price --int
                          all other  -- string 
                          image    -- array of images 
                          more_img  -- single image 


                          