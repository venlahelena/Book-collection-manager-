import { useState } from 'react'

const AddNew = ({ onNew }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {

    if(!title || !author || !description)
    {
      alert('All fields must be filled');
      return;
    }
    
    onNew({title, author, description});
    setTitle('');
    setAuthor('');
    setDescription('');

    alert('New book has been added');
  }

  return (
    <>
    <form className="addnew-form" onSubmit={onSubmit}>
      <h2 className="h2">Add a new Book</h2>
      <div className="addnew-form-container">
        <label className="add-label">Title</label>
        <input className="form-input" type="text" placeholder="Add Title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
      </div>
      <div className="addnew-form-container">
        <label className="add-label">Author</label>
        <input className="form-input" type="text" placeholder="Add Author" value={author} onChange={(e) => setAuthor(e.target.value)}></input>
      </div>
      <div className="addnew-form-container">
        <label className="add-label">Description</label>
        <input className="form-input" type="text" placeholder="Add Description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
      </div>
      <input className="btn-addnew" type="Submit" value="Save new" onSubmit={onSubmit}></input>
    </form>
    <div className='addnew-line'>
      <hr></hr>
    </div>
    </>
  )
}

export default AddNew