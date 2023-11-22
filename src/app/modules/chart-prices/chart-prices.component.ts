import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-chart-prices',
  templateUrl: './chart-prices.component.html',
  styleUrls: ['./chart-prices.component.scss']
})
export class ChartPricesComponent {
  chartOptions: any = {};
  @Input() data: any;
  @Input() lang: string = 'en';
  isBrowser: boolean = false;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnChanges() {
    this.enableChart();
  }

  enableChart() {
    let seriesData = this.data.fuelTypes.map((item: any) => {
      // console.log(item, this.data.fuelTypesAR);

      const fullName = this.data.fuelTypesAR.find((itemAR: any) => itemAR.en === item);

      return {
        name: fullName?.[this.lang] || '',
        data: this.data.data.map((data: any) => {
          if (data.fuelType['en'] == item)
            return data.price
        }).filter((item: undefined) => item !== undefined),
        // color: '#009933'
      }
    });

    const options = {
      series: seriesData,
      chart: {
        height: 187,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      colors: ['#AC6611', '#338465', '#174E91'],
      grid: {
        borderColor: '#ECECEE',
        strokeDashArray: 3,
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        }
      },
      xaxis: {
        categories: this.data.months,
        labels: {
          style: {
            colors: '#77767A',
            // colors?: string | string[];
            fontSize: '12px',
            // fontSize?: string;
            // fontWeight?: string | number;
            fontFamily: 'Poppins-Light',
            // cssClass?: string;
          }
        }
      },
      yaxis: {
        show: false
      },
      tooltip: {
        x: {
          show: false
        },
        marker: {
          show: false
        },
        cssClass: 'text-[#009933]',
        style: {
          fontSize: '10px',
          fontFamily: 'Poppins-Light'
        }
      }
    };

    if (this.isBrowser) {
      const ApexCharts = require('apexcharts');
      setTimeout(() => {
        const chart = new ApexCharts(document.querySelector('#chart'), options);
        chart.render();
      });
    }


    // this.chartOptions = {
    //   series: seriesData,
    //   chart: {
    //     height: 187,
    //     type: 'line',
    //     zoom: {
    //       enabled: false
    //     }
    //   },
    //   colors: ['#AC6611', '#338465', '#174E91'],
    //   grid: {
    //     borderColor: '#ECECEE',
    //     strokeDashArray: 3,
    //     xaxis: {
    //       lines: {
    //         show: true
    //       }
    //     },
    //     yaxis: {
    //       lines: {
    //         show: false
    //       }
    //     }
    //   },
    //   xaxis: {
    //     categories: this.data.months,
    //     labels: {
    //       style: {
    //         colors: '#77767A',
    //         // colors?: string | string[];
    //         fontSize: '12px',
    //         // fontSize?: string;
    //         // fontWeight?: string | number;
    //         fontFamily: 'Poppins-Light',
    //         // cssClass?: string;
    //       }
    //     }
    //   },
    //   yaxis: {
    //     show: false
    //   },
    //   tooltip: {
    //     x: {
    //       show: false
    //     },
    //     marker: {
    //       show: false
    //     },
    //     cssClass: 'text-[#009933]',
    //     style: {
    //       fontSize: '10px',
    //       fontFamily: 'Poppins-Light'
    //     }
    //   }
    // };
  }

}
