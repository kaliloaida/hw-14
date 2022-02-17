import "./Char.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  // сюда приходит массив со статистикой
  const dataPointsValues = props.dataPoints.map((data) => data.value);// мы его перебираем и возвращаем новый массив элементов
	// data.value
  //dataPointsValues = [20, 300, 0, 0, 0, 0]
  const totalMax = Math.max(...dataPointsValues);// здесь присваивается totalMax самый максимальный value
console.log(props.dataPoints)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => 
        <ChartBar // Эта компонента выводит те самые диaграммы статистики
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={totalMax}
        label={dataPoint.Label}
        />
    )}
    </div>
  );
};
export default Chart;
