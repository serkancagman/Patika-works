import React from 'react'
import SearchForm from '../Components/SearchForm';
import AddForm from '../Components/AddForm';
import Content from '../Components/Content';
const Home = () => {
  return (
    <div className="container">
        <SearchForm />
        <AddForm />
      <div className="col-md-12">
          <Content/>
      </div>
    </div>

  )
}

export default Home