// components/Charts/InstrumentChart.tsx

import React from 'react';
import {
  ChartCanvas,
  Chart,
  series,
  axes,
  scale,
  tooltip,
  indicator,
  helper
} from 'react-financial-charts';
import { timeParse } from 'd3-time-format';
import { last } from 'react-financial-charts/lib/utils';

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

  const { CandlestickSeries } = series;
  const { XAxis, YAxis } = axes;
  const { CrossHairCursor, MouseCoordinateX, MouseCoordinateY } = coordinates;
  const { OHLCTooltip, MovingAverageTooltip } = tooltip;
  const { ema, sma } = indicator;
  const { fitWidth } = helper;

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
    <ChartCanvas
      height={400}
      ratio={3}
      width={800}
      margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
      type="svg"
      seriesName="MSFT"
      data={chartData}
      xAccessor={xAccessor}
      xScale={scale.scaleTime()}
      xExtents={xExtents}
    >
      <Chart id={1} yExtents={(d) => [d.high, d.low]}>
        <XAxis axisAt="bottom" orient="bottom" />
        <YAxis axisAt="left" orient="left" ticks={5} />
        <MouseCoordinateY at="left" orient="left" displayFormat={d3.format('.2f')} />
        <MouseCoordinateX at="bottom" orient="bottom" displayFormat={timeFormat('%Y-%m-%d')} />
        <CandlestickSeries />
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
        <YAxis axisAt="left" orient="left" ticks={5} tickFormat={d3.format('.2s')} />
        <MouseCoordinateY at="left" orient="left" displayFormat={d3.format('.4s')} />
      </Chart>
      <CrossHairCursor />
    </ChartCanvas>
  );
};

export default fitWidth(InstrumentChart);
