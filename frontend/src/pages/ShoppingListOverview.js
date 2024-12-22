import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ShoppingListOverview.css";
import axios from "axios";
import { useTranslation } from "react-i18next"; 

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const API_BASE_URL = "http://localhost:5000/api";

const ShoppingListOverview = () => {
  const { t } = useTranslation(); 
  const [shoppingLists, setShoppingLists] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/shoppingLists`);
        setShoppingLists(response.data);
      } catch (err) {
        setError(t("errorFetchingLists"));
      }
    };
    fetchLists();
  }, [t]);


  const labels = shoppingLists.map((list) => list.title);
  const itemCounts = shoppingLists.map((list) => list.items.length);

  const data = {
    labels,
    datasets: [
      {
        label: "Number of Items",
        data: itemCounts,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Overview of Shopping Lists with Item Counts",
      },
    },
  };


  return (
    <div className="shopping-list-overview">
      <h2>{t("shoppingLists")}</h2>
        <Bar data={data} options={options} />
      {error && <p className="error">{error}</p>}
      <div className="list-grid">
        {shoppingLists.map((list) => (
          <div className="list-tile" key={list._id}>
            <Link to={`/list/${list._id}`}>
              <h3>{list.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingListOverview;