import React, { useEffect, useState } from 'react'
import { Bar } from "react-chartjs-2"
import {Chart as ChartJs, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from "chart.js"
import DUMMY_DATA from "../../DUMMY_DATA"

import styles from "./Chart.module.css"

ChartJs.register (
  CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
)
const Chart = (props) => {

  const [chartData, setChartData] = useState({
    labels: DUMMY_DATA.map((data) => data.title),
      datasets: [
        {
          label: "학습 성취도",
          data: DUMMY_DATA.map((data) => data.amount),
          backgroundColor: "red",
        }
      ]
  })
  const [chartOptions, setChartOptions] = useState({
    responsive: true,
    plugins: {
      legend: {position: "top", labels: {font: {size: 24}}}
    },
    title: {
      display: true,
      text: "messi"
    },
    scales: {
      x: {
        ticks: {
          color: "#fff",
          font: {
            size: 20
          }
        }
      },
      y: {
        ticks: {
          color: "#fff",
          font: {
            size: 20
          }
        }
      }
    }
  })
  // useEffect(() => {
  //   setChartData({
  //     labels: DUMMY_DATA.map((data) => data.end),
  //     datasets: [
  //       {
  //         label: "학습 성취도",
  //         data: DUMMY_DATA.map((data) => data.amount)
  //       }
  //     ]
  //   })
  //   setChartOptions({
  //     responsive: true,
  //     plugins: {
  //       legend: {position: "top"}
  //     },
  //     title: {
  //       display: true,
  //       text: "messi"
  //     }
  //   })
  // })

  return (
    <div className={styles.chart}>
      <Bar data={chartData} options={chartOptions}></Bar>
    </div>
  ) 
}

export default Chart