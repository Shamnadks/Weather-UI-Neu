// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, EventEmitter, Injector, Output } from '@angular/core'; //_splitter_
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { weatherapi } from 'app/sd-services/weatherapi'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-header',
  templateUrl: './header.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class headerComponent {
  @Output('placeName')
  public placeName: any = new EventEmitter<any>();
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_iSdLWhvK68j09lXW(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_iSdLWhvK68j09lXW(bh) {
    try {
      bh = this.sd_BVolLXfJUBimYk33(bh);
      //appendnew_next_sd_iSdLWhvK68j09lXW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iSdLWhvK68j09lXW');
    }
  }

  placeSearch(placeName: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { placeName };
      bh.local = {};
      bh = this.sd_mNFX8O12mBAdWRXj(bh);
      //appendnew_next_placeSearch
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dv1bChMB2bLoplD6');
    }
  }
  //appendnew_flow_headerComponent_start

  sd_BVolLXfJUBimYk33(bh) {
    try {
      this.page.isSubmit = '""';
      bh = this.formData(bh);
      //appendnew_next_sd_BVolLXfJUBimYk33
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BVolLXfJUBimYk33');
    }
  }

  formData(bh) {
    try {
      this.page.formGroup = FormGroup;
      this.page.formControl = FormControl;
      bh = this.sd_NGi9K9mmsoYIPS8U(bh);
      //appendnew_next_formData
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ArU3ZpcbWfiJvb4p');
    }
  }

  sd_NGi9K9mmsoYIPS8U(bh) {
    try {
      const page = this.page;
      page.form = new page.formGroup({
        place: new page.formControl(),
      });
      //appendnew_next_sd_NGi9K9mmsoYIPS8U
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NGi9K9mmsoYIPS8U');
    }
  }

  sd_mNFX8O12mBAdWRXj(bh) {
    try {
      const page = this.page;
      console.log(bh.input.placeName);
      bh = this.sd_28woQMO5MBqZ7WdE(bh);
      //appendnew_next_sd_mNFX8O12mBAdWRXj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mNFX8O12mBAdWRXj');
    }
  }

  async sd_28woQMO5MBqZ7WdE(bh) {
    try {
      const weatherapiInstance: weatherapi =
        this.__page_injector__.get(weatherapi);

      let outputVariables = await weatherapiInstance.weatherapi(
        bh.input.placeName
      );
      bh.local.weatherResponse = outputVariables.local.resultdata;

      bh = this.sd_fSPFK77nGVplu7Qk(bh);
      //appendnew_next_sd_28woQMO5MBqZ7WdE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_28woQMO5MBqZ7WdE');
    }
  }

  async sd_fSPFK77nGVplu7Qk(bh) {
    try {
      const weatherapiInstance: weatherapi =
        this.__page_injector__.get(weatherapi);

      let outputVariables = await weatherapiInstance.forecastapi(
        bh.input.placeName
      );
      bh.local.forCasteResponse = outputVariables.local.resultfdata;

      bh = this.sd_iqZ9ESRJbUpJyleO(bh);
      //appendnew_next_sd_fSPFK77nGVplu7Qk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fSPFK77nGVplu7Qk');
    }
  }

  sd_iqZ9ESRJbUpJyleO(bh) {
    try {
      const page = this.page;
      bh.local.response = {
        weatherData: bh.local.weatherResponse,
        forCastData: bh.local.forCasteResponse,
      };
      console.log(bh.local.response);
      bh = this.sd_TGxs09gILxpS6hEh(bh);
      //appendnew_next_sd_iqZ9ESRJbUpJyleO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iqZ9ESRJbUpJyleO');
    }
  }

  sd_TGxs09gILxpS6hEh(bh) {
    try {
      bh.pageOutput.placeName.emit(bh.local.response);
      //appendnew_next_sd_TGxs09gILxpS6hEh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TGxs09gILxpS6hEh');
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
  //appendnew_flow_headerComponent_Catch
}
