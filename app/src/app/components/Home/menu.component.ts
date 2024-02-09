// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { weatherapi } from 'app/sd-services/weatherapi'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-menu',
  templateUrl: './menu.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class menuComponent {
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
      this.sd_DUay2zqZDVUzC0L5(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_DUay2zqZDVUzC0L5(bh) {
    try {
      bh = this.sd_wFqdRi4fwpN41akh(bh);
      //appendnew_next_sd_DUay2zqZDVUzC0L5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DUay2zqZDVUzC0L5');
    }
  }

  place(placedata: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { placedata };
      bh.local = {};
      bh = this.sd_v69f3hLUGRvvsGYQ(bh);
      //appendnew_next_place
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mLPx6ew3kSyR8C6B');
    }
  }
  //appendnew_flow_menuComponent_start

  sd_wFqdRi4fwpN41akh(bh) {
    try {
      this.page.placedata = undefined;
      this.page.forecastdata = undefined;
      bh = this.sd_v69f3hLUGRvvsGYQ(bh);
      //appendnew_next_sd_wFqdRi4fwpN41akh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wFqdRi4fwpN41akh');
    }
  }

  sd_v69f3hLUGRvvsGYQ(bh) {
    try {
      const page = this.page;
      page.placedata = bh.input.placedata?.weatherData;
      page.forecastdata = bh.input.placedata?.forCastData;
      console.log('rvfcedsxazdfcsx');
      console.log(page.placedata);
      console.log('tgvrfdc');
      bh = this.sd_1Xe1iGHx0t44Aeyg(bh);
      //appendnew_next_sd_v69f3hLUGRvvsGYQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_v69f3hLUGRvvsGYQ');
    }
  }

  sd_1Xe1iGHx0t44Aeyg(bh) {
    try {
      const page = this.page;
      if (page.placedata) {
        return;
      }

      bh.input.placeName = 'kasaragod';
      bh = this.sd_8sPRali4SYT50HXK(bh);
      //appendnew_next_sd_1Xe1iGHx0t44Aeyg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1Xe1iGHx0t44Aeyg');
    }
  }

  async sd_8sPRali4SYT50HXK(bh) {
    try {
      const weatherapiInstance: weatherapi =
        this.__page_injector__.get(weatherapi);

      let outputVariables = await weatherapiInstance.weatherapi(
        bh.input.placeName
      );
      bh.local.weatherResponse = outputVariables.local.resultdata;

      bh = this.sd_0l8CZbE95blMzbsK(bh);
      //appendnew_next_sd_8sPRali4SYT50HXK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8sPRali4SYT50HXK');
    }
  }

  sd_0l8CZbE95blMzbsK(bh) {
    try {
      const page = this.page;
      page.placedata = bh.local?.weatherResponse?.weatherdata;
      page.forecastdata = bh.local?.weatherResponse?.forecastdata;
      console.log(bh.local.weatherResponse);

      //appendnew_next_sd_0l8CZbE95blMzbsK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0l8CZbE95blMzbsK');
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
  //appendnew_flow_menuComponent_Catch
}
