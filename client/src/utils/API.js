import axios from "axios";
const apiKey = "AIzaSyB_1xEW-SARUv801bA0uiiozdtcbLcXf54";

export default {
   getGoogleBooks: function(book) {
       return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}`);
     },

     saveBook: function(book) {
       return axios.post("/api/books", book)
     },

     deleteBook: function(id) {
      return axios.delete("/api/books/"+id)
    },

    getBooks: function() {
      return axios.get("/api/books")
    },
}