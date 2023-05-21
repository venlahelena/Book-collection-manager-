import { useState } from 'react';
import 'tailwindcss/tailwind.css';

const AddNew = ({ onNew }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !description) {
      alert('All fields must be filled');
      return;
    }

    onNew({ title, author, description });
    setTitle('');
    setAuthor('');
    setDescription('');

    alert('New book has been added');
  };

  return (
    <>
      <form className="addnew-form" onSubmit={onSubmit}>
        <h2 className="text-2xl font-semibold">Add a new Book</h2>
        <div className="space-y-2 mb-4">
          <label className="font-bold">Title</label>
          <input
            className="form-input"
            type="text"
            placeholder="Add Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="space-y-2 mb-4">
          <label className="font-bold">Author</label>
          <input
            className="form-input"
            type="text"
            placeholder="Add Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="space-y-2 mb-4">
          <label className="font-bold">Description</label>
          <input
            className="form-input"
            type="text"
            placeholder="Add Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className="bg-darkslategray-500 text-white py-2 px-4 rounded-full mt-8" type="submit">
          Add new
        </button>
      </form>
      <hr className="my-8" />
    </>
  );
};

export default AddNew;