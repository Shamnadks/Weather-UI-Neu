// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-weather',
  templateUrl: './weather.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class weatherComponent {
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
      this.weather(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  place(placedata: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { placedata };
      bh.local = {};
      bh = this.sd_dPe35OheZAj8rpjk(bh);
      //appendnew_next_place
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FjCm4DGh4dYKTKlo');
    }
  }
  weather(bh) {
    try {
      bh = this.sd_nuCXXoFGh6Hz52ed(bh);
      //appendnew_next_weather
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_s4gzxF3gtkbAr983');
    }
  }

  //appendnew_flow_weatherComponent_start

  sd_dPe35OheZAj8rpjk(bh) {
    try {
      const page = this.page;
      page.placedata = bh.input.placedata?.weatherData;
      page.forecastdata = bh.input.placedata?.forCastData;
      console.log('rvfcedsxazdfcsx');
      console.log(page.placedata);
      console.log('tgvrfdc');
      //appendnew_next_sd_dPe35OheZAj8rpjk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dPe35OheZAj8rpjk');
    }
  }

  sd_nuCXXoFGh6Hz52ed(bh) {
    try {
      this.page.placedata = undefined;
      this.page.forecastdata = undefined;
      bh = this.sd_dPe35OheZAj8rpjk(bh);
      //appendnew_next_sd_nuCXXoFGh6Hz52ed
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nuCXXoFGh6Hz52ed');
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
  //appendnew_flow_weatherComponent_Catch
}
