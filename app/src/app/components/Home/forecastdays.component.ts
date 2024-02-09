// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-forecastdays',
  templateUrl: './forecastdays.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class forecastdaysComponent implements OnChanges {
  @Input('forecastdata')
  public forecastdata: any = undefined;
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_As39VSvhp9YQkISa(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_As39VSvhp9YQkISa(bh) {
    try {
      bh = this.sd_ZJjKXnsC838lZHas(bh);
      //appendnew_next_sd_As39VSvhp9YQkISa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_As39VSvhp9YQkISa');
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.changes = changes;
      bh = this.sd_ZJjKXnsC838lZHas(bh);
      //appendnew_next_ngOnChanges
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ik8Mub4GkKqU0n51');
    }
  }

  //appendnew_flow_forecastdaysComponent_start

  sd_ZJjKXnsC838lZHas(bh) {
    try {
      this.page.forecastdata = bh.pageInput.forecastdata;
      this.page.list = undefined;
      bh = this.sd_4k44q82HWs9FJcDz(bh);
      //appendnew_next_sd_ZJjKXnsC838lZHas
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZJjKXnsC838lZHas');
    }
  }

  sd_4k44q82HWs9FJcDz(bh) {
    try {
      const page = this.page;
      page.list = page?.forecastdata?.list
        ? page?.forecastdata?.list?.slice(0, 20)
        : [];

      // const dayInAWeek = new Date().getDay();
      // const WEEK_DAYS = [
      //   "Sunday",
      //   "Monday",
      //   "Tuesday",
      //   "Wednesday",
      //   "Thursday",
      //   "Friday",
      //   "Saturday"
      // ];

      // // Rotate WEEK_DAYS array so that it starts with the current day
      // const forecastDays = WEEK_DAYS.slice(dayInAWeek).concat(WEEK_DAYS.slice(0, dayInAWeek));

      // Attach day of the week to each forecast item
      // page.list = page.list.map((item, index) => {
      //   return {
      //     ...item,
      //     dayOfWeek: forecastDays[index]
      //   };
      // });
      console.log(page.list, 'forcastdata =============');

      //appendnew_next_sd_4k44q82HWs9FJcDz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4k44q82HWs9FJcDz');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_forecastdaysComponent_Catch
}
