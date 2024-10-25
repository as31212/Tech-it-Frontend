# Tech E-commerce Store - To-Do List

## 1. Finish the Hook that Retrieves Product Data
- [ ] Create a custom hook for fetching product data.
- [ ] **Part 1:** Establish a Redux state to hold `productData`.
  - [ ] Create a new slice for `productData`.
  - [ ] Add necessary actions and reducer functions to update `productData`.
- [ ] **Part 2:** Define an interface for the `Product` type.
  - [ ] Ensure all required properties like `name`, `price`, `description`, `mainImage`, etc., are included.
- [ ] **Part 3:** Update the Redux store interface.
  - [ ] Add `productData` to the global Redux store interface to ensure type safety.

## 2. Create the Product Page and Map Out the Retrieved Product Data
- [ ] Build the Product Page component.
  - [ ] Use the hook to fetch `productData` from Redux state.
- [ ] Map out the `productData` to display individual products.
  - [ ] Ensure each product includes relevant information such as name, image, and price.
  - [ ] Add navigation or links to each product’s exclusive detail page.


