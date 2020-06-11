Flow:
The order will be placed on checkout. As soon as the user check’s out from cart the system will check for the availability of desired quantity of products. If yes, then the system will lock the products for certain amount of time. If the payment is successful. The order api will be called and the order will be placed. Here there was a possibility of race condition if the products were not locked after checking out, as 2or more people might have ordered the last product remaining, so this prevents it.


Code:
I have coded the flow for creating account
I have coded the flow to add product and inventory of the product
I have also coded the flow for placing order which will check for items availability and have commented the part which I have not coded.
Created the schemas for all the three tables using mongoose

ToDo:
1. handling the authentication
2. having the inventory count in a cache for fast retrieval and immediate update on that
3. payment method implementation
4. vendor service, so he can manage his own inventory
5. checks like if delivery in the user area is present or not
6. Feedback system
7. Updates or notification system to update the user about the product delivery or current status
8. live tracker of delivery


why I chose mongoDB over SQL database?
1. Dynamic schema which can help store different types of products in the same table
2. Saving different types of dataStructure in the same document, which helps the retrieval faster
3. Fetching on one key is faster than joins
4. Highly horizontally scalable with ease, works well when inventory goes above 100000

Cons Of using MongoDb:
1. foreign key check has to be made explicit
2. Can’t use joins, but I have added all necessary details in the specified collections itself to handle this. Moreover, fetching some details on the indexed key is fairly quick in mongo. Just need to handle a couple of more scenarios, like checking the product ids and all in the code itself.


