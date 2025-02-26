import { BarChart } from '@mui/x-charts/BarChart';

function Payments() {
  return (
    <div className='flex flex-col pt-4 gap-8 mx-4'>
      <h1 className="text-3xl font-serif text-gray-600">Payments</h1>
      <p className='text-2xl font-sans ps-5'>Sales in the last 4 Months</p>
      <BarChart
        series={[
          { data: [35, 44, 24, 34] },
          { data: [51, 6, 49, 30] },
          { data: [15, 25, 30, 50] },
          { data: [60, 50, 15, 25] },
        ]}
        height={290}
        xAxis={[{ data: ['Jan', 'Feb', 'Mar', 'Apr'], scaleType: 'band' }]}
        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      />
    </div>
  )
}
export default Payments
