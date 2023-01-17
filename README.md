# [Digital Futures] Bob's Bagels

## Domain Model
|  Object  |  Properties  |  Message   | Context  | Output        | 
|----------|--------------|------------|----------|---------------|
| Basket   | items @Array | add(item)  | not full | @Array[@Item] |    
|  | capacity @Int |  | is full | @String "Sorry, basket is full" |  
|  |  |  | item already in basket | @String "Sorry, item already in basket" |      
|  |  | remove(item) | exists in basket | @Array[@Item] |     
|  |  |  | does not exist in basket | @String "Sorry, item not in basket" |       
|  |  | isFull() | it's full | @Boolean true |    
|  |  |  | not full | @Boolean false |       
| Item | ID @Int | | | |  
|  | price @Number | | | |  
| Checkout | basket @Basket | total() | with a basket | @Number | 
