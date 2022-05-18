import "./App.css";
import { Fragment, useEffect, useState } from "react";
import { getCategories } from "./api.service";

function App() {
  const [filter, setFilter] = useState("");
  const [categories, setCategories] = useState([]);
  const [allCategories, setAllCategories] = useState([]);

  const loadData = async () => {
    const response = await getCategories();
    const { categories } = response.data;
    setAllCategories(categories);
    setCategories(categories);
  };

  useEffect(() => {
    loadData();
  }, []);

  const onChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    const filterCategories = allCategories.filter(
      (item) => item.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
    setCategories(filterCategories);
  };

  return (
    <div className="App">
      <input
        className="search-input"
        placeholder="Search categories.."
        value={filter}
        onChange={onChange}
      />
      {categories.length > 0 ? (
        <table className="category-table">
          <thead>
            <tr>
              <th>Categories</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((value, index) => {
              return (
                <tr key={`category-${index}`}>
                  <td>{value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div>Category not found.</div>
      )}
    </div>
  );
}

export default App;
