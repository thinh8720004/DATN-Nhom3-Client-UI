import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Line } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faShoppingCart, faUsers, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.3, // Smoother line
      },
    ],
  };

  return (
    <main className="col-md-9 ml-sm-auto col-lg-10 px-4">
      <h2 className="mt-4 mb-4">Dashboard</h2>

      {/* Thống kê tổng quan */}
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card text-white bg-primary mb-3 shadow-sm">
            <div className="card-header d-flex align-items-center">
              <FontAwesomeIcon icon={faDollarSign} className="me-2" />
              Total Sales
            </div>
            <div className="card-body">
              <h5 className="card-title">$5,000</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-success mb-3 shadow-sm">
            <div className="card-header d-flex align-items-center">
              <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
              Total Orders
            </div>
            <div className="card-body">
              <h5 className="card-title">150</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-warning mb-3 shadow-sm">
            <div className="card-header d-flex align-items-center">
              <FontAwesomeIcon icon={faUsers} className="me-2" />
              Total Customers
            </div>
            <div className="card-body">
              <h5 className="card-title">300</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-danger mb-3 shadow-sm">
            <div className="card-header d-flex align-items-center">
              <FontAwesomeIcon icon={faCommentDots} className="me-2" />
              Total Comments
            </div>
            <div className="card-body">
              <h5 className="card-title">50</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Biểu đồ */}
      <h3>Sales Over Time</h3>
      <div className="chart-container p-3 bg-white rounded shadow-sm mb-4">
        <Line data={data} />
      </div>

      {/* Bảng dữ liệu */}
      <div className="table-responsive">
        <table className="table table-striped table-hover table-sm">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Header 1</th>
              <th>Header 2</th>
              <th>Header 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Item 1</td>
              <td>Item 2</td>
              <td>Item 3</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Item 1</td>
              <td>Item 2</td>
              <td>Item 3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Dashboard;
