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

  getplaceinfo(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_BPVJYFOwxRy1w5SC(bh);
      //appendnew_next_getplaceinfo
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NMGSogRW1prjIAdG');
    }
  }
  //appendnew_flow_homeComponent_start

  sd_7iK0p97mCa6ByPFl(bh) {
    try {
      this.page.placedata = undefined;
      this.page.forecastdata = undefined;
      bh = this.sd_BPVJYFOwxRy1w5SC(bh);
      //appendnew_next_sd_7iK0p97mCa6ByPFl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7iK0p97mCa6ByPFl');
    }
  }

  sd_BPVJYFOwxRy1w5SC(bh) {
    try {
      const page = this.page; // if(page.form?.value?.newPlace?.trim()?.length>0){
      // bh.local.place = page.form?.value?.newPlace;
      // page.form.value.newPlace="";
      // }
      // else{
      // throw new Error("Enter some text");
      // }
      bh.local.place = 'kasaragod';
      bh = this.sd_KdtvAznpWl5SGZH7(bh);
      //appendnew_next_sd_BPVJYFOwxRy1w5SC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BPVJYFOwxRy1w5SC');
    }
  }

  async sd_KdtvAznpWl5SGZH7(bh) {
    try {
      const weatherapiInstance: weatherapi =
        this.__page_injector__.get(weatherapi);

      let outputVariables = await weatherapiInstance.weatherapi(bh.input.place);
      this.page.resultdata = outputVariables.local.resultdata;

      bh = this.sd_mrvouXCNQ7ywFMFe(bh);
      //appendnew_next_sd_KdtvAznpWl5SGZH7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KdtvAznpWl5SGZH7');
    }
  }

  sd_mrvouXCNQ7ywFMFe(bh) {
    try {
      const page = this.page;
      console.log(page.placedata);
      bh = this.sd_JvQgU9WgqBxaB4U6(bh);
      //appendnew_next_sd_mrvouXCNQ7ywFMFe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mrvouXCNQ7ywFMFe');
    }
  }

  async sd_JvQgU9WgqBxaB4U6(bh) {
    try {
      const weatherapiInstance: weatherapi =
        this.__page_injector__.get(weatherapi);

      let outputVariables = await weatherapiInstance.forecastapi(
        bh.input.place
      );
      this.page.forecastdata = outputVariables.local.resultfdata;

      bh = this.sd_zQYVfMGvx5mZLX95(bh);
      //appendnew_next_sd_JvQgU9WgqBxaB4U6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JvQgU9WgqBxaB4U6');
    }
  }

  sd_zQYVfMGvx5mZLX95(bh) {
    try {
      const page = this.page;
      console.log(page.forecastdata);
      //appendnew_next_sd_zQYVfMGvx5mZLX95
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zQYVfMGvx5mZLX95');
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
