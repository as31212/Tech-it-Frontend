# Tech E-commerce Store - To-Do List

## 1. Finish the Hook that Retrieves Product Data
- [x] Create a custom hook for fetching product data.
- [x] **Part 1:** Establish a Redux state to hold `productData`.
  - [x] Create a new slice for `productData`.
  - [x] Add necessary actions and reducer functions to update `productData`.
- [x] **Part 2:** Define an interface for the `Product` type.
  - [x] Ensure all required properties like `name`, `price`, `description`, `mainImage`, etc., are included.
- [x] **Part 3:** Update the Redux store interface.
  - [x] Add `productData` to the global Redux store interface to ensure type safety.

## 2. Create the Product Page and Map Out the Retrieved Product Data
- [x] Build the Product Page component.
  - [x] Use the hook to fetch `productData` from Redux state.
- [x] Map out the `productData` to display individual products.
  - [x] Ensure each product includes relevant information such as name, image, and price.
  - [x] Add navigation or links to each product’s exclusive detail page.

## 3. Add Wishlist and Cart Addition Feature
- [x] Create the wishlist and cart options for each product.
  - [ ] Use the user Redux state to conditionally render the wishlist and cart options.
- [ ] Ensure adding to wishlist and cart updates the user's state in the Redux store. 

## 4. Start Exploring Route Parameters
  - [x] Product details page.

## 5. Create a Profile Navigation Link
- [x] Create a profile nav link that turns into a dropdown when hovered.
  - [x] Dropdown should display options like logout and settings.

## 6. Create a pagination system in the frontend
- [x]
## 7. Create a filtering system in the products page
-[x] filter based on category
-[x] filter based on price

## 8. Create a cart sidebar/modal that appears when a user adds an item to their cart
- [x] it should have an option to continue shopping or go to cart
- [x] make sure that you must interact with the modal to continue any functions
- [x] gray the rest of the screen

## 9. finish the delete cart item hook and then add the logic to cart card component, remember this requires a delete request 
- [x]

## 10. Take some designs from here.io to complete the about section
- [x]

## 11. Handle jwt session experation 
- [x] create the redux state to express session activity
- [] create a component modal that will notify the user of expiration or if expiration is about to occur 

## 12. make the app responsive
- [x] cart page
- [x] settings
- [x] login / sign-in
- [x] profile
- [x] home 
  -[] / ensure that the animation only occurs when slide button is pressed and when the page mounts
- [] products
- [] product detials
- [] about us / make container for dots larger to muitiagte absolute positioning hieght issues
- [x] fix bug that occurs between 849px width to 768px width
- [] fix mobile bug where profile nav button is unable to be hovered

## 13. remove the local cart or implement a local cart for users who are not logged in

