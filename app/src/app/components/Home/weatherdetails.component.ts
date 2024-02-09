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
  selector: 'bh-weatherdetails',
  templateUrl: './weatherdetails.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class weatherdetailsComponent implements OnChanges {
  @Input('placedata')
  public placedata: any = undefined;
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
      this.sd_Zhp2lwAdvPksiSyk(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_Zhp2lwAdvPksiSyk(bh) {
    try {
      bh = this.sd_yA7uHur5dtrc5FiG(bh);
      //appendnew_next_sd_Zhp2lwAdvPksiSyk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Zhp2lwAdvPksiSyk');
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.changes = changes;
      bh = this.sd_yA7uHur5dtrc5FiG(bh);
      //appendnew_next_ngOnChanges
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_w1eV2ygDZTajQrhE');
    }
  }

  //appendnew_flow_weatherdetailsComponent_start

  sd_yA7uHur5dtrc5FiG(bh) {
    try {
      this.page.placedata = bh.pageInput.placedata;
      this.page.sunset = undefined;
      this.page.sunrise = undefined;
      this.page.dt = undefined;
      bh = this.sd_ZvQYBffMndSLMCka(bh);
      //appendnew_next_sd_yA7uHur5dtrc5FiG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yA7uHur5dtrc5FiG');
    }
  }

  sd_ZvQYBffMndSLMCka(bh) {
    try {
      const page = this.page;
      console.log('rfdecs');
      const sunriseTimestamp = page?.placedata?.sys?.sunrise;
      const sunsetTimestamp = page?.placedata?.sys?.sunset;
      const dtTimestamp = page?.placedata?.dt;

      // Convert Unix timestamps to milliseconds since Unix epoch
      const sunriseDate = new Date(sunriseTimestamp * 1000);
      const sunsetDate = new Date(sunsetTimestamp * 1000);
      const dt = new Date(dtTimestamp * 1000);
      const hours = String(sunriseDate.getHours()).padStart(2, '0');
      const minutes = String(sunriseDate.getMinutes()).padStart(2, '0');

      // Format the time
      page.sunrise = hours + ':' + minutes;
      const shours = String(sunsetDate.getHours()).padStart(2, '0');
      const sminutes = String(sunsetDate.getMinutes()).padStart(2, '0');

      // Format the time
      page.sunset = shours + ':' + sminutes;

      // Get the components of the date
      const dayOfWeek = dt.toLocaleString('en-US', { weekday: 'short' }); // Short day name
      const month = dt.toLocaleString('en-US', { month: 'short' }); // Short month name
      const day = dt.getDate();
      const year = dt.getFullYear();

      // Format the date
      page.dt = `${dayOfWeek} ${month} ${day} ${year}`;
      //appendnew_next_sd_ZvQYBffMndSLMCka
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZvQYBffMndSLMCka');
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
  //appendnew_flow_weatherdetailsComponent_Catch
}
