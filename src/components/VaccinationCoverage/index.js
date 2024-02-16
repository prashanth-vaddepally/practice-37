// Write your code here
import {
  XAxis,
  YAxis,
  Bar,
  ResponsiveContainer,
  Legend,
  BarChart,
} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {needData} = props
  const {VaccinationDate, dose1, dose2} = needData

  const dataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.tostring()
  }

  return (
    <ResponsiveContainer>
      <BarChart data={needData}>
        <XAxis
          dataKey={VaccinationDate}
          tick={{
            stroke: 'gray',
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={dataFormatter}
          tick={{
            stroke: 'gray',
            strokeWidth: 0,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar dataKey={dose1} fill="#5a8dee" barSize="20%" />
        <Bar dataKey={dose2} fill="#5a8dee" barSize="20%" />
      </BarChart>
    </ResponsiveContainer>
  )
}
export default VaccinationCoverage
