// components/Charts/InstrumentChart.tsx

import React, { useState } from 'react';
import { ChartCanvas, Chart } from 'react-stockcharts';
import { CandlestickSeries, LineSeries } from 'react-stockcharts/lib/series';
import { XAxis, YAxis } from 'react-stockcharts/lib/axes';
import { fitWidth } from 'react-stockcharts/lib/helper';
import { timeParse } from 'd3-time-format';
import { scaleTime } from 'd3-scale';
import { format } from 'd3-format';
import { timeIntervalBarWidth } from 'react-stockcharts/lib/utils';
import { OHLCTooltip } from 'react-stockcharts/lib/tooltip';
import { CrossHairCursor, MouseCoordinateX, MouseCoordinateY } from 'react-stockcharts/lib/coordinates';
import { last } from 'react-stockcharts/lib/utils';
import { MovingAverageTooltip } from 'react-stockcharts/lib/tooltip';
import { ema, sma } from 'react-stockcharts/lib/indicator';

interface InstrumentChartProps {
  data: { date: string; open: number; high: number; low: number; close: number; volume: number }[];
}

const InstrumentChart: React.FC<InstrumentChartProps> = ({ data }) => {
  const parseDate = timeParse('%Y-%m-%d');
  const chartData = data.map((d) => ({
    date: parseDate(d.date),
    open: d.open,
    high: d.high,
    low: d.low,
    close: d.close,
    volume: d.volume,
  }));

  const xAccessor = (d) => d.date;
  const xExtents = [xAccessor(last(chartData)), xAccessor(chartData[chartData.length - 100])];

  const [showCandlestick, setShowCandlestick] = useState(true);

  const ema26 = ema()
    .options({ windowSize: 26 })
    .merge((d, c) => {
      d.ema26 = c;
    })
    .accessor((d) => d.ema26);

  const ema12 = ema()
    .options({ windowSize: 12 })
    .merge((d, c) => {
      d.ema12 = c;
    })
    .accessor((d) => d.ema12);

  const smaVolume50 = sma()
    .options({ windowSize: 50, sourcePath: 'volume' })
    .merge((d, c) => {
      d.smaVolume50 = c;
    })
    .accessor((d) => d.smaVolume50)
    .stroke('#4682B4')
    .fill((d) => (d.close > d.open ? '#6BA583' : '#FF0000'));

  return (
    <div>
      <button onClick={() => setShowCandlestick(!showCandlestick)}>
        {showCandlestick ? 'Show Line' : 'Show Candlestick'}
      </button>
      <ChartCanvas
        height={400}
        ratio={3}
        width={800}
        margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
        type="svg"
        seriesName="MSFT"
        data={chartData}
        xAccessor={xAccessor}
        xScale={scaleTime()}
        xExtents={xExtents}
      >
        <Chart id={1} yExtents={(d) => [d.high, d.low]}>
          <XAxis axisAt="bottom" orient="bottom" />
          <YAxis axisAt="left" orient="left" ticks={5} />
          <MouseCoordinateY at="left" orient="left" displayFormat={format('.2f')} />
          <MouseCoordinateX at="bottom" orient="bottom" displayFormat={timeFormat('%Y-%m-%d')} />

          {showCandlestick ? (
            <CandlestickSeries width={timeIntervalBarWidth(timeDay)} />
          ) : (
            <LineSeries yAccessor={(d) => d.close} />
          )}

          <OHLCTooltip origin={[-40, 0]} />
          <MovingAverageTooltip
            onClick={(e) => console.log(e)}
            origin={[-38, 15]}
            options={[
              {
                yAccessor: ema26.accessor(),
                type: 'EMA',
                stroke: ema26.stroke(),
                windowSize: ema26.options().windowSize,
              },
              {
                yAccessor: ema12.accessor(),
                type: 'EMA',
                stroke: ema12.stroke(),
                windowSize: ema12.options().windowSize,
              },
              {
                yAccessor: smaVolume50.accessor(),
                type: 'SMA',
                stroke: smaVolume50.stroke(),
                windowSize: smaVolume50.options().windowSize,
              },
            ]}
          />
        </Chart>
        <Chart id={2} yExtents={(d) => d.volume} height={100} origin={(w, h) => [0, h - 100]}>
          <YAxis axisAt="left" orient="left" ticks={5} tickFormat={format('.2s')} />
          <MouseCoordinateY at="left" ori
