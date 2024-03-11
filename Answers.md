
# DB-Assignment

<h2>1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.</h2>
<h4>The relationship between "Product" and "Product_Category" in the diagram is a "one-to-many relationship" where each product belongs to a product category , but a product category can have multiple products associated with it . This relationship allows for categorizing products  under specific categories ,allowing products to be organized and distributed efficiently within the database  </h4></br>



<h2>2. How could you ensure that each product in the "Product" table has a valid category assigned to it?</h2>
<h4>To ensure that each product in the "Product" table has a valid category assigned to it, we can enforce referential integrity through the use of a foreign key constraint. In the "Product" table, the category_id field should be set as a foreign key referencing the primary key of the "Product_Category" table (id field). This ensures that every value in the category_id column of the "Product" table corresponds to an existing id value in the "Product_Category" table ,means each product in the "Product" table has a valid category assigned to it.

Below is the query that ensures that each product in the "Product" table has a valid category assigned to it

ALTER TABLE Product
ADD CONSTRAINT fk_prod_categ
FOREIGN KEY (category_id)
REFERENCES Product_Category(id);

fk_prod_categ: Name of the foreign key constraint. 

FOREIGN KEY (category_id): It specifies that the category_id column in the "Product" table is a foreign key.

REFERENCES Product_Category(id) : It specifies that the foreign key references the id column in the "Product_Category" table.
</h4></br>



