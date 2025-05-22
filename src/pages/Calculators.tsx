import React, { useState, useEffect } from 'react'; // Import useEffect
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../components/ui/chart';
import type { ChartConfig } from '../components/ui/chart';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, Legend } from 'recharts';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog'; // Import Dialog components

interface YearlyData {
  year: number;
  invested: number;
  marketValue: number;
}

interface PieData {
  name: string;
  value: number;
  color: string;
}

const Calculators: React.FC = () => {
  const [monthlyDeposit, setMonthlyDeposit] = useState<number>(1000);
  const [years, setYears] = useState<number>(10);
  const [annualReturnRate, setAnnualReturnRate] = useState<number>(12);
  const [annualInflationRate, setAnnualInflationRate] = useState<number>(6);

  const [nominalFutureValue, setNominalFutureValue] = useState<number | null>(null);
  const [realFutureValue, setRealFutureValue] = useState<number | null>(null);
  const [yearlyData, setYearlyData] = useState<YearlyData[]>([]);
  const [pieData, setPieData] = useState<PieData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const calculateSIP = () => {
    const p = monthlyDeposit;
    const annualReturnDecimal = annualReturnRate / 100;
    const monthlyReturnRate = annualReturnDecimal / 12;
    const totalMonths = years * 12;
    const annualInflationDecimal = annualInflationRate / 100;

    const calculatedYearlyData: YearlyData[] = [];
    let totalInvested = 0;
    let currentMarketValue = 0;

    for (let i = 1; i <= years; i++) {
      totalInvested = monthlyDeposit * 12 * i;

      const numberOfMonths = i * 12;
      currentMarketValue = p * ((Math.pow(1 + monthlyReturnRate, numberOfMonths) - 1) / monthlyReturnRate);

      calculatedYearlyData.push({
        year: i,
        invested: totalInvested,
        marketValue: currentMarketValue,
      });
    }

    const finalNominalFV = currentMarketValue;
    const finalRealFV = finalNominalFV / Math.pow(1 + annualInflationDecimal, years);
    const totalInvestmentOverPeriod = monthlyDeposit * totalMonths;
    const totalEarnings = finalNominalFV - totalInvestmentOverPeriod;

    setNominalFutureValue(finalNominalFV);
    setRealFutureValue(finalRealFV);
    setYearlyData(calculatedYearlyData);
    setPieData([
      { name: 'Total Invested', value: totalInvestmentOverPeriod, color: '#8884d8' },
      { name: 'Total Earnings', value: totalEarnings, color: '#82ca9d' },
    ]);
  };

  // Call calculateSIP on component mount to display initial results
  useEffect(() => {
    calculateSIP();
  }, []); // Empty dependency array ensures this runs only once on mount

  // Chart configuration for the Area Chart
  const areaChartConfig = {
    invested: {
      label: 'Total Invested',
      color: 'hsl(var(--chart-1))',
    },
    marketValue: {
      label: 'Market Value',
      color: 'hsl(var(--chart-2))',
    },
  } satisfies ChartConfig;

  // Chart configuration for the Pie Chart (colors are defined in pieData)
  const pieChartConfig = {
     totalInvested: {
      label: 'Total Invested',
      color: 'hsl(var(--chart-1))',
    },
    totalEarnings: {
      label: 'Total Earnings',
      color: 'hsl(var(--chart-2))',
    },
  } satisfies ChartConfig;

  const handleSaveAsPdf = () => {
    // TODO: Implement PDF generation logic here
    // You will likely need a library like html2pdf.js or jspdf
    // Install it using npm or yarn: npm install html2pdf.js or yarn add html2pdf.js
    console.log("Save as PDF button clicked. PDF generation logic needs to be implemented.");
    alert("PDF generation logic is not yet implemented.");
  };


  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Financial Calculators</h2>

      {/* SIP Calculator Modal Trigger */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => setIsModalOpen(true)}>Open SIP Calculator</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[800px] h-[90vh] overflow-y-auto"> {/* Adjust max-width and height for larger modal */}
          <DialogHeader>
            <DialogTitle>SIP Calculator</DialogTitle>
            <DialogDescription>
              Calculate the potential future value of your Systematic Investment Plan.
            </DialogDescription>
          </DialogHeader>
          
          {/* SIP Calculator Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="monthlyDeposit">Monthly Deposit</Label>
              <Input
                id="monthlyDeposit"
                type="number"
                value={monthlyDeposit}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMonthlyDeposit(parseFloat(e.target.value))}
                min="0"
              />
            </div>
            <div>
              <Label htmlFor="years">Investment Period (Years)</Label>
              <Input
                id="years"
                type="number"
                value={years}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setYears(parseFloat(e.target.value))}
                min="1"
              />
            </div>
            <div>
              <Label htmlFor="annualReturnRate">Expected Annual Return (%)</Label>
              <Input
                id="annualReturnRate"
                type="number"
                value={annualReturnRate}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAnnualReturnRate(parseFloat(e.target.value))}
                min="0"
              />
            </div>
            <div>
              <Label htmlFor="annualInflationRate">Annual Inflation Rate (%)</Label>
              <Input
                id="annualInflationRate"
                type="number"
                value={annualInflationRate}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAnnualInflationRate(parseFloat(e.target.value))}
                min="0"
              />
            </div>
          </div>
          <Button onClick={calculateSIP} className="mt-6">
            Calculate
          </Button>

          {nominalFutureValue !== null && realFutureValue !== null && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Results</h3>
              <p>Nominal Future Value: ₹{nominalFutureValue.toFixed(2)}</p>
              <p>Real Future Value (Inflation Adjusted): ₹{realFutureValue.toFixed(2)}</p>

              {/* Charts */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-2">Visualization</h4>

                {/* Yearly Growth Chart */}
                {yearlyData.length > 0 && (
                  <Card className="mt-4">
                    <CardHeader>
                      <CardTitle>Yearly Investment Growth</CardTitle>
                      <CardDescription>Total Invested vs. Market Value Over Time</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ChartContainer config={areaChartConfig}>
                        <AreaChart
                          accessibilityLayer
                          data={yearlyData}
                          margin={{
                            left: 12,
                            right: 12,
                          }}
                        >
                          <CartesianGrid vertical={false} />
                          <XAxis
                            dataKey="year"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => `Year ${value}`}
                          />
                           <YAxis
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => `₹${value.toFixed(0)}`}
                          />
                          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                          <Area
                            dataKey="invested"
                            type="natural"
                            fill="var(--color-invested)"
                            fillOpacity={0.4}
                            stroke="var(--color-invested)"
                            stackId="a"
                          />
                           <Area
                            dataKey="marketValue"
                            type="natural"
                            fill="var(--color-marketValue)"
                            fillOpacity={0.4}
                            stroke="var(--color-marketValue)"
                            stackId="a"
                          />
                        </AreaChart>
                      </ChartContainer>
                    </CardContent>
                  </Card>
                )}

                {/* Investment Breakdown Pie Chart */}
                {pieData.length > 0 && (
                   <Card className="mt-4">
                    <CardHeader>
                      <CardTitle>Investment Breakdown</CardTitle>
                      <CardDescription>Total Invested vs. Total Earnings</CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                       <ChartContainer config={pieChartConfig} className="aspect-square h-[250px]">
                          <PieChart>
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Pie
                              data={pieData}
                              dataKey="value"
                              nameKey="name"
                              innerRadius={60}
                              outerRadius={80}
                              strokeWidth={5}
                            >
                              {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                            <Legend />
                          </PieChart>
                       </ChartContainer>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          )}

          {/* Save as PDF Button */}
          {nominalFutureValue !== null && realFutureValue !== null && (
             <Button onClick={handleSaveAsPdf} className="mt-6">
               Save as PDF
             </Button>
          )}

        </DialogContent>
      </Dialog>


      {/* Add other calculators here */}
    </div>
  );
};

export default Calculators;