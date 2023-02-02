import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products : [],
    filter : {isFiltered: false,
                filteredItems: []
               } 
  },
  reducers: {
    setProducts (state, action) {
      let data = action.payload;
      let productList = [];
      for (let key in data) {
        productList.push({
          id    : data[key].id,
          title : data[key].title,
          price: data[key].price,
          description: data[key].description,
          category   : data[key].category,
          image : data[key].image,
          rating: data[key].rating,    // rating is an object 
        });
      }
      state.products = productList;
      
    },

    filterProducts (state, action) {
      const filteredData = state.products.filter(product => product.category === action.payload);
      if(action.payload === 'none') {
        state.filter = {
          isFiltered   : false,
          filteredItems : []
        }
        return;
      }
      state.filter = {
        isFiltered   : true,
        filteredItems : filteredData
      };
    },

    searchProduct (state, action) {
      const searchText = `${action.payload}`;
      const filteredData = state.products.filter(product => product.title.includes(searchText));
      if(filteredData.length === 0){
        alert('No items found');
        return;
      }
      state.filter = {
        isFiltered   : true,
        filteredItems : filteredData
      };
    }
    ,

    clearFilters (state, action) {
      state.filter = {
        isFiltered: false,
        filteredData: []
      }
    }
}
});

export const productActions = productSlice.actions;

export default productSlice;
