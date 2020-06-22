import { Component, OnInit } from '@angular/core';
import { ColorService, DatasetOptions, Timespan } from '@helgoland/core';
import { AdditionalData, D3PlotOptions } from '@helgoland/d3';

@Component({
  selector: 'app-additional-data-graph',
  templateUrl: './additional-data-graph.component.html',
  styleUrls: ['./additional-data-graph.component.scss']
})
export class AdditionalDataGraphComponent implements OnInit {

  public datasetIds = [
    'https://www.fluggs.de/sos2/api/v1/__37',
    'https://www.fluggs.de/sos2/api/v1/__355',
    'https://www.fluggs.de/sos2/api/v1/__601'];

  additionalData: AdditionalData[] = [];
  timespan: Timespan;

  public graphOptions: D3PlotOptions = {
    yaxis: true
  };

  public datasetOptions: Map<string, DatasetOptions> = new Map();

  public selectedIds: string[] = [];

  public graphLoading: boolean;

  public interval: NodeJS.Timer;



  constructor(
    private color: ColorService//,
    //   private dialog: MatDialog
  ) {

    const o1 = new DatasetOptions('https://www.fluggs.de/sos2/api/v1/__37', this.color.getColor());
    o1.lineDashArray = 0;
    o1.lineWidth = 2;
    o1.pointBorderColor = '#000000';
    o1.pointBorderWidth = 0;
    o1.pointRadius = 0;
    o1.type = 'line';
    o1.visible = true;
    o1.autoRangeSelection = true;
    o1.generalize = false;
    o1.separateYAxis = false;
    o1.yAxisRange = { min: 0, max: 50 };

    const o2 = new DatasetOptions('https://www.fluggs.de/sos2/api/v1/__355', this.color.getColor());
    o2.lineDashArray = 5;
    o2.lineWidth = 2;
    o2.pointBorderColor = '#0000FF';
    o2.pointBorderWidth = 0;
    o2.pointRadius = 0;
    o2.type = 'line';
    o2.visible = true;
    o2.autoRangeSelection = true;
    o2.generalize = false;
    o2.separateYAxis = false;
    o2.yAxisRange = { min: 0, max: 50 };

    const o3 = new DatasetOptions('https://www.fluggs.de/sos2/api/v1/__601', this.color.getColor());
    o3.lineDashArray = 5;
    o3.lineWidth = 2;
    o3.pointBorderColor = '#FF00FF';
    o3.pointBorderWidth = 0;
    o3.pointRadius = 0;
    o3.type = 'line';
    o3.visible = true;
    o3.autoRangeSelection = true;
    o3.generalize = false;
    o3.separateYAxis = false;
    o3.yAxisRange = { min: 0, max: 50 };

    this.datasetOptions.set('https://www.fluggs.de/sos2/api/v1/__37', o1);
    this.datasetOptions.set('https://www.fluggs.de/sos2/api/v1/__355', o2);
    this.datasetOptions.set('https://www.fluggs.de/sos2/api/v1/__601', o2);

    this.setNewTimespan();
  }

  private setNewTimespan() {
    const end = new Date().getTime();
    const diff = 365 * 24 * 60 * 60 * 1000;
    this.timespan = new Timespan(end - diff, end);
  }

  public timespanChanged(timespan: Timespan) {
    this.timespan = timespan;
  }

  public setSelected(selectedIds: string[]) {
    this.selectedIds = selectedIds;
  }

  public deleteTimeseries(id: string) {
    const idx = this.datasetIds.findIndex((entry) => entry === id);
    this.datasetIds.splice(idx, 1);
    this.datasetOptions.delete(id);
  }

  public onGraphLoading(loading: boolean) {
    this.graphLoading = loading;
  }

  /*public editOption(option: DatasetOptions) {
    this.dialog.open(StyleModificationComponent, {
      data: option
    });
  }*/

  public selectTimeseries(selected: boolean, id: string) {
    if (selected) {
      if (this.selectedIds.indexOf(id) < 0) {
        this.selectedIds.push(id);
      }
    } else {
      if (this.selectedIds.indexOf(id) >= 0) {
        this.selectedIds.splice(this.selectedIds.findIndex((entry) => entry === id), 1);
      }
    }
  }

  public removeEntry(idx: number) {
    this.additionalData[0].data.splice(idx, 1);
    this.timespan = new Timespan(this.timespan.from, this.timespan.to);
  }

  public ngOnInit() { }

}


