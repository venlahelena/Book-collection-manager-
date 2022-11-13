# Book-collection-manager

A single-page web application that manages a collection of books. The application consists of a React frontend and REST API backend.

# Application functions as follows:

1. Displays a list of the titles and authors of all books that are currently saved in the database.

2. By clicking the 'Details' text you can open a new section. In this section, you can see the description of all books as well as a form to update books on the list. 

3. At the top of the page there is another form where users can add new books to the book list by typing the title, author, and description of the book. All fields must be filled in order for the book to be saved to the list after clicking the button 'save new'.

4. There is also a delete button that can be used to delete a selected book from the collection.


# How to install and run the project:

1. Git clone the GitHub root repository.

2. Go to the frontend folder and npm install the required dependencies for the frontend application

4. Go to the backend folder  and npm install dependencies for the backend application

5. In backend folder change .env.example file as .env file

4. Inside .env file change the 'Your mongo db uri' string to match your mongo database connection.

6. npm start in the backend folder for applicationtion to start.

