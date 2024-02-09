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
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent {
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
      this.sd_ioAEPGzz83EWug5V(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_ioAEPGzz83EWug5V(bh) {
    try {
      bh = this.sd_7iK0p97mCa6ByPFl(bh);
      //appendnew_next_sd_ioAEPGzz83EWug5V
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ioAEPGzz83EWug5V');
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
      bh = this.sd_SZ6Swq1kSyBlebr4(bh);
      //appendnew_next_place
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yAJSvZ0n45owMoqS');
    }
  }
  //appendnew_flow_homeComponent_start

  sd_7iK0p97mCa6ByPFl(bh) {
    try {
      this.page.placedata = undefined;
      this.page.forecastdata = undefined;
      //appendnew_next_sd_7iK0p97mCa6ByPFl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7iK0p97mCa6ByPFl');
    }
  }

  sd_SZ6Swq1kSyBlebr4(bh) {
    try {
      const page = this.page;
      page.placedata = bh.input.placedata?.weatherData;
      page.forecastdata = bh.input.placedata?.forCastData;
      console.log('rvfcedsxazdfcsx');
      console.log(page.placedata);
      console.log(bh.input);
      console.log(bh.local);
      //appendnew_next_sd_SZ6Swq1kSyBlebr4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SZ6Swq1kSyBlebr4');
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
  //appendnew_flow_homeComponent_Catch
}
